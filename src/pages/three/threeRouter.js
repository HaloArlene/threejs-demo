export const threeRouter = [
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
];
