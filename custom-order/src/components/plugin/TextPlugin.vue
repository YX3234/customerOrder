<script setup lang="ts">
import { useMaterialStore } from '@/stores/material';
import { toRefs } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const material = useMaterialStore();
const { materialList, createInstance, } = material;
let { currentMaterialIndex } = storeToRefs(material);

let cMaterial: any = null;
let PcurrentMaterialIndex = 0;
onMounted(() => {
    cMaterial = createInstance("text", { content: "文本1" })
    PcurrentMaterialIndex = materialList.length;
    materialList?.push(cMaterial);
    // currentMaterialIndex.value = PcurrentMaterialIndex;
    console.log("1", currentMaterialIndex)
})

const handleClick = () => {
    // currentMaterialIndex.value = PcurrentMaterialIndex;
    // console.log("click", currentMaterialIndex?.value)
}


</script>

<template>
    <div class="textWrapper" @click="handleClick">{{ materialList[PcurrentMaterialIndex]?.props?.content }}</div>
</template>
<style scoped>
/* .textWrapper{

} */
</style>