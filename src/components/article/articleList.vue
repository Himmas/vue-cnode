<template>
    <div class="articlelist">
        <ul>
            <li class="art-li" v-for="artlist in artlists">
                <div class="art-head">
                    <img src=""/>
                </div>
                <div class="art-tab">
                    {{artlist.tab}}

                </div>
                <!--<router-link :to="{name = 'topic',params:{id:artlist.id }}">-->

                <!--</router-link>-->
            </li>
        </ul>
    </div>

</template>
<style lang="less" scoped>

</style>
<script>

  export default{
    data(){
      return {
      	artlists:[
          {"id":1}
        ]

      }
    }
  }

</script>
