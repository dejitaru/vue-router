import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const routes =
[
    {
      path: '/seccion1',
      component: () => import('@/components/Seccion1')
    },
    {
        path: '/seccion2',
        component: () => import('@/components/Seccion2')
    },
    {
        path: '/',
        component: () => import('@/components/Seccion1')
      },
  ]


const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;