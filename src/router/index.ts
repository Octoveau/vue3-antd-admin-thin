import { createRouter, createWebHistory } from 'vue-router'
import adminRouters from './admin'
import authRouters from './auth'
const routes:any=[...adminRouters,...authRouters]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
