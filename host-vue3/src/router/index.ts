import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView,
    },
    {
      name: 'page-with-vue',
      path: '/page-with-vue',
      component: () => import('../views/PageWithVue.vue'),
    },
    {
      name: 'page-with-react',
      path: '/page-with-react',
      component: () => import('../views/PageWithReact.vue'),
    },
  ],
});

export default router;
