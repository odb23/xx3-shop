import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ProductOverviewView from '@/views/ProductOverviewView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import OrdersView from '@/views/OrdersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: LoginView
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: RegisterView
    },
    {
      path: "/product/product-id",
      name: "product-overview",
      component: ProductOverviewView
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView
    },
    {
      path: "/order-history",
      name: "orders",
      component: OrdersView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
