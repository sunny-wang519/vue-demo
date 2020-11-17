<template>
  <div class="header">
    <span>Header</span>
    <div class="right">
      <img src="../assets/logo.png" alt="" />
      <div class="right-menu">
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
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
    margin: 5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .right-menu {
    float: right;
    .el-dropdown {
      font-size: 16px;
      font-family: "黑体";
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-arrow-down {
      font-size: 14px;
    }
  }
}
</style>