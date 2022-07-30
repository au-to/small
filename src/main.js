import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
Vue.config.productionTip = false

import TapNav from '@/components/TapNav'
// 注册tapnav为全局组件
Vue.component('TapNav', TapNav);
// 引入mock数据
import '@/mock/mockServe';
// 引入轮播图样式
import 'swiper/css/swiper.css'
// 引入api接口请求文件
import * as API from '@/api'
// element-ui按需引入弹框组件
import { MessageBox } from 'element-ui';
Vue.component(MessageBox.name, MessageBox);
Vue.prototype.$alert = MessageBox.alert;
// 引入图片懒加载插件
import VueLazyload from 'vue-lazyload'
import loadimage from '@/assets/logo.png';
Vue.use(VueLazyload, {
  loading: loadimage,
})
// 引入表单验证插件
import '@/plugins/vee-validate';

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate () {
    // 全局挂载api
    Vue.prototype.$API = API;
  }
}).$mount('#app')
