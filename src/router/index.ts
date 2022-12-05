import { createRouter, createWebHistory } from 'vue-router'
import adminRouters from './admin'
import authRouters from './auth'
const routes:any=[...adminRouters,...authRouters]
const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/vue3-template' : '/'),
  routes,
})

export default router
