<template>
  <div class="At_contain">
    <el-form ref="form" :model="form" label-width="80px" size="small">
      <div class="title">
        <span>基本信息</span>
      </div>
      <el-row>
        <el-col :span="12">
          <el-form-item label="团队名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
            <el-form-item label="团队人数">
            <el-input v-model="form.c"></el-input>
          </el-form-item>
          <el-form-item label="接单状态">
            <el-input v-model="form.a"></el-input>
          </el-form-item>
          <el-form-item label="专业领域">
            <el-input v-model="form.c"></el-input>
          </el-form-item>
          <el-form-item label=状况说明>
            <el-input v-model="form.c"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="负责区域">
            <el-cascader v-model="form.city" :options="options"></el-cascader>
          </el-form-item>
          <el-form-item label="区域选择">
            <el-input v-model="form.c"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.d"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="title">
        <span>人员信息</span>
        <div class="rb">
          <el-button type="primary" @click="dialogVisible = true" size="small">增加</el-button>
          <el-dialog title="添加" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <el-input class="in-mg" v-model="form.c" placeholder="成员ID"></el-input>
            <div>
              <span>
                是否是队长:
              </span>
              <el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="0">否</el-radio>
            </div>
            <el-input  class="in-mg" v-model="form.c" placeholder="姓名"></el-input>
            <el-input  class="in-mg" v-model="form.c" placeholder="手机号"></el-input>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="date" label="队长">
        </el-table-column>
        <el-table-column prop="name" label="人员">
        </el-table-column>
        <el-table-column prop="address" label="手机号">
        </el-table-column>
        <el-table-column prop="z" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>
<script>
export default {
	data() {
		return {
			dialogVisible: false,
			value: [],
			form: {
				name: '',
				a: '',
				c: '',
				city: '',
				d: '',
			},
			options: [
				{
					value: 'zhinan',
					label: '指南',
					children: [
						{
							value: 'shejiyuanze',
							label: '设计原则',

							value: 'yizhi',
							label: '一致'
						},
						{
							value: 'fankui',
							label: '反馈'
						},
						{
							value: 'xiaolv',
							label: '效率'
						},
						{
							value: 'kekong',
							label: '可控'
						}
					]
				}
			]
		};
	},
	methods: {
		handleDelete(index, row) {
			console.log(index, row);
		},
		handleClose(done) {
			this.$confirm('确认关闭？')
				.then(_ => {
					done();
				})
				.catch(_ => {});
		}
	}
};
</script>
<style lang="less" scoped>
.At_contain {
	margin: 10px;
	background: white;
	padding: 20px;
	border-radius: 5px;
	.title {
		line-height: 40px;
		font-size: 16px;
		font-weight: bold;
		padding-left: 20px;
		border-bottom: 1px solid #f0f0f0;
		margin-bottom: 20px;
	}
	.rb {
		margin: 0 20px;
		float: right;
    }
    .in-mg{
        margin:5px 
    }
}
</style>