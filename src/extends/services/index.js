import axios from '../axios'
//登陆
export const login = data => { return axios("/api/User/Login", { method: "POST", data }) }
//订单
export const Order = (opt, met, res) => {
    if (met == "GET") {
        return axios(`/api/Order/${opt}`, { params: res })
    } else {
        return axios(`/api/Order/${opt}`, { method: met, data:res })
    }
}
//附加费
export const OrderProcess = (opt, met, res) => {
    if (met == "GET") {
        return axios(`/api/OrderProcess/${opt}`, { params: res })
    } else {
        return axios(`/api/OrderProcess/${opt}`, { method: met, data:res })
    }
}
//订单服务
export const OrderService = (opt, met, res) => {
    if (met == "GET") {
        return axios(`/api/OrderService/${opt}`, { params: res })
    } else {
        return axios(`/api/OrderService/${opt}`, { method: met, data:res })
    }
}
//报价
export const Quotation = (opt, met, res) => {
    if (met == "GET") {
        return axios(`/api/Quotation/${opt}`, { params: res })
    } else {
        return axios(`/api/Quotation/${opt}`, { method: met, data:res })
    }
}
//团队
export const Team = (opt, met, res) => {
    if (met == "GET") {
        return axios(`/api/Team/${opt}`, { params: res })
    } else {
        return axios(`/api/Team/${opt}`, { method: met, data:res })
    }
}
//钱包
export const Wallet = (opt, met, res) => {
    if (met == "GET") {
        return axios(`/api/Wallet/${opt}`, { params: res })
    } else {
        return axios(`/api/Wallet/${opt}`, { method: met, data:res })
    }
}
//师傅
export  const  Master = (opt, met, res) => {
    if (met == "GET") {
        return axios(`/api/Master/${opt}`, { params: res })
    } else {
        console.log(res)
        return axios(`/api/Master/${opt}`, { method: met, data:res })
    }
}


