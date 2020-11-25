<template>
  <el-aside width="200px" class="aside">
    <el-menu router>
      <el-menu-item index="/home">
        <span slot="title">home_list</span>
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
          <span slot="title">other</span>
        </template>
        <el-menu-item index="/other/calendar">calendar</el-menu-item>
        <el-menu-item index="/other/transfer">transfer</el-menu-item>
        <el-menu-item index="/other/carousel">carousel</el-menu-item>
      </el-submenu>
      <el-menu-item index="/form_demo">
        <span slot="title">form</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  method: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>