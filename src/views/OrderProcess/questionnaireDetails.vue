<template>
  <div>
    <el-form>
      <el-row>
        <el-col :span="12">
          <el-form-item label="报价服务商">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="最快出发时间">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="报价时间">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="报价有效期">
            <el-input v-model="form.name"></el-input>
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
			tableData: [{key: '1', title: '服务项目'}, {key: '2', title: '单位'}, {key: '3', title: '报价金额'}, {key: '4', title: '数量'}, {key: '5', title: '金额'}]
		};
	}
};
</script>