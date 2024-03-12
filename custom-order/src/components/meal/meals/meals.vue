<script setup lang="ts">
import Meal from "./meal.vue";
import { useMealsStore } from "../../store/meals";
const { meals, desc, nullMsg } = defineProps(["meals", "desc", "nullMsg"]);
</script>

<template>
  <div class="meals">
    <Meal v-for="item in meals" :meal="item" :desc="desc"></Meal>
    <template v-if="!meals || meals.length == 0">
      <h2>{{ nullMsg }}</h2>
    </template>
  </div>
</template>

<style scoped>
.meals {
  box-sizing: border-box;
  height: calc(100vh - 160rem);
  padding-bottom: 105rem;
  overflow: auto;
}

.meals h2 {
  padding-bottom: 5rem;
  text-align: center;
  font-size: 25rem;
}
</style>