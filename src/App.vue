<template>
  <div id="app">
    <head-comp></head-comp>
    <transition name="fade-opac">
        <router-view class="router-view"></router-view>
    </transition>
    <load-comp :loadShow="isAppShow"></load-comp>
  </div>
</template>
<script>
  import headComp from './components/commonpage/headComp'
  import menuBtn from './components/commonpage/menuBtn'
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
      menuBtn,
      loadComp
    }
  }
</script>

<style lang="less">
  @import url("./assets/css/m-reset.less");
  .router-view {
    position: absolute;
    top: 20%;
    height: 80%;
    background: #fff;
    width: 100%;
    overflow:hidden;
  }
  .fade-opac-enter-active,
  .fade-opac-leave-active{
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-opac-enter,
  .fade-opac-leave-active{
    opacity: 0;
    transform: scale(.5);
  }
</style>
