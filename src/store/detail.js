import { reqgetgoodInfo, reqaddShopCart } from '@/api';
import { getUUID } from '@/utils/uuid_token';

export default {
  state: {
    //产品详情信息
    goodInfo: {},
    // 游客临时身份获取
    uuid_token: getUUID()
  },
  mutations: {
    GETGOODINFO (state, goodInfo) {
      state.goodInfo = goodInfo;
    }
  },
  actions: {
    async getGoodInfo ({ commit }, skuId) {
      let result = await reqgetgoodInfo(skuId);
      if (result.code == 200) {
        commit('GETGOODINFO', result.data);
      }
    },
    // 添加购物车,只需要发请求，并不需要存储数据
    async addShorCart ({ commit }, { skuId, skuNum }) {
      let result = await reqaddShopCart(skuId, skuNum);
      if (result.code == 200) {
        // 添加成功
        return 'ok';
      } else {
        // 添加失败
        return Promise.reject(new Error('faile'))
      }
    }
  },
  getters: {
    categoryView (state) {
      return state.goodInfo.categoryView || {};
    },
    skuInfo (state) {
      return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList (state) {
      return state.goodInfo.spuSaleAttrList || [];
    }
  }
}