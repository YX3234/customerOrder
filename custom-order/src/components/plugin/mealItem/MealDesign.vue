<template>
    <el-form :model="propsValue" label-width="auto" style="max-width: 600px">
        <el-form-item label="图片描述">
            <!-- <input v-model="propsValue.alt" /> -->
        </el-form-item>
        <el-form-item label="上传图片">
        </el-form-item>
        <!-- <el-form-item>
            <el-button type="primary" @click="material.update({ ...propsValue, url })">Create</el-button>
        </el-form-item> -->
    </el-form>
</template>

<script setup lang="ts">
import { } from "vue"

const propsValue: Record<string, any> = defineModel();
</script>

<style lang="scss" scoped></style>
