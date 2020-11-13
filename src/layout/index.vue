<template>
  <div class="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <Sidebar width="200px">Aside</Sidebar>
      <el-container>
          <el-header><Navbar/></el-header>
          <el-main><Main/></el-main>
      </el-container>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import {Sidebar,Navbar,Main} from './components'
export default {
    name:'Home',
    components:{
        Sidebar,
        Navbar,
        Main
    }
}
</script>

<style scoped>
/* .el-footer{
  position: absolute;
    bottom: 0;
    width: 100%;  
} */
.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>