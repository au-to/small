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
