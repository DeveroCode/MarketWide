import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '../helpers/authGuard'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/LoginView.vue')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/RegisterView.vue')
        }
      ]
    },
    {
      path: '/market-wide',
      name: 'home-market',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true },
      props: true,
      children: [
        {
          path: 'seller',
          name: 'seller',
          component: () => import('../components/Vendedor.vue'),
        },
        {
          path: 'buyer',
          name: 'buyer',
          component: () => import('../components/Comprador.vue')
        }
      ]
    }
  ]
})


// Validar el tipo de usuario
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (isAuthenticated()) {
      if (to.name === 'dashboard') {
        // Si el usuario autenticado intenta acceder al dashboard,
        // redirige a la vista "seller" en su lugar.
        next({ name: 'seller' });
      } else {
        // En otras rutas autenticadas, permite el acceso.
        next();
      }
    } else {
      // Si no está autenticado, redirige a la página de inicio de sesión.
      next({ name: 'login' });
    }
  } else {
    // Para rutas que no requieren autenticación, permite el acceso.
    next();
  }
});

export default router
