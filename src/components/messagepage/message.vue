<template>
    <div>
        <read-message></read-message>
        <unread-message></unread-message>
    </div>
</template>
<style lang="less">

</style>
<script>
    import readMessage from './readMessage'
    import unreadMessage from './unreadMessage'
    import { ACCESS_TOKEN } from '../../config.js'

    export default{
        data(){
            return{

            }
        },
        created(){
          this.getMessage()
        },
        methods:{
          getMessage(){
            this.$http.get(`/messages?accesstoken=${ACCESS_TOKEN}`)
            .then((res)=>{
              console.log(res.data.data)
            })
            .catch((error)=>{
              console.log(error)
            })
          }
        },
        components:{
          readMessage,
          unreadMessage
        }
    }
</script>
