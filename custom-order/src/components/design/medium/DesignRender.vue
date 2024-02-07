<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { useDragStore } from '@/stores/drag';
import { storeToRefs } from 'pinia';


const dragStore = useDragStore();
const { handleDragover, handleDrop } = dragStore;
</script>
<template>
    <div class="mediumOuter">
        <div class="setDragaArea" @dragover="handleDragover" @drop="handleDrop"></div>
    </div>
</template>
<style scoped>
.mediumOuter {
    width: 66vw;
    background-color: #8484847e;
}

.setDragaArea {
    border: 1px solid black;
    margin: 0 auto;
    width: 40vw;
    height: 600px;
}

.content {
    background-color: green;
    width: 100%;
    height: 30px;
    outline: 1px solid black;
}
</style>