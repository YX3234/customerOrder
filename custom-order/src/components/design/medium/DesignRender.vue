<template>
    <div class="mediumOuter">
        <div class="setDragaArea" ref="targetObj">
            <!-- 没有拖动时的默认项 -->
            <div v-if="isDefault">{{ renderList[0].name }}</div>
            <!-- 插件显示的区域 -->
            <div v-for="item in containerList.filter((e) => e !== undefined)" :key="item.id">
                {{
                    (() => {
                        compName = getPluginComponent(item.name); return;
                    })()
                }}
                <component v-show="compName !== 'undefined'" :is="compName"></component>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDragStore } from '@/stores/drag';
import { storeToRefs } from 'pinia';
import { onMounted, onUpdated, ref, watchEffect } from 'vue';
import { useDraggable } from 'vue-draggable-plus';


const dragStore = useDragStore();
const { targetObj, containerList } = storeToRefs(dragStore);
const renderList = [{ id: '0', name: "请拖动插件" }];
const isDefault = ref(true);
const getPluginComponent = (type: string) => {
    if (isDefault.value) isDefault.value = !containerList.value.length;
    switch (type) {
        case "文本": return "TextPlugin";
        case "按钮": return "ButtonPlugin";
        case "图片": return "ImagePlugin";
        default: return "undefined";
    }
}
console.log(getPluginComponent("文本"))
let compName = 'undefined';    //不能是响应式数据，在执行模板中的IIFE时会频繁触发刷新
useDraggable(targetObj, containerList, {
    animation: 150,
    group: "plugin",
    onUpdate() {
        console.log("update");
    }
})

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

.setDragaArea {
    border: 1px solid black;
    margin: 0 auto;
    width: 40vw;
    height: 600px;
}

.content {
    background-color: green;
    width: 100%;
    height: 30px;
    outline: 1px solid black;
}
</style>