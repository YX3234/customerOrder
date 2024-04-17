<script setup>
  const props=defineProps(["isshow"]);
  const emit=defineEmits(["hide"]);
</script>
<template>
  <Teleport to="body">
    <div 
     :style="$attrs.style"
     class="mask" v-show="isshow" @click.self="$emit('hide')">
        <slot></slot>
   </div>
  </Teleport>
</template>
<style scoped>
  .mask{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(1, 0, 0, 0.5);
    z-index: 9999;
  }
</style>