import Vue from 'vue'
import Router from 'vue-router'
import {demosRouter} from "../pages/demos/demosRouter";
import {threeRouter} from '../pages/three/threeRouter';

Vue.use(Router);

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
    ...demosRouter,
    ...threeRouter
  ]
})
