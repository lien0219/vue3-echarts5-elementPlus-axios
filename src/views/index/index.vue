<template>
  <div class="index-content">
    <div style="flex: 0 1 40%">
      <div class="content">
        <Chart
          :chartType="'line'"
          :chartData="[150, 200, 346, 1400, 140, 230]"
        />
      </div>
      <div class="content">
        <Chart :chartType="'bar'" :chartData="[15, 20, 346, 149, 190, 430]" />
      </div>
      <div class="content">
        <Chart
          :chartType="'line'"
          :chartData="[150, 200, 346, 1400, 140, 230]"
        />
      </div>
    </div>
    <div style="flex: 0 1 60%">
      <div class="content">
        <Chart2 />
      </div>
    </div>
  </div>
  <h4>第一种封装方式</h4>
</template>

<script setup>
// import { onMounted, reactive, ref } from "vue";
import Chart from "./charts.vue";
import Chart2 from "./charts2.vue";
</script>
