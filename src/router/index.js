import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/pages/home')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/home')
    },
    {
      path: '/i18nDemo',
      name: 'I18nDemo',
      component: () => import('@/pages/i18nDemo')
    },
    {
      path: '/vuexDemo',
      name: 'VuexDemo',
      component: () => import('@/pages/vuexDemo')
    },
    {
      path: '/meshGrid',
      name: 'meshGrid',
      component: () => import('@/pages/three/meshGrid')
    }
  ]
})
