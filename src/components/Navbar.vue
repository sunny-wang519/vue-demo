<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right icon_s">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>index</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.breadcrumb {
  float: left;
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  .el-breadcrumb {
    height: 50px;
    line-height: 50px;
    margin-left: 10px;
    /deep/.el-breadcrumb__item > .el-breadcrumb__separator {
      color: black !important;
    }
  }
}
</style>