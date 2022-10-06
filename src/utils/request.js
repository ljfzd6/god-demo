import axios from 'axios'
const request = axios.create({
  // 请求的接口基础路径
  baseURL: '/api'
})
export default request
