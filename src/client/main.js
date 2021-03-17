import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
// import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import bootstrap_css from './assets/bootstrap.min.css'
// import bootstrap_js from './assets/bootstrap.min.js'
//import popper from 'popper.js'
//import $ from 'jquery'

import bootstrap_vue_css from '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from '../../node_modules/bootstrap-vue/dist/bootstrap-vue.js'
Vue.use(BootstrapVue)

//window.$ = $


Vue.config.productionTip = false

new Vue({
  router,
  bootstrap_css,
  bootstrap_vue_css,
  render: h => h(App)
}).$mount('#app')
