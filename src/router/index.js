import { createRouter, createWebHistory } from 'vue-router'

import AnalyticsView from '@/views/AuthorizedViews/AnalyticsView.vue'
import DashboardView from '@/views/AuthorizedViews/DashboardView.vue'
import KanbanView from '@/views/AuthorizedViews/KanbanView.vue'
import PerfilView from '@/views/AuthorizedViews/PerfilView.vue'
import RequestsView from '@/views/AuthorizedViews/RequestsView.vue'
import LandingView from '@/views/UnauthorizedViews/LandingView.vue'
import LoginView from '@/views/UnauthorizedViews/LoginView.vue'

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
