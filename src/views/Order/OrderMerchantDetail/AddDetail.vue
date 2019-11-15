<template>
  <div class="feeinfo">
    <div class="title">
      <span>附加费明细</span>
    </div>
    <div class="FE_hide" v-if="display">
      您的订单中没有附加费产生哟~
    </div>
    <div v-else v-for="i in getData[0].additionalFeeListDTO" :key="i.orderAdditionalFeeID">
      <el-row>
        <el-col :span="8">
          <div class="box">
            <span>单号</span>
            <el-input v-model="i.orderAdditionalFeeID"></el-input>
          </div>
          <div class="box">
            <span>申请日期</span>
            <el-input v-model="i.createTime"></el-input>
          </div>

          <div class="box">
            <span>附加费金额</span>
            <el-input v-model="i.amount"></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="box">
            <span>申请类型</span>
            <el-input v-model="i.additionalFeeIType_txt"></el-input>
          </div>
          <div class="box">
            <span>说明</span>
            <el-input type="textarea" v-model="i.additionalFeeIDetail" :autosize="{minRows: 2, maxRows: 4}"></el-input>
          </div>
          <div class="box">
            <span>处理日期</span>
            <el-input v-model="i.modifyTime"></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="box">
            <span>驳回原因</span>
            <el-input type="textarea" v-model="i.rebutReason" :autosize="{minRows: 2, maxRows: 4}"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">

          <div class="imgBox" v-for="(ii,index) in JSON.parse(i.imageUrls)" :key="index">
            <el-image lazy="true"  :fit="contain" :src="`http://apifile.zys6d.cn${ii}`">
            </el-image>
          </div>
        </el-col>
      </el-row>
      <div>
      </div>
    </div>
  </div>
</template>
<script>
import {OrderProcess} from '../../../extends/services';
import detail from '../../../vuex/modules/detail';
export default {
	data() {
		return {
			getData: [],
			orderID: '',
			display: false
		};
	},
	created() {
		this.getData = JSON.parse(window.sessionStorage.getItem('form'));
		if (this.getData[0].additionalFeeListDTO == undefined) {
			this.display = !false;
		}
	},
	methods: {}
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
.title {
	line-height: 40px;
	font-size: 16px;
	font-weight: bold;
	padding-left: 20px;
	border-bottom: 1px solid #f0f0f0;
	margin-bottom: 20px;
}
.box {
	margin: 10px;
}
.imgBox {
  width: 300px;
	float: left;
	margin: 10px;
}
</style>