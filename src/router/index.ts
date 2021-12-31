import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Catalog from '../views/Catalog.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/catalog'
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
