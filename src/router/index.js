import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/productos',
      name: 'Productos',
      component: ()=> import('@/views/Productos.vue'),
      props: true
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: ()=> import('@/views/Contacto.vue'),
    },
  ]
})

export default router