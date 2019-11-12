import Vue from 'vue';
import { Order, OrderProcess, Team, Master } from "../../extends/services";
import stores from "../index";
import Vuex from 'vuex';
Vue.use(Vuex);
const store = {
    orderShowDTOList: [],
    serviceChangeListDTO: [],
    feedBackShowListDTO: [],
    additionalFeeShowListDTO: [],
    data: [],
    additionalCount: 0,
    changeCount: 0,
    complaintCount: 0,
    refundCount: 0,
    pageIndex: 0,
    pageSize: 0,
    totalCount: 0,
    totalPage: 0,
}
const mutations = {
    setInfo(store, payload) {
        store.orderShowDTOList = payload.orderShowDTOList ? payload.orderShowDTOList : []
        store.serviceChangeListDTO = payload.serviceChangeListDTO ? payload.serviceChangeListDTO : []
        store.feedBackShowListDTO = payload.feedBackShowListDTO ? payload.feedBackShowListDTO : []
        store.additionalFeeShowListDTO = payload.additionalFeeShowListDTO ? payload.additionalFeeShowListDTO : []
        store.data = payload.data ? payload.data : []
        store.additionalCount = payload.additionalCount ? payload.additionalCount : 0
        store.changeCount = payload.changeCount ? payload.changeCount : 0
        store.complaintCount = payload.complaintCount ? payload.complaintCount : 0
        store.refundCount = payload.refundCount ? payload.refundCount : 0
        store.pageIndex = payload.pageIndex ? payload.pageIndex : 0
        store.pageSize = payload.pageSize ? payload.pageSize : 0
        store.totalCount = payload.totalCount ? payload.totalCount : 0
        store.totalPage = payload.totalPage ? payload.totalPage : 0
    },
}
const actions = {
    /*-订单-*/
    GetMerchantOrderList(action, payload) {
        Order('GetMerchantOrderList', 'GET', payload).then(res => {
            action.commit("setInfo", {
                orderShowDTOList: res.data.data.orderShowDTOList[0],
                pageIndex: res.data.data.pageIndex,
                pageSize: res.data.data.pageSize,
                totalCount: res.data.data.totalCount,
                totalPage: res.data.data.totalPage
            })
        })
    },
    // GetMerchantOrderDetail(action,payload){
    //     Order('GetMerchantOrderDetail','GET',payload).then(res =>{
    //         console.log(res)
    //         action.commit({ type: "setGMODInfo", info: res.data.data })
    //     })
    // },
    GetDocumentCount(action, payload) {
        Order('GetDocumentCount', 'GET', payload).then(res => {
            action.commit("setInfo", {
                additionalCount: res.data.data.additionalCount,
                changeCount: res.data.data.changeCount,
                complaintCount: res.data.data.complaintCount,
                refundCount: res.data.data.refundCount
            })
        })
    },
    MasterSearch(action, payload) {
        Team('MasterSearch', 'GET', payload).then(res => {
            console.log(res)
        })
    },
    GetAdditionFeeList(action, payload) {
        OrderProcess('GetAdditionFeeList', 'GET', payload).then(res => {
            action.commit("setInfo", {
                additionalFeeShowListDTO: res.data.data.additionalFeeShowListDTO[0],
                pageIndex: res.data.data.pageIndex,
                pageSize: res.data.data.pageSize,
                totalCount: res.data.data.totalCount,
                totalPage: res.data.data.totalPage
            })
        })
    },
    GetServiceChangeList(action, payload) {
        OrderProcess('GetServiceChangeList', 'GET', payload).then(res => {
            action.commit("setInfo", {
                serviceChangeListDTO: res.data.data.serviceChangeListDTO,
                pageIndex: res.data.data.pageIndex,
                pageSize: res.data.data.pageSize,
                totalCount: res.data.data.totalCount,
                totalPage: res.data.data.totalPage
            })
        })
    },
    GetFeedBackList(action, payload) {
        OrderProcess('GetFeedBackList', 'GET', payload).then(res => {
            action.commit("setInfo", {
                feedBackShowListDTO: res.data.data.feedBackShowListDTO[0],
                pageIndex: res.data.data.pageIndex,
                pageSize: res.data.data.pageSize,
                totalCount: res.data.data.totalCount,
                totalPage: res.data.data.totalPage
            })
        })
    },
    GetTeamList(action, payload) {
        Team('GetTeamList', 'GET', payload).then(res => {
            action.commit("setInfo", {
                data: res.data.data
            })
        })
    },
    GetMasterList(action,payload){
        Master('GetMasterList','POST',payload).then(res => {
            console.log(res)
        })
    }
}
export default {
    namespaced: true,
    store,
    mutations,
    actions
}