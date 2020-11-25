<template>
  <div class="app">
    <el-container>
      <el-header><Header></Header></el-header>
      <el-container>
        <Sidebar width="200px">Aside</Sidebar>
        <el-container>
          <el-main>
            <Navbar />
            <Main />
          </el-main>
        </el-container>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import { Header,Sidebar, Navbar, Main } from "../components";
export default {
  name: "index",
  components: {
    Header,
    Sidebar,
    Navbar,
    Main,
  },
};
</script>

<style>
/* .el-footer{
  position: absolute;
    bottom: 0;
    width: 100%;  
} */
.el-header{
  background-color: #626974;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #a0aab9;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #c9d3df;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e7ecf1;
  text-align: center;
  padding:5px !important;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>