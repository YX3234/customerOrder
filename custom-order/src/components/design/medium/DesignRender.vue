<template>
    <div class="mediumOuter">
        <!-- 
            没有拖动时的默认项
            <div v-if="isDefault">{{ renderList[0].name }}</div>
            插件显示的区域
            <div v-for="item in containerList.filter((e) => e !== undefined)" :key="item.id">
                {{
                    (() => {
                        compName = getPluginComponent(item.name); return;
                    })()
                }}
                
            </div> -->
        <DragComponet :column='12' :row='12' :gap='2'></DragComponet>
    </div>
</template>

<script setup lang="ts">
import DragComponet from '@/components/design/medium/components/DragComponent.vue'
// import { useDraggable } from 'vue-draggable-plus';


// const dragStore = useDragStore();
// const { targetObj, containerList, Modeldata } = storeToRefs(dragStore);
// console.log("testData", Modeldata)


// const renderList = [{ id: '0', name: "请拖动插件" }];
// const isDefault = ref(true);
// const getPluginComponent = (type: string) => {
//     if (isDefault.value) isDefault.value = !containerList.value.length;
//     switch (type) {
//         case "文本": return "TextPlugin";
//         case "按钮": return "ButtonPlugin";
//         case "图片": return "ImagePlugin";
//         case "轮播图": return "CarouselPlugin";
//         case "容器": return "WrapperPlugin";
//         default: return "undefined";
//     }
// }
// let compName = 'undefined';    //不能是响应式数据，在执行模板中的IIFE时会频繁触发刷新
// useDraggable(targetObj, containerList, {
//     animation: 150,
//     group: "plugin",
//     onUpdate() {
//         console.log("update");
//     }
// })

// onMounted(() => {

// })
// onUpdated(() => {
// })

</script>

<style scoped>
.mediumOuter {
    width: 66vw;
    background-color: #8484847e;

}

.setDragaArea {
    border: 1px solid black;
    margin: 0 auto;
    width: 375px;
    height: 500px;
}

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