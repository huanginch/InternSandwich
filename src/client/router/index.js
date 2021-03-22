import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue' //找實習
import Intern from '../views/Intern.vue' //實習內容頁面

import Login from '../views/Login.vue' //登入
import Register from '../views/Register.vue' //註冊

import Finder from '../views/Finder.vue' //找實習生
import Profile from '../views/Profile.vue' //實習生內容頁面

import Resume from '../views/Resume.vue' //履歷模板
import Mailbox from '../views/Mailbox.vue' //履歷信箱




Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/intern',
  name: 'Intern',
  component: Intern
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
  path: '/finder',
  name: 'Finder',
  component: Finder
},
{
  path: '/profile',
  name: 'Profile',
  component: Profile
},
{
  path: '/resume',
  name: 'Resume',
  component: Resume
},
{
  path: '/mailbox',
  name: 'Mailbox',
  component: Mailbox
}
]

const router = new VueRouter({
  routes
})

export default router