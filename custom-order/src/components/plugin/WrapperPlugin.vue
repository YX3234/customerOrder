<template>
    <div class="wrapper">
        <el-table :data="tableData" stripe style="width: 100%">
            <!-- prop="goodsCategory" label="商品种类" -->
            <el-table-column>
                <template #header>
                    <!-- 商品种类 -->
                </template>
                <template #default="scope">
                    <div class="categoryName" @click="handleClick(scope)">{{ scope?.row?.goodsCategory || '-' }}</div>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <!-- <canvas></canvas> -->
</template>

<script setup lang="ts">
import { ref } from "vue"
import DropContent from "../grid/DropContent.vue";
const tableData: any[] = []
for (let i = 0; i < 2; i++) {
    tableData.push({ goodsCategory: `种类${i}` })
}
const handleClick = (scope: any) => {
    console.log(scope);
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
        content: '导航栏';
        color: #8f8d8d;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        z-index: 99;
    }

}

.categoryName {
    text-align: center;
}
</style>
