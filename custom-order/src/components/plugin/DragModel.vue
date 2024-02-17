<template>
    <div class="wrapper">
        <el-table :data="tableData" stripe style="width: 100%">
            <!-- prop="goodsCategory" label="商品种类" -->
            <el-table-column>
                <template #header>
                    <!-- 商品种类 -->
                </template>
                <template #default="scope">
                    <div class="categoryName" @click="handleClick(scope)">{{ scope?.row?.text || '-' }}</div>
                </template>
            </el-table-column>
        </el-table>
        <Teleport to="#model">
            <el-dialog v-model="dialogTableVisible" title="拖拽容器" draggable width="400">

                <div class="setDragaArea">
                    <DropContent v-model="Modeldata" ref="dropContentRef" group-name="drag-demo" :row="4" :column="6"
                        :gap="6" :zIndex="99999">
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
                    <!-- <div style="width: 100%; height: 100%; background-color: black;"></div> -->
                    <div class="mb16">
                        <button @click="() => dropContentRef?.addRow()">添加行</button>
                        <button @click="() => dropContentRef?.deleteRow()">删除行</button>
                    </div>
                </div>

                <template #footer>
                    <div class="dialog-footer">
                        <el-button @click="dialogTableVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="dialogTableVisible = false">
                            Confirm
                        </el-button>
                    </div>
                </template>
            </el-dialog>
        </Teleport>
    </div>

    <!-- <canvas></canvas> -->
</template>

<script setup lang="ts">
import { ref } from "vue"
import DropContent from "../grid/DropContent.vue";
import { useDragStore } from "@/stores/drag";

const dragStore = useDragStore();
const { Modeldata } = dragStore
const tableData: any[] = []
const dialogTableVisible = ref<boolean>(false);
const dropContentRef = ref();
// for (let i = 0; i < 1; i++) {
tableData.push({ text: `设置` })
// }
const handleClick = (scope: any) => {
    dialogTableVisible.value = true;
}
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    box-sizing: border-box;
    background-color: #726f6f;
    position: relative;
    // z-index: 9;

    &::before {
        content: '拖拽模块';
        color: #8f8d8d;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        // z-index: 99;
    }

}

.setDragaArea {
    border: 1px solid black;
    margin: 0 auto;
    width: 375px;
    height: 300px;

    // & .drop-content__drop-container {
    position: relative;
    // z-index: 999;
    // }
}

.categoryName {
    text-align: center;
}
</style>
