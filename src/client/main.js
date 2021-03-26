import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import store from './store';
//import VueRouter from 'vue-router'
// import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import axios from './js/axios.js';
import bootstrap_css from './assets/bootstrap.min.css'
// import bootstrap_js from './assets/bootstrap.min.js'
//import popper from 'popper.js'
//import $ from 'jquery'

import bootstrap_vue_css from '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from '../../node_modules/bootstrap-vue/dist/bootstrap-vue.js'
Vue.use(BootstrapVue)
// Vue.use(VueRouter)
// //window.$ = $


// const router = new VueRouter({
//   routes,
//   mode: 'history'
// });
// set auth header
axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  bootstrap_css,
  bootstrap_vue_css,
  render: h => h(App)
}).$mount('#app')
