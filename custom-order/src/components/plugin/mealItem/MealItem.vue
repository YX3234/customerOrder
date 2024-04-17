<script lang="ts" setup>
import Meal from '../mealComponent/Meal.vue';
import { useMealsStore } from "@/stores/meals.js";
const mealsStore = useMealsStore();
const meals = mealsStore.filterMeals;
const desc = true;
const nullMsg = "该商品不存在"
</script>

<template>
  <div class="meals">
    <Meal v-for="item in meals" :meal="item" :desc="desc" :key="item"></Meal>
    <template v-if="!meals || meals.length == 0">
      <h2>{{ nullMsg }}</h2>
    </template>
  </div>
</template>

<style scoped>
.meals {
  box-sizing: border-box;
  /* height: calc(100vh - 160rem); */
  padding-bottom: 105rem;
  overflow: auto;
  width: 100%;
}

.meals h2 {
  padding-bottom: 5rem;
  text-align: center;
  font-size: 25rem;
}
</style>
