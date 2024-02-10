<script setup lang="ts">
import { onMounted, ref } from 'vue';
const input = ref('');
const elInputRef = ref<any>();
onMounted(() => {
    elInputRef.value?.focus();
})
</script>
<template>
    <div class="textWrapper">
        <el-input v-model="input" placeholder="请输入文字" ref="elInputRef"></el-input>
    </div>
</template>
<style scoped>
/* .textWrapper{

} */
</style>