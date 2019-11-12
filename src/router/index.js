import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login';
import Store from '@/vuex';
import Index from '../views';
Vue.use(Router)
const routes = [
  {
    path: '/Login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '/home',
        component: () => import("../views/home"),
        meta: {
          title: '首页',
          requireAuth: true
        }
      },
      {
        path: "/Order/GetMerchantOrderList",
        component: () => import("../views/Order/GetMerchantOrderList"),
        meta: {
          title: '商户订单',
          requireAuth: true
        },
      },
      {
        path: "/Order/GetAdditionFeeList",
        component: () => import("../views/Order/GetAdditionFeeList"),
        meta: { title: '附加费' },
      },
      {
        path: "/Order/GetServiceChangeList",
        component: () => import("../views/Order/GetServiceChangeList"),
        meta: { title: '补加单' },

      },
      {
        path: "/Order/GetDocumentCount",
        component: () => import("../views/Order/GetDocumentCount"),
        meta: { title: '退款单' },

      },
      {
        path: "/Order/GetFeedBackList",
        component: () => import("../views/Order/GetFeedBackList"),
        meta: { title: '问题单' },
      },
       {
        path: "/Master/MasterList",
        component: () => import("../views/Master/MasterList"),
        meta: { title: '师傅列表' },
      },
      {
        path: "/Master/Workteam",
        component: () => import("../views/Master/Workteam"),
        meta: { title: '团队管理' },
      },
      {
        path: "/Master/Wtdetail/:id",
        component: () => import("../views/Master/Wtdetail"),
        meta: { title: '团队管理详情' },
      },
      {
        path: "/Master/Addteam",
        component: () => import("../views/Master/Addteam"),
        meta: { title: '添加团队' },
      },
      {
        path: "/Merchantmanagement/PersonBase",
        component: () => import("../views/Merchantmanagement/PersonBase"),
        meta: { title: '资料管理' },
      },
      { path: "/Order", redirect: "/Order/GetMerchantOrderList" },
      { path: "", redirect: "/home" }
    ]
  },
];
const router = new Router
  ({
    mode: 'history',
    base: __dirname,
    routes: routes
  });
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (Store.state.user.userCtx.token) {
      next()
    } else {
      next({
        path: "/Login",
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }

});
export default router;
