export const demosRouter = [
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
    component: () => import('@/pages/demos/dailyChallenges/index')
  },
  {
    path: '/comments',
    component: () => import('@/pages/demos/comments')
  },
  {
    path: '/editableDiv',
    component: () => import('@/pages/demos/editableDiv')
  },
  {
    path: '/progress',
    component: () => import('@/pages/demos/progress')
  },
];
