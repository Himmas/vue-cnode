<template>
  <div>
    <ul>
      <li class="list" v-for="list in lists">
        <router-link :to="list.tab">{{list.name}}</router-link>
      </li>
    </ul>

  </div>
</template>
<style lang="less">

</style>
<script>

  export default{
    data(){
      return {
        lists:[{
          tab:"all",
          name:"全部"
          },
          {
          	tab:"esse",
            name:"精华"
          },
          {
            tab:"share",
            name:"分享"
          },
          {
            tab:"aks",
            name:"问答"
          },
        ]
      }
    },
    components: {}
  }
</script>
