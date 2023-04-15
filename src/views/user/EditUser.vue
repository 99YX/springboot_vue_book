<template>
  <div style="padding: 20px;width: 80%;text-align: center">
    <!--表单-->
    <el-form :inline="true" :model="form" class="demo-form-inline" label-width="120px">

      <el-form-item label="姓名">
        <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="卡号">
        <el-input v-model="form.username" placeholder="请输入卡号"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
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
      <el-button type="primary" @click="update">提交</el-button>
      <el-button type="danger">取消</el-button>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  name: "EditUser.vue",
  data(){
    return{
      form:{

      }
    }
  },
  created() {

   const id = this.$route.query.id;/*获取请求id*/
    console.log("this.$route.query.id==>"+id)
    request.get("/user/"+id).then(res=>
        {
          console.log("我是更新接口"+res.data.id)
          this.form=res.data
        }
    )

  },
  methods:{
    /*新增方法*/
    update(){

      request.post("/user/update",this.form).then(res=>{
        if(res.code==200){
          this.$message.success("更新用户成功")
          /*提交成功后，表单数据清空数据*/
          this.form={}
          /*跳转页面*/
          this.$router.push("/user")
        }
        else {
          this.$notify.error("更新用户失败")
        }
      })

    }
  }
}
</script>




<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
name: "EditUser.vue",
