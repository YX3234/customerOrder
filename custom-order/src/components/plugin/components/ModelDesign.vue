<template>
    <div class="">
        <DropContent v-model="Modeldata" ref="dropContentRef" group-name="drag-demo" :row="12" :column="12" :gap="6">
            <template #preview-item="{ data }">
                <div style="background-color: sandybrown;height: 100%;border-radius: 6px;">
                    <component :is="data?.key" :disabled="true" :data="data"></component>
                </div>
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
        <div class="mb16">
            <button @click="() => dropContentRef?.addRow()">添加行</button>
            <button @click="() => dropContentRef?.deleteRow()">删除行</button>
        </div>
        <h3 class="mb16">预览</h3>
        <div style="width: 100%; height: 100%">
            <PreviewLayout :data="data" :row="12" :column="12" :gap="6" :skipEmpty="false" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDragStore } from "@/stores/drag";
import { ref } from "vue"
const dragStore = useDragStore();
const { Modeldata } = dragStore;
const props = withDefaults(
    defineProps<{
        /** 元素放置信息 */
        data: DragItemData;
        /** 拖拽分组标识 */
        groupName?: string;
    }>(),
    {
        groupName: 'DrapDrop',
    }
);
const dropContentRef = ref();

</script>

<style lang="scss" scoped></style>
