<template>
    <div class="outer">
        <div>
            <h1>物料详情</h1>
            <MaterialItem :material="materialList[currentMaterialIndex]" v-model="propsValue">
            </MaterialItem>
        </div>
        <div class="footer">
            <el-button @click="save2Plugin">作为组件保存</el-button>
            <el-button type="primary" @click="buildWebSocket">提交网页</el-button>

        </div>
    </div>
</template>

<script setup lang="ts">
import { useMaterialStore } from '@/stores/material'
import MaterialItem from './MaterialItem.vue';
import { ref, toRefs, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { useDragStore } from '@/stores/drag';
import { useCanvas } from '@/stores/canvas';
const materialStore = useMaterialStore();
const dragStore = useDragStore();
const canvasStore = useCanvas();
const { materialList, currentMaterialIndex } = storeToRefs(materialStore)
const { Modeldata, insertUserPlugin, getDragDataIndex } = dragStore;
const { editableTabs, activeTabsValue } = storeToRefs(canvasStore)
let propsValue = { ...materialList.value[currentMaterialIndex.value]?.props }
const buildWebSocket = async () => {
    // const socket = new WebSocket('ws://localhost:4000'); // 替换为你的服务器地址和端口

    // // 监听连接成功事件
    // socket.addEventListener('open', () => {
    //     console.log('WebSocket 连接已建立');
    // });

    // // 监听接收到消息事件
    // socket.addEventListener('message', (event) => {
    //     const message = event.data;
    //     console.log('收到消息:', message);
    // });

    // // 监听连接关闭事件
    // socket.addEventListener('close', () => {
    //     console.log('WebSocket 连接已关闭');
    // });

    // // 发送消息示例
    // socket.send('Hello, server!');

    fetch('http://localhost:3000/user/1', {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'  //传json字符串时一定要设置
        },
        body: JSON.stringify({ pageData: JSON.stringify(materialList.value) })
    }).then(() => {
        alert("上传成功")
    }).catch((e) => {
        alert("上传失败")
        console.log("ERROR", e)
    })
}
const save2Plugin = () => {
    let index = getDragDataIndex(activeTabsValue.value) || -1;
    insertUserPlugin(editableTabs.value[index], Modeldata[index]);
}
watchEffect(() => {
    propsValue = { ...materialList.value[currentMaterialIndex.value]?.props }
})
// const material = { type: "11", props: { content: "123" } }

</script>

<style scoped>
.outer {
    width: 300px;
    overflow: scroll;
    display: flex;
    flex-direction: column
}
</style>