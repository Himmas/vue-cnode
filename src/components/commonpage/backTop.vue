<template>
    <div v-show="isBackTopShow" class="back-top" @click="backTop">
        <span class="iconfont icon-iconup"></span>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .back-top {
        position: fixed;
        right: 10px;
        bottom: 80px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: rgba(0, 0, 0, .4);
        text-align: center;
        line-height: 30px;
        color: #ffffff;
        z-index: 10;
    }
</style>
<script type="text/ecmascript-6">
    
    export default{
        data(){
            return{
               
            }
        },
        props:{
          isBackTopShow:{
            type:Boolean,
            default: false
          }
        },
        methods:{
            backTop(){
              this.$emit('backTop')
            }
        }

    }
</script>
