<script setup lang="ts">
import { ref } from 'vue';
import Plugins from './Plugins.vue'
import Outline from './Outline.vue';

const selectedIndex = ref('0')
const handleSelect = (key: string, keypath: string[]) => {
    selectedIndex.value = key;
}
const test = ref('1')
</script>
<template>
    <div class="outer">
        <el-menu @select="handleSelect" :default-active="selectedIndex" mode="vertical">
            <el-menu-item index="0">插件</el-menu-item>
            <el-menu-item index="1">大纲</el-menu-item>
        </el-menu>
        <div class="content">
            <Plugins v-show="selectedIndex === '0'" group-name="drag-demo"></Plugins>
            <Outline v-show="selectedIndex === '1'"></Outline>
        </div>
    </div>
</template>
<style scoped>
.outer {
    display: flex;
    /* width: 15vw; */
    background-color: aqua;
    position: relative;
    z-index: 9999;

}

.content {
    flex-grow: 1;
    height: 100vh;
    overflow: scroll;
}
</style>
        