import { useElementSize } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, ref, watch, type Ref, onUnmounted } from 'vue'
//组合式
export const useDragStore = defineStore('drag', () => {
  class DragData<T extends DragItemData> {
    moveItem = new Map<string, DragItemData>()

    set(key: string, data: T) {
      this.moveItem.set(key, data)
    }

    remove(key: string) {
      this.moveItem.delete(key)
    }

    get(key: string): undefined | DragItemData {
      return this.moveItem.get(key)
    }
  }

  /**
   * 拖拽临时数据
   */
  const dragData = new DragData<DragItemData>()
  const sourceObj = ref<HTMLElement>() //用于存放被拖拽的模板引用
  const targetObj = ref<HTMLElement>() //用于存放目标容器的模板引用
  const pluginList = ref([
    // {
    //   title: '轮播图',
    //   list: [{ key: 'CarouselPlugin', title: '10x12', column: 12, row: 3, name: '轮播图' }]
    // },
    {
      title: '图片',
      list: [
        // { key: 'ImagePlugin', title: '1x1', column: 1, row: 1 },
        // { key: 'ImagePlugin', title: '2x2', column: 2, row: 2 },
        // { key: 'ImagePlugin', title: '3x3', column: 3, row: 3 },
        { key: 'ImagePlugin', title: '4x4', column: 4, row: 4, name: '图片' }
      ]
    },
    {
      title: '按钮',
      list: [
        { key: 'ButtonPlugin', title: '2x1', column: 2, row: 1, name: '按钮' },
        { key: 'ButtonPlugin', title: '1x3', column: 1, row: 3, name: '按钮' }
      ]
    },
    // {
    //   title: '拖拽放置模块',
    //   list: [{ key: 'DragModel', title: '6x4', column: 6, row: 4, name: '拖拽放置模块' }]
    // },
    // {
    //   title: '商品品类导航',
    //   list: [{ key: 'WrapperPlugin', title: '2x12', column: 2, row: 12, name: '商品品类导航' }]
    // },
    {
      title: '文本',
      list: [{ key: 'TextPlugin', title: '2x1', column: 2, row: 1, name: '文本' }]
    }
  ])
  /** 新增用户定义组件 */
  const insertUserPlugin = (tab: any, data: any) => {
    let index = pluginList.value.findIndex((e) => e.title === '自定义插件')
    if (index === -1) {
      pluginList.value.push({ title: '自定义插件', list: [] })
      index = pluginList.value.length - 1
    }
    pluginList.value[index].list.push({
      key: 'userDesignPlugin',
      title: tab?.content?.column + 'x' + tab?.content?.row,
      column: tab?.content?.column,
      row: tab?.content?.row,
      name: tab?.name
    })
    console.log('test', pluginList.value[index], tab, data)
  }
  const containerList = ref<{ id: string; name: string }[]>([])
  const rowCount = ref<number>(10) //行数
  const columnCount = ref<number>(12) //列数
  const gap = ref<number>(5) //间隙大小

  /** 记录key-标签页名 value-拖拽已放置组件数据索引的哈希表
   * 用于通过标签页名查找对应已放置组件数据数组
   */
  class IndexData {
    indexMap = new Map()
    set(name: string, index: number) {
      this.indexMap.set(name, index)
    }

    remove(name: string) {
      this.indexMap.delete(name)
    }

    get(name: string): undefined | number {
      return this.indexMap.get(name)
    }
  }
  const indexMap = new IndexData()
  /** 存储已放置组件的数据 */
  const Modeldata = ref<any[]>([
    // {
    //   id: 1111,
    //   key: 'demo-component',
    //   title: '组件标题',
    //   column: 1,
    //   row: 1,
    //   x: 1,
    //   y: 1
    // },
    // {
    //   id: 2222,
    //   key: 'demo-component',
    //   title: '组件标题',
    //   column: 1,
    //   row: 1,
    //   x: 2,
    //   y: 3
    // }
  ])
  /** 新增索引哈希
   * @param key 必须唯一，否则无法添加
   */
  const insertIndexMap = (key: string, value: number) => {
    indexMap.set(key, value)
    // indexMap.set('2', 2)
    Modeldata.value.push([])
    console.log('debug1', indexMap, key, value)
  }
  const getDragDataIndex = (key: string) => {
    console.log('debug2', indexMap.get(key))
    return indexMap.get(key)
  }
  insertIndexMap('1', 0)
  insertIndexMap('2', 1)

  const dropContentRef = ref<InstanceType<any>>()

  /**
   * 判断是否在当前四边形内
   * @param {*} p1 父容器
   * @param {*} p2
   * @returns
   *  对应是 左上角坐标 和 右下角坐标
   *  [0,0,1,1]  => 左上角坐标 0,0  右下角 1,1
   */
  const booleanWithin = (
    p1: [number, number, number, number],
    p2: [number, number, number, number]
  ) => {
    return p1[0] <= p2[0] && p1[1] <= p2[1] && p1[2] >= p2[2] && p1[3] >= p2[3]
  }

  /**
   * 判断是两四边形是否相交
   * @param {*} p1 父容器
   * @param {*} p2
   * @returns
   *  对应是 左上角坐标 和 右下角坐标
   *  [0,0,1,1]  => 左上角坐标 0,0  右下角 1,1
   */
  const booleanIntersects = (
    p1: [number, number, number, number],
    p2: [number, number, number, number]
  ) => {
    return !(
      p1[2] <= p2[0] || // p1 在 p2 左边
      p2[2] <= p1[0] || // p1 在 p2 右边
      p1[3] <= p2[1] || // p1 在 p2 上边
      // p1 在 p2 下边
      p2[3] <= p1[1]
    )
  }

  /**
   * 容器等分尺寸
   * @param {*} target 容器 HTML
   * @param {*} column 列数
   * @param {*} row 行数
   * @param {*} gap 间隔
   * @returns
   */
  const useBoxSize = (
    target: Ref<HTMLElement | undefined>,
    column: number,
    row: number,
    gap: number
  ) => {
    const { width, height } = useElementSize(target)
    return computed(() => ({
      width: (width.value - (column - 1) * gap) / column,
      height: (height.value - (row - 1) * gap) / row
    }))
  }

  /**
   * 根据数据生成 Gird 行数和列数
   * @param {*} list 数据源
   * @param {*} minColumn 最小列数
   * @param {*} minRow 最小行数
   * @returns
   */
  const useBoxGrid = (list: Ref<DragItemData[]>, minColumn: number, minRow: number) => {
    const columnCount = ref(minColumn)
    const rowCount = ref(minRow)

    const watcher = watch(
      () => list,
      (val) => {
        if (Array.isArray(val)) {
          const x: number[] = [],
            y: number[] = []
          val.forEach((item) => {
            x.push(item.x + item.column)
            y.push(item.y + item.row)
          })
          columnCount.value = Math.max(...x, minColumn, columnCount.value)
          rowCount.value = Math.max(...y, minRow, rowCount.value)
        }
      },
      { immediate: true }
    )

    onUnmounted(() => {
      watcher()
    })

    return {
      columnCount,
      rowCount
    }
  }

  /**
   * 获取元素位置信息
   * @param {*} width 格子宽
   * @param {*} height 格子高
   * @param {*} x x 坐标
   * @param {*} y y 坐标
   * @param {*} gap 间隔
   * @param {*} column 元素占列数
   * @param {*} row 元素占行数
   * @returns
   */
  const getItemSizeStyle = (
    width: number,
    height: number,
    x: number,
    y: number,
    gap: number,
    column: number,
    row: number
  ) => {
    const transformY = height * y + y * gap
    const transformX = width * x + x * gap
    return {
      width: `${width * column + (column - 1) * gap}px`,
      height: `${height * row + (row - 1) * gap}px`,
      transform: `translate(${transformX}px,${transformY}px)`
    }
  }

  /**
   * 向上取整
   * @param {*} num
   * @param {*} min 超过多少取整
   */
  const ceil = (num: number, min: number = 0.2) =>
    num > 1 && num % 1 > min ? Math.ceil(num) : parseInt(num.toString())

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

  return {
    sourceObj,
    targetObj,
    pluginList,
    insertUserPlugin,
    containerList,
    Modeldata,
    indexMap,
    insertIndexMap,
    getDragDataIndex,
    rowCount,
    columnCount,
    gap,
    useBoxSize,
    dragData,
    useBoxGrid,
    booleanWithin,
    booleanIntersects,
    ceil,
    getItemSizeStyle
  }
})
