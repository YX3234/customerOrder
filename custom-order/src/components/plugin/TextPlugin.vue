<script setup lang="ts">
import { useMaterialStore } from '@/stores/material';
import { toRefs } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { onBeforeMount, onMounted, ref, watchEffect } from 'vue';

const { data } = defineProps(['data'])
const material = useMaterialStore();
const { createInstance } = material;
let { currentMaterialIndex, materialList } = storeToRefs(material);


let index: number;
onBeforeMount(() => {
    currentMaterialIndex.value = materialList.value.length;
    materialList.value?.push(createInstance(data, { index: materialList.value.length, content: "文本1" }));
    if (typeof index === "undefined") index = materialList.value[currentMaterialIndex.value].props?.index;

})

const handleClick = () => {
    currentMaterialIndex.value = materialList.value[index]?.props?.index;
    console.log("click", materialList.value[index]?.props)
}

</script>

<template>
    <div class="textWrapper" @click="handleClick">{{ materialList[index].props?.content || "error" }}
    </div>
</template>
<style scoped>
.textWrapper {
    /* word-wrap: break-word; */
    overflow: scroll;
}
</style>