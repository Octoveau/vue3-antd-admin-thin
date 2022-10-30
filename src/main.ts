import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as antIcons from '@ant-design/icons-vue'
import './config'

const app = createApp(App)

app.use(router).mount('#app')
