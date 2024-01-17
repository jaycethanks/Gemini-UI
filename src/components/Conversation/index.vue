<script lang='ts' setup>
import { nextTick, watch } from "vue";
import MessageItem from "./MessageItem/index.vue"
import { state } from "@/state"
const scrollIntoLastMessage = () => {
    nextTick(()=>{
        document.querySelectorAll('.message-item')[document.querySelectorAll('.message-item').length - 1].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    })
}
watch(state.conversation, scrollIntoLastMessage)

</script>
<template>
    <div class="conversation">
        <MessageItem v-for="{ type, message, uuid } in state.conversation" :key="uuid" :uuid="uuid" :type="type"
            :msg="message" />
    </div>
</template>
<style lang='less' scoped></style>