<template>
    <el-form :model="propsValue" label-width="auto" style="max-width: 600px">
        <el-form-item label="图片描述">
            <input v-model="propsValue.alt" />
        </el-form-item>
        <el-form-item label="上传图片">
            <!-- action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" -->
            <input type="file" accept="image/*" @change="handleFileChange" />
            <div class="preview">
                <img :src="url" v-if="url" alt="Uploaded Image" width="100%" />
            </div>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="material.update({ ...propsValue, url })">Create</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { propsValue, material } = defineProps(['propsValue', 'material'])
const url = ref('')
function handleFileChange(event: any) {
    const file = event.target.files[0];
    console.log("test", event.target.files)
    if (file) {
        convertFileToUrl(file);
    }
};
function convertFileToUrl(file: any) {
    const reader = new FileReader();

    reader.onload = (event) => {
        url.value = event.target?.result as any;
    };

    reader.readAsDataURL(file);
}
</script>

<style lang="scss" scoped></style>
