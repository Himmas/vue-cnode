<template>
    <div class="user-profile">
        <span class="title">用户信息</span>
        <div class="user-info">
            <div class="user-avar">
                <img :src="usersInfo.avatar_url">
            </div>
            <div class="user-name">{{usersInfo.loginname}}</div>
            <div class="user-score">{{usersInfo.score}}积分</div>
        </div>
        <div class="regis-time">注册于：{{usersInfo.create_at | getTime}}</div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .user-profile{
        width: 100%;
        height: auto;
        border-bottom: 1px solid gainsboro;
        span.title{
            display: block;
            background: rgba(43, 43, 43, 0.09);
            padding: 2px 5px;
            box-sizing: border-box;
            color: #666;
            font-size: 10px;
        }
        .user-info{
            width: 100%;
            height: auto;
            background: #fff;
            border-top: 1px solid gainsboro;
            color: #666;
            font-size: 12px;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: flex-start;
            padding: 2px 5px;
            box-sizing: border-box;
            div.user-avar{
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background: gainsboro;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
            div.user-name,
            div.user-score{
                margin: 0 10px;
                flex-basis: auto;
            }
        }
        .regis-time{
            width: 100%;
            padding: 2px 5px;
            box-sizing: border-box;
            color:#666;
            font-size: 12px;
        }
    }
</style>
<script>
    
    export default{
        data(){
            return{
                usersInfo:{}
            }
        },
        created(){
            this.getUserInfo()
        },
        methods:{
            getUserInfo(){
                this.$http.get(`/user/${this.$route.params.id}`)
                .then((res)=>{
                   this.usersInfo = res.data.data
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
        },
        components:{
            
        }
    }
</script>
