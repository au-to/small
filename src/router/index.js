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
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: 'Home',
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
      path: '/search/:keyword',
      component: Search,
      name: 'search',
      meta: { show: true },
      props: ($route) => ({ keyword: $route.params.keyword })
    }
  ]
})

export default router