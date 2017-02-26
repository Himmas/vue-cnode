/**
 * Created by zlvin on 2017/2/22.
 */

//app.vue的router-view
import article from '../components/article/articleComp'
import login from '../components/login/login.vue'
//子router-view
import articleList from '../components/article/articleList.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: article,
  children: [{
    path: '',
    component: articleList
  }]
}, {
  path: '/login',
  name: 'login',
  component: login
}]

export default routes