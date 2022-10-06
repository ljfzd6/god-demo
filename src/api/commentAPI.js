import request from '@/utils/request.js'
// 获取全部的帖子
export const GetAllComment = function () {
  return request.get('/comment/getallcomment')
}
// 获取全部的回复
export const GetAllReply = function (id) {
  console.log(id)
  const idnum = Number(id)
  return request.get('/comment/getallreply', {
    params: {
      id: idnum
    }
  })
}
