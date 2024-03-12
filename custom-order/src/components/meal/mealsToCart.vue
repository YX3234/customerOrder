<script setup lang="ts">
import { ref } from 'vue';
import cartBag from "../../assets/bag.png"
import { useMealsStore } from "../../store/meals";
import MealCartMask from "./mealCartMask.vue";
import Checkout from "./check.vue"
const meals = useMealsStore();
const isshow = ref(false);
const isCheckoutShow = ref(false);
</script>
<template>
  <Checkout @close="isCheckoutShow = false" :is-show="isCheckoutShow"></Checkout>
  <MealCartMask :isshow="isshow" @hide="isshow = false"></MealCartMask>
  <div class="cart">
    <div class="cart-img">
      <img :src="cartBag" alt="购物袋">
    </div>
    <div class="total-count" v-show="meals.totalCount > 0">{{ meals.totalCount }}</div>
    <div class="cart-inner">
      <p class="non-price" v-show="meals.totalCount <= 0">未选购商品</p>
      <p class="total-price" v-show="meals.totalCount > 0" @click="isshow = true">￥{{ meals.amount }}</p>
      <button class="checkout-btn" @click="isCheckoutShow = true">去结算</button>
    </div>
  </div>
</template>
<style scoped>
.cart {
  position: fixed;
  bottom: 15rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 710rem;
  height: 90rem;
  background-color: rgb(58, 58, 58);
  border-radius: 80rem;
  z-index: 9999;
}

.cart-img {
  position: absolute;
  width: 80rem;
  top: -10rem;
  /* display: none; */
}

.cart-img img {
  width: 100%;
}

.total-count {
  position: absolute;
  left: 60rem;
  top: -15rem;
  background-color: rgb(208, 12, 12);
  width: 42rem;
  height: 42rem;
  color: white;
  border-radius: 50%;
  font-size: 20rem;
  text-align: center;
  line-height: 42rem;
}

.cart-inner {
  display: flex;
  justify-content: space-between;
  line-height: 90rem;
}

.non-price {
  padding: 0 90rem;
  color: rgb(153, 153, 153);
  font-size: 35rem;
}

.total-price {
  padding: 0 90rem;
  color: white;
  font-size: 35rem;
}

.checkout-btn {
  width: 214rem;
  background-color: rgb(248, 188, 0);
  border-radius: 80rem;
  text-align: center;
  font-size: 39rem;
  border: none;
}</style>