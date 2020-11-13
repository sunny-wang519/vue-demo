import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const index = r => require.ensure([], () => r(require('../layout')), 'index');
const login = r => require.ensure([], () => r(require('../views/login')), 'login');
const home = r =>require.ensure([],() => r(require('../views/home')),'home');
const map = r => require.ensure([], () => r(require('../views/map')), 'map');
const demo = r => require.ensure([], () => r(require('../views/demo')), 'demo');
const demo1 = r =>require.ensure([],() => r(require('../views/demo1/index')),'index1')
const calendar = r => require.ensure([], () => r(require('../views/demo1/calendar')), 'calendar');
const transfer = r => require.ensure([], () => r(require('../views/demo1/transfer')), 'transfer');
const carousel = r => require.ensure([], () => r(require('../views/demo1/carousel')), 'carousel');


const routes = [
  { path: '/', redirect: '/index'},
  {
    path: '/login',
    name:'login',
    component: login,
  },
  {
    path:'/index',
    name:'index',
    component:index,
    children:[
      {
        path:'/home',
        name:'home',
        component:home
      },
      {
        path: '/map',
        name:'map',
        component: map
      },
      {
        path: '/demo',
        name:'demo',
        component: demo
      },
      {
        path:'/demo1',
        name:'demo1',
        component: demo1,
        children:[
          {
            path:'/demo1/calendar',
            name:'calendar',
            component:calendar
          },
          {
            path:'/demo1/transfer',
            name:'transfer',
            component:transfer
          },
          {
            path:'/demo1/carousel',
            name:'carousel',
            component:carousel
          }
        ]
      }
    ]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
