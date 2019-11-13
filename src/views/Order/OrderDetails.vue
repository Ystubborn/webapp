<template>
    <div class="orderdetails">
        订单详情
        <div class="basicinformation">
            <div class="basic_back">
                <div>                    
                    <span>单号</span>
                    <el-input v-model="orderID" placeholder="zy152296336999"></el-input>
                </div>
                <div>
                    <span>下单日期</span>
                    <el-input v-model="orderID" placeholder="2019-2-01"></el-input>
                </div>
                <div>
                    <span>派单日期</span>
                    <el-input v-model="orderID" placeholder="2019-2-01"></el-input>
                </div>
                <div class="order_status">
                    <span>订单状态</span>
                    <el-input v-model="orderID" placeholder="待派单"></el-input>
                    <el-select v-model="value" placeholder="请选择" class="waiting_list">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="basic_back">
                <div>
                    <span>服务类型</span>
                    <el-input v-model="orderID" placeholder="安装"></el-input>
                </div>
                <div>
                    <span>商户</span>
                    <el-input v-model="orderID" placeholder="顶固"></el-input>
                </div>
                <div>
                    <span>客服</span>
                    <el-input v-model="orderID" placeholder="李晓丽"></el-input>
                </div>
                <div>
                    <span>订单金额</span>
                    <el-input v-model="orderID" placeholder="1200元"></el-input>
                </div>
            </div>
            <div class="basic_back basic_back_but">
                <div>
                    <span>服务项目</span>
                    <el-input v-model="orderID" placeholder="定制柜类"></el-input>
                </div>
                <div></div>
                <div></div>
                <div>
                    <span>支付状态</span>
                    <el-input v-model="orderID" placeholder="已支付"></el-input>
                    <el-button type="primary" size="small">查看支付单</el-button>
                </div>
            </div>
            
        </div>
        <div class="customer_information">
            客户信息
            <div>
                <div class="customer_top">
                    <div>
                        <span>客户</span>
                        <el-input v-model="orderID" placeholder="高女士"></el-input>
                    </div>
                    <div>
                        <span>电话</span>
                        <el-input v-model="orderID" placeholder="15935741258"></el-input>
                    </div>
                    <div>
                        <span>紧急联系人</span>
                        <el-input v-model="orderID" placeholder="阿斯哈"></el-input>
                    </div>
                </div>
                <div class="customer_centre">
                    <div class="customer_centre_left">
                        <span>省市区</span>
                            <el-cascader
                                v-model="optionsVal"
                                :options="optionsData"
                                @change="handleChange"></el-cascader>
                    </div>
                    <div>
                        <span>紧急电话</span>
                        <el-input v-model="orderID" placeholder="14746985370"></el-input>
                    </div>
                </div>
                <div class="customer_address">
                    <span>地址</span>
                    <el-input v-model="orderID" placeholder="南山区智恒产业园"></el-input>
                </div>
                <div>
                    <span>备注</span>
                    <el-input v-model="orderID" placeholder="粉刷过的"></el-input>
                </div>
            </div>
                
        </div>
        <div class="logistics">
            物流信息
            <div class="logistics_top">
                <div>
                    <span>物流公司</span>
                    <el-input v-model="orderID" placeholder="德邦"></el-input>
                </div>
                <div>
                    <span>物流单号</span>
                    <el-input v-model="orderID" placeholder="15642164348946"></el-input>
                </div>
                <div class="logistics_top_right">
                    <span>物流费</span>
                    <el-input v-model="orderID" placeholder="600元"></el-input>
                </div>
            </div>
            <div>
                <span>联系电话</span>
                <el-input v-model="orderID" placeholder="165432165461"></el-input>
            </div>
            <div class="logistics_goods">
                <div>
                    <span>件数</span>
                    <el-input v-model="orderID" placeholder="15件"></el-input>
                </div>
                <div>
                    <span>到货情况</span>
                    <el-input v-model="orderID" placeholder="未到货/已到货"></el-input>
                </div>
                <div>
                    <span>到货日期</span>
                    <el-input v-model="orderID" placeholder="2019-5-6"></el-input>
                </div>
            </div>
            <div class="logistics_goods logistics_substitute">
                <div>
                    <span>抬楼</span>
                    <el-input v-model="orderID" placeholder="10楼"></el-input>
                </div>
                
                <div class="logistics_substitute_right">
                    <span>代付运费</span>
                    <el-input v-model="orderID" placeholder="100元"></el-input>
                </div>
            </div>
            <div>
                <span>提货地点</span>
                <el-input v-model="orderID" placeholder="定位:u啊大司徒大哥第哦啊"></el-input>
            </div>
            
        </div>
        <div>
            服务信息
            <div>
                <div>
                    <ul class="from_head">
                        <li v-for="(item , i) in serviceInformation" :key="i"> {{item.title}} </li>
                    </ul>
                    <ul class="from_head from_body">
                        <li>
                            <button><i class="el-icon-plus"></i></button>
                            <button><i class="el-icon-minus"></i></button>
                        </li>
                        <li>
                            {{serviceItemss[0].title}}
                        </li>
                        <li>
                            单位30*20*120
                        </li>
                        <li>
                            单价:200
                        </li>
                        <li>
                            数量:3
                        </li>
                        <li>
                            金额:564313
                        </li>
                        <li>

                        </li>
                    </ul>
                    <ul class="from_head from_body">
                        <li>
                            <button><i class="el-icon-plus"></i></button>
                            <button><i class="el-icon-minus"></i></button>
                        </li>
                        <li>
                            {{serviceItemss[0].title}}
                        </li>
                        <li>
                            单位30*20*120
                        </li>
                        <li>
                            单价:200
                        </li>
                        <li>
                            数量:3
                        </li>
                        <li>
                            金额:564313
                        </li>
                        <li>

                        </li>
                    </ul>  
                    <div>
                        <!-- 图片上传功能,没有数据,未完成 -->
                       <!-- <uplode></uplode> -->
                    </div>    
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { mapActions } from "vuex";
import { vueCityDatas } from '../../city-picker.data'
import uplode from '../../components/upload'
export default {
    components:{
        uplode
    },
    data(){
        return{
            setData:{
                orderID: 'ord_1189376922400985088',
            },
            orderID:'',
            options: [
                {
                    value: '选项1',
                    label: '派单'
                }, 
                {
                    value: '选项2',
                    label: '撤单'
                },
                {
                    value: '选项3',
                    label: '转派'
                }
            ],
            value: '',
            optionsVal:[],
            optionsData:vueCityDatas,
            //服务信息列表
            serviceInformation:[
                {
                    title:''
                },
                {
                    title:'服务项目'
                },
                {
                    title:'单位'
                },
                {
                    title:'单价'
                },
                {
                    title:'数量'
                },
                {
                    title:'金额'
                },
                {
                    title:''
                },
            ],
            //服务项目衣柜/橱柜
            serviceItemss:[
                {
                    title:'衣柜'
                },
                {
                    title:'橱柜'
                },
            ]

        }
    },
    created() {
        this.GetMerchantOrderDetail(this.setData)
        // this.$route.query.data    //路由携带过来的参数
        console.log(this.$store.state.detail)
        console.log(this.$store.state.detail.GMeOD)
    },
    methods: {
        ...mapActions("detail", ["GetMerchantOrderDetail"]),
        handleChange(value) {
            console.log(value);  //数字代号
            console.log(this.optionsVal)
        },
    },
    mounted(){
        // console.log(this.$store.state.detail)
        console.log(this.$store.state.detail.GMeOD)
    },
    computed:{
        
    }
    
}
</script>
<style lang="less" scoped>
.orderdetails{
    background: #fff;
}
.basicinformation{
    border: 1px solid #333;
    padding: 10px 20px;
    // display: flex;
    // flex-wrap:wrap;
    .basic_back{
        display: flex;
        margin-top: 10px;
        &>div{
            flex: 1;
        }
        &>div:last-child{
            flex: 1.5;
            .el-input{
                width: 50%;
            }
        }
        span{
            display: inline-block;
            width: 70px;
        }
        .waiting_list{
            width: 100px;
        }
    }
    .el-input{
        width: 70%;
    }
}
.customer_information{
    // margin-top: 10px;
    margin: 10px 0;
    // margin-top: 10px;
    &>div{
        border: 1px solid #333;
        padding: 0 20px;
        >div{
            margin: 10px 0;
        }
    }
    .customer_top{
        display: flex;
    }
    .customer_centre{
        display: flex;
        .customer_centre_left{
            width: 493px;
            // flex-grow: 1;
        }
    }
    .customer_address{
        width: 40%;
    }
    .el-input{
        width: 70%;
    }
}
.logistics{
    border: 1px solid #333;
    &>div{
        margin: 10px 0;
    }
    span{
        display: inline-block;
        width: 100px;
        text-align: center;
    }
    .el-input{
        width: 200px;
    }
    .logistics_top{
        display: flex;
        width: 90%;
        .logistics_top_right{
            flex-grow: 1;
            text-align: right;
        }
    }
    .logistics_goods{
         display: flex;
    }
}
.from_head{
    display: flex;
    background: rgb(192, 226, 226);
    li{
        flex: 1
    }
    li:first-child{
        flex: 0.3
    }
    li:last-child{
        flex-grow: 2
    }
}
.from_body{
    &:nth-child(even){
        background: #fff;
    }
    &:nth-child(odd){
        background: aqua;
    }
}
</style>