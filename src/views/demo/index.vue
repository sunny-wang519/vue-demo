<template>
  <div class="demo" id="allmap"></div>
</template>

<script>
import BMap from 'vue-baidu-map'
export default {
  methods: {
    initMap() {
      // GL版命名空间为BMapGL
      var map = new BMap.Map("allmap"); // 创建Map实例
      map.centerAndZoom(new BMap.Point(118.5, 27.5), 5); // 初始化地图,设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      map.setMapType(window.BMAP_EARTH_MAP); // 设置地图类型为地球模式
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>

<style lang="scss" scoped>
.demo{
  width: auto;
  height: 600px;
  margin: 0 auto;
}
</style>