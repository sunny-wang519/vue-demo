<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right icon_s">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>index</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
    </el-breadcrumb>
    <!-- <div class="right-menu">
      <img
        src="../assets/logo.png"
        alt="图片"
        style="width: 50px; height: 50px; border-radius: 50%"
      />
      <span>login</span>
    </div> -->
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.breadcrumb {
  float: left;
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  background-color: rgba(179, 192, 209, 0.5);
}
.el-breadcrumb {
  height: 50px;
  line-height: 50px;
  margin-left: 10px;
}
.icon_s{
  color:blue;
}
/* .right-menu {
  float: right;
  width: 50%;
} */
</style>