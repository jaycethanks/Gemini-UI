<script lang='ts' setup>
import SendSvgIcon from "@/components/IconsVue/SendSvgIcon.vue"
import { state, handleSendClick } from "@/state/index"
import { ref, watch } from "vue";
const inputRef = ref<HTMLTextAreaElement | null>(null)
const handleInput = () => {
    if (inputRef.value) {
        inputRef.value.style.height = 'auto'
        inputRef.value.style.height = `${inputRef.value.scrollHeight}px`
    }
}
const handleKeydown = (e: KeyboardEvent) => {
    if (e.isComposing || e.shiftKey)
      return

    if (e.key === 'Enter') {
      e.preventDefault()
      handleSendClick()
    }
  }

  watch(()=> state.currentMsg,()=>{
    if(!state.currentMsg){
      inputRef.value!.style.height = 'auto'
    }
    
  })
</script>
<template>
    <textarea ref="inputRef" @input="handleInput" id="text-area-input" placeholder="Enter something..." autocomplete="off"
        rows="1" v-model="state.currentMsg"
        class="max-h-36 border bg-gray-800 border-gray-300 rounded-md py-4 px-6 pr-12 w-full focus:outline-none focus:border-blue-500 transition duration-300 resize-none text-white placeholder:text-gray-500"
        @keydown="handleKeydown">

    </textarea>
    <button @click="handleSendClick" class="
        h-8
        w-8
        text-xl
        text-white
        absolute rounded-lg
        right-2
        z-10
        bg-gray-800
        hover:bg-gray-950
        flex
        justify-center
        items-center
        transition-all
        group
      ">
        <SendSvgIcon class="group-hover:scale-125 group-hover:-rotate-12 transition-all" />
    </button>
</template>
<style lang='css' scoped>
#text-area-input {
    /* 隐藏滚动条，但保留滚动功能 */
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;


}

/* Webkit (Safari/Chrome) */
#text-area-input::-webkit-scrollbar {
    width: 8px;
    /* 调整滚动条的宽度 */
}

#text-area-input::-webkit-scrollbar-thumb {
    background-color: transparent;
    /* 滚动条的颜色 */
}

#text-area-input::-webkit-scrollbar-track {
    background-color: transparent;
    /* 滚动条背景颜色 */
}
</style>