import { reqUserAddress, reqGetOrderInfo } from '@/api'
const state = {
  userAddress: [],
  orderInfo: {}
};
const mutations = {
  // 获取用户地址信息
  GETUSERADDRESS (state, userAddress) {
    state.userAddress = userAddress;
  },
  // 获取商品清单
  GETORDERINFO (state, orderInfo) {
    state.orderInfo = orderInfo;
  }
};
const actions = {
  // 获取用户地址信息
  async getUserAddress ({ commit }) {
    let result = await reqUserAddress();
    if (result.code == 200) {
      commit('GETUSERADDRESS', result.data)
    }
  },
  // 获取商品清单
  async getOrderInfo ({ commit }) {
    let result = await reqGetOrderInfo();
    if (result.code == 200) {
      commit('GETORDERINFO', result.data);
    }
  }
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}