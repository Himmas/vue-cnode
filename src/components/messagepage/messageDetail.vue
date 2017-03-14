<template>
   <div class="message-detail">
      <div class="back-btn">
         <span @click="backPage" class="iconfont icon-zuojiantou"></span>
      </div>
      <div v-if="!readMessages.length" class="no-message">{{noMessage}}</div>
      <div v-if="readMessages.length" v-for="read in readMessages" class="message-list">
         <router-link :to="{name:'user',params:{id:read.author.loginname}}" class="reply-author" tag="span">{{read.author.loginname}}</router-link>
         <span class="self-content">{{msgContent}}</span>
         <router-link :to="{name:'topic',params:{id:read.topic.id}}" class="reply-topic" tag="span">{{read.topic.title}}</router-link>
      </div>
   </div>
</template>
<script>
   import { ACCESS_TOKEN } from '../../config.js'

   export default{
      data(){
         return{
            noMessage:'',
            msgContent:"回复了",
            readMessages:[]
         }
      },
      created(){
         this.getMessageInfo()
      },
      methods:{
         getMessageInfo(){
            this.$http.get(`/messages?accesstoken=${ACCESS_TOKEN}`)
            .then((res)=>{
               if(this.$route.name == 'readmessage'){
                 this.$set(this.$data,'readMessages',res.data.data.has_read_messages)
                 if(this.readMessages.length === 0){
                   this.noMessage = '暂无历史消息'
                 }
               }else if(this.$route.name == 'unreadmessage'){
                  this.$set(this.$data,'readMessages',res.data.data.hasnot_read_messages)
                  if(this.readMessages.length === 0){
                     this.noMessage = '暂无未读消息'
                  }
               }
            })
            .catch((error)=>{
               console.log(error)
            })
         },
         backPage(){
           this.$router.go(-1)
         }
      }
   }
</script>
<style lang="less" scroped>
   .message-detail{
      width: 100%;
      height: 80%;
      overflow-y: scroll;
      position: fixed;
      top:20%;
      background: #dcdcdc;
      .back-btn{
         width: 100%;
         height: 32px;
         line-height: 32px;
         color: #666;
         font-size: 14px;
         padding-left: 10px;
         box-sizing: border-box;
         background: #fff;
         border-bottom: 1px solid #dcdcdc;
      }
      .no-message{
         width: 100%;
         height: auto;
         text-align: center;
         color: #999;
         margin: 50px auto;
         font-size: 15px;
         &:after{
            display: block;
            margin: 0px auto;
            font-family:"iconfont" !important;
            content: "\e659";
            font-size: 40px;
            color: #cccccc;
         }
      }
      .message-list{
         width: 100%;
         height: auto;
         background: #fff;
         border-bottom: 1px solid #dcdcdc;
         padding: 10px;
         box-sizing: border-box;
         display: flex;
         flex-flow: row nowrap;
         justify-content: flex-start;
         align-items: center;
         span{
            flex-grow: 0;
            font-size: 14px;
            &.reply-author{
               color: #00a2df;
            }
            &.self-content{
               margin: 0 5px;
            }
            &.reply-topic{
               color: #00a2df;
            }
         }
      }
   }
</style>

