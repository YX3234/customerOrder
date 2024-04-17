<script setup>
import { ref } from "vue"
import Counter from "./ui/counter.vue"
import VueDragResize from 'vue-drag-resize/src';

const { meal } = defineProps(["meal", "desc"])
const titleObj = {
  componentWidth: 100,
  componentHeight: 100,
  handleDragging(newVal) {

  },
  handleResizing() { }
}
let imageWidth = ref(100);
let imageHeight = ref(100)
const imageObj = ref({
  componentWidth: 100,
  componentHeight: 100,
  handleDragging(newVal) {

  },
  handleResizing(newVal) {
    imageWidth.value = newVal.width;
    imageHeight.value = newVal.height
  }
})
</script>

<template>
  <div class="meal">
    <VueDragResize :isActive="false" :w="imageWidth" parentLimitation :h="imageHeight" :draggable="true"
      :resizable="true" @dragging="imageObj.handleDragging" @resizing="imageObj.handleResizing">
      <!-- <div class="img" :style="{ width: imageObj.componentWidth, height: imageObj.componentHeight }"> -->
      <img :src="meal.img" :alt="meal.title">

      <!-- </div> -->
    </VueDragResize>
    <div class="desc">
      <VueDragResize :isActive="false" :w="titleObj.componentWidth" parentLimitation :h="titleObj.componentHeight"
        :draggable="true" :resizable="true" @dragging="titleObj.handleDragging" @resizing="titleObj.handleResizing">
        <h2>{{ meal.title }}</h2>
      </VueDragResize>
      <VueDragResize :isActive="false" :w="titleObj.componentWidth" parentLimitation :h="titleObj.componentHeight"
        :draggable="true" :resizable="true" @dragging="titleObj.handleDragging" @resizing="titleObj.handleResizing">
        <p v-show="desc">{{ meal.desc }}</p>
      </VueDragResize>
      <VueDragResize :isActive="false" :w="titleObj.componentWidth" parentLimitation :h="titleObj.componentHeight"
        :draggable="true" :resizable="true" @dragging="titleObj.handleDragging" @resizing="titleObj.handleResizing">
        <div class="price-btn">
          <span class="price">{{ meal.price }}</span>
          <Counter :meal="meal"></Counter>
        </div>
      </VueDragResize>
    </div>
  </div>
</template>

<style scoped>
.meal {
  display: flex;
  height: calc(92*3rem);
  /* align-items: center; */
  border-bottom: 1rem rgb(152, 152, 152) solid;
  position: relative;

}

.img {
  width: 200px;
  /* vertical-align: middle; */

  /* padding: 42rem 0 0 15rem; */
}

img {
  width: v-bind(imageWidth + 'px');
  height: v-bind(imageHeight + 'px');
}

.desc {
  padding-top: calc(18*3rem);
  padding-right: 30rem;

}

.desc h2 {
  font-weight: normal;
  font-size: calc(10px*3);
}

.desc p {
  font-size: 20px;
  padding-top: 6rem;
  color: rgb(198, 186, 191);
}

.price-btn {
  font-size: 20px;
  padding-top: 30rem;
  display: flex;
  justify-content: space-between;
  width: 500px;
}

.price {
  font-size: 30px;
  font-weight: bold;
}

.price::before {
  content: "￥";
}
</style>