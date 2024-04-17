<script setup>
import { useMealsStore } from '@/store/meals';
const meals = useMealsStore();
</script>
<template>
  <div class="filter">
    <div class="filter-inner">
      <input v-model="meals.keyword" type="text" placeholder="请输入关键字">
      <i class="ri-search-line"></i>
    </div>
  </div>
</template>
<style scoped>
.filter {
  padding: 40rem;
}

.filter-inner {
  display: flex;
  align-items: center;
  position: relative;
  height: 80rem;
}

.filter-inner input {
  background-color: rgb(242, 242, 242);
  border: none;
  width: 100%;
  height: 100%;
  font-size: 20rem;
  border-radius: 40rem;
  text-indent: 10%;
  outline: none;
}

.filter-inner i {
  position: absolute;
  left: 20rem;
  font-size: 36rem;
  color: rgb(178, 178, 178);
}
</style>