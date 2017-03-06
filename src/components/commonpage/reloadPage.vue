<template>
    <div v-show="isReloadShow"
         class="reload-page"
         @click="reloadPage"
    >
        <span class="iconfont icon-shuaxin1"></span>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .reload-page{
        position: fixed;
        right: 10px;
        bottom: 30px;
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
          isReloadShow:{
            type: Boolean,
            default: false
          }
        },
        methods:{
            reloadPage(){
              this.$emit('reloadPage')
            }
        }
    }
</script>
