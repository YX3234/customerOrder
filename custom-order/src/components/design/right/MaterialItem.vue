<template>
    <div class="item">
        <!-- 根据物料类型展示不同的属性输入框和交互操作 -->
        <template v-if="material?.type === 'text'">
            <TextForm :propsValue="propsValue" :material="material"></TextForm>
        </template>

        <template v-else-if="material?.type === 'image'">
            <!-- 图片特定的属性输入框和交互操作 -->
            <ImageForm :propsValue="propsValue" :material="material"></ImageForm>
        </template>

        <template v-else-if="material?.type === 'button'">
            <!-- 按钮特定的属性输入框和交互操作 -->
        </template>
    </div>
</template>

<script setup lang="ts">
import ImageForm from './materialSetForm/ImageForm.vue';
import TextForm from './materialSetForm/TextForm.vue';
import { reactive, ref } from 'vue';

const { material } = defineProps(["material"])
const propsValue: any = defineModel()

</script>

<style lang="scss" scoped>
// .item {
//     // pointer-events: none;
// }

.preview {
    width: 100px;
    height: 100px;
}
</style>
