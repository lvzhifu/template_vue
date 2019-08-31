<template>
  <div class="yz-layout">
    <!--头部样式-->
    <!--<yz-header></yz-header>-->
    <p>这他妈是个头</p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  created () {
    console.log('我已经进来构建')
  }
}
</script>
<style lang="less">
  @jkk: #695168;
  p {
    border: 1px solid @jkk;
    font-size: 30px
  }
</style>
