<script lang='ts' setup>
import { state } from '@/state';
import LoadingSvgIcon from "@/components/IconsVue/LoadingSvgIcon.vue"
defineProps<{
    uuid:string
    type:number
    msg:string
}>()
</script>
<template>
    <div class="message-item">
        <div class="req message-card" v-if="type === 1">
            <div class=" h-10 w-10 absolute -left-12 top-0 rounded-full flex justify-center items-center">
                <LoadingSvgIcon v-if="state.loading && !msg"/>
                <span v-else>Ai</span>
            </div>
            {{ msg }}
        </div>
        <div class="res message-card" v-if="type === 2">
            <div class=" h-10 w-10 absolute -right-12 top-0 rounded-full flex justify-center items-center">You</div>
            {{ msg }}
        </div>
    </div>
</template>
<style lang='less' scoped>
.message-card{
    position:relative;
    border:1px solid rgba(133, 133, 133, 0.558);
    border-radius: 12px;
    padding: 1.5em 1em;
    margin-bottom: 2em
    
}
</style>