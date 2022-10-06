import request from '@/utils/request.js'
// 登录请求
export const Login = function (username, password) {
  // 请求路径
  return request.get('/user/login', {
    params: {
      username: username,
      password: password

    }
  })
}
// 通过用户名返回用户数据请求
export const SelectUserInformationByUsername = function (username) {
  return request.get('/user/selectuserbyusername', {
    params: {
      username: username
    }
  })
}
// 修改用户数据
export const UpdateUserInformation = function (user) {
  console.log('准备发送的' + user.id + user.username + user.password + user.age + user.name + user.phone + user.address)
  return request.get('/user/updateuser', {
    params: {
      id: user.id,
      username: user.username,
      password: user.password,
      age: user.age,
      name: user.name,
      phone: user.phone,
      address: user.address,
      email: user.email
    }
  })
}
// 发送验证码
export const SendVerifCode = function (username) {
  return request.get('/user/passwordVerifCode', {
    params: {
      username: username
    }
  })
}
// 修改密码
export const UpdatePassword = function (username, verifcode, password) {
  return request.get('/user/updatepassword', {
    params: {
      username: username,
      password: password,
      verifcode: verifcode
    }
  })
}
// 获取全部用户
export const GetAllUser = function () {
  return request.get('/user/getalluser')
}
// 删除指定用户
export const DeleteUser = function (username) {
  return request.get('/user/deleteuser', {
    params: {
      username: username
    }
  })
}
// 添加用户
export const AddUser = function (UserForm) {
  return request.get('/user/adduser', {
    params: {
      username: UserForm.username,
      password: UserForm.password,
      age: UserForm.age,
      name: UserForm.name,
      phone: UserForm.phone,
      address: UserForm.address,
      email: UserForm.email
    }
  })
}
// 获取个人信息二维码
export const GetPersonDataCard = function (user) {
  console.log('准备发送的' + user.id + user.username + user.password + user.age + user.name + user.phone + user.address)
  return request.get('/qrcode/getQRCodeBase64', {
    params: {
      id: user.id,
      username: user.username,
      password: user.password,
      age: user.age,
      name: user.name,
      phone: user.phone,
      address: user.address,
      email: user.email
    }
  })
}
// 获取个人头像
export const GetUserICon = function (username) {
  return request.get('/user/getusericon', {
    params: {
      username: username
    }
  })
}
