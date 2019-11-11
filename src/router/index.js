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
        path: "/Merchantmanagement/PersonBase",
        component: () => import("../views/Merchantmanagement/PersonBase"),
        meta: { title: '资料管理' },
      },
      { path: "/Order", redirect: "/Order/GetMerchantOrderList" },
      { path: "", redirect: "/home" }
      //   //订单详情
      //   {
      //     path: 'customerorder',
      //     component: () => import('../components/common/CustomerOrder/index.vue'),
      //     meta: { title: '商户订单' },
      //     children:[
      //       {
      //         path: '',
      //         component: () => import('../components/common/CustomerOrder/AllOrders.vue'),
      //         meta: { title: '全部订单' }
      //       },
      //       {
      //         path: 'allorders',
      //         component: () => import('../components/common/CustomerOrder/AllOrders.vue'),
      //         meta: { title: '全部订单' }
      //       }
      //     ]
      //   },
      //   {
      //     path: 'surchargelist',
      //     component: () => import('../components/common/SurchargeList/index.vue'),
      //     meta: { title: '附加费单' },
      //   },
      //   {
      //     path: 'supplementprice',
      //     component: () => import('../components/common/SupplementPrice/index.vue'),
      //     meta: { title: '补价单' },
      //   },
      //   {
      //     path: 'refundslip',
      //     component: () => import('../components/common/RefundSlip/index.vue'),
      //     meta: { title: '退款单' },
      //   },
      //   {
      //     path: 'questionsheet',
      //     component: () => import('../components/common/QuestionSheet/index.vue'),
      //     meta: { title: '问题单' },
      //   },
      //   //资金管理（钱包）
      //   {
      //     path: 'wallet',
      //     component: () => import('../components/common/Wallet/index.vue'),
      //     meta: { title: '我的钱包' },
      //   },
      //   {
      //     path: 'expenditure',
      //     component: () => import('../components/common/Expenditure/index.vue'),
      //     meta: { title: '收入' },
      //   },
      //   {
      //     path: 'income',
      //     component: () => import('../components/common/Income/index.vue'),
      //     meta: { title: '支出' },
      //   },
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
