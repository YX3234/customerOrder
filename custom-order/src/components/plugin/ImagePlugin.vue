<template>
    <div class="imageWrapper" @click="handleClick">
        <!-- <el-image v-show="true" style="width: 100%; height: 100%" :src="'public/KINO2560x1440.jpg'" :fit="'fill'" />
        <div v-show="false">
            <el-upload v-model:file-list="imageList" class="upload-demo" action="#" :on-preview="handlePreview"
                :on-remove="handleRemove" :before-remove="beforeRemove" :limit="1" :on-exceed="handleExceed"
                auto-upload="false">
                <el-button type="primary">Click to upload</el-button>
                 <template #tip>
                <div class="el-upload__tip">
                    jpg/png files with a size less than 500KB.
                </div>
            </template> 
            </el-upload>
        </div> -->
        <img :src="materialList[index]?.props?.url || '../../../public/KINO2560x1440.jpg'"
            :alt="materialList[index]?.props?.alt || '默认描述'" width="100%" height="100%" />
    </div>
    <!-- <el-upload action="#" list-type="picture-card" :auto-upload="false">
            <el-icon>
                <Plus />
            </el-icon>

            <template #file="{ file }">
                <div>
                    <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                    <span class="el-upload-list__item-actions">
                        <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                            <el-icon><zoom-in /></el-icon>
                        </span>
                        <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                            <el-icon>
                                <Download />
                            </el-icon>
                        </span>
                        <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                            <el-icon>
                                <Delete />
                            </el-icon>
                        </span>
                    </span>
                </div>
            </template>
        </el-upload>

        <el-dialog v-model="dialogVisible">
            <img w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>-->
</template>

<script setup lang="ts">
import { useMaterialStore } from '@/stores/material';
import { storeToRefs } from 'pinia';
import { onBeforeMount, ref, watchEffect } from 'vue';

const { data } = defineProps(['data'])
const material = useMaterialStore();
const { createInstance } = material;
let { currentMaterialIndex, materialList } = storeToRefs(material);
let index: number;

onBeforeMount(() => {
    currentMaterialIndex.value = materialList.value.length;
    materialList.value?.push(createInstance(data, { index: materialList.value.length, url: '', alt: '测试' }));
    if (typeof index === "undefined") index = materialList.value[currentMaterialIndex.value].props?.index;

})
const handleClick = () => {
    currentMaterialIndex.value = materialList.value[index]?.props?.index;
    console.log("click", materialList.value[index]?.props)
}

</script>

<style lang="scss" scoped>
.imageWrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: aquamarine;

    & ul {

        & div.el-upload {
            display: none;
        }

        & :first-child {
            display: block;
            width: 100px;
            height: 100px;
        }
    }

}

.disabled {
    display: none;
}

.preview-item[data-v-09a329b6] {
    pointer-events: initial;
}
</style>
