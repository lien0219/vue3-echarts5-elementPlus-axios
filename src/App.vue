<template>
  <div class="common-layout">
    <el-container>
      <NavMenu />
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import NavMenu from "./views/navMenu.vue";
</script>
<style scoped></style>
