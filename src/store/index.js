import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import home from './home.js'
import search from './search'
const store = new Vuex.Store({
  modules: {
    home,
    search
  }
})
export default store