<template>
  <div class="orderlist">
    <div>
      <ul class="orderService">
		  <!-- 订单查询状态 -->
        <li v-for="(item ,i) in orderService" :key="i" @click="orderServiceClick(item.val)">{{item.titie}}</li>
      </ul>
    </div>
    <!-- <vhr></vhr> -->
	<!-- 搜索商户订单 -->
    <div class="option">	
		<!-- SearchMerchantOrderList -->
		<!-- 商户客户选项 -->
		<el-select v-model="value" placeholder="全部" class="option_user">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>
		<!-- 日期区间 -->
		<div class="timeInterval">
			<el-date-picker v-model="timeInterval"
			@change="timeInterChange"
			value-format="yyyy-MM-dd"
			 type="daterange" 
			 range-separator="至" 
			 start-placeholder="开始日期" 
			 end-placeholder="结束日期">
			</el-date-picker>
      	</div>
      	<el-input v-model="setData.keyword" 
		  placeholder="订单号&客户姓名&客户证件号" 
		  clearable=clearable 
		  class="search_input"
		  @change="keywordChange"
		  ></el-input>

      <el-button type="primary" icon="el-icon-download" class="btn" @click="downloadClick">下载</el-button>
      <el-button type="primary" icon="el-icon-refresh-right" class="btn" @click="refreshClick">刷新</el-button>
      <el-button type="primary" icon="el-icon-s-release" :disabled="disabled" class="btn" @click="releaseClick">删除</el-button>
      <el-button type="primary" icon="el-icon-document-copy" class="btn" @click="copyAddClick">复制</el-button>
      <el-button type="primary" icon="el-icon-document-add" class="btn" @click="addClick">新增</el-button>
    </div>
	 <!-- 商户列表 -->
    <div>
      <!-- 表格里面的数据源  -->
      <el-table :data="rightsDate" border stripe
	   @row-dblclick="fromDetailsClick"
	   @select="disable"
	   > 
        <el-table-column type="selection">
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
</template>
<script>
import {mapActions} from 'vuex';
import vhr from '../../components/hr';
import {Order} from '../../extends/services';
export default {
	components: {
		vhr
	},
	data() {
		return {
			//列表数据
			alList: this.$store.state.list,
			//列表交互数据
			setData: {
				merchantID: '',
				pageIndex: 1,
				pageSize: 15,
				total: 1,
				keyword: '',
				startDate:'',
				endDate:''
			},
			//获取的订单ID
			getData:[],
			value: '',
			statevalue: '',
			stateValueTwo: '',
			clearable: true,
			timeInterval: '',
			//订单状态和状态码
			orderService: [
				{
					titie: '全部',
					val:''
				},
				{
					titie: '待报价',	
					// val:this.Enum.OrderFlowStatus.dai_bao_jia.key
					val:'inTheQuotation'
				},
				{
					titie: '待预约',
					val:'makeAppointment',
					// val:this.Enum.OrderFlowStatus.ke_hu_dai_yu_yue.key
				},
				{
					titie: '待提货',
					val:'toPickGoods'
				},
				{
					titie: '待上门',
					val:'forThedoor'
				},
				{
					titie: '服务中',
					val:'MerConfirmed'
				},
				{
					titie: '待验收',		//已完工
					val:'inService'	
				},
				{
					titie: '交易完成',
					val:'acceptance'
				},
				{
					titie: '交易关闭',	
					val:'close'
				}
			],
			// 全部的下拉列表
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
			pickerOptions: {
				shortcuts: [
					{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					},
					{
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					},
					{
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}
				]
			},
			disabled: true, //删除按钮的禁用
			currentPage3: 5, //分页器默认跳往页码
			// total:0,    //总条数
			// pageSize:15  //分页器一页有多少
			rightHeader: [
				{
					label: '订单日期',
					key: 'orderDate'
				},
				{
					label: '单号',
					key: 'orderID'
				},
				{
					label: '服务类型',
					key: 'profileID_txt'
				},
				{
					label: '订单类型',
					key: 'serviceType_txt'
				},
				{
					label: '下单类型',
					key: 'offerType_txt'
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
					label: '订单金额',
					key: 'orderAmount'
				},
				{
					label: '订单状态',
					key: 'orderStatus_txt'
				}
			],
			rightsDate: []
		};
	},
	created() {
		Order('GetMerchantOrderList', 'GET', this.setData).then(res => {
			// console.log(res.data)
			this.rightsDate = res.data.data.orderShowDTOList;
			this.setData.total = res.data.data.totalCount
		});
		// console.log(this.Enum.OrderFlowStatus.dai_bao_jia.key);
	},
	methods: {
		...mapActions('list', ['GetMerchantOrderList']),
		//分页器更新页面数据
		handleCurrentChange(val) {
			this.setData.pageIndex = val;
			Order('GetMerchantOrderList', 'GET', this.setData).then(res => {
				this.rightsDate = res.data.data.orderShowDTOList;
				this.setData.total = res.data.data.totalCount
			});
			//请求分页器要求的页数商户列表
			
		},
		//订单状态查询
		orderServiceClick(val){
			this.setData.orderStatus = val;
			Order('GetMerchantOrderList', 'GET', this.setData).then(res => {
				this.rightsDate = res.data.data.orderShowDTOList;
				this.setData.total = res.data.data.totalCount
			});
		},
		//商户订单查询
		keywordChange(value){
			console.log(value)
			Order('GetMerchantOrderList', 'GET', this.setData).then(res => {
				this.rightsDate = res.data.data.orderShowDTOList;
				this.setData.total = res.data.data.totalCount
			});
		},
		//日期选择区间
		timeInterChange(){
			this.setData.startDate = this.timeInterval[0]
			this.setData.endDate = this.timeInterval[1]
			Order('GetMerchantOrderList', 'GET', this.setData).then(res => {
				this.rightsDate = res.data.data.orderShowDTOList;
				this.setData.total = res.data.data.totalCount
			});
		// timeInterval
		},
		//进入详情页
		fromDetailsClick(e){
			// console.log(123)
			this.$router.push({
				path:'/Order/OrderDetails',
				query:{
					data:e.orderID
				}
			})
		},
		//当选中一行数据时
		disable(row){
			//删除按钮的禁用功能
			if(row){
				this.disabled = false;
				// console.log(row)
				this.getData = row
				console.log(this.getData)
				// this.getData = row[row.length-1].orderID
				console.log(this.getData)
			}else{
				this.disabled = true
			}

			// console.log(this.getData)
		},
		//下载按钮
		downloadClick(){

		},
		//刷新页面
		refreshClick(){
			Order('GetMerchantOrderList', 'GET', this.setData).then(res => {
				this.rightsDate = res.data.data.orderShowDTOList;
				this.setData.total = res.data.data.totalCount
			});
		},
		// 删除选中订单未开放
		releaseClick(){

		},
		// 复制当前信息创建一个新的订单
		copyAddClick(){
			
			if(this.getData.length === 1){
				this.$router.push({
				path:'/Order/OrderDetails',
				query:{
					data:this.getData[0].orderID
				}
			})
			}else{
				this.$message({
					message: '只能选择一条数据',
					type: 'warning'
				});
			}
			
		},
		//创建一个新的
		addClick(){

		}
	},
	mounted() {
		
	}
};
</script>

<style lang="less">
.orderlist {
	background: #f9fcff;
	padding: 20px;
}
.option_user {
	width: 78px;
	height: 23px;
	line-height: 23px;
}
.search_input {
	width: 218px;
	height: 32px;
}
.el-date-picker {
	width: 258px;
}
.timeInterval {
	display: inline-block;
}
.btn {
	i {
		margin-left: -13px;
	}
	width: 62px;
	height: 32px;
}

.from_list {
	list-style: none;
	.from_list_head,
	.from_list_box {
		display: flex;
		list-style: none;
		li {
			flex: 1;
			overflow: hidden;
			border: 1px solid black;
			text-align: center;
			height: 65px;
			line-height: 65px;
		}
	}
	.from_list_head {
		li {
			background-color: #f9fcff;
		}
	}
	.from_list_box {
		background-color: #f9fcff;
	}
}

.checkbox_choice {
	display: inline-block;
}
.block {
	background: #fff;
	.el-pagination {
		width: 600px;
		margin: 0 auto;
	}
}
.orderService {
	list-style: none;
	display: flex;
	width: 1000px;
	li {
		flex: 1;
		width: 106px;
		height: 52px;
		line-height: 52px;
		color: #333;
		cursor: pointer;
	}
}
</style>
