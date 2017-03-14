<template>
   <div class="user-profile">
      <span class="title">{{title}}</span>
      <div v-for="topic in topics" class="user-topic">
          <div class="topic-title">
             <div v-if="topic.good || topic.top" class="tab">
                <span>{{topic.tab | getTabName(topic.top,topic.good)}}</span>
             </div>
             <div class="title">{{topic.title}}</div>
          </div>
         <div class="topic-name">
            <div class="author-name">{{topic.author.loginname}}</div>
            <div class="create-time">{{topic.create_at || topic.last_reply_at | getTime}}</div>
         </div>
      </div>
   </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .user-profile{
       width: 100%;
       height: auto;
       span.title{
          display: block;
          background: rgba(43, 43, 43, 0.09);
          padding: 2px 5px;
          box-sizing: border-box;
          color: #666;
          font-size: 10px;
       }
       .user-topic{
          width: 100%;
          background: #fff;
          height: auto;
          &:not(:last-child){
             border-bottom: 1px solid gainsboro;
          }
          .topic-title{
             display: flex;
             flex-flow: row nowrap;
             justify-content: flex-start;
             align-items: center;
             padding: 5px 0;
             box-sizing: border-box;
             .tab{
                width: auto;
                text-align: center;
                margin-left:10px;
                margin-right: 0px;
                span{
                   display: inline-block;
                   width: auto;
                   height: auto;
                   padding: 2px 5px;
                   box-sizing: border-box;
                   border-radius: 3px;
                   background: #80bd01;
                   color: #fff;
                   font-size: 8px;
                }
             }
            .title{
               flex-grow: 1;
               flex-basis: 80%;
               padding-left: 10px;
               overflow: hidden;
               white-space: nowrap;
               text-overflow: ellipsis;
            }
          }
          .topic-name{
             display: flex;
             flex-flow: row nowrap;
             justify-content: space-around;
             align-items: center;
             font-size: 12px;
             color: #cccccc;
             div{
                flex-basis: 50%;
                flex-grow: 1;

                &.author-name{
                   text-align: left;
                   padding-left: 10px;
                }
                &.create-time{
                   text-align: right;
                   padding-right: 10px;
                }
             }
          }
       }
    }
</style>
<script>
    
    export default{
        data(){
            return{
              collectTopics:[]
            }
        },
        props:{
           title:{
              type:String,
              default:''
           },
           topics:{
               type:Array,
               default:[]
           }
        }
    }
</script>
