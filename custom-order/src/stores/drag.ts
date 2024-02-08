import { defineStore } from 'pinia'
import { ref } from 'vue'
//组合式
export const useDragStore = defineStore('drag', () => {
  const sourceObj = ref<HTMLElement>() //用于存放被拖拽的模板引用
  const targetObj = ref<HTMLElement>() //用于存放目标容器的模板引用
  const pluginList = ref([
    { id: 'p1', name: '轮播图' },
    { id: 'p2', name: '图片' },
    { id: 'p3', name: '文本' },
    { id: 'p4', name: '按钮' }
  ])
  const containerList = ref<{ id: string; name: string }[]>([])

  // const handleDragstart = (event: any) => {
  //   //响应拖拽开始事件
  //   sourceObj.value = event?.target?.cloneNode(true) //复制源对象
  // }
  // const handleDragover = (event: Event) => {
  //   //去除事件默认样式，让元素允许放置在自身之上
  //   event.preventDefault()
  // }
  // const handleDrop = (event: any) => {
  //   //拖拉结束时，将源对象的副本插入到目标对象上
  //   event.preventDefault() //阻止默认行为，会作为某些元素的链接打开
  //   console.log('1', event?.target)
  //   event?.target?.appendChild(sourceObj.value)
  // }

  return { sourceObj, targetObj, pluginList, containerList }
})
