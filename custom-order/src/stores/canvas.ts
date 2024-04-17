import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCanvas = defineStore('canvas', () => {
  /**
   * 绘制canvas的函数
   */
  const setCanvas = (ref: HTMLCanvasElement) => {
    const ctx = ref.getContext('2d')
    if (ctx) {
      ctx.fillStyle = 'green'
      ctx.fillRect(0, 0, 150, 100)
    }
  }
  let tabIndex = 2
  /** 标签页名 */
  const editableTabsValue = ref('2')
  const activeTabsValue = ref('2')
  /** 标签页数据 */
  const editableTabs = ref([
    {
      title: 'Tab 1',
      name: '1',
      content: {
        row: 12,
        column: 12,
        gap: 2,
        width: 375,
        height: 600
      }
    },
    {
      title: 'Tab 2',
      name: '2',
      content: {
        row: 6,
        column: 6,
        gap: 2,
        width: 200,
        height: 200
      }
    }
  ])
  /** 新增标签页 */
  const addTab = (props: {
    title: string
    row: number
    column: number
    gap: number
    width: number
    height: number
  }) => {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
      title: props.title,
      name: newTabName,
      content: {
        row: +props.row,
        column: +props.column,
        gap: +props.gap,
        width: +props.width,
        height: +props.height
      }
    })
    editableTabsValue.value = newTabName
  }
  /** 删除标签页 */
  const removeTab = (targetName: string) => {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
  /** 画布数据 */
  return { setCanvas, editableTabsValue, activeTabsValue, editableTabs, addTab, removeTab }
})
