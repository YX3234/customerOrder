<template>
    <!-- <div>这里是插件集</div> -->
    <!--@dragover="handleDragover"  @dragstart=handleDragStart @dragenter="handleEnter"-->
    <!-- <div class="plugins" @dragstart=handleDragstart>-->
    <!-- <div class="plugin" draggable="true">轮播图</div> -->
    <!-- <div class="plugin" draggable="true">图片</div> -->
    <!-- <div class="plugin" draggable="true">文本</div> -->
    <!-- <div class="plugin" draggable="true">按钮</div> -->
    <!-- </div>  -->
    <!-- ref的值是变量sourceObj, vue语法插件出bug了 -->
    <div ref="sourceObj" class="plugins">
        <div v-for="plugin in pluginList" :key="plugin.id" class="plugin">{{ plugin.name || "-" }}</div>
    </div>
</template>

<script setup lang="ts">
import { useDragStore } from '@/stores/drag';
import { useDraggable } from 'vue-draggable-plus'
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const dragStore = useDragStore();
const { sourceObj, pluginList, containerList } = storeToRefs(dragStore);
const draggable = useDraggable(sourceObj, pluginList, {
    animation: 150,
    group: { name: 'plugin', pull: 'clone', put: false },
    sort: false,
    // clone: (ele) => {
    //     containerList.value.push(ele);
    //     return ele;
    // },
    onClone(event) {
        // containerList.value =
        console.log('clone', event)
    }
});
//只有组件挂载后才能拖拽dom元素，直接写在script setup中会报错，无法拖拽
onMounted(() => {
    draggable.start();
})
</script>
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