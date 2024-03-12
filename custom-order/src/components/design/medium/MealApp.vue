<script setup lang="ts">
import { ref, reactive } from 'vue';
import {useMealsStore} from "@/stores/meals"
import Meals from "@/components/meal/meals/"
import MealsFiter from '@/components/meal/mealsfilter/mealsFiter.vue';
import MealsToCart from '@/components/meal/cart/mealsToCart.vue';
const meals = useMealsStore();
</script>

<template>
    <MealsFiter></MealsFiter>
    <Meals :meals="meals.filterMeals" :desc="true" nullMsg="该商品不存在"></Meals>
    <MealsToCart></MealsToCart>
</template>