<script lang='ts' setup>
import MessageItem from "./MessageItem/index.vue"
const mockMessage = [
    {
        uuid:'asda',
        type:1,
        message:"Sint irure mollit pariatur fugiat consectetur aliquip aliquip anim deserunt adipisicing."
    },
    {
        uuid:'asdafasd',
        type:2,
        message:"Do anim enim nulla laborum est commodo cupidatat cillum esse ut magna cillum."
    },
    {
        uuid:'asfff',
        type:1,
        message:"Aliqua cupidatat magna consequat consequat veniam.."
    },
    {
        uuid:'asdafaasffsd',
        type:2,
        message:"Eu ad tempor esse exercitation enim ut.."
    },
    {
        uuid:'asbk',
        type:1,
        message:"Sint irure mollit pariatur fugiat consectetur aliquip aliquip anim deserunt adipisicing."
    },
    {
        uuid:'afasd',
        type:2,
        message:"Do anim enim nulla laborum est commodo cupidatat cillum esse ut magna cillum."
    },
    {
        uuid:'asfff2',
        type:1,
        message:"Aliqua cupidatat magna consequat consequat veniam.."
    },
    {
        uuid:'asasffsd',
        type:2,
        message:"Eu ad tempor esse exercitation enim ut.."
    },
    {
        uuid:'asdfbk',
        type:1,
        message:"Sint irure mollit pariatur fugiat consectetur aliquip aliquip anim deserunt adipisicing."
    },
    {
        uuid:'afafasd',
        type:2,
        message:"Do anim enim nulla laborum est commodo cupidatat cillum esse ut magna cillum."
    },
    {
        uuid:'asfkghjff2',
        type:1,
        message:"Aliqua cupidatat magna consequat consequat veniam.."
    },
    {
        uuid:'asaskghjffsd',
        type:2,
        message:"Eu ad tempor esse exercitation enim ut.."
    },
]
</script>
<template>
    <div class="conversation">
        <MessageItem  v-for="{type, message,uuid} in mockMessage" :key="uuid" :type="type" :msg="message"/>
    </div>
</template>
<style lang='less' scoped>
</style>