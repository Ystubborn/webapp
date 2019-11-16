<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <div class="title">
          <span>基本信息</span>
          <div class="rb">
            <el-button size="small" @click="save">保存</el-button>
          </div>
        </div>
        <el-col :span="8">
          <el-form-item label="单号">
            <el-input v-model="form.orderID"></el-input>
          </el-form-item>
          <el-form-item label="下单日期">
            <el-input v-model="form.orderDate"></el-input>
          </el-form-item>
          <!-- <el-form-item label="派单日期">
            <el-input v-model="form[0].orderShowDTO.orderSendDate"></el-input>
          </el-form-item> -->
          <el-form-item label="订单状态">
            <el-input v-model="form.orderStatus"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="订单金额">
            <el-input v-model="form.payAmount"></el-input>
          </el-form-item>
          <el-form-item label="服务类型">
            <el-input v-model="form.serviceType_txt"></el-input>
          </el-form-item>
          <el-form-item label="服务项目 ">
            <el-input v-model="form.profileID_txt"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="商户">
            <el-input v-model="form.merchantName"></el-input>
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
            <el-input v-model="form.customerName"></el-input>
          </el-form-item>
          <el-form-item label="省市区">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form.customerAddress"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.customerAddress"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电话">
            <el-input v-model="form.customerPhone"></el-input>
          </el-form-item>
          <el-form-item label="紧急电话">
            <el-input v-model="form.emergencyPhone"></el-input>
          </el-form-item>
          <el-form-item label="电话紧急联系人">
            <el-input v-model="form.emergencyContact"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <div class="title">
          <span>物流信息</span>
        </div>
        <el-col :span="8">
          <el-form-item label="物流公司">
            <el-input v-model="form.companyName"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="件数">
            <el-input v-model="form.cargoQty"></el-input>
          </el-form-item>
          <el-form-item label="抬楼">
            <el-input v-model="form.cargoFloors"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="物流单号">
            <el-input v-model="form.billNo"></el-input>
          </el-form-item>
          <el-form-item label="到货情况">
            <el-input v-model="form.cargoIsReach"></el-input>
          </el-form-item>
          <el-form-item label="代付运费">
            <el-input v-model="form.shippingAmount"></el-input>
          </el-form-item>
          <el-form-item label="到货日期">
            <el-input v-model="form.reachDate"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="物流费">
            <el-input v-model="form.freightAmount"></el-input>
          </el-form-item>
          <el-form-item label="提货地点">
            <el-input v-model="form.reachAddress"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <div class="title">
          <span>服务信息</span>
        </div>
        <el-col :span="24">
          <el-table :data="form.list">
            <el-table-column v-for="info in tableData" :key="info.key" :property="info.key" :label="info.title">
              <template slot-scope="scope">{{scope.row[scope.column.property]}}</template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-form>
    <!-- <div class="imgBox">
      <el-image v-for="(i,ii) in src" :key="ii" style="width:200px;float:left;margin:10px" :src="i" fit="fit"></el-image>
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div> -->
  </div>
</template>
<script>
import {Order} from '../../../extends/services';
export default {
	data() {
		return {
			dialogImageUrl: '',
			dialogVisible: false,
			src: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
			form: {
				orderID: '',
				orderDate: '',
				orderStatus: '',
				payAmount: '',
				serviceType_txt: '',
				profileID_txt: '',
				marchantName: '',
				customerName: '',
				customerAddress: '',
				customerPhone: '',
				emergencyPhone: '',
				emergencyContact: '',
				companyName: '',
				phone: '',
				cargoQty: '',
				cargoFloors: '',
				billNo: '',
				cargoIsReach: '',
				shippingAmount: '',
				reachDate: '',
				freightAmountS: '',
				reachAddress: '',
				list: []
			},
			tableData: [{key: 'itemName', title: '服务项目'}, {key: 'unitName', title: '单位'}, {key: 'price', title: '单价'}, {key: 'amount', title: '数量'}, {key: '5', title: '金额'}]
		};
	},
	created() {
		let ID = this.$router.history.current.query.orderID;
		let ID_ = this.$router.history.current.query;
		window.sessionStorage.setItem('orderID', ID);
		Order('GetMerchantOrderDetail', 'GET', ID_).then(res => {
			if (res.data.statusCode == 1) {
				let a = res.data.data.orderShowDTO;
				let b = res.data.data.logisticsDTO;
				let c = res.data.data.serviceDetailListDTO;
				// let d = res.data.data.serviceDetailListDTO.imageUrls;
				this.form = {
					orderID: a.orderID,
					orderDate: a.orderDate,
					orderStatus: a.orderStatus,
					payAmount: a.payAmount,
					serviceType_txt: a.serviceType_txt,
					profileID_txt: a.profileID_txt,
					marchantName: a.marchantName,
					customerName: a.customerName,
					customerAddress: a.customerAddress,
					customerPhone: a.customerPhone,
					emergencyPhone: a.emergencyPhone,
					emergencyContact: a.emergencyContact,
					companyName: b.companyName,
					phone: b.phone,
					cargoQty: b.cargoQty,
					cargoFloors: a.cargoFloors,
					billNo: b.billNo,
					cargoIsReach: b.cargoIsReach,
					shippingAmount: b.shippingAmount,
					reachDate: b.reachDate,
					freightAmountS: b.freightAmountS,
					reachAddress: b.reachAddress,
					list: c ? c : [],
					src: a.src
				};
				// this.src = d ? d : [];
				window.sessionStorage.setItem('form', JSON.stringify(this.form));
			} else {
				this.$message({
					type: 'warning',
					title: res.data.message
				});
			}
		});
	},
	methods: {
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},
		save(e) {
			let _ = this;
			let setData = {
				isSave: 0,
				isAppointedOrder: 0,
				appointedMasterID: 'string',
				baseInfo: {
					orderID: _.form.orderID,
					customerID: 'string',
					organizationID: 'string',
					orderDate: _.form.orderDate,
					serviceDate: '2019-11-16T01:45:08.029Z',
					orderSendDate: '2019-11-16T01:45:08.029Z',
					orderStatus: _.form.orderStatus,
					quotePriceType: 'string',
					serviceType: 'string',
					serviceType_txt: _.form.serviceType_txt,
					profileID: 'string',
					profileID_txt: _.form.profileID_txt,
					merchantID: 'string',
					orderSendMode: 'string',
					employeeID: 'string',
					policyNo: 'string',
					policyFee: 0,
					policyTime: '2019-11-16T01:45:08.029Z',
					customerServices: 'string',
					orderAmount: 0,
					payStatus: 'string',
					payAmount: _.form.payAmount,
					imageUrls: 'string',
					remark: 'string',
					orderComplaint: 'string',
					orderComplaintTime: '2019-11-16T01:45:08.029Z',
					merchantEvaluation: 'string',
					customerEvaluation: 'string'
				},
				customerInfo: {
					customerID: 'string',
					customerType: 'string',
					customerName: 'string',
					phone: 'string',
					provinceID: 'string',
					cityID: 'string',
					regionID: 'string',
					provinceName: 'string',
					cityName: 'string',
					regionName: 'string',
					address: 'string',
					emergencyContact: _.form.emergencyContact,
					emergencyPhone: _.form.emergencyPhone
				},
				orderDetailList: [
					{
						orderDetailID: 'string',
						orderID: 'string',
						itemID: 'string',
						itemName: 'string',
						unitID: 'string',
						unitName: 'string',
						materialID: 'string',
						materialName: 'string',
						roomTypeID: 'string',
						roomTypeName: 'string',
						price: 0,
						qty: 0,
						amount: 0,
						imageUrls: 'string',
						remark: 'string'
					}
				],
				logisticsInfo: {
					orderLogisticsID: 'string',
					orderID: _.form.orderID,
					companyName: _.form.companyName,
					billNo: _.form.billNo,
					phone: _.form.phone,
					cargoQty: _.form.cargoQty,
					isElevator: 0,
					isUpstairs: 0,
					cargoFloors: _.form.cargoFloors,
					cargoIsReach: _.form.cargoIsReach,
					reachDate: _.form.reachDate,
					reachAddress: _.form.reachAddress,
					freightAmount: _.form.freightAmount,
					isPayFreight: 0,
					shippingAmount: _.form.shippingAmount,
					handlingAmount: 0,
					liftbuildAmount: 0
				}
			};
			Order('Save', 'POST', setData).then(res => {
				if (res.data.statusCode == 1) {
					this.$message({
						type: 'success',
						title: '订单修改成功'
					});
				}
			});
		}
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
.rb {
	float: right;
}
.imgBox {
	width: 250px;
	height: 250px;
	float: left;
	margin: 10px;
}
</style>