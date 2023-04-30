<template>
<div style="padding: 20px;width: 80%;text-align: center">
<!--表单-->
  <el-form :inline="true" :model="form" :rules="rules" ref="ruleForm" class="demo-form-inline" label-width="120px">

    <el-form-item label="姓名">
      <el-input v-model="form.name"  prop="name" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-form-item label="卡号">
      <el-input v-model="form.username" placeholder="请输入卡号"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age" >
      <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-input v-model="form.sex" placeholder="请输入年龄"></el-input>
    </el-form-item>
    <el-form-item label="联系方式">
      <el-input v-model="form.phone" placeholder="请输入联系方式"></el-input>
    </el-form-item>
    <el-form-item label="地址">
      <el-input v-model="form.address" placeholder="请输入地址"></el-input>
    </el-form-item>
  </el-form>
  <div >
    <el-button type="primary" @click="save">提交</el-button>
    <el-button type="danger">取消</el-button>
  </div>
</div>
</template>

<script>
import request from "@/utils/request";
export default {
  name: "AddUser.vue",
  data(){
     const checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('年龄不能为空'));
          }
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('请输入数字值'));
            }
          }, 1000);
    return{

      form:{

      },
      /*校验*/
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }

        ]


      }
    }
  }},
  methods:{
    /*新增方法*/
    save(){
      /*提交时候校验*/
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });


      request.post("/user/save",this.form).then(res=>{
        if(res.code==200){
          this.$message.success("添加用户成功")
          /*提交成功后，表单数据清空数据*/
          this.form={}
          this.$router.push('/user')
        }
        else {
          this.$notify.error("添加用户失败")
        }
      })

    }

  }

}

</script>

<style scoped>

</style>
