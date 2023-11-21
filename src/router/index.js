import { createRouter, createWebHashHistory } from 'vue-router';
import TheHome from '../components/TheHome.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHome,
    },
  ],
});

export default router;
