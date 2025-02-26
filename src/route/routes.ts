import HomeView from '../components/home/HomeView.vue';
import { useCounterStore } from '../stores/counter.ts';
import About from '../components/home/About.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/counter',
    name: 'counter',
    component: useCounterStore
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  }
]

export default routes;