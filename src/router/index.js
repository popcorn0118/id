import Vue from 'vue'
import Router from 'vue-router'
import Home from '@V/Home'
import Login from '@V/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 預設頁面
      path: '*',
      redirect: '/Login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        // requiresAuth: true //需要驗證(用在登入)
      }
    }
  ]
})
