import './assets/main.css'
import 'element-plus/dist/index.css'

import { createApp, h, defineComponent } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import TextPluginVue from './components/plugin/TextPlugin.vue'
import ButtonPluginVue from './components/plugin/ButtonPlugin.vue'
import ImagePluginVue from './components/plugin/ImagePlugin.vue'
import CarouselPluginVue from './components/plugin/CarouselPlugin.vue'
import WrapperPluginVue from './components/plugin/WrapperPlugin.vue'
import DragModelVue from './components/plugin/DragModel.vue'
import PreviewLayout from './components/grid/PreviewLayout.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
//注册el+ 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//注册插件
const createPluginHook = (type?: string) => {
  return defineComponent(
    (props: { data: DragItemData }) => {
      console.log('testData', props.data)
      return () =>
        h(
          'div',
          {
            style: {
              width: '100%',
              height: '100%',
              color: '#fff',
              backgroundColor: '#707eb1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '26px',
              fontWeight: '600'
            }
          },
          `${(type || '默认') + props.data?.column}x${props.data?.row}`
        )
    },
    {
      props: ['data']
    }
  )
}
app
  .component('TextPlugin', TextPluginVue)
  .component('ButtonPlugin', ButtonPluginVue)
  .component('ImagePlugin', ImagePluginVue)
  .component('CarouselPlugin', CarouselPluginVue)
  .component('WrapperPlugin', WrapperPluginVue)
  .component('DragModel', DragModelVue)
  .component('demo-component', createPluginHook())
  .component('userDesignPlugin', createPluginHook())
app.mount('#app')
