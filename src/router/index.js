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
  {
    path: '/shoplist',
    name: 'shoplist',
    component: () => import('../views/shoplist.vue'),
  },
  {
    path: '/shoptotalinfo',
    name: 'shoptotalinfo',
    component: () => import('../views/shoptotalinfo.vue'),
  },
  {
    path: '/buildcharacter',
    name: 'buildcharacter',
    component: () => import('../views/buildcharacter.vue'),
  },
  {
    path: '/adminuser',
    name: 'adminuser',
    component: () => import('../views/adminuser.vue'),
  },
  {
    path: '/vouchersearch',
    name: 'storelist',
    component: () => import('../views/vouchersearch.vue'),
  },
  {
    path: '/voucherlist',
    name: 'voucherlist',
    component: () => import('../views/voucherlist.vue'),
  },
  {
    path: '/logsearch',
    name: 'logsearch',
    component: () => import('../views/logsearch.vue'),
    children: [
      {
        path: '/',
        name: 'loginbox',
        component: () => import('../components/log/loginlog.vue'),
      },
      {
        path: 'authoritylog',
        name: 'authoritylog',
        component: () => import('../components/log/authoritylog.vue'),
      },
      {
        path: 'changelog',
        name: 'changelog',
        component: () => import('../components/log/changelog.vue'),
      },
    ],
  },
  {
    path: '/resetpassword',
    name: 'resetpassword',
    component: () => import('../views/resetpassword.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
