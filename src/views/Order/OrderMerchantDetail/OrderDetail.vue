<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <div class="title">
          <span>基本信息</span>
        </div>
        <el-col :span="8">
          <el-form-item label="单号">
            <el-input v-model="form[0].orderShowDTO.orderID"></el-input>
          </el-form-item>
          <el-form-item label="下单日期">
            <el-input v-model="form[0].orderShowDTO.orderDate"></el-input>
          </el-form-item>
          <!-- <el-form-item label="派单日期">
            <el-input v-model="form[0].orderShowDTO.orderSendDate"></el-input>
          </el-form-item> -->
          <el-form-item label="订单状态">
            <el-input v-model="form[0].orderShowDTO.orderStatus"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="订单金额">
            <el-input v-model="form[0].orderShowDTO.payAmount"></el-input>
          </el-form-item>
          <el-form-item label="服务类型">
            <el-input v-model="form[0].orderShowDTO.serviceType_txt"></el-input>
          </el-form-item>
          <el-form-item label="服务项目 ">
            <el-input v-model="form[0].orderShowDTO.profileID_txt"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="商户">
            <el-input v-model="form[0].orderShowDTO.merchantName"></el-input>
          </el-form-item>
          <!-- <el-form-item label="支付状态">
            <el-input v-model="form[0].orderShowDTO.payStatus_txt"></el-input>
          </el-form-item> -->
        </el-col>
      </el-row>
      <el-row>
        <div class="title">
          <span>客户信息</span>
        </div>
        <el-col :span="12">
          <el-form-item label="客户">
            <el-input v-model="form[0].orderShowDTO.customerName"></el-input>
          </el-form-item>
          <el-form-item label="省市区">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form[0].orderShowDTO.customerAddress"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form[0].orderShowDTO.customerAddress"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电话">
            <el-input v-model="form[0].orderShowDTO.customerPhone"></el-input>
          </el-form-item>
          <el-form-item label="紧急电话">
            <el-input v-model="form[0].orderShowDTO.emergencyPhone"></el-input>
          </el-form-item>
          <el-form-item label="电话紧急联系人">
            <el-input v-model="form[0].orderShowDTO.emergencyContact"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <div class="title">
          <span>物流信息</span>
        </div>
        <el-col :span="8">
          <el-form-item label="物流公司">
            <el-input v-model="form[0].logisticsDTO.companyName"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form[0].logisticsDTO.phone"></el-input>
          </el-form-item>
          <el-form-item label="件数">
            <el-input v-model="form[0].logisticsDTO.cargoQty"></el-input>
          </el-form-item>
          <el-form-item label="抬楼">
            <el-input v-model="form[0].logisticsDTO.cargoFloors"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="物流单号">
            <el-input v-model="form[0].logisticsDTO.billNo"></el-input>
          </el-form-item>
          <el-form-item label="到货情况">
            <el-input v-model="form[0].logisticsDTO.cargoIsReach"></el-input>
          </el-form-item>
          <el-form-item label="代付运费">
            <el-input v-model="form[0].logisticsDTO.shippingAmount"></el-input>
          </el-form-item>
          <el-form-item label="到货日期">
            <el-input v-model="form[0].logisticsDTO.reachDate"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="物流费">
            <el-input v-model="form[0].logisticsDTO.freightAmount"></el-input>
          </el-form-item>
          <el-form-item label="提货地点">
            <el-input v-model="form[0].logisticsDTO.reachAddress"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <div class="title">
          <span>服务信息</span>
        </div>
        <el-col :span="24">
          <el-table :data="form[0].serviceDetailListDTO">        
            <el-table-column v-for="info in tableData" :key="info.key" :property="info.key" :label="info.title">
              <template slot-scope="scope">{{scope.row[scope.column.property]}}</template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-form>
    <div class="imgBox">
      <el-image :src="src">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
    </div>
  </div>
</template>
<script>
import {Order} from '../../../extends/services';
export default {
	data() {
		return {
			src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
			tableData: [{key: 'itemName', title: '服务项目'}, {key: 'unitName', title: '单位'}, {key: 'price', title: '单价'}, {key: 'amount', title: '数量'}, {key: '5', title: '金额'}],
      form:[],
      id:''
		};
	},
	created() {
		let ID = this.$router.history.current.query.orderID;
    let ID_ = this.$router.history.current.query;
    let idd={orderID:'Ord_1181401186822131712'}
    window.sessionStorage.setItem('orderID', ID);
		Order('GetMerchantOrderDetail', 'GET', idd).then(res => {
			if (res.data.statusCode == 1) {
        this.form.push(res.data.data);
        window.sessionStorage.setItem('form',JSON.stringify(this.form))
			} else {
				this.$message({
					type: 'warning',
					title: res.data.message
				});
			}
    });
  },
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
.imgBox {
	width: 250px;
	height: 250px;
	float: left;
	margin: 10px;
}
</style>