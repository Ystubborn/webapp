import axios from 'axios';
import router from '../router/index';
import { Loading, Message } from 'element-ui';
axios.defaults.timeout = 300000;
axios.defaults.withCredentials = true;
let loadinginstace = null;
function CloseLoading() {
  if (loadinginstace) {
    loadinginstace.close();
    loadinginstace = null;
  }
}
axios.interceptors.request.use(config => {
  if (!loadinginstace && config.data.isLoading !== false) {
    loadinginstace = Loading.service({ fullscreen: true });
  }
  return config;
}, error => {
  CloseLoading();
  Message.error({
    message: '加载超时'
  });
  return Promise.reject(error);
});
axios.interceptors.response.use(data => {
  CloseLoading();
  // if (data.data.code == -1) {
  //   Message.warning({ message: data.data.msg })
  //   return Promise.reject(data);
  // } else if (!data.data.msg) {
  //   Message.success({ message: data.data.msg })
  // }
  return data;
}, error => {
  CloseLoading();
  // console.log(error)
  // if (error.response.status === 401) {
  //   router.replace({ path: '/login' })
  //   Message.error({ message: '身份认证过期，请重新登录' })
  //   return;
  // }
  // if (error.response.status === 403) {
  //   Message.warning({ message: '您没有此项操作的权限' })
  //   return
  // }
  // Message.error({ message: error.response.data.ExceptionMessage })
});
export default axios;