/**
 * Created by zlvin on 2017/2/22.
 */

//app.vue的router-view
import article from '../components/article/articleComp'
import login from '../components/login/login'
import articleDetail from '../components/article/articleDetail.vue'

const routes = [{
  path: '/',
  component: article
},{
  path: '/topic/:id',
  name:'topic',
  component: articleDetail
},
  {
  path: '/login',
  name: 'login',
  component: login
}]

export default routes