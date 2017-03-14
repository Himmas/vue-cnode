<template>
   <div class="user-page">
       <user-info></user-info>
       <user-collect title="用户收藏" :topics="collectTopics"></user-collect>
       <user-collect title="用户创建的主题" :topics="createTopics"></user-collect>
       <user-collect title="用户回复的主题" :topics="replyTopics"></user-collect>
   </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .user-page{
        width: 100%;
        overflow-y: scroll;
    }
</style>
<script>
    import userInfo from './userInfo/userInfo'
    import userCollect from './userInfo/userCollect'

    export default{
        data(){
            return{
                collectTopics:[],
                createTopics:[],
                replyTopics:[]
            }
        },
        created(){
            this.getUserCollect()
            this.getUserTopics()
        },
        methods:{
            getUserCollect(){
               this.$http.get(`/topic_collect/${this.$route.params.id}`)
               .then((res)=>{
                  this.$set(this.$data,'collectTopics',res.data.data)
                  console.log(res.data)
               })
               .catch((error)=>{
                  console.log(error)
               })
           },
           getUserTopics(){
                this.$http.get(`/user/${this.$route.params.id}`)
                .then((res)=>{
                    this.$set(this.$data,'createTopics',res.data.data.recent_topics)
                    this.$set(this.$data,'replyTopics',res.data.data.recent_replies)
                })
           }
        },
        components:{
            userInfo,
            userCollect
        }
    }
</script>
