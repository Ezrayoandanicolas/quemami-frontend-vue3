// import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter } from 'vue-router'
import store from '@/store'
// import { VueCookieNext } from 'vue-cookie-next'

import Login from './components/auth/Login.vue'
import Logout from './components/auth/Logout.vue'
import Dashboard from './components/admin/dashboard/MasterDashboard.vue'
import ManageProduct from './components/admin/product/MasterProduct.vue'
import ManageUsers from './components/admin/users/MasterUser.vue'
import ManageSettings from './components/admin/setting/MasterSetting.vue'
import MasterMenu from './components/menu/Master.vue'
import AboutMenu from './components/menu/About.vue'
import MenuList from './components/menu/MenuList.vue'

// createApp.use(VueRouter);

const routes = [
    {
      path: '/',
      name: 'MasterMenu',
      component: MasterMenu,
      meta: {
        title: 'Quemami Apps',
        middleware: false,
        navigation: 'guest',
        enterAnimate : 'animate__animated animate__fadeIn animate__faster',
        leaveAnimate : 'animate__animated animate__fadeOut animate__faster',
      }
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: Login,
      meta: {
        title: 'Login Page | Quemami',
        middleware: false,
        navigation: 'guest',
        enterAnimate : 'animate__animated animate__fadeIn animate__faster',
        leaveAnimate : 'animate__animated animate__fadeOut animate__faster',
      }
    },
    {
      path: '/about',
      name: 'AboutMenu',
      component: AboutMenu,
      meta: {
        title: 'About Page | Quemami',
        middleware: false,
        navigation: 'guest',
        enterAnimate : 'animate__animated animate__backInRight',
        leaveAnimate : 'animate__animated animate__backOutLeft',
      }
    },
    {
      path: '/menu/:search',
      name: 'MenuList',
      component: MenuList,
      meta: {
        title: 'Menu Quemami',
        middleware: false,
        navigation: 'guest',
        enterAnimate : 'animate__animated animate__fadeIn animate__faster',
        leaveAnimate : 'animate__animated animate__fadeOut animate__faster',
      }
    },
    {
      path: '/logout',
      name: 'LogoutPage',
      component: Logout,
      meta: {
        title: 'Logout Page | Quemami',
        middleware: true,
        navigation: 'auth',
        enterAnimate : 'animate__animated animate__fadeIn animate__faster',
        leaveAnimate : 'animate__animated animate__fadeOut animate__faster',
      }
    },
    {
      path: '/dashboard',
      name: 'DashboardPage',
      component: Dashboard,
      meta: {
        title: 'Dashboard Page | Quemami',
        middleware: true,
        navigation: 'auth',
        enterAnimate : 'animate__animated animate__fadeIn animate__faster',
        leaveAnimate : 'animate__animated animate__fadeOut animate__faster',
      }
    },
    {
      path: '/manage-product',
      name: 'ManageProductPage',
      component: ManageProduct,
      meta: {
        title: 'Manage Product | Quemami',
        middleware: true,
        navigation: 'auth',
        enterAnimate : 'animate__animated animate__fadeIn animate__faster',
        leaveAnimate : 'animate__animated animate__fadeOut animate__faster',
      }
    },
    {
      path: '/users/:search',
      name: 'ManageUsersPage',
      component: ManageUsers,
      meta: {
        title: 'Manage Users | Quemami',
        middleware: true,
        navigation: 'auth',
        enterAnimate : 'animate__animated animate__fadeIn animate__faster',
        leaveAnimate : 'animate__animated animate__fadeOut animate__faster',
      }
    },
    {
      path: '/settings/:search',
      name: 'ManageSettingsPage',
      component: ManageSettings,
      meta: {
        title: 'Manage Settings | Quemami',
        middleware: true,
        navigation: 'auth',
        enterAnimate : 'animate__animated animate__fadeIn animate__faster',
        leaveAnimate : 'animate__animated animate__fadeOut animate__faster',
      }
    },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  if (to.meta.middleware) {
    // If UnAuthentication Redirect to Login
    store.dispatch('checkAuth').then(() => {
        // next();
      }).catch(() => {
        router.push({name: 'LoginPage'})
      })
  }
  // In Authentication Redirect to Next
  next();
})

export default router