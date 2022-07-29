import requests from "./ajax";
import mockRequets from './mockAjax';

// 三级联动接口
export const reqgetCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
// 轮播图接口
export const reqgetBannerList = () => mockRequets({ url: '/banner', method: 'get' });
// 搜索模块数据接口
export const reqgetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params });
// 获取产品信息的接口
export const reqgetgoodInfo = (skuId) => requests({ url: `/item/${skuId}`, methods: 'get' });
// 添加购物车
export const reqaddShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' });
// 获取个人购物车数据
export const reqgetCartList = () => requests({ url: '/cart/cartList', method: 'get' });
// 删除购物车商品
export const reqdeleteCart = (skuId) => requests({ url: `cart/deleteCart/${skuId}`, method: 'delete' });
// 修改商品勾选状态
export const requpdateCheck = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' });
// 获取验证码
export const reqgetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' });
// 用户注册
export const reqregister = (data) => requests({ url: '/user/passport/register', data, method: 'post' });
// 用户登录
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' });
// 获取用户信息
export const reqGetUserInfo = () => requests({ url: "/user/passport/auth/getUserInfo", method: 'get' });
// 退出登录
export const reqLogOut = () => requests({ url: "/user/passport/logout", method: 'get' });
// 获取用户地址信息
export const reqUserAddress = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' });
// 获取商品清单
export const reqGetOrderInfo = () => requests({ url: "/order/auth/trade", method: 'get' });
// 提交订单
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: "post" });
