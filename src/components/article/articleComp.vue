<template>
  <div class="article-comp">
    <!--文章的tab bar-->
    <tab-bar></tab-bar>
    <!--文章列表路由-->
    <transition name="fade-left">
        <router-view :key="$route.query.tab"></router-view>
    </transition>
  </div>
</template>
<style lang="less" scoped>
    .fade-left-enter-active,
    .fade-left-leave-active{
      transition: all .5s ease-in-out;
    }
    .fade-left-enter{
      transform: translate(100%);
    }
    .fade-left-leave-active{
      transform: translate(-100%);
    }
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
