<template>
  <el-aside width="200px" class="aside">
    <el-menu router>
      <el-menu-item index="/home">
        <span slot="title">index</span>
      </el-menu-item>
      <el-menu-item index="/map">
        <span slot="title">map</span>
      </el-menu-item>
      <el-menu-item index="/demo">
        <span slot="title">demo</span>
      </el-menu-item>
      <!-- 有子级 -->
      <el-submenu index="1-4">
        <template slot="title">
          <span slot="title">demo1</span>
        </template>
        <el-menu-item index="/demo1/calendar">calendar</el-menu-item>
        <el-menu-item index="/demo1/transfer">transfer</el-menu-item>
        <el-menu-item index="/demo1/carousel">Carousel</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.aside {
  background: #fff;
  .el-menu {
    border-right: none;
    background-color: #fff;
    color: #fff;
  }
}
</style>