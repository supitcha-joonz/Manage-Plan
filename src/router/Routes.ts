const Routes = {
  path: '/auth',
  component: () => import('@/layouts/blank/BlankLayout.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      name: 'LoginPage',
      path: '/login',
      component: () => import('@/views/loginPage/index.vue')
    },
    {
      name: 'homePage',
      path: '/home',
      component: () => import('@/views/homePage/index.vue')
    }
  ]
};

export default Routes;
