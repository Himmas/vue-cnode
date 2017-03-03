<template>
  <div>
    <div class="article-detail">
      <div v-html="articleDetail"></div>
    </div>
    <load-comp :loadShow="isDhow"></load-comp>
  </div>
</template>
<style lang="less">
    .article-detail{
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      padding: 5px 10px;
      box-sizing: border-box;
    }
</style>
<script>
  import loadComp from '../commonpage/loading'

  export default {
    data() {
      return {
        articleDetail:null,
        isDhow:true
      }
    },
    created(){
      this.getArticleDetail()
    },

    methods:{
      getArticleDetail(){
         var _that = this
         _that.$http.get('/topic/'+_that.$route.params.id)
         .then((data)=>{
            _that.articleDetail = data.data.data.content
            _that.isDhow = false
         })
         .catch((error)=>{
            console.log(error)
         })
       }
    },
    components: {
        loadComp
    }
  }
</script>