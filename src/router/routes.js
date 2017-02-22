/**
 * Created by zlvin on 2017/2/22.
 */

//app.vue的router-view
import article from '../components/article/articleComp'
import login from '../components/login/login.vue'
//子router-view
import newArticle from '../components/article/article-type/newArticle.vue'
import esseArticle from '../components/article/article-type/esseArticle.vue'
import shaerArticle from '../components/article/article-type/shareArticle.vue'
import askArticle from '../components/article/article-type/askArticle.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: article,
    children:[{
        path:'',
        component:newArticle
    },{
        path:'esse',
        component:esseArticle
    },{
        path:'share',
        component:shaerArticle
    },{
        path:'ask',
        component:askArticle
    }]
},{
    path: '/login',
    name: 'login',
    component: login
}]

export default routes