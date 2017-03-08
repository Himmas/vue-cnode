<template>
   <div>
       <article-detail v-if="$route.params.id != 'create'"></article-detail>
       <create-topic v-if="$route.params.id == 'create'"></create-topic>
   </div>
</template>
<style rel="stylesheet/less" lang="less">
    
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
