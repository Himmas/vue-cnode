<template>
    <div class="article-detail">
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
      <div class="article-content" v-html="topics.content">

      </div>
      <load-comp :loadShow="isDShow"></load-comp>
    </div>
</template>
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
            &:last-child{
                font-weight: bold;
                color: #666;
            }  
          }
        }
        .footer{
            color: #999;
            font-size: 12px;
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
          width: 100%;
          white-space: normal;
          word-break: break-all;
          word-wrap: normal;
          .markdown-text{
              width: 100%;
              blockquote{
                  border-left: 4px solid #999;
              }
              p{
                  width: 100%;
                  img{
                      width: 100%;
                  }
              }
          }
      }
    }
</style>
<script>
  import loadComp from '../commonpage/loading'

  export default {
    data() {
      return {
        author:{},
        topics:{},
        replies:[],
        isDShow:true
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
                return `${month}月前`
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
       }
    },
    components: {
        loadComp
    }
  }
</script>