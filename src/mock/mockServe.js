import Mock from 'mockjs'
import banner from './banner.json'
import floor from './floor.json'

// 第一个参数为请求地址，第二个参数为响应数据
Mock.mock('/mock/banner', { code: 200, data: banner });
Mock.mock('/mock/floor', { code: 200, data: floor });