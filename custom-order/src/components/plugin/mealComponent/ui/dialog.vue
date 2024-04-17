<script setup>
import Mask from './mask.vue';
const props=defineProps(["msg"])
</script>
<template>
  <Mask>
    <div class="dialog" @click="$emit('hide')">
      <p>{{ props.msg }}</p>
      <div class="dialog-btn">
        <button class="cancel" @click="$emit('hide')">取消</button>
        <button class="ok" @click="()=>{
          $emit('ok');
          $emit('hide')
        }">确认</button>
      </div>
    </div>
  </Mask>
</template>
<style scoped>
  .dialog{
    position: absolute;
    top: 550rem;
    left:0;
    right: 0;
    margin: 0 auto;
    width: 650rem;
    height: 400rem;
    background-color: white;
    border-radius: 70rem;
  }
  .dialog p{
   text-align: center;
   padding-top: 20%;
   font-size: 45rem;
  }
  .dialog-btn{
    padding-top:60rem;
    width: 500rem;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  }
  .dialog-btn button{
    width: 200rem;
    height: 75rem;
    border-radius: 50rem;
    border: none;
    font-size: 30rem;
  }
  .ok{
    background-color: rgb(248,188,0);
  }
</style>