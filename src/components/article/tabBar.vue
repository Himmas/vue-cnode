<template>
  <div class="main">
    <div class="main-top">
      <ul>
         <router-link class="list" :to="{path:'/',query:{tab:list.tab}}"
                      v-for="(list,index) in lists"
                      active-class="active"
                      tag="li"
                      exact>
            <span>{{list.name}}</span>
         </router-link>
      </ul>
    </div>
  </div>
</template>
<script>

  export default{
    data(){
      return {
        lists:[{
          tab:"all",
          name:"全部",
          },
          {
          	tab:"good",
            name:"精华",
          },
          {
            tab:"share",
            name:"分享",
          },
          {
            tab:"ask",
            name:"问答",
          }
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  .main{
    width: 100%;
    margin:15px auto 0 auto;
    .main-top{
      background-color:#f6f6f6;
      .list{
        display: inline-block;
        padding: 10px 5%;
        font-size: 15px;
        &.active{
          background-color:#80bd01;
        }
      }
    }
  }
</style>

