/**
 * Created by zlvin on 2017/2/22.
 */

//app.vue的router-view
//import article from '../components/article/articleComp'
//import login from '../components/login/login'
//import articleDetail from '../components/article/articleDetail.vue'

const routes = [{
    path: '/',
    component: function(resolve){
      require(['../components/article/articleComp'],resolve)
    },
    children:[{
      path:'',
      component:function (resolve) {
        require(['../components/article/articleList'],resolve)
      }
  }]
},{
  path: '/topic/:id',
  name:'topic',
  component: function(resolve){
    require(['../components/article/articleDetail.vue'],resolve)
  }
},
  {
  path: '/login',
  name: 'login',
  component: function(resolve){
    require(['../components/login/login'],resolve)
  }
}]

export default routes