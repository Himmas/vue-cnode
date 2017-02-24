<template>
<<<<<<< HEAD
    <div >
      <div class="top">
        <div class="logo">
          <router-link to="/"><img src="../../assets/cnodejs_light.svg"/></router-link>
        </div>
        <div class="search">
          <form  method="get" action="http://www.baidu.com/s">
            <input type="text" class="search-input" name="wd" autocomplete="off"/>
          </form>
        </div>
        <div class="leder">
          <ul>
            <li v-for="item in items" class="leder-li" >
            <a href="" class="leder-a">{{item}}</a>
            </li>
          </ul>
        </div>
      </div>
      <router-link to="/login">login</router-link>
    </div>
</template>
<style lang="less">
    .logo {
      img {
        width:30%;
      }
    text-align:center;
    }
    .top {
      width: 98%;
      background-color: #444;
      margin:0 auto;
    }
    .search {
      text-align:center;
=======
    <div>
        <div id="top">
            <div id="logo">
                <router-link to="/"><img src="../../assets/cnodejs_light.svg"/></router-link>
            </div>
            <div id="search">
                <form method="get" action="http://www.baidu.com/s">
                    <input type="text" name="wd" autocomplete="off"/>
                </form>
            </div>
        </div>
        <router-link to="/login">登陆</router-link>
    </div>
</template>
<style lang="less">
    #logo {
        img {
            width: 30%;
        }
        text-align: center;
    }

    #top {
        width: 100%;
        background-color: #555;
        margin: 0 auto;
    }

    #search {
        text-align: center;
>>>>>>> 35fbe2d5dcf43be66113e05a8664dad6f93b6d16
    }
    .search-input {
      border-radius: 15px;
      width: 60%;
      height: 25px;
      background: url("../../assets/search.png") no-repeat left center;
      background-size: 20px 20px;
      background-color: #888;
      padding-left: 22px;
      }
      .search-input:hover{
        background-color: white;
    }
    .leder-a{
      color: white;
    }
    .leder-li:hover {
      opacity: 0.3;
    }

    .leder-li {
      display: inline-block;
      padding:20px 3% 20px 3%;

    }
</style>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        items:["首页","新手入门","API","关于","注册","登录"],
      }
    },
    created(){

    },

    methods:{

    },
    components:{

    }
  }

</script>
