<template>
    <div class="tab-bar">
        <ul>
            <router-link class="list" :to="{path:'',query:{tab:list.tab}}"
                         v-for="(list,index) in lists"
                         :key="index"
                         active-class="active"
                         tag="li"
                         exact
            >
                <span>{{list.name}}</span>
            </router-link>
        </ul>
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
    .tab-bar {
        width: 100%;
        position: fixed;
        top: 137px;
        background: #f6f6f6;
        z-index:11;
        .list {
            display: inline-block;
            padding: 10px 5%;
            font-size: 15px;
            &.active {
                background-color: #80bd01;
            }
            span {
                color: #666;
            }
        }
    }
</style>

