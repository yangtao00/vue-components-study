import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/nav',
    },
    {
      path: '/nav',
      name: 'nav',
      component: () => import('./views/nav.vue')
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/test.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('./views/form.vue')
    }
  ]
})
