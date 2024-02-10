// import './assets/main.css'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import TextPluginVue from './components/plugin/TextPlugin.vue'
import ButtonPluginVue from './components/plugin/ButtonPlugin.vue'
import ImagePluginVue from './components/plugin/ImagePlugin.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
//注册el+ 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//注册插件
app
  .component('TextPlugin', TextPluginVue)
  .component('ButtonPlugin', ButtonPluginVue)
  .component('ImagePlugin', ImagePluginVue)

app.mount('#app')
