import { createRouter, createWebHistroy } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  histroy: createWebHistroy(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
