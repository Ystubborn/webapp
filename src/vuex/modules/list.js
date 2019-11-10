/*
 * @Author: your name
 * @Date: 2019-11-10 17:20:38
 * @LastEditTime: 2019-11-10 20:18:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webapp/src/vuex/modules/list.js
 */
import Vue from 'vue';
import {Order} from "../../extends/services";
import stores from "../index";
import Vuex from 'vuex';
Vue.use(Vuex);
const store = {}
const mutations = {
    setInfo(store, payload) {
        store.state = payload.info
    }
}
const actions = {
    /*-订单-*/
    GetMerchantOrderList(action, payload) {
        Order('GetMerchantOrderList','GET',payload).then(res => {
           action.commit({ type: "setInfo", info: res.data.data })
           console.log(stores.state.user.userCtx.merchantID)
        })
    }
}
export default {
    namespaced: true,
    store,
    mutations,
    actions
}