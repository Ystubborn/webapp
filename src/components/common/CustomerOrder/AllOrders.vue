<template>
    <div>
        <div>
            <div>
                <!-- 商户客户选项 -->
                <el-select v-model="value" placeholder="对象" class="option_user">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-input v-model="input" placeholder="订单号&客户姓名&客户证件号" clearable=clearable class="search_input"></el-input>
                <!-- 搜索订单状态 -->
                <el-select v-model="statevalue" placeholder="状态" class="option_user">
                    <el-option
                    v-for="item in OrderStatus"
                    :key="item.index"
                    :label="item.state"
                    :value="item.state">
                    </el-option>
                </el-select>
                <!-- 日期区间 -->
                    <el-date-picker
                    v-model="timeInterval"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                <!-- 搜索订单状态 -->
                <el-select v-model="stateValueTwo" placeholder="请选择" class="option_user">
                    <el-option
                    v-for="item in OrderStatus"
                    :key="item.index"
                    :label="item.state"
                    :value="item.index">
                    </el-option>
                </el-select>
                <el-button type="primary" icon="el-icon-download">下载</el-button>
                <el-button type="primary" icon="el-icon-refresh-right">刷新</el-button>
                <el-button type="primary" icon="el-icon-s-release" disabled>删除</el-button>
                <el-button type="primary" icon="el-icon-document-copy">复制</el-button>
                <el-button type="primary" icon="el-icon-document-add">新增</el-button>
            </div>
            <div>
                <!-- 商户列表 -->
                <ul class="from_list">
                    <li>
                        <!-- 列表的头 -->
                        <ul class="from_list_head">
                            <li v-for="( item,i ) in fromListHeadList" :key="i">{{item.name}}</li>
                        </ul>
                    </li>
                    <li>
                        <!-- 列表内容 -->
                        <ul class="from_list_box" v-for="(item ,i) in orderShowDTOList" :key="i">
                            <li>
                                {{item.orderID}}
                            </li>
                            <li>
                                {{item.orderDate}}
                            </li>
                            <li>
                                {{item.serviceType}}
                            </li>
                            <li>
                                {{item.offerType}}
                            </li>
                            <li>
                                {{item.merchantName}}
                            </li>
                            <li>
                                {{item.customerName}}
                            </li>
                            <li>
                                {{item.customerPhone}}
                            </li>
                            <li>
                                {{item.customerAddress}}
                            </li>
                            <li>
                                {{item.orderAmount }}
                            </li>
                            <li>
                                {{item.orderStatus}}
                            </li>                              
                        </ul>
                    </li>
                </ul>
                <!-- 分页 -->
                <div class="block">
                    <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage3"
                    :page-size=pageSize
                    layout="prev, pager, next, jumper"
                    :total=total>
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        value: '',
        statevalue:'',
        input:'',
        stateValueTwo:'',
        clearable:true,
        timeInterval: '',
        options: [
            {
                value: '选项1',
                label: '商户'
            }, 
            {
                value: '选项2',
                label: '客户'
            }
        ],
        OrderStatus:[
            {
                index: 'state1',
                state: '派单中'
            }, 
            {
                index: 'state2',
                state: '服务中'
            },
            {
                index: 'state3',
                state: '待提货'
            }
        ],
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        fromListHeadList:[
            {
                name:'订单号'
            },
            {
                name:'订单日期'
            },
            {
                name:'服务类型'
            },
            {
                name:'订单类型'
            },
            {
                name:'商户'
            },
            {
                name:'客户'
            },
            {
                name:'电话'
            },
            {
                name:'地址'
            },
            {
                name:'订单金额'
            },
            {
                name:'订单状态'
            }
        ],
        orderShowDTOList:[],    //列表数据
        currentPage3: 5,    //分页器默认跳往页码
        total:0,    //总条数
        pageSize:0  //分页器一页有多少
      }
    },
    methods: {
        fromListBoxAxios(){
            let that=this
            //初始请求第一页的商户列表数据
            that.axios
                .get('/api/Order/GetMerchantOrderList')
                .then(res =>{
                    that.orderShowDTOList = res.data.data.orderShowDTOList  //数据给到列表
                    that.total=res.data.data.totalCount     //分页数据有多少
                    that.pageSize=res.data.data.pageSize
                })
                .catch(err=>{
                    console.log(err)
                })
        },
        //更新页面数据
        handleCurrentChange(val) {
            let that = this
            let pageIndex = val
            // console.log(pageIndex)
            //请求分页器要求的页数商户列表
            that.axios
                .get('/api/Order/GetMerchantOrderList'+'?pageIndex='+pageIndex)
                .then(res =>{
                    that.orderShowDTOList = res.data.data.orderShowDTOList
                    that.total=res.data.data.totalCount     
                    that.pageSize=res.data.data.pageSize
                })
                .catch(err=>{
                    console.log(err)
                })
        }
      
    },
    mounted(){
        this.fromListBoxAxios()
    }
    
  }
</script>
<style lang="less">
.option_user{
    width: 90px;
}
.search_input{
    width: 200px;
}
.from_list{
    list-style: none;
    .from_list_head,.from_list_box{
        display: flex;
        list-style: none;
        li{
            flex: 1;
            overflow: hidden;
            border: 1px solid black;
            text-align: center;
            height: 65px;
            line-height: 65px;
        }
        
    }
    .from_list_head{
        li{
            background-color: rgb(226, 221, 221);
        }  
    }
    .from_list_box{
        background-color: #fff;
    }
    
}

.checkbox_choice{
    display: inline-block;
}
.block{
    background: #fff;
    .el-pagination{
        width: 600px;
        margin: 0 auto;
    }
    
}
</style>