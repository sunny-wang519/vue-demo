import Vue from 'vue'
import VueRouter from 'vue-router'
// import index from '../layout/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    // component: index
  }
]

const router = new VueRouter({
  routes
})

export default router
