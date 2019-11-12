<template>
  <div>
    <el-table :data="list">
      <el-table-column v-for="info in column" :key="info.key" :property="info.key" :label="info.title">
        <template slot-scope="scope">
          {{scope.row[scope.column.property]}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import {mapActions,mapState} from 'vuex';
export default {
	data() {
		return {
			//列表交互数据
			setData: {
				userID: 'uid_7483a5012f7bf9ac1a000000',
				status: 0,
				pageIndex: '1',
				pageSize: '1'
			},
			column: [
				{
					title: '创建日期',
					key: 'changeDate'
					// render: text => <a>{text}</a>,
				},
				{
					title: '单据编号',
					key: 'serviceChangeID'
				},
				{
					title: '创建人',
					key: 'createID'
				},
				{
					title: '商户',
					key: 'merchantID'
				},
				{
					title: '商户单号',
					key: 'orderID'
				},
				{
					title: '业主名称',
					key: 'customerName'
				},
				{
					title: '业主电话',
					key: 'customerPhone'
				},
				{
					title: '详细地址',
					key: 'customerAddress'
				}
			],
		};
	},
	created() {
		let setData = this.setData;
		this.GetServiceChangeList(setData)
		console.log(this.list.serviceChangeListDTO)
	},
	methods: {
		...mapActions('list', ['GetServiceChangeList']),
	},
	computed:{
		...mapState({
		list:state => state.list.serviceChangeListDTO	
		})
	}
};
</script>