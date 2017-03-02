<template>
  <div class="article-comp">
    <!--文章的tab bar-->
    <tab-bar></tab-bar>
    <!--文章列表路由-->
    <transition name="fade-list">
        <router-view :key="$route.query.tab"></router-view>
    </transition>
  </div>
</template>
<style lang="less" scoped>
    .fade-list-enter-active,
    .fade-list-leave-active{
      transition: all .5s ease-in-out;
    }
    .fade-list-enter{
      transform: translate(100%);
    }
    .fade-list-leave-active{
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
