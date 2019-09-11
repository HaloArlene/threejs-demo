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
      component: () => import('@/pages/home')
    },
    {
      path: '/cube',
      component: () => import('@/pages/three/cube')
    },
    {
      path: '/modelRender',
      component: () => import('@/pages/three/modelRender')
    },
    {
      path: '/line',
      component: () => import('@/pages/three/line')
    },
    {
      path: '/meshGrid',
      component: () => import('@/pages/three/meshGrid')
    },
    {
      path: '/geometries',
      component: () => import('@/pages/three/geometries')
    },
    {
      path: '/material',
      component: () => import('@/pages/three/material')
    },
    {
      path: '/shader',
      component: () => import('@/pages/three/shader')
    },
    {
      path: '/animation',
      component: () => import('@/pages/three/animation')
    },
    {
      path: '/animation2',
      component: () => import('@/pages/three/animation2')
    },
    {
      path: '/light1',
      component: () => import('@/pages/three/light1')
    },
    {
      path: '/i18nDemo',
      component: () => import('@/pages/demos/i18nDemo')
    },
    {
      path: '/vuexDemo',
      component: () => import('@/pages/demos/vuexDemo')
    },
    {
      path: '/dailyChallenges',
      component: () => import('@/pages/demos/dailyChallenges/dailyChallenges')
    },
    {
      path: '/volution',
      component: () => import('@/pages/three/volution')
    }
  ]
})
