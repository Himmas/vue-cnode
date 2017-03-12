<template>
  <div class="login">
      <div class="login-code">
          <figure>
            <p>手机扫码登录</p>
          </figure>

      </div>
  </div>
</template>
<style lang="less" scoped>
    .login{
        width: 100%;
        height: 100%;
        padding: 10% 0;
        box-sizing: border-box;
        .login-code{
            width: 50%;
            height: auto;
            margin: 0 auto;
            figure{
              text-align: center;
              img{
                width: 100%;
              }
              p{
                text-align: center;
              }
            }

        }
    }
</style>
<script>
  import { ACCESS_TOKEN } from '../../config.js'
  export default{
    name:"login",
    data(){
      return {}
    },
    created(){
      this.loginAccount()
      //console.log(ACCESS_TOKEN)
    },
    methods:{
      loginAccount(){
        this.$http.post('/accesstoken',{
            accesstoken:ACCESS_TOKEN
        })
        .then((res)=>{
          localStorage.setItem('username',res.data.loginname)
          localStorage.setItem('userid',res.data.id)
          localStorage.setItem('avatarurl',res.data.avatar_url)
          console.log(res.data)
        })
        .catch((error)=>{
          console.log(error)
        })
      }
    }
  }
</script>
