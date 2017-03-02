<template>
    <div class="article">
        <ul class="article-list">
            <li v-for="list in articles" class="art-li">
                <div class="user-avata">
                    <img :src="list.author.avatar_url" class="headpic"/>
                </div>
                <div class="article-tab">{{list.tab}}</div>
                <router-link :to="{name:'topic',params:{id:list.id}}"
                             class="article-title"
                             tag="div">
                    <span class="title-content">{{list.title}}</span>
                    <span class="title-num">25/233</span>
                </router-link>
                <div class="article-time">3分钟前</div>
            </li>
        </ul>
        <load-comp :loadShow="isListShow"></load-comp>
    </div>
</template>
<style lang="less" scoped>
    .article{
        width: 100%;
        height: auto;
        .article-list{
            width: 100%;
            height: auto;
            padding: 0 10px;
            box-sizing: border-box;
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
  import loadComp from '../commonpage/loading'

  export default{
    data(){
      return {
        isListShow:false,
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
          _this.$http.get(url)
          .then((res)=>{
             _this.$set(_this.$data,'articles',res.data.data)
             _this.isListShow = false
          })
          .catch((error)=>{
             console.log(error)
          })
       }
    },
    watch: {
        '$route' (to, from) {
          // 对路由变化作出响应...
            this.isListShow = true
            this.getArticleList()
        }
    },
    components: {
        loadComp
    }
  }

</script>
