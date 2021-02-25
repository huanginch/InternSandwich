// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './client/router'
import bootstrap from './client/assets/bootstrap.min.css'


Vue.config.productionTip = false

new Vue({
  router,
  bootstrap,
  render: h => h(App)
}).$mount('#app')
