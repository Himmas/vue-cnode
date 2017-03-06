<template>
  <div ref="articleDetail" @scroll="diplayBackTop($event)" class="article-detail">
    <!--标题信息-->
    <div class="article-title">
      <div class="header">
        <span class="author">作者 {{author.loginname}}</span>
        <span class="origin">来自：{{topics.tab}}</span>
      </div>
      <div class="title">
        <span v-show="topics.top || topics.good">{{topics.tab | getTabName(topics.top,topics.good)}}</span>
        <span class="title">{{topics.title}}</span>
      </div>
      <div class="footer">
        <span>发布于 {{topics.create_at | getTime}}</span>
        <span>最后编辑于 {{topics.last_reply_at | getTime}}</span>
        <span>{{topics.visit_count}} 浏览</span>
        <span>收藏</span>
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
          <div class="">{{index+1}}楼</div>
          <div class="">{{reply.create_at}}</div>
          <div class="icon">
            <span class="">{{reply.ups.length}}</span>
            <span>huifu</span>
          </div>
        </div>
        <div class="content" v-html="reply.content"></div>
      </div>
    </div>
    <back-top :isBackTopShow="isDTopShow" @backTop="detailTop"></back-top>
    <load-comp :loadShow="isDShow"></load-comp>
  </div>
</template>
<script>
  import loadComp from '../commonpage/loading'
  import backTop from '../commonpage/backTop'

  export default {
    data() {
      return {
        author:{},
        topics:{},
        replies:[],
        isDShow:true,
        isDTopShow:false
      }
    },
    filters:{
      getTabName(val,top,good){
        var tabName = {
          'top' :'置顶',
          'good':'精华'
        }
        if(top){
          return tabName['top']
        }
        if(good){
          return tabName['good']
        }
      },
      getTime(time){
          var localTime = new Date().getTime()
          var createTime = new Date(time).getTime()
          var totalTime = (localTime - createTime) / 1000
          var day = parseInt(totalTime/(24*60*60))
          var month = parseInt(day/30)
          var year = parseInt(day/364)
          var hour = parseInt((totalTime - day*24*60*60)/(60*60))
          var minute = parseInt((totalTime - day*24*60*60 - hour*60*60)/60)
          if(day){
            if(year){
                return `${yaer}年前`
            }else if(month){
                return `${month}个月前`
            }else{
                return `${day}天前`
            }
          }else if(hour){
            return `${hour}小时前`
          }else{
            return `${minute}分钟前`
          }
        }
    },
    created(){
      this.getArticleDetail()
    },
    methods:{
      getArticleDetail(){
         this.$http.get(`/topic/${this.$route.params.id}?mdrender = false`)
         .then((data)=>{
            this.$nextTick(()=>{
              this.author = data.data.data.author
              this.topics = data.data.data
              this.replies = data.data.data.replies
            })
            this.isDShow = false
         })
         .catch((error)=>{
            console.log(error)
         })
       },
       diplayBackTop(event){
          var evTop = event.target.scrollTop
          if(evTop > 100) this.isDTopShow = true
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
          &:last-child{
            font-weight: bold;
            color: #666;
          }
        }
      }
      .footer{
        color: #999;
        font-size: 12px;
        margin-bottom: 5px;
        span{
          margin-right: 15px;
          position: relative;
          &:not(:last-child):after{
            position: absolute;
            top: 6px;
            right: -10px;
            content :"";
            display: block;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #999;
          }
        }
      }
    }
    .article-content{
      margin-top: 10px;
      width: 100%;
      border-bottom: 1px solid #999;
    }
    .article-reply{
      width: 100%;
      span.reply-count{
        display: block;
        width: 100%;
        color: #666;
        margin: 5px auto;
        font-size: 14px;
      }
      .reply-content{
        width: 100%;
        div.header{
          width: 100%;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: flex-start;
          div.author-avatar{
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            border-radius: 50%;
            background: #f1f1f0;
            img{
              width: 30px;
              height: 30px;
              border-radius: 50%;
            }
          }
        }
      }

    }
  }
</style>
