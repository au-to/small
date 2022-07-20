import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
Vue.config.productionTip = false

import TapNav from '@/components/TapNav'
// 注册tapnav为全局组件
Vue.component('TapNav', TapNav);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
