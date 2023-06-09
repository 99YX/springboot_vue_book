import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorld from "@/components/HelloWorld.vue";
import User from '../views/user/User.vue'
import AddUser from "@/views/user/AddUser.vue";
import EditUser from "@/views/user/EditUser.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: HomeView,
    component: HomeView
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/adduser',
    name: 'AddUser',
    component: AddUser
  },
  {
    /*编辑用户路由*/
    path: '/editUser',
    name: 'editUser',
    component: EditUser
  },

]

const router = new VueRouter({
  routes
})

export default router
