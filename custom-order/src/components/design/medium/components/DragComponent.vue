<template>
  <!-- 用于封装拖拽放置区域的组件 -->
  <div class="setDragaArea" ref="targetObj">
    <DropContent v-model="Modeldata[index]" ref="dropContentRef" group-name="drag-demo" :row="row" :column="column"
      :gap="gap">
      <template #preview-item="{ data }">
        <div style="background-color: sandybrown;height: 100%;border-radius: 6px;">
          <!-- <component :is="data?.key" :disabled="true" :data="data"></component> -->
          <div :style="{
      width: '100%',
      height: '100%',
      color: '#fff',
      // backgroundColor: '#707eb1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '30%',
      fontWeight: '600'
    }">{{ (data?.name || '默认') + data?.column + "x" + data?.row }}</div>
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
    <div class="preview" style="width: 100%; height: 100%">
      <PreviewLayout :data="Modeldata[index]" :row="row" :column="column" :gap="gap" :skipEmpty="false" />
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from "vue"
import DropContent from '@/components/grid/DropContent.vue';
import PreviewLayout from '@/components/grid/PreviewLayout.vue';
import { useDragStore } from "@/stores/drag";
import { storeToRefs } from "pinia";

const dragStore = useDragStore();
const { Modeldata } = storeToRefs(dragStore);
const { getDragDataIndex } = dragStore;
let { column, row, gap, name } = defineProps(['column', 'row', 'gap', 'name'])
const dropContentRef = ref<InstanceType<typeof DropContent>>();
/** 根据标签页name获取对应拖拽数据 */
const index = getDragDataIndex(name) || 0

</script>

<style lang="scss" scoped>
.setDragaArea {
  border: 1px solid black;
  margin: 0 auto;
  width: 375px;
  height: 600px;
  overflow: scroll;

  .preview {
    width: 100%;
    overflow: hidden;
  }
}
</style>
