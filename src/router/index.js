import Vue from 'vue'
import VueRouter from 'vue-router'
import loginpage from '../components/login-page.vue'
import HomePage from '../components/home-page.vue'
import UserInformation from '../views/user/user-imformation.vue'
import UpdateUserInformation from '../views/user/user-updateinformation.vue'
import AllUserInformation from '../views/user/all-user-information.vue'
import UserAdd from '../views/user/user-add.vue'
import UserImageAdd from '../views/user/user-image-add.vue'
import ExtraQrcodeCheck from '../views/extra/extra-qrcodecheck.vue'
import videoShow from '../views/extra/extra-videos.vue'
import Video from '../views/extra/utils/utils-vidoe.vue'
import Comment from '../views/extra/extra-comment.vue'
import UpdateUserIcon from '../views/user/user-icon-add.vue'
// 导入插件
Vue.use(VueRouter)

// 新增以下代码，解决NavigationDuplicated问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes: [
    // 重定向首页
    { path: '/', redirect: '/login' },
    // 配置路由
    { path: '/login', component: loginpage },
    {
      path: '/home',
      component: HomePage,
      children: [
        { path: 'user', component: UserInformation },
        { path: 'updateuser', component: UpdateUserInformation, name: 'updateuser' },
        { path: 'alluser', component: AllUserInformation },
        { path: 'useradd', component: UserAdd },
        { path: 'userimageadd', component: UserImageAdd },
        { path: 'qrcodecheck', component: ExtraQrcodeCheck },
        { path: 'videoshow', component: videoShow, children: [{ path: 'video/:num', component: Video, name: 'video' }] },
        { path: 'comment', component: Comment },
        { path: 'updateusericon', component: UpdateUserIcon }
      ]
    }
  ]
})
export default router
