<template>
  <div class="map">
    <baidu-map id="Bmap" @ready="mapReady"> </baidu-map>
  </div>
</template>
<script>
export default {
  data() {
    return {
      point: "",
    };
  },
  methods: {
    mapReady({ BMap, map }) {
      // 选择一个经纬度作为中心点  114.330558,30.601513-武汉
      this.point = new BMap.Point(116.404, 39.915); // 初始化地图,设置中心点坐标和地图级别
      map.centerAndZoom(this.point, 12);      
      map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
      var scaleCtrl = new BMap.ScaleControl(); // 添加比例尺控件
      map.addControl(scaleCtrl);
      var navControl = new BMap.NavigationControl(); //添加缩放
      map.addControl(navControl);
    },
  },
  mounted() {
    // this.createMap();
  },
};
</script>

<style lang="scss" scoped>
/* 设定地图的大小 */
#Bmap {
  width: auto;
  height: 600px;
  margin: 0 auto;
}
</style>