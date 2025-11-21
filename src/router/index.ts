import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home_view/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomeView,
    },
    {
      path: '/settings',
      name: 'SettingsPage',
      component: () => import('../views/settings_view/SettingsPage.vue'),
    },
  ],
})

export default router
