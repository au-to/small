import { reqgetCode, reqregister, reqUserLogin, reqGetUserInfo, reqLogOut } from '@/api'
import { getToken, setToken, removeToken } from '@/utils/token';
const state = {
  code: '',
  token: getToken(),
  userInfo: {}
};
const mutations = {
  // 获取验证码
  GETCODE (state, code) {
    state.code = code;
  },
  // 用户登录获取token
  USERLOGIN (state, token) {
    state.token = token;
  },
  // 获取用户信息
  GETUSERINFO (state, userInfo) {
    state.userInfo = userInfo;
  },
  // 退出登录，清除用户信息
  CLEARUSERINFO (state) {
    state.token = '';
    state.userInfo = {};
    removeToken();
  }
};
const actions = {
  // 获取验证码
  async getCode ({ commit }, phone) {
    let result = await reqgetCode(phone);
    if (result.code == 200) {
      commit('GETCODE', result.data)
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  // 用户注册
  async userRegister ({ commit }, data) {
    let result = await reqregister(data);
    if (result.code == 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  // 用户登录
  async userLogin ({ commit }, { phone, password }) {
    let result = await reqUserLogin({ phone, password });
    if (result.code == 200) {
      commit('USERLOGIN', result.data.token);
      // 持久化存储token
      setToken(result.data.token);
      return 'ok';
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  // 获取用户信息
  async getUserInfo ({ commit }) {
    let result = await reqGetUserInfo();
    if (result.code == 200) {
      commit('GETUSERINFO', result.data);
    }
  },
  // 退出登录
  async logOut ({ commit }) {
    let result = await reqLogOut();
    if (result.code == 200) {
      commit('CLEARUSERINFO');
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
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