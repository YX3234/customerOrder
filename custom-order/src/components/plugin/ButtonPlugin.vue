<template>
    <el-button type="primary">
        按钮名
    </el-button>
</template>

<script setup lang="ts">
import { } from "vue"
</script>

<style lang="scss" scoped>
.el-button {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 100%;
    white-space: normal; //自动换行
    word-break: break-all; //连续数字、英文字母自动换行
    table-layout: fixed;
    padding:0;
    // &>span {
    //     display: block;
    //     width; //自动换行
    // }

}
</style>
