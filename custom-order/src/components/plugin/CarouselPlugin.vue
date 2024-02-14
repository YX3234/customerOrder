<template>
    <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
</template>

<script setup lang="ts">
import { } from "vue"
</script>

<style scoped lang="scss">
.preview-item {
    width: 100%;
    height: 100%;

}
</style>
