<template>
    <div class="mediumOuter">
        <!-- <div class="setDragaArea" ref="targetObj">
            没有拖动时的默认项
            <div v-if="isDefault">{{ renderList[0].name }}</div>
            插件显示的区域
            <div v-for="item in containerList.filter((e) => e !== undefined)" :key="item.id">
                {{
                    (() => {
                        compName = getPluginComponent(item.name); return;
                    })()
                }}
                <component v-show="compName !== 'undefined'" :is="compName"></component>
            </div>
        </div> -->
        <DropContent v-model="data1" ref="dropContentRef" group-name="drag-demo" :row="6" :column="6" :gap="6">
            <template #preview-item="{ data }">
                <div style="height: 100%; background: #f9f1c7; border-radius: 6px"></div>
            </template>
            <template #move-mask="{ isPutDown }">
                <div :style="{
                    width: '100%',
                    height: '100%',
                    border: '2px solid #2867f979',
                    backgroundColor: isPutDown ? '#2867f91c' : '#ff000055',
                    borderColor: isPutDown ? '#2c68f3' : '#ff000079',
                    'border-radius': '6px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: '600',
                }">
                    {{ isPutDown ? '可以放置' : '不可放置' }}
                </div>
            </template>
        </DropContent>
    </div>
</template>

<script setup lang="ts">
import { useDragStore } from '@/stores/drag';
import GridTemplateVue from "@/components/grid/GridTemplate.vue"
import { storeToRefs } from 'pinia';
import { onMounted, onUpdated, ref, watchEffect } from 'vue';
import DropContent from '@/components/grid/DropContent.vue';
// import { useDraggable } from 'vue-draggable-plus';


const dragStore = useDragStore();
const { targetObj, containerList } = storeToRefs(dragStore);
const data1 = ref([
    {
        id: 1111,
        key: 'demo-component',
        title: '组件标题',
        column: 1,
        row: 1,
        x: 1,
        y: 1,
    },
    {
        id: 2222,
        key: 'demo-component',
        title: '组件标题',
        column: 1,
        row: 1,
        x: 2,
        y: 3,
    },
]);

const dropContentRef = ref<InstanceType<typeof GridTemplateVue>>();
const renderList = [{ id: '0', name: "请拖动插件" }];
const isDefault = ref(true);
const getPluginComponent = (type: string) => {
    if (isDefault.value) isDefault.value = !containerList.value.length;
    switch (type) {
        case "文本": return "TextPlugin";
        case "按钮": return "ButtonPlugin";
        case "图片": return "ImagePlugin";
        case "轮播图": return "CarouselPlugin";
        case "容器": return "WrapperPlugin";
        default: return "undefined";
    }
}
console.log(getPluginComponent("文本"))
let compName = 'undefined';    //不能是响应式数据，在执行模板中的IIFE时会频繁触发刷新
// useDraggable(targetObj, containerList, {
//     animation: 150,
//     group: "plugin",
//     onUpdate() {
//         console.log("update");
//     }
// })

onMounted(() => {

})
onUpdated(() => {
})

</script>

<style scoped>
.mediumOuter {
    width: 66vw;
    background-color: #8484847e;
}

/* .setDragaArea {
    border: 1px solid black;
    margin: 0 auto;
    width: 40vw;
    height: 600px;
} */

/* .setDragaArea>div {
    width: 100%;
} */

.content {
    background-color: green;
    width: 100%;
    height: 30px;
    outline: 1px solid black;
}
</style>