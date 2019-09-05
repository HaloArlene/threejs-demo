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
      path: '/i18nDemo',
      component: () => import('@/pages/demos/i18nDemo')
    },
    {
      path: '/vuexDemo',
      component: () => import('@/pages/demos/vuexDemo')
    },
    {
      path: '/meshGrid',
      component: () => import('@/pages/three/meshGrid')
    },
    {
      path: '/animationDemo',
      component: () => import('@/pages/three/animationDemo')
    },
    {
      path: '/cubeDemo',
      component: () => import('@/pages/three/cubeDemo')
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
      path: '/light1',
      component: () => import('@/pages/three/light1')
    },
    {
      path: '/texture',
      component: () => import('@/pages/three/texture')
    },
    {
      path: '/geometries',
      component: () => import('@/pages/three/geometries')
    },
    {
      path: '/material',
      component: () => import('@/pages/three/material')
    }
  ]
})
