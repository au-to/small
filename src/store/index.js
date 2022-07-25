import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import home from './home.js'
import search from './search'
import detail from './detail'
import shopCart from './shopCart';
const store = new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    shopCart
  }
})
export default store