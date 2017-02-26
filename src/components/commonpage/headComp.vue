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
          <li v-for="lede in ledes" class="leder-li">
            <router-link :to="lede.path" class="leder-a" tag="a">{{lede.name}}</router-link>
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
  text-align:center;
  padding:10px 0;
  }

  .top {
    width: 98%;
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
    background:url("../../assets/search.png") 2px 2px no-repeat #888;
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

  export default{
    data(){
      return {
        ledes: [{
          path: '/',
          name: '首页'
        }, {
          path: '/',
          name: '新手入门'
        }, {
          path: '/',
          name: 'API'
        }, {
          path: '/',
          name: '关于'
        }, {
          path: '/',
          name: '注册'
        }, {
          path: '/login',
          name: '登录'
        }]
      }
    },
    created(){

    },
    methods: {
    },
    components: {}
  }
</script>
