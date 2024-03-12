<template>
    <div class="outer">
        <div>
            <h1>物料详情</h1>
            <MaterialItem :material="materialList[currentMaterialIndex]"></MaterialItem>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { useMaterialStore } from '@/stores/material'
import MaterialItem from './MaterialItem.vue';
import { toRef, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
const materialStore = useMaterialStore();
const { materialList } = materialStore;
const { currentMaterialIndex } = storeToRefs(materialStore)


// console.log("test", currentMaterialIndex.value)



// const material = { type: "11", props: { content: "123" } }

</script>