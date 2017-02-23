<template>
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
        width: 98%;
        background-color: #555;
        margin: 0 auto;
    }

    #search {
        text-align: center;
    }
</style>
<script>
  export default{
    data(){
      return{

      }
    },
    components:{

    }
  }

</script>
