import { defineStore } from 'pinia'
import type { A } from 'vitest/dist/reporters-1evA5lom.js'
type TextProps = {
  content: string
}

export const useMaterialStore = defineStore('meterial', () => {
  class Material {
    type: string
    props: Record<string, any>
    constructor(type: string, props: Record<string, any>) {
      this.type = type
      this.props = props
    }

    // 其他通用方法
  }

  class TextMaterial extends Material {
    constructor(props: TextProps) {
      super('text', props)
      const { content = '默认内容' } = props
      this.content = content
    }
    // 文本特定的方法和属性
    content: string
    updateContent = (content: string) => {
      // 执行更新文本内容的逻辑
      this.content = content
    }
  }

  class ImageMaterial extends Material {
    constructor(props: Record<string, any>) {
      super('image', props)
    }

    // 图片特定的方法和属性
  }

  class ButtonMaterial extends Material {
    constructor(props: Record<string, any>) {
      super('button', props)
    }

    // 按钮特定的方法和属性
  }

  /** 已创建的物料队列 */
  const materialList: Material[] = []
  /** 当前选中的物料 */
  let currentMaterialIndex: number = -1
  /** 创建物料类实例
   * @param type 类型
   * @param props 属性
   */
  const createInstance = (type: string, props: any) => {
    if (type === 'text') {
      const material = new TextMaterial({ content: props?.content })
      return material
    } else return new TextMaterial({ content: '默认内容' })
  }
  //不能导出类，会被包装为代理对象（函数）而不是class
  return { createInstance, materialList, currentMaterialIndex }
})
