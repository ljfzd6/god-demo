<template>
  <div>
    <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="用户名"
      prop="username">
    </el-table-column>
        <el-table-column
      label="密码"
      prop="password">
    </el-table-column>
        <el-table-column
      label="年龄"
      prop="age">
    </el-table-column>
        <el-table-column
      label="真是姓名"
      prop="name">
    </el-table-column>
    <el-table-column
      label="联系电话"
      prop="phone">
    </el-table-column>
        <el-table-column
      label="地址"
      prop="address">
    </el-table-column>
      <el-table-column
      label="邮箱"
      prop="email">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" >
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"
          />
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">修改用户</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除用户</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { GetAllUser, DeleteUser } from '@/api/userAPI.js'
export default {
  data () {
    return {
      tableData: '',
      search: '',
      user: ''
    }
  },
  methods: {
    handleEdit (index, row) {
      this.$router.push({ name: 'updateuser', params: { user: row } })
    },
    async handleDelete (index, row) {
      const { data: res } = await DeleteUser(row.username)
      if (res.flag === 200) {
        this.$message('删除成功')
        this.getAllUser()
      } else {
        this.$message('删除失败')
      }
    },
    async getAllUser () {
      const { data: res } = await GetAllUser()
      this.tableData = res.data
    }
  },
  created () {
    this.getAllUser()
  }
}
</script>

<style>

</style>
