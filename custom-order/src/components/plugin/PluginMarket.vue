<template>
    <h1>这里可以配置插件</h1>
    <div class="mealItem" @click="handleMealItemClick">
        菜单项
    </div>
</template>

<script setup lang="ts">
import { } from "vue"
import { useRouter } from "vue-router";
const router = useRouter();
const handleMealItemClick = () => {
    router.push('/createPlugin/mealItem')
}

</script>

<style lang="scss" scoped>
.mealItem {

    width: 200px;
    height: 200px;
    outline: 1px solid black;
    text-align: center;
    line-height: 200px;

    &:hover {
        background-color: rgba($color: #3c71f5, $alpha: 0.5);
    }
}
</style>
