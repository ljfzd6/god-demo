<template>
  <div>
    <el-upload class="upload-demo" ref="upload" action="/api/user/addUserimage"
     multiple :auto-upload="false" :data="{username:$store.state.username}"
     :on-success="uploadSuccess">
      <div>请上传用户身份证： <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
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
export default {
  data () {
    return {
    }
  },
  methods: {
    async submitUpload () {
      this.fileDataLoading = true
      this.$refs.upload.submit()
    },
    uploadSuccess (response, file, fileList) {
      if (response.flag === 200) {
        this.$message(response.data)
      } else {
        this.$message(response.data)
      }
    }
  }
}
</script>

<style>
</style>
