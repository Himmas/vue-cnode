<template>
   <div>
       <transition name="opac">
           <article-detail v-if="$route.params.id != 'create'"></article-detail>
           <create-topic v-if="$route.params.id == 'create'"></create-topic>
       </transition>
   </div>
</template>
<style rel="stylesheet/less" lang="less">
    .opac-enter-active,
    .opac-leave-active{
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .opac-enter,
    .opac-leave-active{
        opacity: 0;
        transform: scale(.5);
    }
</style>
<script>
    import articleDetail from './articleDetail'
    import createTopic from './createTopic'

    export default{
        data(){
            return{
               
            }
        },
        components:{
            articleDetail,
            createTopic
        }
    }
</script>
