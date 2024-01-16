<script lang='ts' setup>
defineProps<{
    uuid:string
    type:number
    msg:string
}>()
</script>
<template>
    <div class="message-item">
        <div class="req message-card" v-if="type === 1">
            {{ msg }}
        </div>
        <div class="res message-card" v-if="type === 2">
            {{ msg }}
        </div>
    </div>
</template>
<style lang='less' scoped>
.message-card{
    border:1px solid rgba(133, 133, 133, 0.558);
    border-radius: 12px;
    padding: 1.5em 1em;
    margin-bottom: 2em
    
}
</style>