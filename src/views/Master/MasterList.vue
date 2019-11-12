<template>
  <div>
    <el-table>
      <el-table-column v-for="info in column" :key="info.key" :property="info.dataIndex" :label="info.title">
        <template slot-scope="scope">
          {{scope.row[scope.column.property]}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
	data() {
		return {
			getData: {
				id: '',
				merchantID: '',
				pageIndex: 0,
				pageSize: 0,
				masterName: '',
				masterPhone: '',
				profield: ''
			},
			column: [
				{
					title: '师傅ID',
					dataIndex: 'unitName',
					key: 'unitName'
				},
				{
					title: '姓名',
					dataIndex: 'price',
					key: 'price'
				},
				{
					title: '电话',
					dataIndex: 'qty',
					key: 'qty'
				},
				{
					title: '服务区域',
					dataIndex: 'amount',
					key: 'amount'
				},
				{
					title: '服务类型',
					dataIndex: 'a',
					key: 'a'
				},
				{
					title: '保证金',
					dataIndex: 'b',
					key: 'b'
				},
				{
					title: '此处空白',
					dataIndex: 'c',
					key: 'c'
				},
				{
					title: '认证状态',
					dataIndex: 'd',
					key: 'd'
				}
			]
		};
	},
	created() {
		let data = {
			id: '',
			merchantID: '',
			pageIndex: 0,
			pageSize: 0,
			masterName: '',
			masterPhone: '',
			profield: ''
		};
		this.GetMasterList(data);
	},
	methods: {
		...mapActions('list', ['GetMasterList'])
	}
};
</script>