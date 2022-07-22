import requests from "./ajax";
import mockRequets from './mockAjax';

// 三级联动接口
export const reqgetCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
// 轮播图接口
export const reqgetBannerList = () => mockRequets({ url: '/banner', method: 'get' });
// 搜索模块数据接口
export const reqgetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params });
