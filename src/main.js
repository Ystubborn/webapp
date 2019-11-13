// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index';

import axios from 'axios';
// import axios from './extends/axios';
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Enum from './extends/Enum'
Vue.prototype.Enum = Enum
Vue.config.productionTip = false
Vue.use({
  install: (Vue) => {

  }
});
Vue.use(ElementUI);
// Vue.use(VueAxios, axios);
Vue.prototype.VueAxios = VueAxios
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
