import axios from "axios";
import Nprogress from 'nprogress'
import '../../node_modules/nprogress/nprogress.css'

const requests = axios.create({
  baseURL: '/api',
  timeout: 5000
})
// 请求拦截器
requests.interceptors.request.use((config) => {
  Nprogress.start();
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