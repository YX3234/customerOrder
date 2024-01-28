<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

    const router=useRouter();
    const activeIndex=ref('/design')
    const createRouterPush=(url:string)=>{
        router.push({path:url});console.log("TEST");
    }
    const handleSelect=(key:string,keypath:string[])=>{
        console.log(key,keypath,activeIndex.value);
        if(key!=="0"){
            activeIndex.value=key;
            createRouterPush(activeIndex.value);
        }
    }
</script>
<template>
    <el-menu 
    :default-active="activeIndex"
    class="navBar"
    mode="horizontal"
    @select="handleSelect"
    :ellipsis="false">
        <el-menu-item index="/" disabled>
            <!-- <img
                style="width: 100px"
                src=""
                alt="app logo"
            /> -->
            CutomOrder
        </el-menu-item>
        <div class="flex-grow" ></div>
        <el-menu-item index="/design">设计</el-menu-item>
        <div class="flex-grow" ></div>
        <el-menu-item index="/other" disabled>其他</el-menu-item>
    </el-menu>
</template>
<style scoped>
    .naviBar {
        text-decoration: none;
    }
    
</style>
<style>
    .flex-grow{
        flex-grow: 1;;
    }
</style>