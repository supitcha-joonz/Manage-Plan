import { createRouter, createWebHistory } from 'vue-router';
import Routes from './Routes';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/:pathMatch(.*)*',
    //   // component: () => import('@/views/maintenancePage/Error404Page.vue')
    //   component: () => import('@/views/loginPage/index.vue')
    // },
    Routes
  ]
});

// router.beforeEach(async (to, from, next) => {
//   const ls = localStorage.getItem('AccessToken');
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!ls) next({ name: 'LoginPage' });
//     else next();
//   } else {
//     // NOTE เมื่อไม่ Require
//     if (to.name === 'LoginPage' && ls) next({ name: 'homePage' });
//     else next();
//   }
// });
