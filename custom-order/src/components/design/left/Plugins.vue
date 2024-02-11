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
        <!-- <div class="drag-group" v-for="(item, index) in pluginList" :key="index">
            <div class="drag-group__title">
                {{ item.title }}
            </div>
            <div class="drag-group__content">
                <div class="drag-group-item" v-for="it in item.list" :key="it.key">
                     @click="onDragItemClick($event, it)" 
                    <DragItemVue :data="it" :groupName="'plugin'" />
                </div>
            </div>
        </div> -->
        <div class="drag-group" v-for="(item, index) in pluginList" :key="index">
            <div class="drag-group__title">
                {{ item.title || '-' }}
            </div>
            <div class="drag-group__content">
                <div class="drag-group-item" v-for="it in item.list" :key="it.key">
                    <DragItemVue :data="it" :groupName="groupName" />
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

withDefaults(
    defineProps<{
        list: [];
        /** 拖拽分组标识 */
        groupName?: string;
    }>(),
    {
        groupName: 'DrapDrop',
    }
);
const dragStore = useDragStore();
const { sourceObj, containerList, } = storeToRefs(dragStore);
const { pluginList } = dragStore;
const list = [
    {
        title: '1*X',
        list: [
            { key: 'demo-component', title: '1x1', column: 1, row: 1 },
            { key: 'demo-component', title: '1x2', column: 1, row: 2 },
            { key: 'demo-component', title: '1x3', column: 1, row: 3 },
            { key: 'demo-component', title: '1x4', column: 1, row: 4 },
        ],
    },
    {
        title: '2*X',
        list: [
            { key: 'demo-component', title: '2x1', column: 2, row: 1 },
            { key: 'demo-component', title: '2x2', column: 2, row: 2 },
            { key: 'demo-component', title: '2x3', column: 2, row: 3 },
            { key: 'demo-component', title: '2x4', column: 2, row: 4 },
        ],
    },
    {
        title: '3*X',
        list: [
            { key: 'demo-component', title: '3x1', column: 3, row: 1 },
            { key: 'demo-component', title: '3x2', column: 3, row: 2 },
            { key: 'demo-component', title: '3x3', column: 3, row: 3 },
            { key: 'demo-component', title: '3x4', column: 3, row: 4 },
        ],
    },
    {
        title: '4*X',
        list: [
            { key: 'demo-component', title: '4x1', column: 4, row: 1 },
            { key: 'demo-component', title: '4x2', column: 4, row: 2 },
            { key: 'demo-component', title: '4x3', column: 4, row: 3 },
            { key: 'demo-component', title: '4x4', column: 4, row: 4 },
        ],
    },
];


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
<style lang="scss" scoped>
.plugins {
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* justify-content: space-around; */
    padding: 20px;
}

// .drag-sidebar {
//     overflow-y: auto;
//     height: 100%;

//     .drag-group {
//         margin: 0 18px 24px;

//         &__title {
//             font-size: 14px;
//             font-family: Source Han Sans CN;
//             font-weight: 700;
//             color: #555555;
//             margin-bottom: 12px;
//             display: flex;
//             align-items: center;
//         }

//         &__content {
//             display: flex;
//             flex-wrap: wrap;
//             gap: 16px 20px;
//         }
//     }
// }
</style>