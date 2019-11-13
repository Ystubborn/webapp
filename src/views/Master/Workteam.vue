<template>
  <div>
    <el-row type="flex" class="row-bg mg" justify="end">
      <el-col :span="6">
        <el-input style="width:230px" @blur="reclick(keyword)" size="medium" v-model="keyword" placeholder="请输入团队ID" clearable />
        <el-button size="medium" @click="push" type="primary">新增</el-button>
      </el-col>
    </el-row>
    <el-table 
    :data="list"
     @row-click="handleSelectionChange"
    >
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column v-for="info in column" :key="info.key" :property="info.key" :label="info.title">
        <template slot-scope="scope">{{scope.row[scope.column.property]}}</template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex';
export default {
	data() {
		return {
			keyword: '',
			organizationID: '342243420506558465',
			column: [
				{
					title: '省',
					key: 'cityName'
				},
				{
					title: '市',
					key: 'regionName'
				},
				{
					title: '团队名称',
					key: 'name'
				},
				{
					title: '专业领域',
					key: 'profildID_txt'
				},
				{
					title: '接单状态',
					key: 'isWork'
				},
				{
					title: '团队人数',
					key: 'memberCount'
				},
				{
					title: '详细地址',
					key: 'address'
				}
			]
		};
	},
	created() {
		this.GetTeamList(this.setData);
		let a=/^\/api\/file\/Upload+/i
		console.log(a.test("/api/file/Upload"))
	},
	methods: {
		...mapActions('list', ['GetTeamList']),
		reclick(v) {
			let data = {
				keyword: v,
				organizationID: this.organizationID
			};
			this.GetTeamList(data);
			if (this.list == '') {
				this.$notify({
					title: '提示',
					message: '您所搜索的信息不存在',
					type: 'warning'
				});
			} else {
				this.$notify({
					title: '提示',
					message: '信息查询成功！',
					type: 'success'
				});
			}
		},
		push() {
			this.$router.push('/Master/Addteam');
    },
    handleSelectionChange(e){
      this.$router.push(`/Master/Wtdetail/:${e.organizationID}`)
    }
	},
	computed: {
		...mapState({
			list: state => state.list.data
		}),
		setData() {
			return this.keyword ? {keyword: this.keyword, organizationID: this.organizationID} : {organizationID: this.organizationID};
		}
	}
};
</script>
<style lang="less" scoped>
.mg {
	margin: 10px;
}
</style>

