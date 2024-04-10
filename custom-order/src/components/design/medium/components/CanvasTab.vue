<template>
    <div class="container">
        <el-tabs v-model="active">
            <el-tab-pane v-for="item in tabs" :key="item.id" :label="item.title">
                <component v-bind:is="active === item.id ? item.component : false"></component>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

let active = ref<Number>(0);
const tabs = ref<any[]>([{
    title: '标签a',
    id: 0,
    // component: () => import('./components/a')
}, {
    title: '标签b',
    id: 1,
    // component: () => import('./components/b')
}, {
    title: '标签c',
    id: 2,
    // component: () => import('./components/c')
}, {
    title: '标签d',
    id: 3,
    // component: () => import('./components/d')
}])
</script>
