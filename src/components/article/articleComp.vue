<template>
  <div>
    <!--文章的tab bar-->
    <tab-bar></tab-bar>
    <!--文章列表-->
    <router-view></router-view>
  </div>
</template>
<style lang="less">

</style>
<script>
  import tabBar from './tabBar'
  export default {
    data() {
      return {}
    },
    components: {
      tabBar
    }

  }
</script>
