<template>
  <div class="header">
    <span>Header</span>
    <div class="right">
      <img src="../assets/logo.png" alt="" />
      <div class="right-menu">
        <span>登录</span>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.right {
  float: right;
  width: 150px;
  height: 60px;
  line-height: 60px;
  img {
    float: left;
    margin: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .right-menu {
    float: right;
    font-size: 18px;
    font-family: "黑体";
    .el-dropdown {
      margin-left: 15px;
      .el-icon-setting {
        color: #fff;
        font-size: 18px;
      }
      .el-dropdown-link {
        cursor: pointer;
        color: #409eff;
      }
    }
  }
}
</style>