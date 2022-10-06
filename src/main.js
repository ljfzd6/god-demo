import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入store
import store from './store'
Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
