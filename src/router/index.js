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
    },
    {
      path: '/animationDemo',
      name: 'animationDemo',
      component: () => import('@/pages/three/animationDemo')
    },
    {
      path: '/cubeDemo',
      name: 'cubeDemo',
      component: () => import('@/pages/three/cubeDemo')
    },
    {
      path: '/modelRender',
      name: 'modelRender',
      component: () => import('@/pages/three/modelRender')
    },
    {
      path: '/line',
      name: 'line',
      component: () => import('@/pages/three/line')
    }
  ]
})
