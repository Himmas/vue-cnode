<template>
  <div  class="article-comp">
    <!--文章的tab bar-->
    <tab-bar></tab-bar>
    <!--文章列表路由-->
    <transition name="fade-list">
        <router-view></router-view>
    </transition>
  </div>
</template>
<style lang="less" scoped>
    .article-comp{
      margin-bottom: 20px;
    }
    .fade-list-enter-active,
    .fade-list-leave-active{
      transition: all 2s ease-in;
    }
    .fade-list-enter,
    .fade-list-leave-active{
      opacity: 0;
    }
</style>
<script>
  import tabBar from './tabBar'
  import articleList from './articleList'

  export default {
    data() {
      return {}
    },
    components: {
      tabBar,
      articleList
    }
  }
</script>
