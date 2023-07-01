<template>
  <div class="index-content">
    <div style="flex: 1">
      <div class="content">
        <!-- 异步组件 -->
        <Suspense>
          <template #default>
            <Charts />
          </template>
        </Suspense>
      </div>
    </div>
  </div>
  <h4>echarts地图使用</h4>
</template>

<script setup>
import { reactive, ref } from "vue";
import Charts from "./charts.vue";
</script>
