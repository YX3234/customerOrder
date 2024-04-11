<template>
    <el-tabs v-model="editableTabsValue" type="card" class="demo-tabs" closable @tab-remove="removeTab">
        <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
            {{ item.content }}
            <DragComponent :column="item.content.column" :row="item.content.row" :gap="item.content.gap"
                :name="item.name">
            </DragComponent>
        </el-tab-pane>
    </el-tabs>
</template>
<script lang="ts" setup>
import { useCanvas } from '@/stores/canvas';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'
import DragComponent from './DragComponent.vue';

const canvasStore = useCanvas();
const { editableTabs, editableTabsValue } = storeToRefs(canvasStore);
const { addTab, removeTab } = canvasStore;

</script>
<style>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>