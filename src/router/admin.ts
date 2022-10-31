import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/login',
    component: () => import('@/layouts/index.vue'),
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
];
export default routes;
