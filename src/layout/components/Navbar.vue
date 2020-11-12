<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="right-menu">
      <img
        src="../../assets/logo.png"
        alt="图片"
        style="width: 50px; height: 50px; border-radius: 50%"
      />
      <span>登录</span>
    </div>
  </div>
</template>
<style scoped>
.el-breadcrumb {
  float: left;
  width: 50%;
}
.right-menu {
  float: right;
  width: 50%;
}
</style>