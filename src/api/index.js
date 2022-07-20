import requests from "./request";

// 三级联动接口
export const reqgetCategoryList = ()=>requests({url: '/product/getBaseCategoryList',method: 'get'});