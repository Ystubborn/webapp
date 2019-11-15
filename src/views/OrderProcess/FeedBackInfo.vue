<template>
    <div class="feedbackinfo">
        问题单详情
        <div >
            收入流水
            <ul class="list">
                <ul>
                    <li v-for=" item in  feedBack" :key="item.title">
                        {{item.title}}
                    </li>
                </ul>
                <ul>
                    <li v-for=" item in  feedBack" :key="item.key">
                        {{item.key}}
                    </li>
                </ul>
                <ul>
                    <li v-for=" (item,i) in  feedBack" :key="i">
                        {{item.val}}
                    </li>
                </ul>
                
            </ul>
        </div>
    </div>
</template>
<script>
import {OrderProcess} from "../../extends/services";
import { mapActions } from "vuex";
export default {
    data(){
        return{
            getData:{
                feedBackID : 'fed_1194140908623368192',

            },
            feedBack:[
                {
                    title:'交易流水',
                    key:'数字',
                    val:''
                },
                {
                    title:'时间',
                    key:'年月日',
                    val:'',
                },
                {
                    title:'支付类型',
                    key:'文本',
                    val:'订单支付/补价支付/附加费支付/保证金/押金',
                },
                {
                    title:'支付商',
                    key:'1',
                    val:'商户名/师傅名',
                },
                {
                    title:'支付方式',
                    key:'2',
                    val:'微信/支付宝/线下转帐',
                },
                {
                    title:'金额',
                    key:'3',
                    val:'',
                },
                {
                    title:'支付状态',
                    key:'4',
                    val:'成功/待支付',
                },
                {
                    title:'关联单号',
                    key:'5',
                    val:'保证金关联师傅',
                },
                {
                    title:'交易单号',
                    key:'6',
                    val:'微信/支付提供',
                },
            ]
        }
    },
    created() {
        OrderProcess('GetFeedBackInfo','GET',this.getData).then(res => {
            this.getData.
            console.log(res.data.data)
            })
        // this.GetFeedBackList(this.setData);
        // this.rightsDate = this.$store.state.list.feedBackShowListDTO
        // this.setData.totalCount = this.$store.state.list.totalCount
        // console.log(this.rightsDate)
        // console.log(this.$store.state.list)
        
    },
    methods:{
        // ...mapActions("list", ["GetFeedBackList"]),
    }
}
</script>
<style lang="less" scoped>
.feedbackinfo{
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 10px 20px;
}
.list{
    display: flex;
    ul{
        li{
            width: 100px;
            border: 1px solid black;
            height: 50px;
            line-height: 50px;
            text-align: center;
            overflow: hidden;
            margin: 0 0 -1px -1px;
            &:first-child{
                height: 30px;
                line-height: 30px;
            }
        }
    }
}
</style>