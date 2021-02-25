import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import search from '../views/search.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: search 
  },
  {
    path: '/login',
    name: 'Log in',
    component: login 
  }
]

const router = new VueRouter({
  routes
})

export default router