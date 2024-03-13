<template>
    <div class="outer">
        <div>
            <h1>物料详情</h1>
            <MaterialItem :material="materialList[currentMaterialIndex]" v-model="propsValue">
            </MaterialItem>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { useMaterialStore } from '@/stores/material'
import MaterialItem from './MaterialItem.vue';
import { ref, toRefs, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
const materialStore = useMaterialStore();
const { materialList, currentMaterialIndex } = storeToRefs(materialStore)
let propsValue = { ...materialList.value[currentMaterialIndex.value]?.props }

watchEffect(() => {
    propsValue = { ...materialList.value[currentMaterialIndex.value]?.props }
})
// const material = { type: "11", props: { content: "123" } }

</script>