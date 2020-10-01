// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(Mint)
Vue.config.productionTip = false

axios.defaults.withCredentials = true; // 跨域存取需打開

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    next({ path: '/login' })
    alert('需要驗證')
    //打驗證API
  } else {
    next()
  } 
})
