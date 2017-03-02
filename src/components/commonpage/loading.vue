<template>
  <div v-show="loadShow" class="load-pop">
      <div  class="load-box">
          <div class="load-inner"></div>
          <div class="load-inner"></div>
          <div class="load-inner"></div>
      </div>
  </div>
</template>
<style lang="less" scoped>
    .load-pop{
      position: fixed;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.4);
      z-index: 98;
      .load-box{
        width: 50%;
        height: auto;
        padding: 20px;
        margin: 300px auto;
        text-align: center;
        z-index: 99;
        .load-inner{
          display: inline-block;
          vertical-align: middle;
          width: 20px;
          height: 20px;
          margin: 0 5px;
          border-radius: 50%;
          background-color: lightgreen;
          animation-name: load;
          animation-duration: 0.9s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: normal;
          &:first-child{
            animation-delay: .1s;
          }
          &:nth-of-type(2){
            animation-delay: .3s;
          }
          &:last-child{
            animation-delay: .5s;
          }
        }
      }
    }
    @keyframes load {
      from{
        transform: scale(1);
      }
      50%{
        transform: scale(1.5);
      }
      to{
        transform: scale(1);
      }
    }
</style>
<script>

  export default{
    data(){
      return {}
    },
    props:{
      loadShow:{
        type:Boolean,
        default:false
      }
    },
    components: {}
  }
</script>
