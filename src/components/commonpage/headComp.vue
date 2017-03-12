<template>
    <div class="top">
        <div class="logo">
            <img src="../../assets/img/cnodejs_light.svg"/>
        </div>
        <div class="search">
            <form method="get" action="">
                <input type="text" class="search-input" name="wd" autocomplete="off"/>
            </form>
        </div>
        <div class="leder">
            <ul>
                <li v-for="(nav,index) in navs" class="leder-li">
                    <router-link :to="nav.path" class="leder-a" tag="a">{{nav.name}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="less">
    .top { //class="top"的样式
        position: fixed;
        top: 0;
        width: 100%;
        height: 20%;
        overflow: hidden;
        background-color: #444;
        text-align: center;
        z-index:100;
        .logo {
            img {
                width: 30%;
            }
            padding: 10px 0;
        }
        .search {
            .search-input {
                border-radius: 15px;
                width: 60%;
                height: 25px;
                background: url("../../assets/img/search.png") 5px 3px no-repeat #888;
                padding-left: 22px;
                &:hover {
                    background-color: white;
                }
            }
        }
        .leder {
            .leder-li {
                display: inline-block;
                padding: 10px 3%;
                &:hover {
                    opacity: 0.3;
                }
                .leder-a {
                    color: white;
                }
            }
        }
    }
</style>
<script>

   export default{
    data(){
      return {
        navs: [{
          path: '/',
          name: '首页'
        }, {
          path: '/topic/create',
          name: '发布话题'
        }, {
          path: '/my/message',
          name: '消息通知'
        }]
      }
    }
  }

</script>
