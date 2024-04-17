<template>
    <el-tabs v-model="editableTabsValue" type="card" class="demo-tabs" closable @tab-remove="removeTab"
        @tab-click="handleTabClick">
        <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
            {{ item.content }}
            <DragComponent :canvas="item.content" :name="item.name">
            </DragComponent>
        </el-tab-pane>
    </el-tabs>
</template>
<script lang="ts" setup>
import { useCanvas } from '@/stores/canvas';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'
import DragComponent from './DragComponent.vue';
import type { TabsPaneContext } from 'element-plus/es/components/tabs/src/constants.mjs';

const canvasStore = useCanvas();
const { editableTabs, editableTabsValue, activeTabsValue } = storeToRefs(canvasStore);
const { addTab, removeTab } = canvasStore;

const handleTabClick = (pane: TabsPaneContext, ev: Event) => {
    console.log(pane.props?.name)
    activeTabsValue.value = pane.props?.name + ''
}

</script>
<style>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>