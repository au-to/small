import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import home from './home.js'
import search from './search'
import detail from './detail'
import shopCart from './shopCart';
import user from './user.js';
import trade from './trade.js';
const store = new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    shopCart,
    user,
    trade,
  }
})
export default store