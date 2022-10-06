<template>
<el-form :model="UserForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" >
    <el-input type="text"  v-model="UserForm.username" ></el-input>
  </el-form-item>
  <el-form-item label="真实姓名" >
    <el-input type="text" v-model="UserForm.name" ></el-input>
  </el-form-item>
  <el-form-item label="年龄" >
    <el-input type="number" v-model.number="UserForm.age"></el-input>
  </el-form-item>
    <el-form-item label="电话" >
    <el-input type="number" v-model="UserForm.phone"></el-input>
  </el-form-item>
    <el-form-item label="地址" >
    <el-input type="text" v-model="UserForm.address"></el-input>
  </el-form-item>
      <el-form-item label="邮箱" >
    <el-input type="text" v-model="UserForm.email"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm()">提交</el-button>
    <el-button @click="resetForm()">重置</el-button>
  </el-form-item>
  <div class="container-box">
    <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="60%"
  custom-class="import-dialog">
  <span>{{error}}</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="confirmupdate()">关  闭</el-button>
  </span>
</el-dialog>
  </div>
</el-form>

</template>

<script>
import { UpdateUserInformation } from '../../api/userAPI.js'
export default {
  data () {
    return {
      UserForm: '',
      dialogVisible: false,
      error: '',
      flag: 0
    }
  },
  methods: {
    // 提交修改表单，弹出提示框
    async submitForm () {
      const { data: res } = await UpdateUserInformation(this.UserForm)
      this.dialogVisible = true
      this.error = res.data
    },
    // 跳转至浏览信息页面，并且关闭提示框
    confirmupdate () {
      console.log(this.flag)
      if (this.flag === 200) {
        this.dialogVisible = false
        this.$router.push('/home/user')
      } else {
        this.dialogVisible = false
      }
    },
    // 重置数据
    resetForm () {
      this.UserForm = ''
    }
  },
  // 读取数据展示页面传来的值
  created () {
    this.UserForm = this.$route.params.user
  }
}
</script>

<style lang="less" scoped>
.container-box{
    //弹出层的高度
    ::v-deep .el-dialog.import-dialog{
      height: 60%;
      overflow-y: auto;
    }
    //弹出层里内容的高度
    ::v-deep .el-dialog__body{
      max-height: 60%;
    }
  }
</style>
