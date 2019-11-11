<template>
  <div>
    <el-table :data="alList">
      <el-table-column v-for="info in column" :key="info.key" :prop="info.dataIndex" :label="info.title">
        <template slot-scope="scope">
          {{scope.row[scope.column.prop]}}
          <!-- 渲染对应表格里面的内容 -->
        </template>
      </el-table-column>
      <!-- <el-table-column label="启用状态">
                <template slot-scope="scope">
                        <el-switch
                          v-model="scope.row.ifUse"
                          :active-color="ACT_COLOR"
                          :inactive-color="INACT_COLOR">
                        </el-switch>
                  </template>
             </el-table-column> -->
    </el-table>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
	data() {
		return {
			//列表数据
			alList: this.$store.state.list.serviceChangeListDTO,
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
					dataIndex: 'changeDate',
					key: 'changeDate'
					// render: text => <a>{text}</a>,
				},
				{
					title: '单据编号',
					dataIndex: 'serviceChangeID',
					key: 'serviceChangeID'
				},
				{
					title: '创建人',
					dataIndex: 'createID',
					key: 'createID'
				},
				{
					title: '商户',
					dataIndex: 'merchantName',
					key: 'merchantID'
				},
				{
					title: '商户单号',
					dataIndex: 'orderID',
					key: 'orderID'
				},
				{
					title: '业主名称',
					dataIndex: 'customerName',
					key: 'customerName'
				},
				{
					title: '业主电话',
					dataIndex: 'customerPhone',
					key: 'customerPhone'
				},
				{
					title: '详细地址',
					dataIndex: 'customerAddress',
					key: 'customerAddress'
				}
			],
		};
	},
	created() {
		let setData = this.setData;
		this.GetServiceChangeList(setData);
	},
	mounted() {
		console.log(this.alList);
	},
	methods: {
		...mapActions('list', ['GetServiceChangeList'])
	}
};
</script>