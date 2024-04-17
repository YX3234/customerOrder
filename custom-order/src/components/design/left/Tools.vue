<template>
  <div class="tools">
    <div class="tool">
      <span>图标</span><el-button size="small" link @click="handleAddCanvasClick">新建画布</el-button>
    </div>
    <div class="tool">
      <span>图标</span><el-button size="small" link @click="handleRenderClick">渲染页面</el-button>
    </div>
    <div class="tool">
      <span>图标</span><el-button size="small" link @click="handleRedictClick">跳转页面</el-button>
    </div>
    <Teleport :to="'#model'">
      <el-dialog v-model="dialogVisible" title="Tips" width="500" draggable>
        <el-form :model="formData" label-width="auto" style="max-width: 600px">
          <el-form-item label="标签名">
            <el-input v-model="formData.title" />
          </el-form-item>
          <el-form-item label="画布尺寸-宽度">
            <el-input v-model="formData.width" />
          </el-form-item>
          <el-form-item label="画布尺寸-高度">
            <el-input v-model="formData.height" />
          </el-form-item>
          <el-form-item label="行数">
            <el-input v-model="formData.row" />
          </el-form-item>
          <el-form-item label="列数">
            <el-input v-model="formData.column" />
          </el-form-item>
          <el-form-item label="间隙">
            <el-input v-model="formData.gap" />
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="handleFormCommit">
              提交
            </el-button>
          </div>
        </template>
      </el-dialog>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import DialogForm from '@/components/design/left/components/DialogForm.vue'
import { useCanvas } from "@/stores/canvas";
import { storeToRefs } from "pinia";
import { useDragStore } from "@/stores/drag";

const dragStore = useDragStore();
const canvasStore = useCanvas();
const { indexMap, Modeldata, insertIndexMap } = dragStore;
const { editableTabsValue } = storeToRefs(canvasStore);
const { addTab } = canvasStore;
const dialogVisible = ref<boolean>(false)
const formData = ref<{ title: string, row: number, column: number, gap: number, height: number, width: number }>({ title: '', column: 0, row: 0, gap: 0, height: 0, width: 0 })

const handleAddCanvasClick = () => {
  dialogVisible.value = true;
}
const handleRenderClick = () => { }
const handleRedictClick = () => { }
const handleFormCommit = () => {
  addTab(formData.value);
  insertIndexMap(editableTabsValue.value, Modeldata.length);
  dialogVisible.value = false;
}
</script>

<style lang="scss" scoped>
.tools {
  .tool {
    padding: 20px;
    font-size: 12px;
  }
}
</style>
