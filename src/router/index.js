import { createRouter, createWebHashHistory } from 'vue-router';
import TheHome from '../components/TheHome.vue';
import TheCart from '../components/TheCart.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHome,
    },
    {
      path: '/cart',
      name: 'cart',
      component: TheCart,
    },
  ],
});

export default router;
