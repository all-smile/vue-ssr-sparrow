import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home/index.vue'
import My from '@/pages/My/index.vue'

Vue.use(Router)

// 每次用户请求都创建一个router实例，多个用户请求时不会相互污染
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      // 懒加载 () => import('')
      // { path: '/', component: () => import('@/pages/Home/index.vue') },
      // { path: '/my', component: () => import('@pages/My/index.vue') },
      { path: '/home', name: 'Home', component: Home },
      { path: '/my', name: 'My', component: My }
    ]
  })
}