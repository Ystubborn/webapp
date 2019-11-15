<template>
  <div>
    <div class="title">
      <span>补价单详情</span>
    </div>
    <div>
      <el-table :data="list" @row-dblclick="fromDetailsClick">
        <el-table-column v-for="info in column" :key="info.key" :property="info.key" :label="info.title">
          <template slot-scope="scope">
            {{scope.row[scope.column.property]}}
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="title">
      <span>补价明细</span>
    </div>
    <div class="detailed" v-for=" i in getData[0].serviceChangeListDTO" :key="i.serviceDetailID">
      <div>
        <div class="box">
          <span>单号</span>
          <el-input v-model="i.serviceDetailID" placeholder="10楼"></el-input>
        </div>
        <div class="box">
          <span>日期</span>
          <el-input v-model="i.createTime" placeholder="100元"></el-input>
        </div>
        <!-- <div class="box">
          <span>商户</span>
          <el-input placeholder="定位:u啊大司徒大哥第哦啊"></el-input>
        </div>
        <div class="box">
          <span>客户</span>
          <el-input v-model="orderID" placeholder="定位:u啊大司徒大哥第哦啊"></el-input>
        </div>
        <div class="box">
          <span>电话</span>
          <el-input v-model="orderID" placeholder="定位:u啊大司徒大哥第哦啊"></el-input>
        </div>
        <div class="box">
          <span>地址</span>
          <el-input v-model="orderID" placeholder="定位:u啊大司徒大哥第哦啊"></el-input>
        </div> -->
      </div>

      <div>
      
        <div class="box">
          <span>补价金额</span>
          <el-input v-model="orderID" placeholder="定位:u啊大司徒大哥第哦啊"></el-input>
        </div>
        <div class="box">
          <span>补价说明</span>
          <el-input type="textarea" v-model="orderID" placeholder="z23165432196" :autosize="{minRows: 3, maxRows: 5}"></el-input>
        </div>
        <div class="box">
          <span>图片</span>
          <div class="upload">
            图片模块
          </div>
        </div>
      </div>
      <div class="box">
        <span>状态</span>
        <el-input v-model="orderID" placeholder="成功/失败/取消"></el-input>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex';

export default {
	data() {
		return {
			getData: [],
			column: [
				{
					title: '服务单项目',
					key: 'changeDate'
					// render: text => <a>{text}</a>,
				},
				{
					title: '材质',
					key: 'serviceChangeID'
				},
				{
					title: '单位',
					key: 'createID'
				},
				{
					title: '单价',
					key: 'merchantID'
				},
				{
					title: '数量',
					key: 'orderID'
				},
				{
					title: '变更数量',
					key: 'customerName'
				},
				{
					title: '金额',
					key: 'customerPhone'
				},
				{
					title: '变更金额',
					key: 'customerAddress'
				}
			],
		};
	},
	created() {
		this.getData = JSON.parse(window.sessionStorage.getItem('form'));
		if (this.getData[0].changeDetailShowListDTO == undefined) {
			this.display = !false;
        }
       console.log(this.getData)
	}
};
</script>
<style lang="less" scoped>
.title {
	line-height: 40px;
	font-size: 16px;
	font-weight: bold;
	padding-left: 20px;
	border-bottom: 1px solid #f0f0f0;
	margin-bottom: 20px;
}
.box {
	// display: inline-block;
	margin: 10px 0;
	span {
		display: inline-block;
		width: 80px;
		text-align: center;
	}
	.el-input {
		width: 200px;
	}
	.el-textarea {
		width: 300px;
		vertical-align: middle;
	}
}
.upload {
	display: inline-block;
	width: 400px;
	height: 100px;
}
.detailed {
	display: flex;
	& > div {
		flex: 0.3;
	}
}
</style>