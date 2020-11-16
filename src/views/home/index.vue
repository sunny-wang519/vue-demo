<template>
  <div class="home">
    home
    <div class="block">
      <el-color-picker v-model="color1"></el-color-picker>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        color1: '#409EFF'
      }
    }
  };
</script>