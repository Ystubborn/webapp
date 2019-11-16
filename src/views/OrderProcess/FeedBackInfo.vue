<template>
  <div>
    <div class="FE_hide" v-if="display">此单据数据未返回数据哟</div>
    <div class="feedbackinfo" v-else>
      <div class="title">
        <span>问题单详情</span>
        <div class="rb">
          <el-button type="warning" size="small" @click="cancel">撤销</el-button>
        </div>
      </div>
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="单据编码">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="问题类别">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="服务类型">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="客户名称">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="服务单号">
              <el-input v-model="ruleForm.feedBackID"></el-input>
            </el-form-item>
            <el-form-item label="商户单号">
              <el-input v-model="ruleForm.merchantName"></el-input>
            </el-form-item>
            <el-form-item label="处理状态">
              <el-input v-model="ruleForm.handleStatus_txt "></el-input>
            </el-form-item>
            <el-form-item label="客户电话">
              <el-input v-model="ruleForm.customerPhone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="反馈时间">
              <el-input v-model="ruleForm.feedDate"></el-input>
            </el-form-item>
            <el-form-item label="反馈人">
              <el-input v-model="ruleForm.customerName"></el-input>
            </el-form-item>
            <el-form-item label="商户">
              <el-input v-model="ruleForm.merchantName"></el-input>
            </el-form-item>
            <el-form-item label="客户地址">
              <el-input v-model="ruleForm.customerAddress"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="问题描述">
              <el-input type="textarea" v-model="ruleForm.feedDesc" style="width:80%"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <div class="title">
          <span>负责界定</span>
          <div class="rb">
            <el-button type="primary" size="small" @click="save">保存</el-button>
          </div>
        </div>
        <el-row>
          <el-col :span="24">
            <el-form-item label="处理结论">
              <el-input type="textarea" v-model="ruleForm.replyContent" style="width:80%"></el-input>
            </el-form-item>
            <el-form-item label="处理方式">
              <el-input type="textarea" v-model="ruleForm.handleStatus_txt" style="width:80%"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>

</template>
<script>
import {OrderProcess} from '../../extends/services';
import {mapActions} from 'vuex';
export default {
	data() {
		return {
			display: false,
			ruleForm: {
				feedBackID: '',
				merchantName: '',
				handleStatus_txt: '',
				customerPhone: '',
				feedDate: '',
				customerPhone: '',
				feedDate: '',
				customerName: '',
				merchantName: '',
				customerAddress: '',
				feedDesc: '',
				replyContent: '',
				handleStatus_txt: ''
			},
			getData: {
				feedBackID: 'fed_1194140908623368192'
			}
		};
	},
	created() {
		OrderProcess('GetFeedBackInfo', 'GET', this.getData).then(res => {
			if (res.statusCode == 1) {
				let a = res.data.data;
				this.ruleForm = {
					feedBackID: a.feedBackID,
					merchantName: a.merchantName,
					handleStatus_txt: a.handleStatus_txt,
					customerPhone: a.customerPhone,
					feedDate: a.feedDate,
					customerPhone: a.customerPhone,
					feedDate: a.feedDate,
					customerName: a.customerName,
					merchantName: a.merchantName,
					customerAddress: a.customerAddress,
					feedDesc: a.feedDesc,
					replyContent: a.replyContent,
					handleStatus_txt: a.handleStatus_txt
				};
			} else {
				this.display = !false;
			}
		});
	},
	methods: {
		save() {},
		cancel() {
			OrderProcess('CancelFeedBack', 'POST', this.getData).then(res => {
				if (res.data.statusCode == 1) {
					this.$message({
						type: 'success',
						title: res.data.message
					});
				} else {
					this.$message({
						type: 'warning',
						title: '撤销失败'
					});
				}
			});
		}
	}
};
</script>
<style lang="less" scoped>
.feedbackinfo {
	overflow: hidden;
	padding: 10px;
	background: white;
	border-radius: 5px;
}
.FE_hide {
	text-align: center;
	font-weight: bolder;
	font-size: 18px;
	line-height: 50px;
	color: #aaa8a8;
}
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
.list {
	display: flex;
	ul {
		li {
			width: 100px;
			border: 1px solid black;
			height: 50px;
			line-height: 50px;
			text-align: center;
			overflow: hidden;
			margin: 0 0 -1px -1px;
			&:first-child {
				height: 30px;
				line-height: 30px;
			}
		}
	}
}
</style>