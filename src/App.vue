<template>
  <div id="app">

       <!--  头部  -->
    <div style="height: 60px ;line-height: 60px;background-color: aliceblue">

      <img src="./assets/logo.png" style="height: 40px;width: 40px ;position: relative;left: 20px;top: 10px">
             <!--   图片   -->
      <span style="margin-left: 35px;width: 40px;font-size: 25px">图书管理系统</span>
<!--      <el-dropdown style="margin-left: 1000px">
    <span class="el-dropdown-link">
      张三<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>
    </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出系统</el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>-->



    </div>
    <!--  侧边栏  -->
    <div style="display: flex;height:calc(100vh - 60px)">

      <div style="width: 200px;margin-right: 2px;background-color: white">
<!--   :default-openeds="['1']" 默认打开菜单     -->
        <el-menu :default-active="$route.path" :default-openeds="['1']" router class="el-menu-demo" >
              <!--   index="/"=home页面       -->
          <el-menu-item index="/">
            <i class="el-icon-s-home
">首页</i>
          </el-menu-item>

          <el-submenu index="1" >
            <template slot="title">

              <i class="el-icon-s-check
">会员管理</i>

            </template>
            <el-menu-item index="addUser">会员添加</el-menu-item>
            <el-menu-item index="user">会员列表</el-menu-item>

          </el-submenu>
        </el-menu>
      </div>

<!--  当前高度=总宽度-200px宽度  -->
      <div style="flex: 1;background-color:white">
        <!--  主体  -->
        <router-view></router-view>
      </div>



    </div>



  </div>
</template>
