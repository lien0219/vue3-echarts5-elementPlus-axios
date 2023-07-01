<template>
  <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
  <div ref="chart" :style="style"></div>
</template>

<script setup>
import { computed, defineProps, onMounted, reactive, ref } from "vue";
import * as echarts from "echarts";

const { width, height, option } = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "200px",
  },
  option: {
    type: Object,
    default: () => ({
      title: {
        //标题
        left: "center", //居中
        text: "ECharts",
        textStyle: {
          //文字样式
          color: "#f60",
          fontSize: 20,
        },
      },
      color: "#f60", //系列柱颜色
      tooltip: {}, //提示
      legend: {
        //图例
        data: ["销量"],
        top: "5%",
        left: "left",
        textStyle: {
          //文字样式
          color: "white",
        },
      },
      xAxis: {
        //X轴
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        axisLine: {
          lineStyle: {
            color: "white",
          },
        },
        axisLabel: {
          // rotate: 45, //倾斜角度
          interval: 0, //间隔
          formatter: (value) => value.split("").join("\n"), //文字竖排
        },
      },
      yAxis: {
        //Y轴
        axisLine: {
          lineStyle: {
            color: "yellow",
          },
        },
        axisLabel: {
          formatter: function (value, index) {
            return value % 2 == 0 ? value + "件" : value;
          },
        },
      },
      grid: {
        containLabel: true,
        left: "2%",
        right: "2%",
        top: "12%",
        bottom: "5%",
      },
      series: [
        {
          name: "销量",
          type: "line", //图表类型
          data: [150, 200, 346, 1400, 140, 230], //图表数据
          label: {
            show: true,
            position: "inside",
          },
        },
      ],
    }),
  },
});
const chart = ref(); //创建dom引用
const style = computed(() => ({ width, height }));
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(chart.value);
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize(); //自适应
  });
});
</script>
