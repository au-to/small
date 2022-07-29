import axios from "axios";
import Nprogress from 'nprogress'
import '../../node_modules/nprogress/nprogress.css'
import store from "@/store";

const requests = axios.create({
  baseURL: '/api',
  timeout: 5000
})
// 请求拦截器
requests.interceptors.request.use((config) => {
  Nprogress.start();
  if (store.state.detail.uuid_token) {
    // 请求头添加字段userTempId，需要与后端商量
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  // 请求头添加token字段
  if(store.state.user.token){
    config.headers.token = store.state.user.token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
})

// 响应拦截器
requests.interceptors.response.use((res) => {
  Nprogress.done();
  return res.data;
}, (error) => {
  return Promise.reject(error);
})

export default requests