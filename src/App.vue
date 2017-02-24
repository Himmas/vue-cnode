<template>
  <div id="app">
    <head-comp></head-comp>
    <router-view></router-view>
    <back-top></back-top>
  </div>
</template>

<script>

  import headComp from './components/commonpage/headComp'
  import backTop from './components/commonpage/backTopComp'

  export default {
    data() {
      return {}
    },
    components: {
      headComp,
      backTop
    }
  }


</script>

<style lang="less">
  @import url("./assets/css/m-reset.less");
</style>
