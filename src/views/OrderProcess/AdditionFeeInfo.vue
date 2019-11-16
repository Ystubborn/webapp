<template>
  <div class="feeinfo">
    附加费明细
    <div v-for="i in getData" :key="i.orderID">
      <div class="transverse">
        <div class="box">
          <span>单号</span>
          <el-input v-model="i.orderAdditionalFeeID" placeholder="z23165432196"></el-input>
        </div>
        <div class="box">
          <span>申请日期</span>
          <el-input v-model="i.createTime" placeholder="z23165432196"></el-input>
        </div>
        <div class="box">
          <span>附加费金额</span>
          <el-input v-model="i.orderAmount" placeholder="z23165432196"></el-input>
        </div>
      </div>
      <div class="transverse">
        <div class="box">
          <span>客户</span>
          <el-input v-model="i.customerName" placeholder="z23165432196"></el-input>
        </div>
        <div class="box">
          <span>商户</span>
          <el-input v-model="i.merchantName" placeholder="z23165432196"></el-input>
        </div>
        <div class="box">
          <span>安装人员</span>
          <el-input placeholder="z23165432196"></el-input>
        </div>
      </div>
      <div>
        <div class="box">
          <span>电话</span>
          <el-input v-model="i.customerPhone" placeholder="z23165432196"></el-input>
        </div>
        <div class="box">
          <span>地址</span>
          <el-input v-model="i.customerAddress" placeholder="z23165432196"></el-input>
        </div>
      </div>

      <div class="box">
        <span>申请类型</span>
        <el-input v-model="i.additionalFeeIType" placeholder="z23165432196"></el-input>
      </div>
      <div>
        <div class="box">
          <span>说明</span>
          <el-input type="textarea" v-model="i.additionalFeeIDetail" placeholder="z23165432196" :autosize="{minRows: 2, maxRows: 4}"></el-input>
        </div>
        <div class="upload">
          图片模块
        </div>
      </div>
      <div>
        <div class="box">
          <span>处理人员</span>
          <el-input v-model="orderID" placeholder="z23165432196"></el-input>
        </div>
        <div class="box">
          <span>处理日期</span>
          <el-input v-model="i.rebutTime" placeholder="z23165432196"></el-input>
        </div>
        <div class="box">
          <span>驳回原因</span>
          <el-input type="textarea" v-model="i.rebutDesc" placeholder="z23165432196" :autosize="{minRows: 2, maxRows: 4}"></el-input>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {OrderProcess} from '../../extends/services';
export default {
	data() {
		return {
			getData: [],
		};
	},
	created() {
		let ID = this.$router.history.current.query;
		OrderProcess('GetAdditionFeeInfo', 'GET', ID).then(res => {
			this.getData.push(res.data.data);
		});
	},
	methods: {}
};
</script>
<style lang="less" scoped>
.box {
	display: inline-block;
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
.feeinfo {
	background: #fff;
	padding: 10px 20px;
	& > div {
		margin: 10px 0;
	}
	// border: 1px solid #333;
}
.transverse {
	.box:last-child {
		margin-left: 200px;
	}
}
.upload {
	display: inline-block;
}
</style>