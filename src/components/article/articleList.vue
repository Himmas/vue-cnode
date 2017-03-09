<template>
    <div ref="articleRef" class="article"  @scroll="getBottom($event)">
        <ul class="article-list">
            <li v-for="(article,index) in articles" class="art-li">
                <!--第一行-->
                <div class="list-first-line">
                    <div class="user-avatar">
                        <img :src="article.author.avatar_url" class="headpic"/>
                    </div>
                    <div class="create-time">
                        {{article.last_reply_at | getTime }}
                    </div>
                </div>
                <!--第二行-->
                <router-link :to="{name:'topic',params:{id:article.id}}"
                             class="article-title"
                             key="$route.params.id"
                             tag="div">
                    {{article.title}}
                </router-link>
                <!--第三行-->
                <div class="list-last-line">
                    <!--tab-->
                    <div class="tab">
                        <span :class="{active:article.good || article.top}">{{article.tab | getTabName(article.top,article.good)}}</span>
                    </div>
                    <!--view-count-->
                    <div class="view-count">
                        <span>{{article.visit_count}}</span>
                        <span class="iconfont icon-chakan"></span>
                    </div>
                    <!--reply_count-->
                    <div class="reply-count">
                        <span>{{article.reply_count}}</span>
                        <span class="iconfont icon-huifu"></span>
                    </div>
                </div>
            </li>
        </ul>
        <back-top :isBackTopShow="backTopShow" @backTop="articleTop"></back-top>
        <reload-page :isReloadShow="reloadShow" @reloadPage="reloadArticle"></reload-page>
        <load-comp :loadShow="isListShow"></load-comp>
    </div>
</template>
<script>
  import loadComp from '../commonpage/loading'
  import reloadPage from '../commonpage/reloadPage'
  import backTop from '../commonpage/backTop'

  export default{
    data(){
      return {
        isListShow:true,
        limit:40,
      	articles:[],
      	reloadShow: true,
      	backTopShow: false,
      	timer:null
      }
    },
    created(){
      this.getArticleList()
    },
    methods:{
       reloadArticle(){
          this.isListShow = true
          this.limit = 40
          this.articleTop()
          this.getArticleList()
       },
       articleTop(){
          //设置一个定时器
          this.timer = setInterval(() => {
            //获取滚动条的滚动高度
            var osTop = this.$refs.articleRef.scrollTop
            //用于设置速度差，产生缓动的效果
            var speed = Math.floor(-osTop / 6)
            this.$refs.articleRef.scrollTop = osTop + speed
            this.isTop = true;  //用于阻止滚动事件清除定时器
            if(osTop == 0){
                this.backTopShow = false
                clearInterval(this.timer)
            }
        },25)
       },
       getArticleList(){
          var url = !this.$route.query.tab?`/topics?limit=${this.limit}`:`/topics?limit=${this.limit}&tab=${this.$route.query.tab}`
          this.$http.get(url)
          .then((res)=>{
            this.$set(this.$data,'articles',res.data.data)
            this.isListShow = false
          })
          .catch((error)=>{
             console.log(error)
          })
       },
       getBottom(event){
         var scrollTop = event.target.scrollTop
         var scrollHeight = event.target.scrollHeight
         var clientHeight = event.target.clientHeight
         if(scrollTop > 100){
            this.backTopShow = true
         }else{
            this.backTopShow = false
         }
         if(scrollHeight - clientHeight == scrollTop){
            this.limit += 40
            this.isListShow = true
            this.getArticleList()
         }
       }
    },
    watch: {
        '$route' (to, from) {
          // 对路由变化作出响应...
            this.reloadShow = false
            this.isListShow = true
            //this.limit = 40
            this.getArticleList()
        }
    },
    components: {
        loadComp,
        reloadPage,
        backTop
    }
  }

</script>

<style lang="less" scoped>
    .article{
        width: 100%;
        height: 100%;
        padding-bottom: 42px;
        box-sizing: border-box;
        overflow-y: scroll;
        .article-list{
            width: 100%;
            .art-li {
                width: 100%;
                border-bottom: 1px solid #e1e1e1;
                padding: 0 10px;
                box-sizing: border-box;
                .list-first-line{
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-around;
                    align-items: center;
                    padding: 5px 0;
                    box-sizing: border-box;
                    border-bottom: 1px dotted #f0f0f5;
                    .user-avatar{
                        flex-grow: 1;
                        margin-left: 10px;
                        img{
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            border: 1px solid #f0f0f5;
                            background: gainsboro;
                        }
                    }
                    .create-time{
                        flex-flow: 1;
                        text-align: right;
                        margin-right: 10px;
                        color:#999;
                    }
                }
                .article-title{
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    box-sizing: border-box;
                    color: #666;
                    border-bottom: 1px solid #f0f0f5;
                    padding: 10px;
                    box-sizing: border-box;
                }
                .list-last-line{
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-around;
                    align-items: center;
                    padding: 5px 0;
                    box-sizing: border-box;
                    .tab{
                        flex-grow:5;
                        margin-left: 10px;
                        span{
                            display: inline-block;
                            width: auto;
                            height: auto;
                            padding: 2px 5px;
                            box-sizing: border-box;
                            border-radius: 3px;
                            background: gainsboro;
                            color: #999;
                            font-size: 12px;
                            &.active{
                                background: #80bd01;
                                color:#fff;
                            }
                        }
                    }
                    .view-count{
                        flex-grow: 1;
                        border-right: 1px solid #f0f0f5;
                        text-align: center;
                        color: #999;
                        font-size: 14px;
                        span.iconfont{
                            font-size: 14px;
                            margin-left: 5px;
                        }
                    }
                    .reply-count{
                        flex-grow: 1;
                        text-align: center;
                        color: #999;
                        font-size: 14px;
                        span.iconfont{
                            font-size: 14px;
                            margin-left: 5px;
                        }
                    }
                }
            }
        }
    }
</style>
