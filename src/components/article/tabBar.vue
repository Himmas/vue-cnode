<template>
  <div class="main">
    <div class="main-top">
      <ul>
        <li class="list" v-for="(list ,index) in lists" :class="{active:isactive==index}"  @click="actived(index)">
          <router-link :to="list.tab">{{list.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less">
  .main{
    width: 98%;
    margin:0 auto;
    margin-top: 12px;
  }
  .main-top{
     background-color:#f6f6f6;
   }
  .active {
    background-color:#80bd01;
  }
  .list{
    display: inline-block;
    padding: 10px 5%;
    font-size: 15px;
  }
  .list a{
    color:#80bd01
  }
  .active a{
    color:white;
  }
</style>
<script>

  export default{
    data(){
      return {
      	isactive:null,
        lists:[{
          tab:"?tab=all",
          name:"全部",
          },
          {
          	tab:"?tab=esse",
            name:"精华",
          },
          {
            tab:"?tab=share",
            name:"分享",
          },
          {
            tab:"?tab=ask",
            name:"问答",
          }
        ]
      }
    },
    methods:{
      actived(index){
      	this.isactive =index
      }
    }
  }
</script>
