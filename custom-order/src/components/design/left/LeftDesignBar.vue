<script setup lang="ts">
import { ref } from 'vue';
import Plugins from './Plugins.vue'
import Outline from './Outline.vue';

const selectedIndex = ref('0')
const handleSelect = (key: string, keypath: string[]) => {
    selectedIndex.value = key;
}
</script>
<template>
    <div class="outer">
        <el-menu @select="handleSelect" :default-active="selectedIndex" mode="vertical">
            <el-menu-item index="0">插件</el-menu-item>
            <el-menu-item index="1">大纲</el-menu-item>
        </el-menu>
        <div class="content">
            <Plugins v-if="selectedIndex === '0'"></Plugins>
            <Outline v-if="selectedIndex === '1'"></Outline>
        </div>
    </div>
</template>
<style scoped>
.outer {
    display: flex;
    width: 15vw;
    background-color: aqua;
}

.content {
    flex-grow: 1;
}
</style>
        