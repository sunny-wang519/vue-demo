import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const index = r => require.ensure([], () => r(require('../layout')), 'index');
const login = r => require.ensure([], () => r(require('../views/login')), 'login');
const home = r => require.ensure([], () => r(require('../views/home')), 'home');
const map = r => require.ensure([], () => r(require('../views/map')), 'map');
const demo = r => require.ensure([], () => r(require('../views/demo')), 'demo');
const other = r => require.ensure([], () => r(require('../views/other/index')), 'other')
const calendar = r => require.ensure([], () => r(require('../views/other/calendar')), 'calendar');
const transfer = r => require.ensure([], () => r(require('../views/other/transfer')), 'transfer');
const carousel = r => require.ensure([], () => r(require('../views/other/carousel')), 'carousel');
const formDemo = r => require.ensure([], () => r(require('../views/form_demo')))

const routes = [
  { path: '/', redirect: '/index' },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/index',
    name: 'index',
    redirect: '/home',
    component: index,
    children: [
      {
        path: '/home',
        name: 'home',
        component: home
      },
      {
        path: '/map',
        name: 'map',
        component: map
      },
      {
        path: '/demo',
        name: 'demo',
        component: demo
      },
      {
        path: '/other',
        name: 'other',
        component: other,
        children: [
          {
            path: '/other/calendar',
            name: 'calendar',
            component: calendar
          },
          {
            path: '/other/transfer',
            name: 'transfer',
            component: transfer
          },
          {
            path: '/other/carousel',
            name: 'carousel',
            component: carousel
          }
        ]
      }, 
      {
        path: '/form_demo',
        name: 'formDemo',
        component: formDemo
      },
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
