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
      component:(resolve) => {
        require(['../components/article/articleList'],resolve)
      }
  }]
},{
  path: '/topic/:id',
  name:'topic',
  component: (resolve)=>{
    require(['../components/article/topicComp.vue'],resolve)
  },
  meta:{
    requiresAuth: true
  },
  beforeEnter: (to, from, next) => {
    if (to.matched.some(res=>res.meta.requiresAuth) && to.params.id == 'create') {
      if (localStorage.getItem('login')) {
        next({
          path: '/login'
        })
      } else {
        next()
      }
    }else{
      next()
    }
  }
},
  {
  path: '/my/:id',
  name: 'message',
  component: function(resolve){
    require(['../components/messagepage/message'],resolve)
  },
  children:[{
    path:'readmessage',
    name:'readmessage',
    component:require('../components/messagepage/messageDetail')
  },{
    path:'unreadmessage',
    name:'unreadmessage',
    component:require('../components/messagepage/messageDetail')
  }]
},{
    path: '/user/:id',
    name:'user',
    component:require('../components/user/userpage.vue'),
    children:[{
      path:'collections',
      name:'collections',
      component:require('../components/user/usercollect.vue')
    }]
  }]

export default routes
