<template>
    <div ref="articleDetail" @scroll="diplayBackTop($event)" class="article-detail">
        <!--标题信息-->
        <div class="article-title">
            <div class="header">
                <span class="author">作者 {{author.loginname}}</span>
                <span class="origin">来自：{{topics.tab | getTabName}}</span>
            </div>
            <div class="title">
                <span v-show="topics.top || topics.good">{{topics.tab | getTabName(topics.top,topics.good)}}</span>
                <span class="title">{{topics.title}}</span>
            </div>
            <div class="footer">
                <span class="dot">发布于 {{topics.create_at | getTime}}</span>
                <span class="dot">最后编辑于 {{topics.last_reply_at | getTime}}</span>
                <span class="dot">{{topics.visit_count}} 浏览</span>
                <span v-show="isDShow" class="iconfont icon-jiazai" style="font-size:10px"></span>
                <span v-show="!isDShow" @click="collectTopic">{{isCollectTopic?'已收藏':'收藏'}}</span>
            </div>
        </div>
        <!--内容详情-->
        <div class="article-content">
            <div v-html="topics.content"></div>
        </div>
        <!--回复-->
        <div class="article-reply">
            <span class="reply-count">{{replies.length}}条回复</span>
            <div class="reply-content" v-for="(reply,index) in replies">
                <div class="header">
                    <div class="author-avatar">
                        <img :src="reply.author.avatar_url">
                    </div>
                    <div class="name">
                        {{reply.author.loginname}}
                    </div>
                    <div class="floor">{{index+1}}楼</div>
                    <div class="time">{{reply.create_at | getTime}}</div>
                    <div class="icon">
                        <span @click="replyUps(reply.id,$event)" class="iconfont icon-zan_light"></span>
                        <span>{{reply.ups.length}}</span>
                        <span class="iconfont icon-huifu1"></span>
                    </div>
                </div>
                <div class="content" v-html="reply.content"></div>
            </div>
        </div>
        <!--评论-->
        <form class="article-comment" @submit.prevent="createReplies">
            <textarea v-model = "createReplyContent" class="comment-content" placeholder="输入回复内容"></textarea>
            <input type="submit" :disabled="!createReplyContent.length" :class="{active:createReplyContent.length}" class="btn" value="提交">
        </form>
        <back-top :isBackTopShow="isDTopShow" @backTop="detailTop"></back-top>
        <load-comp :loadShow="isDShow"></load-comp>
    </div>
</template>
<script>
  import loadComp from '../commonpage/loading'
  import backTop from '../commonpage/backTop'
  import { ACCESS_TOKEN } from '../../config'

  export default {
    data() {
      return {
        author:{},
        topics:{},
        replies:[],
        createReplyContent:'',
        isDShow:true,
        isDTopShow:false,
        isCollectTopic:false
      }
    },
    created(){
      this.getArticleDetail()
      this.isFill()
    },
    methods:{
      getArticleDetail(){
         this.$http.get(`/topic/${this.$route.params.id}`,{
            params:{
                accesstoken: ACCESS_TOKEN
            }
         })
         .then((data)=>{
             this.author = data.data.data.author
             this.topics = data.data.data
             this.replies = data.data.data.replies
             this.isCollectTopic = data.data.data.is_collect
             this.isDShow = false
         })
         .catch((error)=>{
            console.log(error)
         })
       },
       collectTopic(){
          if(this.isCollectTopic){
            this.deCollected()
          }else{
            this.collected()
          }
       },
       collected(){
            this.$http.post('/topic_collect/collect',{
              accesstoken: ACCESS_TOKEN,
              topic_id: this.$route.params.id
            })
            .then((res)=>{
                this.isCollectTopic = true
                console.group("收藏成功数据")
                console.log(res.data)
                console.groupEnd()
             })
            .catch((error)=>{
                console.group("失败数据")
                console.log(error)
                console.groupEnd()
          })
       },
       deCollected(){
           this.$http.post('/topic_collect/de_collect',{
              accesstoken: ACCESS_TOKEN,
              topic_id: this.$route.params.id
            })
            .then((res)=>{
                this.isCollectTopic = false
                console.group("取消收藏成功数据")
                console.log(res.data)
                console.groupEnd()
             })
            .catch((error)=>{
                console.group("失败数据")
                console.log(error)
                console.groupEnd()
          })
       },
       createReplies(){
          this.$http.post(`/topic/${this.$route.params.id}/replies`,{
               accesstoken: ACCESS_TOKEN,
               content: this.createReplyContent
          })
          .then((res)=>{
              this.createReplyContent = ''
              console.log(res.data)
              this.getArticleDetail()
              this.$refs.articleDetail.scrollTop =  this.$refs.articleDetail.scrollHeight
          })
          .catch((error)=>{
              console.log(error)
          })
       },
       replyUps(id,event){
          this.$http.post(`/reply/${id}/ups`,{
              accesstoken: ACCESS_TOKEN
          })
          .then((res) => {
             if(res.data.action == 'up'){
                event.target.classList.remove('icon-zan_light')
                event.target.classList.add('icon-zan_fill')
             }else if(res.data.action == 'down'){
                event.target.classList.remove('icon-zan_fill')
                event.target.classList.add('icon-zan_light')
             }
             this.getArticleDetail()
             console.log(res.data)
          })
          .catch((error)=>{
             console.log(error)
          })
       },
       isFill(arr){
          if(arr){
            arr.some((data)=>{
              return data == localStorage.getItem('userid')
            })
          }
       },
       diplayBackTop(event){
          var evTop = event.target.scrollTop
          if(evTop > 100) this.isDTopShow = true
          else this.isDTopShow = false
       },
       detailTop(){
          var scrollTimer = setInterval(()=>{
              var osTop = this.$refs.articleDetail.scrollTop
              var speed = Math.floor( -osTop/6)
              this.$refs.articleDetail.scrollTop = osTop + speed
              if(osTop == 0){
                  this.isDTopShow = false
                  clearInterval(scrollTimer)
              }
          })
       }
    },
    components: {
        loadComp,
        backTop
    }
  }
</script>

<style lang="less" scoped>
    .article-detail {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        padding: 5px 10px;
        box-sizing: border-box;
        .article-title {
            border-bottom: 1px solid #f0f0fe;
            .header {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: space-between;
                align-content: center;
                span {
                    color: #999;
                    font-size: 10px;
                }
            }
            .title {
                margin: 6px auto;
                span {
                    font-size: 12px;
                    display: inline-block;
                    &:first-child {
                        display: inline-block;
                        width: auto;
                        height: auto;
                        padding: 2px 5px;
                        box-sizing: border-box;
                        border-radius: 3px;
                        background: #80bd01;
                        color: #fff;
                    }
                    &:last-child {
                        font-weight: bold;
                        color: #666;
                    }
                }
            }
            .footer {
                color: #999;
                font-size: 12px;
                margin-bottom: 5px;
                span {
                    margin-right: 15px;
                    position: relative;
                    &.dot:after {
                        position: absolute;
                        top: 6px;
                        right: -10px;
                        content: "";
                        display: block;
                        width: 4px;
                        height: 4px;
                        border-radius: 50%;
                        background: #999;
                    }
                }
            }
        }
        .article-content {
            margin: 10px auto;
            width: 100%;
        }
        .article-reply {
            border-top: 1px solid #999;
            width: 100%;
            padding-bottom: 32px;
            box-sizing: border-box;
            span.reply-count {
                display: block;
                width: 100%;
                color: #666;
                margin: 5px auto;
                font-size: 14px;
            }
            .reply-content {
                width: 100%;
                border-bottom: 1px solid gainsboro;
                div.header {
                    padding: 4px 0;
                    box-sizing: border-box;
                    width: 100%;
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: center;
                    div.author-avatar {
                        flex-grow: 0;
                        width: 20px;
                        height: 20px;
                        text-align: center;
                        line-height: 20px;
                        border-radius: 50%;
                        background: #f1f1f0;
                        img {
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                        }
                    }
                    div.name{
                        flex-grow: 0;
                        margin-right: 10px;
                        margin-left: 10px;
                    }
                    div.floor{
                        flex-grow: 0;
                        color:  #0088cc;
                        position: relative;
                        &:after{
                            content:'';
                            position: absolute;
                            right:-8px;
                            top:8px;
                            background:  #0088cc;
                            width: 5px;
                            height: 5px;
                            border-radius: 50%;
                        }
                    }
                    div.time{
                        flex-grow: 0;
                        margin-left: 10px;
                        color: #0088cc;
                    }
                    div.icon{
                        flex-grow: 1;
                        text-align: right;
                        span{
                            margin: 0;
                            &:last-child{
                                margin-left: 10px;
                            }
                        }
                    }
                }
                .content{
                    padding: 4px 0;
                    box-sizing: border-box;
                }
            }

        }
      .article-comment{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 32px;
        margin-left: -10px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        textarea.comment-content{
          flex-basis: 75%;
          height: 32px;
          padding: 5px;
          box-sizing: border-box;
          border: 1px solid gainsboro;
          border-radius: 0;
          -webkit-tap-highlight-color: transparent;
          box-shadow: none;
          outline: none;
        }
        input.btn{
          height: 32px;
          flex-basis: 25%;
          border: none;
          background: rgba(29,146,237,.5);
          color: #fff;
          border-radius: 0;
          -webkit-tap-highlight-color: transparent;
          &.active{
            background: #1d92ed;
            color: #fff;
          }
        }
      }
    }
</style>
