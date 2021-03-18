import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Intern from '../views/Intern.vue'
import Resume from '../views/Resume.vue'
import Enterprise from '../views/Enterprise.vue'


Vue.use(VueRouter)

const routes = [{
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
  component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
},
{
  path: '/search',
  name: 'Search',
  component: Search
},
{
  path: '/login',
  name: 'Log in',
  component: Login
},
{
  path: '/register',
  name: 'Register',
  component: Register
},
{
  path: '/resume',
  name: 'Resume',
  component: Resume
},
{
  path: '/intern',
  name: 'Intern',
  component: Intern
},
{
  path: '/enterprise',
  name: 'Enterprise',
  component: Enterprise
}
]

const router = new VueRouter({
  routes
})

export default router