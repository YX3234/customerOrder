<template>
    <el-form :model="newItem" label-width="auto" style="max-width: 600px">
        <el-form-item label="行数">
            <el-input v-model="newItem.row" />
        </el-form-item>
        <el-form-item label="列数">
            <el-input v-model="newItem.column" />
        </el-form-item>
        <el-form-item label="间隙">
            <el-input v-model="newItem.gap" />
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue"
import { usePluginStore } from '@/stores/plugin'
import { storeToRefs } from "pinia";
const pluginStore = usePluginStore();
const { formList } = storeToRefs(pluginStore);
let newItem=ref<any>({row:12,column:12,gap:2});
// watchEffect(()=>{
    
// })
</script>

<style lang="scss" scoped></style>
