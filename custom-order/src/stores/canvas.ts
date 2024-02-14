import { defineStore } from 'pinia'

export const useCanvas = defineStore('canvas', () => {
  /**
   * 绘制canvas的函数
   */
  const setCanvas = (ref: HTMLCanvasElement) => {
    const ctx = ref.getContext('2d')
    if (ctx) {
      if (ctx) {
        ctx.fillStyle = 'green'
        ctx.fillRect(0, 0, 150, 100)
      }
    }
  }
  return { setCanvas }
})
