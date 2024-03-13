import { defineStore, type StateTree } from 'pinia'
import type { A } from 'vitest/dist/reporters-1evA5lom.js'
import { ref } from 'vue'
type TextProps = {
  content: string
}
type ImageProps = {
  url: string
  alt: string
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
      super('text', {})
      this.props = props
    }
    props: TextProps = {
      content: '默认文本'
    }
    // 文本特定的方法和属性
    update = (props: TextProps) => {
      // 执行更新文本内容的逻辑
      materialList.value = [...materialList.value] //用于触发vue响应式
      this.props = props
      console.log('update', materialList.value[currentMaterialIndex.value].props)
    }
  }

  class ImageMaterial extends Material {
    constructor(props: ImageProps) {
      super('image', {})
      this.props = props
    }
    // 图片特定的方法和属性
    props: ImageProps = {
      url: '',
      alt: ''
    }
    update = (props: ImageProps) => {
      // 执行更新文本内容的逻辑
      materialList.value = [...materialList.value] //用于触发vue响应式
      this.props = props
      console.log('update', materialList.value[currentMaterialIndex.value].props)
    }
  }

  class ButtonMaterial extends Material {
    constructor(props: Record<string, any>) {
      super('button', props)
    }

    // 按钮特定的方法和属性
  }

  /** 已创建的物料队列 */
  const materialList = ref<Material[]>([])
  /** 当前选中的物料 */
  let currentMaterialIndex = ref<number>(1)
  /** 创建物料类实例
   * @param layout 布局信息
   * @param props 属性
   */
  const createInstance = (layout: any, props: any) => {
    switch (layout.key) {
      case 'TextPlugin':
        return new TextMaterial({ layout, ...props })
      case 'ImagePlugin':
        return new ImageMaterial({ layout, ...props })
      default:
        throw new Error('没有发现该插件')
    }
    // if (layout.key === 'TextPlugin') {
    //   const material = new TextMaterial({ layout, ...props })
    //   return material
    // } else return new TextMaterial({ content: '默认内容' })
  }
  // const setMaterial = (index: number, value: string) => {
  //   materialList.value[index].props.content = value
  //   console.log('update', materialList)
  // }
  //不能导出类，会被包装为代理对象（函数）而不是class
  return { createInstance, materialList, currentMaterialIndex }
})
