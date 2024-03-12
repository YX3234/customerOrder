<template>
    <div class="item">
        <!-- 根据物料类型展示不同的属性输入框和交互操作 -->
        <template v-if="material?.type === 'text'">
            <label for="content">文本内容:</label>
            <input placeholder="请输入" v-model="inputValue" id="content">
            <button @click="material?.updateContent(inputValue)">更新内容</button>
        </template>

        <template v-else-if="material?.type === 'image'">
            <!-- 图片特定的属性输入框和交互操作 -->
        </template>

        <template v-else-if="material?.type === 'button'">
            <!-- 按钮特定的属性输入框和交互操作 -->
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const inputValue = ref("")

const { material } = defineProps(["material"])

</script>

<style lang="scss" scoped></style>
