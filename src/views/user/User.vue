<template>
  <div class="home " style="width: 100%;">
    <div >
      <el-input v-model="name" style="width: 240px" placeholder="请输入名称" >

      </el-input>
      <el-input v-model="phone" style="width: 240px;margin-left: 20px" placeholder="请输入联系方式">

      </el-input>
      <el-button style="margin-left: 5px" type="primary" @click="load" >
        <i class="el-icon-search">搜索</i>
      </el-button>
      <el-button style="margin-left: 5px" type="danger" @click="load" >
        <i class="el-icon-delete" @click="reset">重置</i>
      </el-button>
      <el-button style="margin-left: 5px" type="primary" @click="load" >
        <i class="el-icon-search">导入</i>
      </el-button>
      <el-button style="margin-left: 5px" type="danger" @click="load" >
        <i class="el-icon-delete" @click="reset">导出</i>
      </el-button>
    </div>
    <el-table
        :data="tableData"
        style="width: 100%;text-align: center"
        :row-class-name="tableRowClassName"

    >
      <el-table-column
          prop="id"
          label="序号"
          width="50"
          sortable>
      </el-table-column>
      <el-table-column
          prop="createtime"
          label="日期"
          width="100"
          sortable>
      </el-table-column>
      <el-table-column
          prop="name"
          label="名称"
          width="100">
      </el-table-column>
      <el-table-column
          prop="username"
          label="卡号"
          width="170">
      </el-table-column>
      <el-table-column
          prop="age"
          label="年龄"
          width="70">
      </el-table-column>
      <el-table-column
          prop="sex"
          label="性别"
          width="100">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址"
          width="80"

      >
      </el-table-column>
      <el-table-column
          prop="phone"
          label="联系方式"
          width="80"
      >
      </el-table-column>

      <el-table-column
          prop="createtime"
          label="创建时间"
          width="80"
      >
      </el-table-column>
      <el-table-column
          prop="updatetime"
          label="更新时间"
          width="80"
      >
      </el-table-column>

      <el-table-column
          label="操作"
          width="200"

      >
        <template
          v-slot="scope"
        >
            <!--  scope.row获取行数据        -->
          <el-button type="primary" @click="$router.push('/editUser?id='+scope.row.id)">修改</el-button>

          <template>
            <el-popconfirm
                title="这是一段内容确定删除吗？"
                @confirm="del(scope.row.id)"
            >
<!--    @confirm点击事件          -->
              <el-button slot="reference" type="danger">删除</el-button>
            </el-popconfirm>
          </template>
        </template>
      </el-table-column>


    </el-table>
    <!--    分页-->
    <div style="margin-top: 20px">
      <!--      <el-pagination
                background
                :current-page="params.pageNum"
                :page-size="params.pageSize"
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :total="total">
            </el-pagination>-->
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[2, 5, 10, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        <!--      toatal：是从前端传过来的数据通过动态绑定        -->
      </el-pagination>
    </div>
  </div>
</template>

<script>

import request from "@/utils/request";

export default {
  name: 'User',
  components: {

  },
  created() {

    this.load()

  },
  methods: {
    /*重置数据*/
    reset(){
      this.name='',
          this.phone='',
          this.pageNum=1,
          this.pageSize=10
      this.load()

    },
    /*获取当前的条数*/
    handleSizeChange(pageSize) {
      console.log(pageSize)
      this.pageSize = pageSize
      console.log("-------1------>"+pageSize)
      this.load()
    },
    /*获取当前的页码,因为函数需要参数，但是没有传，这个时候就会把鼠标点击的内容传入*/
    handleCurrentChange(pageNum) {
      console.log(pageNum)
      console.log("123----------"+pageNum)
      this.pageNum = pageNum
      this.load()
    },
     /*删除*/
    del(id)
    {
      request.delete("/user/delete/"+id).then(res=>{
        /*判断状态码*/
        if(res.code=='200')
        {
          this.$message.success("删除成功")
        }
        else {

          this.$notify.error(res.msg)

        }
        this.load()
      })

    },


    load(){
      /*fetch("http://localhost:8083/user/list").then(res=>res.json()).then(res=>{
        console.log(res.data)
        this.tableData=res.data

      })*/

      request.get("/user/page",{
        params: {
          /*面对对象写法：自动赋值*/
          name:this.name,
          phone:this.phone,
          pageNum:this.pageNum,
          pageSize:this.pageSize,


        },




      }).then(res=>{
        console.log(res.data.list)
        this.tableData=res.data.list
        this.total=res.data.total


      })

    }

    ,
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  },
  data() {
    return {
      tableData:'' ,
      total:0,
      name:'',
      phone:'',
      pageNum:1,
      pageSize:10,


    }
  },

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
