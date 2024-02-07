<script setup lang="ts">
import { useDragStore } from '@/stores/drag';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

// const handleDragStart = (e: Event) => {
//     console.log(e?.target);
// }
// const handleDragover = (e: Event) => {
//     console.log(e?.target);
// }
// const handleEnter = (e: Event) => {
//     console.log(e?.target);
// }
const dragStore = useDragStore();
const { handleDragstart } = dragStore
</script>
<template>
    <div>这里是插件集</div>
    <!--@dragover="handleDragover"  @dragstart=handleDragStart @dragenter="handleEnter"-->
    <div class="plugins" @dragstart=handleDragstart>
        <div class="plugin" draggable="true">轮播图</div>
        <div class="plugin" draggable="true">图片</div>
        <div class="plugin" draggable="true">文本</div>
        <div class="plugin" draggable="true">按钮</div>
    </div>
</template>
<style scoped>
.plugins {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.plugin {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    line-height: 50px;
    text-align: center;
}
</style>