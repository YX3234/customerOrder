<template>
    <div class="wrapper">

        <DropContent v-model="defaultData" ref="dropContentRef" group-name="drag-demo" :row="2" :column="12" :gap="6">
            <template #preview-item="{ data }">
                <div style="background-color: sandybrown;height: 100%;border-radius: 6px;">
                    <component :is="data?.key" :disabled="true"></component>
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
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import DropContent from "../grid/DropContent.vue";

const props = withDefaults(
    defineProps<{
        data: any,
        disabled: boolean
    }>(),
    {
        data: {},
        disabled: false
    }
);
const dropContentRef = ref();
const defaultData: any[] = [];

</script>

<style scoped>
.wrapper {
    width: 100%;
    height: 100px;
    background-color: aqua;
}
</style>
