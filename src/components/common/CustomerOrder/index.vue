<template>
    <div>
        <h4>客户订单</h4>
        <div>
            <ul class="custonmerorder_list">
                <li v-for="(item , i) in List" :key="i">
                    <router-link :to=item.path>{{item.title}}</router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import { Module } from 'module'
export default {
    data(){
        return {
            List:[
                {
                    title:"全部",
                    path:'allorders'
                },
                {
                    title:"待报价",
                    path:'quoted'
                },
                {
                    title:"待预约",
                    path:'waitingappointmen'
                },
                {
                    title:"待提货",
                    path:'waitingdelivery'
                },
                {
                    title:"待上门",
                    path:'door'
                },
                {
                    title:"服务中",
                    path:'inservice'
                },
                {
                    title:"交易完成",
                    path:'transactioncompleted'
                },
                {
                    title:"退款单",
                    path:'refundslip'
                },
                {
                    title:"投诉单",
                    path:'complaintsheet'
                },
                {
                    title:"问题单",
                    path:'questionsheet'
                },
                {
                    title:"附加费/补价",
                    path:'surcharge'
                }

            ]
        }
    },
    created(){
        
    }
}
</script>
<style lang="less">
.custonmerorder_list{
    list-style: none;
    display: flex;
}
.custonmerorder_list>li{
    flex: 1;
}
</style>