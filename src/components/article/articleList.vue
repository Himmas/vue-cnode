<template>
  <!--<span>{{$route.query.tab}}</span>-->
  <div class="article">
    <ul>
      <li v-for="article in articles" class="art">
        <a href="article.headlink"> <img src="article.headpic" class="headpic"/></a>
        <span :calss="{special:article.isspecial}">{{article.type}}</span>
        <a href=article.link>{{article.title}}</a>
        <span>{{article.num1}}/{{article.num2}}</span>
        <span>{{article.num2}}</span>
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
      	articles:[
          {
          headlink:"nswbmw",
          headpic:"avatars.githubusercontent.com/u/4279697?v=3&s=120" ,
          isspecial:true ,
          type:"good" ,
          link:"www.baidu.com",
          title:"《一起学 Node.js》彻底重写完毕" ,
          num1:264 ,
          num2:75734 ,
          } ],

      }
    },
    components: {}
  }
</script>
