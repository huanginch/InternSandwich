import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Search from '../views/search.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import Intern from '../views/intern.vue'
import Resume from '../views/resume.vue'
import Enterprise from '../views/enterprise.vue'


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