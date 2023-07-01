import axios from "axios";

// 访问地址
const service = axios.create({
  baseURL: "/api",
  timeout: 8000,
});
// 请求拦截器
service.interceptors.request.use((config) => config);

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 错误码判断
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default service;
