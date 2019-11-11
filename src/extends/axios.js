/*
 * @Author: your name
 * @Date: 2019-11-08 22:13:35
 * @LastEditTime: 2019-11-10 20:14:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webapp/webapp/src/extends/axios.js
 */
import axios from 'axios';
import router from '../router/index';
import store from "../vuex";
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
  // if (!loadinginstace && config.data.isLoading !== false) {
  //   loadinginstace = Loading.service({ fullscreen: true });
  // }
  let tokenID="";
  if(store.state.user.userCtx){
    tokenID=store.state.user.userCtx.token;
  }
  config.headers["X-Token"]=tokenID
  return config;
}, error => {
  console.log(error)
  CloseLoading();
  Message.error({
    message: '加载超时'
  });
  return Promise.reject(error);
});
axios.interceptors.response.use(data => {
  CloseLoading();
  if (data.data.statusCode == -1) {
    Message.warning({ message:data.data.message })
    return Promise.reject(data);
  } else if (data.data.statusCode ==1) {
    Message.success({ message:data.data.message})
  }
  return data;
}, error => {
  console.log(error)
  CloseLoading();
  if (error.status === 401) {
    router.replace({ path: '/login' })
    Message.error({ message: '身份认证过期，请重新登录' })
    return;
  }
  if (error.status === 403) {
    Message.warning({ message: '您没有此项操作的权限' })
    return
  }
    // Message.error({ message: error.data.message })
});
export default axios;

