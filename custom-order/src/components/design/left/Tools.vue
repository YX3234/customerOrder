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
        <DialogForm></DialogForm>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogVisible = false">
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

const dialogVisible = ref<boolean>(false)
const handleAddCanvasClick = () => {
  dialogVisible.value = true;
}
const handleRenderClick = () => { }
const handleRedictClick = () => { }
</script>

<style lang="scss" scoped>
.tools {
  .tool {
    padding: 20px;
    font-size: 12px;
  }
}
</style>
