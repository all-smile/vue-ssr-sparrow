import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/a', component: () => import('@/pages/Home/index.vue') },
      // { path: '/my', component: () => import('@pages/My/index.vue') }
    ]
  })
}