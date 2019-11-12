<template>
  <div class="feelist">附加费
    <div>
      <div class="top">
          <ul class="orderService">
          <!-- 订单查询状态 -->
            <li v-for="(item ,i) in orderService" :key="i" @click="orderServiceClick(item.val)">{{item.titie}}</li>
          </ul>
        <div class="block">
          <!-- 商户客户选择 -->
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <!-- 订单搜索 -->
          <el-input v-model="input" placeholder="订单号&客户姓名&客户证件号" clearable=clearable class="search_input"></el-input>
          <!-- 订单状态 -->
          <el-select v-model="value3" placeholder="状态">
            <el-option
              v-for="item in orderService"
              :key="item.value"
              :label="item.titie"
              :value="item.val">
            </el-option>
          </el-select>
          <!-- 时间 -->
          <el-date-picker
            v-model="value2"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div>
      </div>
      <!-- 附加费列表 -->
      <div>
        <el-table :data="rightsDate" border stripe height="713">
          <el-table-column type="selection" width="55">
          </el-table-column>
        <!-- 设置表头数据源，并循环渲染出来，property对应列内容的字段名，详情见下面的数据源格式 -->
          <el-table-column v-for="info in rightHeader" :key="info.key" :property="info.key" :label="info.label">
            <template slot-scope="scope">
            {{scope.row[scope.column.property]}}
            <!-- {{scope.row[scope.column.prop]}} -->
            <!-- 渲染对应表格里面的内容 -->
            </template>
          </el-table-column>
        </el-table>
      <!-- 分页 -->
        <div class="block">
          <el-pagination @current-change="handleCurrentChange" 
          :current-page.sync="currentPage3" 
          :page-size=setData.pageSize 
          layout="prev, pager, next, jumper" 
          :total=setData.total>
          </el-pagination>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import {Order,OrderProcess} from '../../extends/services';
const cityOptions = [];
export default {
  data() {
    return {
      //列表数据
      alList:this.$store.state.list,
      //列表交互数据
      setData: {
        userID:"uid_7483a5012f7bf9ac1a000000",
        status:0,
        pageIndex: 1,
        pageSize: 15,
        total:1,
      },
      input: '',
      //时间区间
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
      orderService: [
				//订单状态表头
				{
					titie: '全部',
					val:'0'
				},
				{
					titie: '处理中',
					val:'1'
				},
				{
					titie: '已处理',
					val:'2'
				}
			],
      value2: '',
      //多选框
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      //选择商户客户
       options: [{
        value: '选项1',
        label: '客户'
      }, {
        value: '选项2',
        label: '商户'
      }],
      //商户客户val值
      value: '',
      //订单状态val值
      value3: '',
      currentPage3: 5,
			// 全部的下拉列表
			rightHeader: [
				{
					label: '日期',
					key: 'createTime'
				},
				{
					label: '单号',
					key: 'orderID'
        },
        {
					label: '商户',
					key: 'merchantName'
				},
				{
					label: '客户',
					key: 'customerName'
				},
        {
					label: '客户电话',
					key: 'customerPhone'
				},
				{
					label: '客户地址',
					key: 'customerAddress'
        },
        {
          label: '附加费',
					key: 'amount'
        },
        // {
				// 	label: '安装人员',
				// 	key: 'masteName'
				// },
				{
					label: '附加费审核状态',
					key: 'auditStatus_txt'
				}
      ],
      //列表数据
			rightsDate: []

    };
  },
  created() {    
      OrderProcess('GetAdditionFeeList', 'GET', this.setData).then(res => {
				console.log(res.data.data);
				this.rightsDate = res.data.data.additionalFeeShowListDTO;
				this.setData.total = res.data.data.totalCount
			});
  },
  methods: {
    ...mapActions("list", ["GetAdditionFeeList"]),
    //多选框时间
    handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
    },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
    //订单状态查询
    orderServiceClick(val){
			this.setData.status = val
			console.log(this.setData.orderStatus)
			OrderProcess('GetAdditionFeeList', 'GET', this.setData).then(res => {
				console.log(res.data.data);
				this.rightsDate = res.data.data.additionalFeeShowListDTO;
				this.setData.total = res.data.data.totalCount
			});
    },
    	//请求分页器要求的页数商户列表
    handleCurrentChange(val) {
			this.setData.pageIndex = val
			console.log(this.setData)
			OrderProcess('GetAdditionFeeList', 'GET', this.setData).then(res => {
				console.log(res.data.data);
				this.rightsDate = res.data.data.additionalFeeShowListDTO;
				this.setData.total = res.data.data.totalCount
			});
		},
  }
};
</script>
<style lang="less" scoped>
.feelist{
  background: #f9fcff;
  padding: 0 20px ;
}

.orderService {
	list-style: none;
	display: flex;
	width: 300px;
	li {
		flex: 1;
		width: 106px;
		height: 52px;
		line-height: 52px;
    color: #333;
    cursor: pointer;
	}
}
.search_input {
	width: 218px;
	height: 32px;
}
</style>