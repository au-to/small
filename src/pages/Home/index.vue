<template>
  <div>
    <TapNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor />
    <Brand />
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
export default {
  name: 'Home',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.$store.dispatch('getUserInfo');
  },
}
</script>

<style>
</style>