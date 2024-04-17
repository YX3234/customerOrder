<script lang="ts" setup>
import { ref } from 'vue'
import { useMealsStore } from '@/stores/meals';
const meals = useMealsStore();
const { meal } = defineProps(["meal"])
</script>

<template>
  <div class="counter">
    <template v-if="meal.count > 0">
      <button class="sub" @click="meals.mealsCountSub(meal)"><i class="ri-subtract-line"></i></button>
      <span>{{ meal.count }}</span>
    </template>
    <button class="add" @click="meals.mealsCountAdd(meal)"><i class="ri-add-line"></i></button>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  align-items: center;
}

.counter span {
  padding: 0 10rem;
}

.add,
.sub {
  background-color: rgb(248, 188, 0);
  width: 35rem;
  height: 35rem;
  font-size: 35rem;
  border: none;
  border-radius: 50%;
}
</style>