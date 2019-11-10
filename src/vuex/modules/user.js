/*
 * @Author: your name
 * @Date: 2019-11-09 19:11:30
 * @LastEditTime: 2019-11-10 20:14:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webapp/src/vuex/modules/user.js
 */
import Vue from 'vue';
import { login } from "../../extends/services";
import router from "@/router";
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    userCtx:{},
}
const mutations = {
    setUserInfo(store, payload) {
        store.userCtx = payload.info
    }
}
const actions = {
    /*-登陆-*/
    login(action, payload) {
        login(payload).then(res => {
            if(res.data.statusCode=="1"){
                action.commit({ type:"setUserInfo", info: res.data.data })
                router.replace("/")
            }          
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}