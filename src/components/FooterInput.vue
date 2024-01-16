<script lang='ts' setup>
import SendSvgIcon from "@/components/IconsVue/SendSvgIcon.vue"
</script>
<template>
    <textarea id="text-area-input" placeholder="Enter something..." autocomplete="off" rows="1"
        value="Fugiat elit dolore amet et proident est veniam ea laboris dolore duis laborum. Ad eu pariatur proident aliqua magna dolore pariatur nostrud ut nostrud consectetur officia. Tempor duis culpa in voluptate incididunt aliquip exercitation tempor laboris cupidatat nostrud. Ipsum ex pariatur exercitation in officia dolore commodo. Elit enim nulla aliquip amet deserunt in. Occaecat ex dolore elit id elit quis magna Lorem commodo ad. Do reprehenderit dolor nostrud eu ut ad nostrud proident elit qui laborum."
        class="h-24 border border-gray-300 rounded-md py-4 px-6 pr-12 w-full focus:outline-none focus:border-blue-500 transition duration-300 resize-none text-gray-950 placeholder:text-gray-500"
        >

    </textarea>
    <button class="
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
        <SendSvgIcon class="group-hover:scale-125 group-hover:-rotate-12 transition-all"/>
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