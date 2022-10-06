<template>
    <div >
       <video controls class="video">
             <source :src="video" type="video/mp4">
           </video>
  </div>
</template>

<script>
export default {
  data () {
    return {
      videopath: 'http://localhost:8080/videos/',
      video: ''
    }
  },
  created () {
    this.video = this.videopath + this.$route.params.num + '.mp4'
  }

}
</script>

<style lang="less" scoped>
.video {
  height: 400px;
  width: 100%;
}
</style>
