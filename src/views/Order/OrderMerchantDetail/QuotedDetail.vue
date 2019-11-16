<template>
  <div>
   <div class="FE_hide" v-if="display">
      您的订单中没有报价单产生哟~
    </div>
    <el-form label-width="100px" v-else>
      <el-row>
        <el-col :span="12">
          <el-form-item label="报价服务商">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="最快出发时间">
            <el-input ></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="报价时间">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="报价有效期">
            <el-input></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-table>
            <el-table-column v-for="info in tableData" :key="info.key" :property="info.key" :label="info.title">
              <template slot-scope="scope">{{scope.row[scope.column.property]}}</template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
	data() {
		return {
      display:true,
			tableData: [{key: '1', title: '服务项目'}, {key: '2', title: '单位'}, {key: '3', title: '报价金额'}, {key: '4', title: '数量'}, {key: '5', title: '金额'}]
		};
    },
    created(){
        	this.getData = JSON.parse(window.sessionStorage.getItem('form'));
		if (this.getData[0].additionalFeeListDTO == undefined) {
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
</style>