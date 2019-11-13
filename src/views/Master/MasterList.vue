<template>
  <div>
    <el-table :data="list" @row-click="handleSelectionChange" v-cloak>
      <el-table-column v-for="info in column" :key="info.key" :property="info.key" :label="info.title">
        <template slot-scope="scope">
          {{scope.row[scope.column.property]}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
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
					key: 'masterID'
				},
				{
					title: '姓名',
					key: 'name'
				},
				{
					title: '电话',
					key: 'phone'
				},
				// {
				// 	title: '服务区域',
				// 	key: 'serviceAreaDTO.regionName '
				// },
				{
					title: '服务类型',
					key: 'profield_Txt'
				},
				{
					title: '保证金',
					key: 'marginAmount'
				}
				// {
				// 	title: '此处空白',
				// 	dataIndex: 'c',
				// 	key: 'c'
				// },
				// {
				// 	title: '认证状态',
				// 	dataIndex: 'd',
				// 	key: 'd'
				// }
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
		console.log(this.list);
	},
	methods: {
		...mapActions('list', ['GetMasterList']),
		handleSelectionChange(e) {
			this.$router.push({path:`/Master/Masterdetail/`,query:{id:e.masterID}});
		}
	},
	computed: {
		...mapState({
			list: state => state.list.masterShowDTOList
		})
	}
};
</script>
<style lang="less" scoped>
[v-cloak] {
	display: none !important;
}
</style>