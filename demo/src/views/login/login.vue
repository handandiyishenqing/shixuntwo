<template>
    <div>
        <div class="login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item prop="pwd">
                    <el-input v-model="ruleForm.pwd"  show-password></el-input>
                </el-form-item>
                <el-form-item prop="num">
                    <el-input v-model="ruleForm.num" placeholder="请输入验证码"></el-input>
                </el-form-item>
                <p>{{this.randomnum}}</p>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    name: "login",
    data() {
        return {
            ruleForm: {
                username: '',
                pwd: "",
                num: "",
            },
            // 验证

            // 随机数
            randomnum:"",
            rules: {
                username: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                pwd: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 6, max: 18, message: '长度在 6 到 19 个字符', trigger: 'blur' }
                ],
            },
        }
    },
    methods: {
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(valid);
            if(this.ruleForm.num == this.randomnum){
                this.$router.push('/houtai')
            }else{
                alert('验证码输入错误')
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created() {
        this.randomnum = Math.random().toString().slice(2,6)
    },
}
</script>