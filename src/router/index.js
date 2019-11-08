import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login';
import Home from '../components/common/Home.vue'
Vue.use(Router)
const routes = [
  {
    path: '',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/Ho',
    component: Home,
    meta: { title: '首页' },
    children: [
      {
        path: 'homepage',
        component: () => import('../components/common/HomePage/index.vue'),
        meta: { title: '首页页面' }
      },
      //订单详情
      {
        path: 'customerorder',
        component: () => import('../components/common/CustomerOrder/index.vue'),
        meta: { title: '商户订单' },
        children:[
          {
            path: '',
            component: () => import('../components/common/CustomerOrder/AllOrders.vue'),
            meta: { title: '全部订单' }
          },
          {
            path: 'allorders',
            component: () => import('../components/common/CustomerOrder/AllOrders.vue'),
            meta: { title: '全部订单' }
          }
        ]
      },
      {
        path: 'surchargelist',
        component: () => import('../components/common/SurchargeList/index.vue'),
        meta: { title: '附加费单' },
      },
      {
        path: 'supplementprice',
        component: () => import('../components/common/SupplementPrice/index.vue'),
        meta: { title: '补价单' },
      },
      {
        path: 'refundslip',
        component: () => import('../components/common/RefundSlip/index.vue'),
        meta: { title: '退款单' },
      },
      {
        path: 'questionsheet',
        component: () => import('../components/common/QuestionSheet/index.vue'),
        meta: { title: '问题单' },
      },
      //资金管理（钱包）
      {
        path: 'wallet',
        component: () => import('../components/common/Wallet/index.vue'),
        meta: { title: '我的钱包' },
      },
      {
        path: 'expenditure',
        component: () => import('../components/common/Expenditure/index.vue'),
        meta: { title: '收入' },
      },
      {
        path: 'income',
        component: () => import('../components/common/Income/index.vue'),
        meta: { title: '支出' },
      },
    ]
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: '登录'
    },
  },


];
const router = new Router
  ({
    mode: 'history',
    base: __dirname,
    routes: routes
  });
router.beforeEach((to, from, next) => {
  next()
});
export default router;
