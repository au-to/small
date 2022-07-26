import { reqgetCartList, reqdeleteCart, requpdateCheck } from '@/api'

const state = {
  cartList: []
};
const mutations = {
  GETCARTLIST (state, cartList) {
    state.cartList = cartList;
  }
}
const actions = {
  // 获取个人购物车数据
  async getCartList ({ commit }) {
    let result = await reqgetCartList();
    if (result.code == 200) {
      commit('GETCARTLIST', result.data)
    }
  },
  // 删除购物车商品
  async deleteCart ({ commit }, skuId) {
    let result = await reqdeleteCart(skuId);
    if (result.code == 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  // 修改商品的选中状态
  async updateCheck ({ commit }, { skuId, isChecked }) {
    let result = await requpdateCheck(skuId, isChecked);
    if (result.code == 200) {
      return 'ok';
    } else {
      Promise.reject(new Error('faile'));
    }
  },
  // 删除全部选中的商品
  deleteAllCheckedCarts ({ dispatch, getters }) {
    let promiseAll = [];
    let promise = getters.cartList.cartInfoList.forEach(item => {
      if (item.isChecked == 1) {
        dispatch('deleteCart', item.skuId)
      }
    });
    promiseAll.push(promise);
    return Promise.all(promiseAll);
  },
  // 修改全选状态
  ischooseAll ({ dispatch, state }, isChecked) {
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach((item) => {
      let promise = dispatch('updateCheck', { skuId: item.skuId,isChecked });
      promiseAll.push(promise);
    })
    return Promise.all(promiseAll);
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