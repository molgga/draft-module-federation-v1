import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/page-with-vue',
      name: '/page-with-vue',
      component: () => import('../views/PageWithVue.vue'),
    },
  ],
});

export default router;
