import { createRouter, createWebHistory } from 'vue-router'

import LandingView from '@/views/LandingView.vue'
import AnalyticsView from '@/views/AnalyticsView.vue'
import DashboardView from '@/views/DashboardView.vue'
import KanbanView from '@/views/KanbanView.vue'
import LoginView from '@/views/LoginView.vue'
import PerfilView from '@/views/PerfilView.vue'
import RequestsView from '@/views/RequestsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView,
    },
    {
      path: '/analytics/',
      name: 'analytics',
      component: AnalyticsView,
    },
    {
      path: '/dashboard/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/kanban/',
      name: 'kanban',
      component: KanbanView,
    },
    {
      path: '/login/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/perfil/',
      name: 'perfil',
      component: PerfilView,
    },
    {
      path: '/requests/',
      name: 'requests',
      component: RequestsView,
    },
  ],
})

export default router
