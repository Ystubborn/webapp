import axios from '../axios'
//登陆
export const login = data => { return axios("/api/User/Login", { method: "POST", data }) }
//订单
export const Order = (opt, met, res) => {
    if (met == "GET") {
        return axios(`/api/Order/${opt}`, { params: res })
    } else {
        return axios(`/api/Order/${opt}`, { method: met, res })
    }
}
//附加费
export const OrderProcess = (opt, met, res) => {
    if (met == "GET") {
        return axios(`/api/OrderProcess/${opt}`, { params: res })
    } else {
        return axios(`/api/OrderProcess/${opt}`, { method: met, res })
    }
}
//订单服务
export const OrderService = (opt, met, res) => { return axios(`/api/OrderService/${opt}`, { method: met, res }) }
//报价
export const Quotation = (opt, met, res) => { return axios(`/api/Quotation/${opt}`, { method: met, res }) }
//团队
export const Team = (opt, met, res) => { return axios(`/api/Team/${opt}`, { method: met, res }) }
//钱包
export const Wallet = (opt, met, res) => { return axios(`/api/Wallet/${opt}`, { method: met, res }) }


