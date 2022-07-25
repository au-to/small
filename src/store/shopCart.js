import { reqgetCartList } from '@/api'

const state = {
  cartList: []
};
const mutations = {
  GETCARTLIST (state,cartList) {
    state.cartList = cartList;
  }
}
const actions = {
  // 获取个人购物车数据
 async getCartList ({commit}) {
    let result = await reqgetCartList();
    if (result.code == 200) {
      commit('GETCARTLIST',result.data)
    }
  }
}
const getters = {
  cartList (state) {
    return state.cartList[0] || {};
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}