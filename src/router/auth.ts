import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> =[
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/login.vue'),
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('@/views/auth/logout.vue'),
  }
];
export default routes;
