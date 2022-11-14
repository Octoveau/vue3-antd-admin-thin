import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './config'

const app = createApp(App)
app.config.warnHandler = () => null;
app.use(router).mount('#app')
