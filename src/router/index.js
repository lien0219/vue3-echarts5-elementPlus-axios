import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/index",
    name: "index",
    component: () => import("../views/index/index.vue"),
  },
  {
    path: "/other",
    name: "other",
    component: () => import("../views/other/index.vue"),
  },
  {
    path: "/order",
    name: "order",
    component: () => import("../views/order/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
