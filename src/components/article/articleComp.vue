<template>
  <div>
    <!--文章的tab bar-->
    <tab-bar></tab-bar>
    <!--文章列表-->
    <article-list></article-list>
  </div>
</template>
<style lang="less">

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
