<script setup lang="ts">
import Counter from "../ui/counter.vue"
const { meal } = defineProps(["meal", "desc"])
</script>

<template>
  <div class="meal">
    <div class="img">
      <img :src="meal.img" :alt="meal.title">
    </div>
    <div class="desc">
      <h2>{{ meal.title }}</h2>
      <p v-show="desc">{{ meal.desc }}</p>
      <div class="price-btn">
        <span class="price">{{ meal.price }}</span>
        <Counter :meal="meal"></Counter>
      </div>
    </div>
  </div>
</template>

<style scoped>
.meal {
  display: flex;
  height: calc(92*3rem);
  /* align-items: center; */
  border-bottom: 1rem rgb(152, 152, 152) solid;

}

.img {
  width: 300rem;
  vertical-align: middle;
  padding: 42rem 0 0 15rem;
}

.img img {
  width: 100%;
}

.desc {
  padding-top: calc(18*3rem);
  padding-right: 30rem;
}

.desc h2 {
  font-weight: normal;
  font-size: calc(10rem*3);
}

.desc p {
  font-size: 20rem;
  padding-top: 6rem;
  color: rgb(198, 186, 191);
}

.price-btn {
  font-size: 20rem;
  padding-top: 30rem;
  display: flex;
  justify-content: space-between;
  width: 500rem;
}

.price {
  font-size: 30rem;
  font-weight: bold;
}

.price::before {
  content: "￥";
}</style>