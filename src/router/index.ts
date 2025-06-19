import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import PersonaDetalle from '../views/PersonaDetalle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/personaje/:id',
      component: PersonaDetalle, 
      props: true,
      name: 'personaje',
    },
  ],
})

export default router
