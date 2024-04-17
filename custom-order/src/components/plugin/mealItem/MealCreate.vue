<template>
    <div class="pD-outer">
        <div class="left">
            <MealDesign></MealDesign>
        </div>
        <div class="right">
            <MealItem v-modal="propsValue"></MealItem>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import MealItem from "../mealItem/MealItem.vue";
import MealDesign from "../mealItem/MealDesign.vue";

const propsValue = ref<Record<string, any>>({ alt: '' });
</script>

<style lang="scss" scoped>
.pD-outer {
    display: flex;
    // flex-grow: 1;

    & .left {
        width: 40%;
        opacity: 0.5;
        background-color: red;
    }

    & .right {
        width: 50%;
        overflow: scroll;
    }
}
</style>
