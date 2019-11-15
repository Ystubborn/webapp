<template>
  <div style="padding: 50px;">
    <el-form class="form-wrapper padding" ref="editForm" :model="editForm" :rules="editRules" label-width="110px">
      <el-form-item label="" prop="photo">
        <el-upload :action="base" multiple accept="image/png, image/jpeg" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-progress="uploadProgress" :on-success="uploadSuccess" :on-error="uploadError" :file-list="editFiles" :show-file-list="true">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="primary" @click="editEnsure">保存</el-button> -->
      </el-form-item>
    </el-form>
    <el-dialog class="preview-modal" :visible.sync="imgVisible" append-to-body>
      <img width="100%" :src="dialogImageUrl" alt="photo">
    </el-dialog>
  </div>
</template>
<script type="text/ecmascript-6">
//   import base from 'api/env' // 配置了图片上传接口地址的js文件
import {mapMutations,mapState,setGetters, mapGetters} from 'vuex';
import { async } from 'q';
import detail from '../vuex/modules/detail';
export default {
	computed:{
		...mapState({imgs:state => state.detail.imgUrls}),
	},
	data() {
		return {
			UploadFiles:"http://apifile.zys6d.cn",//文件服务器地址
			editForm: {
			},
			editRules: {
				// 表单验证规则
				photo: [{required: true, message: '请上传活动图片', trigger: 'blur'}]
			},
			editFiles: [], // 编辑时已上传图片初始化
			uploadComplete: true,
			// base: base.imgURL + 'upload/img',
			base: 'upload/img',
			imgVisible: false, // 上传图片预览
			dialogImageUrl: '', // 图片预览地址
		};
	},
	created() {
		console.log(this.imgs)
		// console.log(this.imgUrls)	
		// this.imgs = this.imageUrls
		this.initInfo();
		// console.log(this.imgs)
	},
	mounted(){

	},
	methods: {
		// 编辑
		...mapMutations('detail',["imgs"]),
		initInfo() {
			// 这里photo应从服务器获取，存储的是数组，请按照相应格式获取图片url（这里直接给值）
			// console.log(this.$store.state.detail.imgUrls)
			console.log(this.imgs)
			this.$forceUpdate()
			// if (this.imageUrls.length > 0) {
			// 	for (let t = 0; t < this.imageUrls.length; t++) {
			// 		//通过[{name: 'name', url: 'url地址'}]格式初始化照片墙
			// 		this.editFiles.push({url: this.UploadFiles + this.imageUrls[t] });
			// 		// if (t === 0) {
			// 		// 	this.editForm.photo += temp[t].index;
			// 		// } else {
			// 		// 	// 最终photo的格式是所有已上传的图片的url拼接的字符串（逗号隔开），根据实际需要修改格式
			// 		// 	this.editForm.photo += ',' + temp[t].index;
			// 		// }
			// 	}
			// }
			// this.editVisible = true;
		},
		// 确认修改
		// editEnsure() {
		// 	if (!this.uploadComplete) {
		// 		this.$message.error('图片正在上传，请稍等');
		// 		return;
		// 	}
		// 	console.info(this.editForm.photo);
		// 	// 调用接口...
		// },
		// 上传图片前调用方法
		beforeUploadPicture(file) {
			if (file.size > 10 * 1024 * 1024) {
				this.$message.error('上传图片不能大于10M');
				return false;
			}
		},
		// 上传图片时调用
		uploadProgress(event, file, fileList) {
			this.uploadComplete = false;
		},
		// 上传图片成功
		uploadSuccess(res, file, fileList) {
			this.uploadComplete = true;
			this.fileChange(fileList);
		},
		// 上传图片出错
		uploadError(err, file, fileList) {
			this.$message.error('上传出错');
		},
		// 移除图片
		handleRemove(file, fileList) {
			this.fileChange(fileList);
		},
		// 设置photo值
		fileChange(fileList) {
			let temp_str = '';
			if (fileList.length > 0) {
				for (let i = 0; i < fileList.length; i++) {
					if (fileList[i].response) {
						if (fileList[i].response.code === 0) {
							if (i === 0) {
								temp_str += fileList[i].response.data;
							} else {
								temp_str += ',' + fileList[i].response.data;
							}
						}
					} else if (fileList[i].status && fileList[i].status === 'success') {
						if (i === 0) {
							temp_str += fileList[i].url;
						} else {
							temp_str += ',' + fileList[i].url;
						}
					}
				}
			}
			this.editForm.photo = temp_str;
		},
		// 图片预览
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.imgVisible = true;
		}
	}
};
</script>