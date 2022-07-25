import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 重写原型上的push和replace方法
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => { }, () => { });
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this.location, resolve, reject);
  } else {
    originReplace.call(this, location, () => { }, () => { });
  }
}

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
      meta: { show: true }
    },
    {
      path: '/login',
      component: Login,
      meta: { show: false }
    },
    {
      path: '/register',
      component: Register,
      meta: { show: false }
    },
    {
      path: '/search/:keyword?  ',
      component: Search,
      name: 'search',
      meta: { show: true },
      props: (route) => ({ keyword3: route.params.keyword, keyword4: route.query.keyword2 })
    },
    {
      path: '/detail/:skuId',
      component: Detail,
      meta: { show: true }
    },
    {
      name:'addcartsuccess',
      path: '/addcartsuccess',
      component: AddCartSuccess,
      meta: { show: true }
    },
    {
      name:'shopcart',
      path: '/shopcart',
      component: ShopCart,
      meta: { show: true }
    },
  ],
  // 滚动行为
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router