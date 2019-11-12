import Vue from 'vue';
import {Order,OrderProcess} from "../../extends/services";
import stores from "../index";
import Vuex from 'vuex';
Vue.use(Vuex);
const store = {
    GMOL:{},
    GAFL:{},
    GSCL:{},
    GFBL:{},
    GDC:{}
}
const mutations = {
    setGMeODInfo(store, payload) {
        store.GMeOD = payload.info
    },
    setGMaODInfo(store,payload){
        store.GMaOD=payload.info
    },
    setGFeBInfo(store,payload){
        store.GFeB=payload.info
    },
    setGSeCInfo(store, payload) {
        store.GSeC = payload.info
    },
}
const actions = {
    /*-详情-*/
    GetMerchantOrderDetail(action,payload){
        Order('GetMerchantOrderDetail','GET',payload).then(res =>{
            action.commit({ type: "setGMeODInfo", info: res.data.data })
        })
    },
   GetMasterOrderDetail(action,payload){
       Order('GetMasterOrderDetail','GET',payload).then(res => {
        action.commit({ type: "setGMaODInfo", info: res.data.data })
       })
   },
    GetFeedBackInfo(action,payload){
        OrderProcess('GetFeedBackInfo','GET',payload).then(res => {
            action.commit({ type: "setGFeBInfo", info: res.data.data })
        })
    },
  GetServiceChangeInfo(action,payload){
    OrderProcess('GetServiceChangeInfo','GET',payload).then(res => {
        action.commit({ type: "setGSeCInfo", info: res.data.data })
    })
  },
},
export default {
    namespaced: true,
    store,
    mutations,
    actions
}