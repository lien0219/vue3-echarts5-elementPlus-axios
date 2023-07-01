<template>
  <el-aside width="200px" class="aside">
    <el-menu default-active="2" class="el-menu-vertical-demo" router>
      <el-menu-item :index="items.url" v-for="items in items" :key="items.url">
        <span>{{ items.name }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { reactive } from "vue";
const items = reactive([
  { name: "vue3+echarts5封装方式1", url: "/index" },
  { name: "vue3+echarts5封装方式2", url: "/order" },
  { name: "使用地图", url: "/other" },
]);
</script>
