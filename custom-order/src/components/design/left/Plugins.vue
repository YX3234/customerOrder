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
        <!-- <div v-for="plugin in pluginList" :key="plugin.list[0].key" class="plugin">
            {{ plugin.title || "-" }}
            <div v-for="item in plugin.list">
                <DragItemVue :data="item" :groupName="plugin.list[0].key" @click="onDragItemClick($event, item)">
                </DragItemVue>
            </div>
        </div> -->
        <div class="drag-group" v-for="(item, index) in pluginList" :key="index">
            <div class="drag-group__title">
                {{ item.title }}
            </div>
            <div class="drag-group__content">
                <div class="drag-group-item" v-for="it in item.list" :key="it.key">
                    <DragItemVue :data="it" :groupName="'demo'" @click="onDragItemClick($event, it)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDragStore } from '@/stores/drag';
import { useDraggable } from 'vue-draggable-plus'
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import DragItemVue from '@/components/grid/DragItem.vue';

const dragStore = useDragStore();
const { sourceObj, pluginList, containerList, } = storeToRefs(dragStore);
const onDragItemClick = (e: any, item: any) => {
    console.log(e, item)
}

// const draggable = useDraggable(sourceObj, pluginList, {
//     animation: 150,
//     group: { name: 'plugin', pull: 'clone', put: false },
//     sort: false,
//     clone: (ele) => {
//         // containerList.value.push(ele);
//         return { id: ele.id + 'clone' + containerList.value.length, name: ele.name };
//     },
//     onClone(event) {
//         // containerList.value =
//         console.log('clone', event)
//     }
// });
//只有组件挂载后才能拖拽dom元素，直接写在script setup中会报错，无法拖拽
// onMounted(() => {
//     draggable.start();
// })
</script>
<style scoped>
.plugins {
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* justify-content: space-around; */
    padding: 20px;
}

/* .plugin {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    line-height: 50px;
    text-align: center;
} */
</style>