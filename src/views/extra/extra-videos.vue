<template>
<div class="videoshow">
  <div class="chose">
  <button @click="chose(1)">第一集</button>
  <button @click="chose(2)">第二集</button>
  </div><br>
  <!-- 销毁子组件自己 -->
  <router-view v-if="reWrite"></router-view>
</div>
</template>

<script>
export default {
  data () {
    return {
      reWrite: true
    }
  },
  methods: {
    chose (num) {
      this.$router.push('/home/videoshow/video/' + num)
      // 强制刷新子子组件，
      this.reWrite = false
      this.$nextTick(function () {
        this.reWrite = true
      })
    }
  }
}
</script>

<style lang="less" scoped>
.chose  {
  height: 50px;
}

.videoshow {
  height: 100%;
  widows: 100%;
}
</style>
