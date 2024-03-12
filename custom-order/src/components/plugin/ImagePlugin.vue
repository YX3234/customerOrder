<template>
    <div>
        <el-image v-show="true" style="width: 100%; height: 100%" :src="'public/KINO2560x1440.jpg'" :fit="'fill'" />
        <div v-show="false">
            <el-upload v-model:file-list="imageList" class="upload-demo" action="#" :on-preview="handlePreview"
                :on-remove="handleRemove" :before-remove="beforeRemove" :limit="1" :on-exceed="handleExceed"
                auto-upload="false">
                <el-button type="primary">Click to upload</el-button>
                <!-- <template #tip>
                <div class="el-upload__tip">
                    jpg/png files with a size less than 500KB.
                </div>
            </template> -->
            </el-upload>
        </div>
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
import { ref } from 'vue'
import { ElMessage, ElMessageBox, type UploadFile, type UploadProps } from 'element-plus'
// import * from 'public/KINO2560x1440.jpg'

const imageList = ref<UploadFile[]>([])

// const handleChange: UploadProps['onChange'] = (file, files) => {
//     imageList.value = files;
//     console.log(imageList.value);
// }
// console.log(imageList);
const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
    // console.log(file, uploadFiles)
}
const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
    // console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    ElMessage.warning(
        `The limit is 1, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
        } totally`
    )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(
        `Cancel the transfer of ${uploadFile.name} ?`
    ).then(
        () => true,
        () => false
    )
}

</script>

<style lang="scss" scoped>
.imageWrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;

    & ul {

        & div.el-upload {
            display: none;
        }

        // & :first-child {
        //     display: block;
        //     width: 100px;
        //     height: 100px;
        // }
    }
}

.disabled {
    display: none;
}

.preview-item[data-v-09a329b6] {
    pointer-events: initial;
}
</style>
