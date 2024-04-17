<script setup>
import { ref } from 'vue'
import Meals from "../meals/meals.vue";
import Mask from "../ui/mask.vue";
import Dialog from "../ui/dialog.vue";
import { useMealsStore } from "@/store/meals"
const meals = useMealsStore();
const showDiglog = ref(false);
const emits = defineEmits()
const okHandler = () => {
  meals.clearCount();
  emits('hide');
}
</script>
<template>
  <Mask style="z-index : 999">
    <Dialog msg="是否要清空购物车" :isshow="showDiglog" @hide="showDiglog = false" @ok="okHandler"></Dialog>
    <div class="cart-details">
      <div class="header">
        <h2>餐品详情</h2>
        <a href="#" @click="showDiglog = true"><i class="ri-delete-bin-line"></i>清空所有购物车</a>
      </div>
      <Meals :meals="meals.mealsMsg" :desc="false" nullMsg="购物车为空"></Meals>
    </div>
  </Mask>
</template>
<style scoped>
.cart-details {
  background-color: #fff;
  border-top-left-radius: 50rem;
  position: fixed;
  width: 750rem;
  bottom: 0;
}

.header {
  display: flex;
  justify-content: space-between;
}

/* 通过属性透传给Meals组件中的meals属性 */
.meals {
  height: auto;
  max-height: calc(280rem*4);
}

.header {
  display: flex;
  align-items: center;
  padding: 20rem 26rem;
}

.header h2 {
  font-size: 33rem;
}

.header a {
  color: rgb(202, 190, 190);
  font-size: 24rem;
  text-decoration: none;
}

.header a i {
  padding-right: 8rem;

}</style>