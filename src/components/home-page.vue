<template>
<div >
  <el-container style="height: 100%;">
  <el-header >
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  >
  <el-menu-item index="1">GodDemo</el-menu-item>
  <el-submenu index="2">
    <template slot="title">{{ $store.state.username }}</template>
    <el-menu-item index="2-1" @click="userinformation()">个人信息</el-menu-item>
    <el-menu-item index="2-2" @click="updateusericon()">编辑头像</el-menu-item>
    <el-menu-item index="2-3" @click="logout()">注销登录</el-menu-item>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4" ><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
  </el-header>
  <el-container>
    <el-aside  width="200px" class="mainpage">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户设置</span>
        </template>
        <el-menu-item-group>
          <template slot="title">个人设置</template>
          <el-menu-item index="1-1" @click="userinformation()">个人信息</el-menu-item>
          <el-menu-item index="1-2" @click="adduserimage()">扫描个人重要信息</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="人员管理(需要权限大于A)">
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">人员管理</template>
          <el-menu-item index="1-4-1" @click="allUser()">查看全部人员</el-menu-item>
          <el-menu-item index="1-4-2" @click="addUser()">添加人员</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
         <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">额外功能</span>
         </template>
           <el-menu-item-group>
          <template slot="title">额外功能</template>
          <el-menu-item index="2-1" @click="qrcodecheck()">识别二维码</el-menu-item>
          <el-menu-item index="2-2" @click="video()">播放视频</el-menu-item>
          <el-menu-item index="2-3" @click="comment()">评论点赞</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
    </el-aside>
    <el-main >
      <router-view></router-view>
      </el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      isCollapse: true
    }
  },
  methods: {
    logout () {
      this.$router.push('/login')
    },
    userinformation () {
      this.$router.push('/home/user')
    },
    allUser () {
      this.$router.push('/home/alluser')
    },
    addUser () {
      this.$router.push('/home/useradd')
    },
    adduserimage () {
      this.$router.push('/home/userimageadd')
    },
    qrcodecheck () {
      this.$router.push('/home/qrcodecheck')
    },
    video () {
      this.$router.push('/home/videoshow')
    },
    comment () {
      this.$router.push('/home/comment')
    },
    updateusericon () {
      this.$router.push('/home/updateusericon')
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
   &.el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: px;
    padding: 0 0px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height:540px;
    flex-grow:1;
  }

  body > .el-container {
    margin-bottom: 40px;
    height: 100%;
  }
  .mainpage{
    height: 540px;
    padding-bottom: 0px;
    background-color: rgb(84, 92, 100);
  }

</style>
