// 创建vuex中的stroe
import Vuex from 'vuex'
import Vue from 'vue'
// 使用vuex组件
Vue.use(Vuex)
// 准备actions--用于响应组件中的动作
const actions = {
  updateusername (context, value) {
    context.commit('UPDATEUSERNAME', value)
  }
}
// 准备mutations--用于操作数据
const mutations = {
  UPDATEUSERNAME (state, value) {
    state.username = value
    console.log(state.username)
  }
}
// 准备state--用于存储数据
const state = {
  username: ''
}
// 创建store
export default new Vuex.Store({
  actions, mutations, state
})
