<template>
    <div class="article">
        <ul class="article-list">
            <li v-for="article in articles" class="art-li">
                <div class="user-avata">
                    <img :src="article.author.avatar_url" class="headpic"/>
                </div>
                <div class="article-tab">{{article.tab}}</div>
                <router-link :to="{name:'topic',params:{id:article.id}}"
                             class="article-title"
                             tag="div">
                    <span class="title-content">{{article.title}}</span>
                    <span class="title-num">{{article.reply_count}}/{{article.visit_count}}</span>
                </router-link>
                <div class="article-time">{{article.last_reply_at}}</div>
            </li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
    .article{
        width: 100%;
        height: auto;
        .article-list{
            width: 100%;
            height: auto;
            padding: 10px;
            box-sizing: border-box;
            background: #fff;
            .art-li{
                display: flex;
                width: 100%;
                height: 50px;
                justify-content: flex-start;
                align-items:center;
                border-bottom: 1px solid #f0f0f0;
                .user-avata{
                    img{
                        width: 30px;
                        height: 30px;
                    }
                }
            }
            .article-tab{
                margin: 0 5px;
                background: #f0f0f0;
                border-radius: 3px;
                color: #666;
                padding: 0 5px;
            }
            .article-title{
                width: 60%;
                .title-content{
                    width: 100%;
                    display: block;
                    height: 50%;
                    white-space:nowrap;
                    overflow: hidden;
                    text-overflow:ellipsis;
                }
            }
            .article-time{
                width: auto;
            }
        }
    }
</style>
<script>

  export default{
    data(){
      return {
      	articles:[]
      }
    },
    created(){
      this.getArticleList()
    },
    methods:{
       getArticleList(){
          var _this = this
          var url = !_this.$route.query.tab?'/topics?page=1&limit=20':'/topics?page=1&limit=20&tab='+_this.$route.query.tab
          console.log(url)
          _this.$http.get(url)
          .then((res)=>{
             _this.$set(_this.$data,'articles',res.data.data)
          })
          .catch((error)=>{
             console.log(error)
          })
       }
    },
    watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
       this.getArticleList()
    }
  },
    components: {}
  }

</script>
