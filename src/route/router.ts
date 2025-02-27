import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/home/HomeView.vue';
import About from '../components/home/About.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    }
  ]
})

export default router;