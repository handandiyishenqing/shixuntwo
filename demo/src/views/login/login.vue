<template>
    <div class="login">
      <el-card class="box">
        <h3>系统登录</h3>
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <div class="df" prop="code">
              <el-input v-model="form.code" placeholder="请输入验证码" class="width"></el-input>
              <span class="w"><img :src="img" alt="" @click="imgReset"></span>
            </div>
          </el-form-item>
          <el-form-item class="df">
            <el-button type="primary" @click="loginOk">登录</el-button>
            <el-button @click="rese">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script>
  import { handelLoginImg, handelLogin } from "../../api/login";
  export default {
    name: "login",
    data() {
      return {
        form: {
          username: "",
          password: "",
          code: "",
        },
        rules: {
          username: [
            { required: true, message: "请输入用户名", trigger: "blur" },
            { min: 3, max: 8, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: "请输入密码", trigger: "blur" },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        },
        img: "",
      };
    },
    methods: {
      //随机图片验证码
      async loginImg() {
        try {
          let arr = [];
          let img = await handelLoginImg();
          arr.push(img);
          this.img = window.URL.createObjectURL(new Blob(arr));
        } catch (error) {
          console.log(error);
        }
      },
      imgReset() {
        this.loginImg();
      },
      // 表单验证登录
      loginOk() {
        this.$refs["form"].validate(async (valid) => {
          if (valid) {
            let str = `username=${this.form.username}&password=${this.form.password}&code=${this.form.code}`;
            await this.$store.dispatch("handleLogin", str);
            const token = this.$store.state.token;
            if (!token) return;
            this.$message({
              message: "恭喜你，登录成功",
              type: "success",
            });
            this.$router.push("/houtai");
          } else {
            console.log("验证错误");
            return false;
          }
        });
      },
      rese() {
        this.$refs["form"].resetFields();
      },
    },
    created() {
      this.loginImg();
    },
  };
  </script>
  
  <style>
  .login {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .box {
    width: 430px;
    height: 340px;
    border-radius: 10px;
    background-color: #fff;
    margin: 100px auto;
    padding: 20px 35px;
  }
  h3 {
    text-align: center;
    font-size: 25px;
  }
  .df {
    display: flex;
    padding: 0;
    justify-content: space-between;
  }
  .width {
    flex: 1;
    margin-right: 20px;
  }
  .w {
    flex: 0.4;
  }
  
  button {
    width: 185px;
  }
  </style>