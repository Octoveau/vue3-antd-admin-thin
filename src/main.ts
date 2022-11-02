import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './config'
import * as antIcons from '@ant-design/icons-vue'

const app = createApp(App)
// 注册组件
Object.keys(antIcons).forEach(key => {
  app.component(key, antIcons[key as keyof typeof antIcons])
})
// 添加到全局
app.config.globalProperties.$antIcons = antIcons

app.use(router).mount('#app')
