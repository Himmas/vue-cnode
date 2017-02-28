<template>
  <div>
    <div v-html="articleDetail"></div>
  </div>
</template>
<style lang="less">

</style>
<script>

  export default {
    data() {
      return {
        articleDetail:null
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
         })
         .catch((error)=>{
            console.log(error)
         })
       }
    },
    components: {

    }
  }
</script>