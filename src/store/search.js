import { reqgetSearchInfo } from '@/api'
const state = {
  searchList: {}
};
const mutations = {
  // 搜索模块数据
  GETSEARCHINFO (state, searchList) {
    state.searchList = searchList;
  }
};
const actions = {
  // 获取搜索模块的数据
  async getSearchInfo ({ commit }, params = {}) {
    let result = await reqgetSearchInfo(params);
    if (result.code == 200) {
      commit('GETSEARCHINFO', result.data);
    }
  }
};
const getters = {
  attrsList (state) {
    return state.searchList.attrsList || [];
  },
  goodsList (state) {
    return state.searchList.goodsList || [];
  },
  trademarkList (state) {
    return state.searchList.trademarkList || [];
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}