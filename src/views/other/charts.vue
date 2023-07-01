<template>
  <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
  <div ref="chart" style="width: 100%; height: 620px"></div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import * as echarts from "echarts"; //引入echarts核心模块

// 引入地图文件
import chinaMap from "../../assets/china.json";
import axios from "../../http/request";

// const mapdata = await axios.get("student_location").then((res) => res.data);
// console.log(mapdata);

const chart = ref(); //创建dom引用
const option = reactive({
  series: [
    {
      type: "map", //图表类型
      map: "china", //地图类型
      data: [
        { name: "河南省", value: 20057.34 },
        { name: "北京市", value: 15477.48 },
        { name: "青海省", value: 31686.1 },
        { name: "上海市", value: 6992.6 },
        { name: "湖北省", value: 45180.97 },
        { name: "广东省", value: 55204.26 },
        { name: "云南省", value: 21900.9 },
        { name: "四川省", value: 900.9 },
      ],
      label: {
        //标签样式
        show: true, //显示地图文字
        color: "#666",
        fontSize: 11,
      },
      itemStyle: {
        areaColor: "#219edb", //区域颜色
        borderColor: "#fff",
      },
      //高亮状态下的样式处理
      emphasis: {
        label: {
          color: "#000",
          fontSize: 12,
        },
        itemStyle: {
          areaColor: "#f60",
          borderColor: "#219edb",
        },
      },
    },
  ],
  visualMap: {
    min: 800,
    max: 50000,
    text: ["High", "Low"],
    realtime: false,
    calculable: true,
    inRange: {
      color: ["green", "yellow", "orangered"],
    },
    textStyle: {
      color: "#fff",
    },
  },
});
// 指定图表的配置项和数据
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(chart.value);

  // 注册可用地图
  echarts.registerMap("china", { geoJSON: chinaMap });

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize(); //自适应
  });
});
</script>
