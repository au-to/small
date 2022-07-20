import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import home from './home.js'
const store = new Vuex.Store({
  modules: {
    home
  }
})
export default store