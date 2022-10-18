import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layouts/index.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'DashBoard',
        component: () => import('@/views/DashBoard/index.vue')
      },
      {
        path: '/apilist',
        name: 'ApiList',
        component: () => import('@/views/ApiList/index.vue'),
        meta: {
          title: 'ApiList'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
