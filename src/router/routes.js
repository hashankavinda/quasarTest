
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/inbox', component: () => import('pages/FirstApp.vue') },
      { path: '/starred', component: () => import('pages/Starred.vue') },
      { path: '/help', component: () => import('pages/Help.vue') },
      { path: '/draft', component: () => import('pages/Draft.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
