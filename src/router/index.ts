import MainLayout from '@/layouts/MainLayout.vue'
import MenuView from '@/modules/menu/components/MenuView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          component: MenuView,
        },
      ],
    },
  ],
})

export default router
