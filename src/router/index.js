import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../views/login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
    children: [
      {
        path: '/',
        name: 'loginbox',
        component: () => import('../components/login/loginbox.vue'),
      },
      {
        path: 'forgetpassword',
        name: 'forgetpassword',
        component: () => import('../components/login/forgetpassword.vue'),
      },
      {
        path: 'enterverifycode',
        name: 'enterverifycode',
        component: () => import('../components/login/enterverifycode.vue'),
      },
      {
        path: 'loginresetpassword',
        name: 'loginresetpassword',
        component: () => import('../components/login/loginresetpassword.vue'),
      },
    ],
  },
  {
    path: '/voucherstoresearch',
    name: 'voucherstoresearch',
    component: () => import('../views/voucherstoresearch.vue'),
  },
  {
    path: '/voucherstorelist',
    name: 'voucherstorelist',
    component: () => import('../views/voucherstorelist.vue'),
  },
  {
    path: '/voucherstorelistdetail',
    name: 'voucherstorelistdetail',
    component: () => import('../views/voucherstorelistdetail.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
