<template>
  <el-transfer
    filterable
    :filter-method="filterMethod"
    filter-placeholder="请输入城市"
    v-model="value"
    :data="data"
  >
  </el-transfer>
</template>

<script>
export default {
  data() {
    const generateData = () => {
      const data = [];
      const cities = ["上海", "北京", "广州", "深圳","长春", "南京", "西安", "成都","武汉","长沙","南宁","淮北"];
      const citys = [
        "上海",
        "北京",
        "广州",
        "深圳",
        "南京",
        "西安",
        "成都",
        "武汉",
        "长沙",
        "南宁",
        "淮北",
        "长春"
      ];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          citys: citys[index],
        });
      });
      return data;
    };
    return {
      data: generateData(),
      value: [0,1,4,6,8,9],
      filterMethod(query, item) {
        return item.citys.indexOf(query) > -1;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.el-transfer{
  text-align: left !important;
  margin-left: 10%;
  /* color: #42b983; */
}
</style>