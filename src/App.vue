<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted () {
    // 获取三级联动的数据
    this.$store.dispatch('getCategoryList')
    this.$store.dispatch('getUserInfo');
  },
}
</script>

<style>
</style>
