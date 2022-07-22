import { reqgetCategoryList, reqgetBannerList } from '@/api'
const state = {
  categoryList: [], //三级联动
  bannerList:[], //轮播图
};
const mutations = {
  // 三级联动
  GETCATEGORYLIST (state, categoryList) {
    state.categoryList = categoryList;
  },
  // 轮播图
  GETBANNERLIST (state,bannerList) {
    state.bannerList = bannerList;
  }
};
const actions = {
  // 三级联动数据请求
  async getCategoryList ({ commit }) {
    let result = await reqgetCategoryList();
    if (result.code == 200) {
      commit('GETCATEGORYLIST', result.data);
    }
  },
  // 轮播图数据请求
  async getbannerList ({commit}) {
    let result = await reqgetBannerList();
    if (result.code == 200) {
      commit('GETBANNERLIST',result.data);
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