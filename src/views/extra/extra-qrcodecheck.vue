<template>
<div>
  <el-upload
  class="upload-demo"
  drag
  action="/api/user/qrcodeCheck"
  multiple
  :on-success="uploadSuccess">
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
二维码的信息为：<br>
<h2>{{qrcodemsg}}</h2>
</div>
</template>

<script>
export default {
  data () {
    return {
      qrcodemsg: ''
    }
  },
  methods: {
    uploadSuccess (response, file, fileList) {
      this.qrcodemsg = response.data
    }
  }
}
</script>

<style>

</style>
