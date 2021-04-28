import Vue from 'vue'
import VueRouter from 'vue-router'

//實習生端
import Home from '../views/Home.vue' //找實習
import Intern from '../views/Intern.vue' //實習內容頁面
import Save from '../views/Save.vue'//收藏

//登入註冊
import Login from '../views/Login.vue' //實習生登入
import Login_business from '../views/Login_business'//企業登入
import Register from '../views/Register.vue' //實習生註冊
import Register_business from '../views/Register_business.vue'//企業註冊

//企業端
import Finder from '../views/Finder.vue' //找實習生
import Profile from '../views/Profile.vue' //實習生內容頁面
import Post from '../views/Post.vue'//發文頁面
import MyPosts from '../views/MyPosts.vue'//我的文章

//履歷
import Resume from '../views/Resume.vue' //履歷模板
import Mailbox from '../views/Mailbox.vue' //履歷信箱
import InternMails from '../views/InternMails.vue' //立即應徵



Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/intern/:post_id',
  name: 'Intern',
  component: Intern,
},
{
  path: '/login',
  name: 'Log in',
  component: Login
},
{
  path: '/login_business',
  name: 'Log in_business',
  component: Login_business
},
{
  path: '/register',
  name: 'Register',
  component: Register
},
{
  path: '/register_business',
  name: 'Register_business',
  component: Register_business
},
{
  path: '/finder',
  name: 'Finder',
  component: Finder
},
{
  path: '/save',
  name: 'Save',
  component: Save
},
{
  path: '/profile/:resume_id',
  name: 'Profile',
  component: Profile
},
{
  path: '/resume',
  name: 'Resume',
  component: Resume
},
{
  path: '/post',
  name: 'Post',
  component: Post
},
{
  path: '/myposts',
  name: 'MyPosts',
  component: MyPosts
},
{
  path: '/mailbox',
  name: 'Mailbox',
  component: Mailbox
},
{
  path: '/intern_mails',
  name: 'InternMails',
  component: InternMails
}
]

const router = new VueRouter({
  routes
})

export default router