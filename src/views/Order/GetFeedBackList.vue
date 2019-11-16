<template>
  <div>
    <div>
      <el-table :data="getData" border stripe @row-dblclick="fromDetailsClick">
        <el-table-column type="selection">
        </el-table-column>
        <el-table-column v-for="info in rightHeader" :key="info.key" :property="info.key" :label="info.label">
          <template slot-scope="scope">
            {{scope.row[scope.column.property]}}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex';
import {OrderProcess} from '../../extends/services';
export default {
	data() {
		return {
			//列表交互数据
			activeName: '0',
			data: {
				userID:"uid_7483a5012f7bf9ac1a000000",
				status: 0,
				pageIndex: 1,
				pageSize: 15,
				totalCount: 1
			},
			getData:[],
			currentPage3: 5, //分页器默认跳往页码
			rightHeader: [
				{
					label: '服务单号',
					key: 'feedBackID'
				},
				{
					label: '问题类别',
					key: 'feedType_txt'
				},
				{
					label: '反馈时间',
					key: 'feedDate'
				},
				{
					label: '商户',
					key: 'merchantName'
				},
				{
					label: '客户名称',
					key: 'customerName'
				},
				{
					label: '客户电话',
					key: 'customerPhone'
				},
				{
					label: '客户地址',
					key: 'customerCity'
				},
				{
					label: '服务类型',
					key: 'serviceType_txt'
				},
				{
					label: '处理状态',
					key: 'handleStatus_txt'
				},
				{
					label: '处理结论',
					key: 'replyContent'
				},
			],
			rightsDate: []
		};
	},
	created() {
		OrderProcess('GetFeedBackList', 'GET', this.setData).then(res => {
			this.getData = res.data.data.feedBackShowListDTO;
		});
	},
	methods: {
		// ...mapActions("list", ["GetFeedBackList"]),
		//进入问题详情页
		fromDetailsClick(e) {
			this.$router.push({
				path: '/OrderProcess/FeedBackInfo',
				query: {
					feedBackID: e.feedBackID
				}
			});
		},
		//当选中一行数据时
		disable(row) {
			//删除按钮的禁用功能
			if (row) {
				this.disabled = false;
				this.getData = row;
			} else {
				this.disabled = true;
			}
		},
		//分页器更新页面数据
		handleCurrentChange(val) {
			this.setData.pageIndex = val;
			OrderProcess('GetFeedBackList', 'GET', this.setData).then(res => {
				this.rightsDate = res.data.data.feedBackShowListDTO;
				this.setData.totalCount = res.data.data.totalCount;
			});
		}
	}
};
</script>
<style lang="less" scoped>
.backlisttop {
	display: flex;
	li {
		flex: 1;
		border: 1px solid #333;
		border-left: none;
		text-align: center;
		&:first-child {
			border-left: 1px solid #333;
		}
	}
}
</style>