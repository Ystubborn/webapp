<template>
  <div>
    <el-row>
      <el-col class="pd" :span="8">
        <el-form ref="form" :model="form" size="small" label-width="80px">
          <div class="Md_box">
            <div class="Md_title">
              <span>基础资料</span>
              <div class="rb">
                <el-button type="primary" size="small">审核</el-button>
                <el-button type="danger" size="small">驳回</el-button>
              </div>
            </div>
            <div class="Md_m_box">
              <div class="Md_header">
                <div class="demo-type">
                  <el-avatar :size="80" src="https://empty" @error="errorHandler">
                    <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
                  </el-avatar>
                </div>
                <div class="Md_h_r">
                  <h3>张三</h3>
                  <div class="Md_word">
                    <i style="color:#3696ED;margin:7px" class="el-icon-edit"></i><span>个人介绍：</span>
                  </div>
                </div>
              </div>
              <div class="MD_content">
                <el-form-item label="师傅ID">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="注册日期">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="出生日期">
                  <el-date-picker type="date" placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="身份证号">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                  <!-- <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select> -->
                </el-form-item>
                <el-form-item label="所在地">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="认证状态">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="身份证">
                  <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                  </el-dialog>
                </el-form-item>
              </div>
            </div>
          </div>
        </el-form>
      </el-col>
      <el-col class="pd" :span="8">
        <div class="Md_box">
          <div class="Md_title">
            <span>服务信息</span>
            <div class="rb">
              <el-button type="primary" size="small">保存</el-button>
            </div>
            <div></div>
          </div>
          <span class="Md_head">服务类型</span>
          <div class="Md_seriver_box">
            <el-tag size="small" :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
            </el-input>
            <el-button v-else class="button-new-tag" size="mini" @click="showInput">+ New Tag</el-button>
          </div>
          <span class="Md_head">服务类目</span>
          <div class="Md_seriver_box">
            <el-tag size="small" :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
              {{tag}}
            </el-tag>
          </div>
          <span class="Md_head">服务区域</span>
          <div class="Md_seriver_box">
            <el-tag size="small" :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
              {{tag}}
            </el-tag>
          </div>
          <span class="Md_head">工作年限</span>
          <div class="Md_seriver_box gznx_bg">1111</div>
          <span class="Md_head">服务承诺</span>
          <div class="Md_seriver_box">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </el-col>
      <el-col class="pd" :span="8">
        <el-form ref="form_2" :model="form_2" size="small" label-width="80px">
          <div class="Md_box">
            <div class="Md_title">
              <span>综合数据</span>
              <div class="rb">
                <el-button type="primary" size="small">保存</el-button>
                <el-button type="danger" size="small">重置</el-button>
              </div>
            </div>
            <div>
              <div class="MD_content">
                <el-form-item label="师傅等级">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="信用分">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="好评率">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="综合评论">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="考试成绩">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="保险协议">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="保证金">
                  <el-input style="width:300px"></el-input>
                  <el-button type="warning">缴纳保证金</el-button>
                </el-form-item>
              </div>
            </div>
          </div>
        </el-form>

      </el-col>
    </el-row>
    <el-row class="Md_RowBox">
      <el-form ref="form_2" :model="form_2" size="small" label-width="80px">
        <el-col :span="24">
          <div class="Md_title">
            <span>车辆认证</span>
            <div class="rb">
              <el-button type="primary" size="small">审核</el-button>
              <el-button type="danger" size="small">驳回</el-button>
            </div>
          </div>
          <el-col class="pd" :span="8">
            <el-form-item label="车牌号">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="车辆类型">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="车辆载重">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col class="pd" :span="8">
            <el-form-item label="行驶证">
              <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>
            <el-form-item label="驾驶证">
              <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>
          </el-col>
          <el-col class="pd" :span="8">
            <el-form-item label="车辆照片">
              <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>
          </el-col>
          <div class="MD_content">

          </div>

        </el-col>
      </el-form>

    </el-row>
  </div>
</template>
<script>
const cityOptions = ['空跑费：10元', '台楼费：3楼以下免费', '免费售后：3个月', '远程费：20公里内免远程费', '打孔费：免费', '切割费：免费'];
export default {
	data() {
		return {
			checkAll: false,
			checkedCities: ['上海', '北京'],
			cities: cityOptions,
			isIndeterminate: true,
			dynamicTags: ['标签一', '标签二', '标签三'],
			inputVisible: false,
			inputValue: '',
			dialogImageUrl: '',
			dialogVisible: false,
			form: {
				name: ''
			},
			options: [
				{
					value: 'a',
					label: '男'
				},
				{
					value: 'b',
					label: '女'
				}
			],
			value: ''
		};
	},
	methods: {
		errorHandler() {
			return true;
		},
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},
		handleClose(tag) {
			this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
		},
		showInput() {
			this.inputVisible = true;
			this.$nextTick(_ => {
				this.$refs.saveTagInput.$refs.input.focus();
			});
		},
		handleInputConfirm() {
			let inputValue = this.inputValue;
			if (inputValue) {
				this.dynamicTags.push(inputValue);
			}
			this.inputVisible = false;
			this.inputValue = '';
		},
		handleCheckAllChange(val) {
			this.checkedCities = val ? cityOptions : [];
			this.isIndeterminate = false;
		},
		handleCheckedCitiesChange(value) {
			let checkedCount = value.length;
			this.checkAll = checkedCount === this.cities.length;
			this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
		}
	}
};
</script>
<style lang="less" scoped>
.el-tag + .el-tag {
	margin-left: 10px;
}
.button-new-tag {
	margin-left: 10px;
	height: 32px;
	line-height: 30px;
	padding-top: 0;
	padding-bottom: 0;
}
.input-new-tag {
	width: 90px;
	margin-left: 10px;
	vertical-align: bottom;
}
.pd {
	padding: 10px;
}
.mm {
	margin-bottom: 10px;
}
.Md_box {
	width: 100%;
	background: white;
	border-radius: 8px;
	overflow: hidden;
}
.Md_title {
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
.demo-type {
	margin-left: 15px;
	float: left;
}
.Md_h_r {
	float: left;
	margin-left: 15px;
}
.Md_header {
	border: 1px solid #eaeaea;
	overflow: hidden;
	margin: 10px;
	padding-top: 10px;
	border-radius: 5px;
}
.MD_content {
	padding-right: 10px;
}
.Md_seriver_box {
	float: left;
	width: 75%;
	overflow: hidden;
	border: 1px solid #f0f0f0;
	border-radius: 5px;
	margin: 5px 0;
	padding: 5px;
	&:hover {
		border: 1px solid #3696ed;
	}
}
.gznx_bg {
	background: #f9f9f9;
}
.Md_head {
	float: left;
	margin: 0 8px;
	font-size: 14px;
	line-height: 40px;
	color: #5a5a5a;
}
.Md_RowBox {
	background: white;
	border-radius: 5px;
	overflow: hidden;
}
</style>