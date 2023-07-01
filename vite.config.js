import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import ElementPlus from "unplugin-element-plus/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// 组件自动加载
// const Components = require("unplugin-vue-components/webpack");
// const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

export default defineConfig({
  plugins: [
    vue(),
    // 自动按需加载
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
    ElementPlus({
      importStyle: "sass",
      useSource: true,
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    port: 5173,
    cors: true, // 允许跨域
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3333",
        // target就是你要访问的目标地址，可以是基础地址，这样方便在这个网站的其他api口调用数据
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
