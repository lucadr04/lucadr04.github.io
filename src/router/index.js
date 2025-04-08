import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
