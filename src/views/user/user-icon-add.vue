<template>
  <div>
    用户头像：
    <img v-if="iconshow" v-bind:src="this.usericon">
    <hr>
    <el-upload class="upload-demo" ref="upload" action="/api/user/addusericon"
     multiple :auto-upload="false" :data="{username:$store.state.username}"
     :on-success="uploadSuccess" :before-upload="beforeAvatarUpload">
      <div>请用户头像： <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      </div>
      <hr>
      <div slot="tip" class="el-upload__tip">只能上传jpg文件，且不超过500kb</div>
    </el-upload>
    <div>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    </div> <br>
  </div>
</template>

<script>
import { GetUserICon } from '@/api/userAPI.js'
export default {
  data () {
    return {
      usericon: '',
      iconshow: false
    }
  },
  created () {
    this.getusericon()
  },
  methods: {
    submitUpload () {
      this.fileDataLoading = true
      this.$refs.upload.submit()
    },
    uploadSuccess (response, file, fileList) {
      if (response.flag === 200) {
        this.usericon = response.data
        this.iconshow = true
      } else {
        this.$message(response.data)
      }
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 5

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 5MB!')
      }
      return isJPG && isLt2M
    },
    async getusericon () {
      const { data: res } = await GetUserICon(this.$store.state.username)
      if (res.flag === 200) {
        this.usericon = res.data
        this.iconshow = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
  img {
    height:140px;
    width: 140px
  }
</style>
