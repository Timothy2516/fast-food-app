import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/loyaltyPoints',
    component: () => import ('../views/LoyaltyPoints.vue')
  },
  {
    path: '/home',
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/orderNow',
    component: () => import ('../views/OrderNow.vue')
  },
  {
    path: '/addToBag',
    component: () => import ('../views/AddToBag.vue')
  },
  {
    path: '/checkout',
    component: () => import ('../views/OrderSummary.vue')
  },
  {
    path: '/placeOrder',
    component: () => import ('../views/PlaceOrder.vue')
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
