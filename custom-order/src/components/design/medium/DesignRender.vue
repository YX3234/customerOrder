<template>
    <div class="mediumOuter">
        <div class="setDragaArea" ref="targetObj">
            <div v-if="isDefault">{{ renderList[0].name }}</div>
            <div v-for="item in containerList" :key="item.id">
                {{ compName=getPluginComponent(item.name)}}
                <component :is="compName"></component>
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
const isDefault = ref(false);
const getPluginComponent = (type: string) => {
    switch (type) {
        case "文本": return "TextPlugin";
        default: return "undefined";
    }
}
console.log(getPluginComponent("文本"))
const compName = ref();
isDefault.value = !containerList.value.length;
useDraggable(targetObj, containerList, {
    animation: 150,
    group: "plugin",
    onUpdate() {
        console.log("update");
    }
})
// onMounted(() => {
//     draggable.start();
//     console.log(containerList.value);
// })

console.log(containerList.value);
// onMounted(() => {
//     console.log(containerList.value, "1");
//     draggable.start();
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