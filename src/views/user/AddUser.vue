<template>
<div style="padding: 20px;width: 80%;text-align: center">
<!--表单-->
  <el-form :inline="true" :model="form" class="demo-form-inline" label-width="120px">
    <el-form-item label="姓名">
      <el-input v-model="form.user" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-form-item label="用户名">
      <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
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
    <el-button type="primary">提交</el-button>
    <el-button type="danger">取消</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: "AddUser.vue",
  data(){
    return{
      form:{

      }
    }
  }
}
</script>

<style scoped>

</style>
