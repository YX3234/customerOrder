<template>
    <label for="content">文本内容:</label>
    <input placeholder="请输入" v-model="propsValue.content" id="content">
    <!-- emit('onSetMaterial', currenIndex, inputValue) -->
    <button @click="material?.update(propsValue);">更新内容</button>
</template>

<script setup lang="ts">
import { } from "vue"
const { propsValue, material } = defineProps(['propsValue', 'material'])
</script>

<style lang="scss" scoped></style>
