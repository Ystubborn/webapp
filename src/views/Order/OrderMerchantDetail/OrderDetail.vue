<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <div class="title">
          <span>基本信息</span>
        </div>
        <el-col :span="8">
          <el-form-item label="单号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="下单日期">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="派单日期">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="订单状态">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="订单金额">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="服务类型">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="服务项目 ">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="客服">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="商户">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="支付状态">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <div class="title">
          <span>客户信息</span>
        </div>
        <el-col :span="12">
          <el-form-item label="客户">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="省市区">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
           <el-form-item label="备注">
            <el-input type="textarea" v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电话">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="紧急电话">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="电话紧急联系人">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <div class="title">
          <span>物流信息</span>
        </div>
        <el-col :span="8">
          <el-form-item label="物流公司">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="件数">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
           <el-form-item label="抬楼">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="物流单号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="到货情况">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="代付运费">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
           <el-form-item label="到货日期">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
           <el-col :span="8">
          <el-form-item label="物流费">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="提货地点">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    <el-row>
         <div class="title">
          <span>服务信息</span>
        </div>
    </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
	data() {
		return {
			form: {
				name: ''
			}
		};
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
</style>