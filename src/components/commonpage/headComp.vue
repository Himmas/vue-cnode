<template>

    <div>
        <div class="top">
            <div class="logo">
                <img src="../../assets/cnodejs_light.svg"/>
            </div>
            <div class="search">
                <form method="get" action="http://www.baidu.com/s">
                    <input type="text" class="search-input" name="wd" autocomplete="off"/>
                </form>
            </div>
            <div class="leder">
                <ul>
                    <li v-for="item in items" class="leder-li">
                       <router-link :to='item.path' class="leder-a" tag="a">{{item.name}}</router-link>
                     </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    .logo {
        img {
            width: 30%;
        }
        text-align: center;
    }

    .top {
        width: 100%;
        background-color: #444;
        margin: 0 auto;
    }

    .search {
        text-align: center;
    }

    .search-input {
        border-radius: 15px;
        width: 60%;
        height: 25px;
        background: #888;
        padding-left: 22px;
    }

    .search-input:hover {
        background-color: white;
    }

    .leder-a {
        color: white;
    }

    .leder-li:hover {
        opacity: 0.3;
    }

    .leder-li {
        display: inline-block;
        padding: 20px 3% 20px 3%;

    }
</style>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        items:[{
           path:'/',
           name:'首页'
        },{
            path:'/',
            name:'新手入门'
        },{
            path:'/',
            name:'Api'
        },{
            path:'/login',
            name:'登录'
        }]
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
