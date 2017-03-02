<template>
  <div id="app">
    <head-comp></head-comp>
    <transition name="fade-left">
        <router-view class="router-view"></router-view>
    </transition>
    <back-top></back-top>
  </div>
</template>

<script>

  import headComp from './components/commonpage/headComp'
  import backTop from './components/commonpage/backTopComp'
  import loadComp from './components/commonpage/loading'


  export default {
    data() {
      return {
        isAppShow:true
      }
    },
    beforeCreate(){
       this.isAppShow = true
    },
    created(){
      this.isAppShow = false
    },
    components: {
      headComp,
      backTop,
      loadComp
    }
  }
</script>

<style lang="less">
  @import url("./assets/css/m-reset.less");
  .router-view {
    margin-top: 179px;
    background: #fff;
    width: 100%;
    height: auto;
  }
  .fade-left-enter-active,
  .fade-left-leave-active{
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-left-enter,
  .fade-left-leave-active{
    transform: translate(100%);
  }
</style>
