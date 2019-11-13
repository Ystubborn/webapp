<template>
  <div class="login">
    <el-form :model="loginForm" :rules="rules" class="panel" ref="loginForm" label-width="0">
      <el-form-item prop="name">
        <el-input v-model="loginForm.userAccount" prefix-icon="el-icon-user" placeholder="账号" type="text"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.userPwd"
          prefix-icon="el-icon-lock"
          placeholder="密码"
          type="password"
          @keyup.enter.native="login"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login(loginForm)">登录</el-button>
      </el-form-item>
      <p class="text-center">© 2019 design by lq.Chen</p>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name:"Login",
  data() {
    return {
      loginForm: {
        userAccount: "",
        userPwd: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [
          {
            validator: (a, b, c) => {
              // if (!/^\S{6,16}$/.test(b)) {
              // 	return c(new Error('请输入6到16位长度的密码'));
              // }
              c();
            },
            trigger: "blur"
          }
        ]
      },
    };
  },
  mounted() {
  	// this.$store.commit('userCtx', {});
  	// sessionStorage.clear();
  },
  methods: {...mapActions("user",["login"])}
};
</script>

<style lang="less">
.login {
  position: fixed;
  height: 100%;
  width: 100%;
  .left {
    width: 65%;
    height: 100%;
    background: linear-gradient(to right, #fff, #409eff);
    > div {
      height: 100%;
      width: 100%;
    }
  }
}
.panel {
  width: 320px;
  padding: 10px 30px;
  position: absolute;
  top: 50%;
  height: 340px;
  font-size: 14px;
  left: 50%;
  margin-top: -170px;
  .el-input {
    width: 320px;
    &.imgcode {
      width: 230px;
    }
  }
  & > div {
    margin-bottom: 20px;
  }
  h3 {
    font-size: 22px;
    color: #409eff;
    line-height: 60px;
    font-weight: bold;
    text-align: center;
  }
  img {
    display: inline-block;
    vertical-align: top;
    border: 1px solid #d7d7d7;
    margin-left: 13px;
  }
  button {
    width: 320px;
    height: 40px;
    margin-top: 10px;
    background: #0086e4;
    border-radius: 4px;
    color: #fff;
    border: 0;
  }
}
</style>

