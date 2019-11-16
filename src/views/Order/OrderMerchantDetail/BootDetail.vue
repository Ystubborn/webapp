<template>
  <div>
    <div class="title">
      <span>补价明细</span>
    </div>
    <div class="FE_hide" v-if="display">
      您的订单中没有补价单产生哟~
    </div>
    <div class="detailed" v-for=" i in getData[0].serviceChangeListDTO" :key="i.serviceDetailID" v-else>
      <div>
        <el-table :data="getData[0].serviceChangeListDTO.changeDetailShowListDTO" @row-dblclick="fromDetailsClick">
          <el-table-column v-for="info in column" :key="info.key" :property="info.key" :label="info.title">
            <template slot-scope="scope">
              {{scope.row[scope.column.property]}}
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div>
        <div class="box">
          <span>单号</span>
          <el-input v-model="i.orderServiceID" placeholder="10楼"></el-input>
        </div>
        <div class="box">
          <span>日期</span>
          <el-input v-model="i.changeDate"></el-input>
        </div>
      </div>
      <div>
        <div class="box">
          <span>补价金额</span>
          <el-input v-model="i.changeTotalAmount" placeholder="定位:u啊大司徒大哥第哦啊"></el-input>
        </div>
        <div class="box">
          <span>补价说明</span>
          <el-input type="textarea" v-model="i.changeReason" placeholder="z23165432196" :autosize="{minRows: 3, maxRows: 5}"></el-input>
        </div>
        <div class="box">
          <span>图片</span>
          <div class="imgBox" v-for="(ii,index) in JSON.parse(i.imageUrls)" :key="index">
            <el-image lazy="true" :fit="contain" :src="`http://apifile.zys6d.cn${ii}`">
            </el-image>
          </div>
        </div>
      </div>
      <div class="box">
        <span>状态</span>
        <el-input v-model="i.rebutReason_txt" placeholder="成功/失败/取消"></el-input>
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
			display: false,
			column: [
				{
					title: '服务单项目',
					key: 'itemName'
					// render: text => <a>{text}</a>,
				},
				{
					title: '材质',
					key: 'materialName'
				},
				{
					title: '单位',
					key: 'unitName'
				},
				{
					title: '单价',
					key: 'price'
				},
				{
					title: '数量',
					key: 'qty'
				},
				{
					title: '变更数量',
					key: 'qtyChange'
				},
				{
					title: '金额',
					key: 'amount'
				},
				{
					title: '变更金额',
					key: 'amountChange'
				}
			]
		};
	},
	created() {
		this.getData = JSON.parse(window.sessionStorage.getItem('form'));
		if (this.getData[0].serviceChangeListDTO.length == 0) {
			this.display = !false;
		}
	}
};
</script>
<style lang="less" scoped>
.FE_hide {
	text-align: center;
	font-weight: bolder;
	font-size: 18px;
	line-height: 50px;
	color: #cecdcd;
}
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
.imgBox {
	width: 300px;
	float: left;
	margin: 10px;
}
</style>