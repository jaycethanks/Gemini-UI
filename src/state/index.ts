import { generateUUID } from "@/utils/generateUuid";
import { askGemini } from "@/utils/googleGemini";
import { reactive, toRefs } from "vue";

type ConversationItem = {
    uuid: string,
    type: 1 | 2,
    message: string
}
type Reactive = {
    loading: boolean
    currentMsg: string
    conversation: ConversationItem[]
    clearCurrentMsg:()=>void
    addConversationItem: (conversationItem: ConversationItem) => void
}
export const state = reactive<Reactive>({
    loading: false,
    currentMsg: '',
    conversation: [],
    clearCurrentMsg(){
        this.currentMsg = ""
    },
    addConversationItem(conversationItem) {
        this.conversation.push(conversationItem)
    }
})
// 逐字追加
const addChar = (char: string) => {
    state.conversation[state.conversation.length - 1].message += char
}
const addPara = (para: string) => {
    state.conversation[state.conversation.length - 1].message += para
}

export const handleSendClick = async () => {
    state.loading = true
    state.addConversationItem({
        uuid: new Date().getTime().toString(),
        message: state.currentMsg,
        type: 2
    })
    const result = await askGemini({ message: state.currentMsg })

    state.clearCurrentMsg()
    
    const responseMessageItem: ConversationItem = {
        uuid: generateUUID(),
        type: 1,
        message: ''
    }
    state.addConversationItem(responseMessageItem)

    for await (const chunk of result.stream) {
        const chunkText = chunk.text();

        for (let i = 0; i < chunkText.length; i++) {
            addChar(chunkText[i])
            await new Promise(resolve => setTimeout(resolve, 5)); // 模拟逐字输出
        }
    }





}

/**
 * nestjs server 版本
 */
export const handleSendClick2 = () => {
    state.addConversationItem({
        uuid: new Date().getTime().toString(),
        message: state.currentMsg,
        type: 2
    })
    state.loading = true

    const raw = JSON.stringify({
        "message": state.currentMsg
    });
    fetch("/api/text-stream/sse", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: raw
    }).then(async response => {
        // To recieve data as a string we use TextDecoderStream class in pipethrough
        const reader = response.body?.pipeThrough(new TextDecoderStream()).getReader()
        // To receive data as byte array we call getReader() directrly
        // const reader = response.body?.getReader();
        if (!reader) return
        const responseMessageItem: ConversationItem = {
            uuid: generateUUID(),
            type: 1,
            message: ''
        }
        state.addConversationItem(responseMessageItem)

        // eslint-disable-next-line no-constant-condition
        while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            if (value.trim()) {
                // 从字符串中提取data字段的部分
                const dataMatch = value.match(/data: (.+?)\n/);
                const dataStr = dataMatch?.[1] || `{}`;
                const jsonData = JSON.parse(dataStr);
                const msg = jsonData.candidates[0].content.parts[0].text

                addPara(msg)
                // for(let i = 0; i < msg.length; i++){
                //     addChar(msg[i])
                //     await new Promise(resolve => setTimeout(resolve, 10)); // 模拟逐字输出
                // }

            }
        }

    }).finally(() => {
        state.loading = false
    })
}