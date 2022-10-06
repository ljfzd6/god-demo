<template>
  <div>
    <el-descriptions class="margin-top" title="用户信息" :column="3" :size="size" border>
    <template slot="extra">
      <el-button type="primary" size="small" @click="updateuserinformation()">修改基础用户信息</el-button>
      <el-button type="primary" size="small" @click="outerPassword = true">修改密码</el-button>
      <el-button type="primary" size="small" @click="getpersondatacode()">生成个人信息二维码</el-button>
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户名
      </template>
      {{this.user.username}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        密码
      </template>
      {{this.user.password}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        居住地
      </template>
      {{this.user.address}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-phone"></i>
        联系电话
      </template>
      {{this.user.phone}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-s-custom"></i>
        年龄
      </template>
      {{this.user.age}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-s-custom"></i>
        真实姓名
      </template>
      {{this.user.name}}
    </el-descriptions-item>
        <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-s-custom"></i>
        邮箱
      </template>
      {{this.user.email}}
    </el-descriptions-item>
    <!-- 修改密码弹窗 -->
  </el-descriptions>
      <el-dialog title="修改密码" :visible.sync="outerPassword">
    <span>修改密码需要输入邮箱验证码</span>
    <el-dialog
      width="30%"
      title="输入验证码"
      :visible.sync="innerPassword"
      append-to-body>
       输入验证码：<el-input type="text" v-model="verifcode"></el-input>
       <hr>
       输入新密码：<el-input type="text" v-model="newpassword"></el-input>
      <el-button type="primary" @click="checkverifcode()">确定</el-button>
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outerPassword = false">取 消</el-button>
      <el-button type="primary" @click="sendverifcode()">发送验证码</el-button>
    </div>
  </el-dialog>
  <!-- 生成个人信息二维码弹窗 -->
  <el-dialog
  :visible.sync="dialogVisible"
  width="30%">
  <img v-bind:src="this.persondatacard">
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import { SelectUserInformationByUsername, SendVerifCode, UpdatePassword, GetPersonDataCard } from '../../api/userAPI.js'
export default {
  methods: {
    // 获取表单信息
    async getinformation () {
      const { data: res } = await SelectUserInformationByUsername(this.$store.state.username)
      console.log(res.data)
      this.user = res.data
    },
    // 跳转到更新用户信息页面，并将用户数据一起发过去
    updateuserinformation () {
      this.$router.push({ name: 'updateuser', params: { user: this.user } })
    },
    // 发送验证码邮件
    async sendverifcode () {
      this.$message('请耐心等待邮件发送')
      const { data: res } = await SendVerifCode(this.user.username)
      if (res.flag === 200) {
        this.innerPassword = true
      } else {
        this.$message('请求错误，请稍后')
      }
    },
    // 修改密码
    async checkverifcode () {
      const { data: res } = await UpdatePassword(this.$store.state.username, this.verifcode, this.newpassword)
      if (res.flag === 200) {
        this.$message(res.data)
        this.getinformation()
        this.innerPassword = false
        this.outerPassword = false
      } else {
        this.$message(res.data)
        this.innerPassword = false
      }
    },
    // 生成个人信息二维码
    async getpersondatacode () {
      const { data: res } = await GetPersonDataCard(this.user)
      console.log('获取的二维码' + res.data)
      this.persondatacard = res.data
      this.dialogVisible = true
    }
  },
  data () {
    return {
      user: '',
      size: '',
      outerPassword: false,
      innerPassword: false,
      dialogVisible: false,
      verifcode: '',
      newpassword: '',
      persondatacard: ''
    }
  },
  // 获取展示数据
  created () {
    this.getinformation()
  }
}
</script>

<style>

</style>
