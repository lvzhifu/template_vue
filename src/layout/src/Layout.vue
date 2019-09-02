<template>
  <div class="yz-layout">
    <!--头部样式-->
    <yz-header :title="$route.meta.title" :is-left-button="$route.meta.isLeft">
      <template slot="right">
        <!--<img src="@assets/img/cart-delete.png"  alt="上海鲜花港 - 郁金香" />-->
      </template>
    </yz-header>
    <p>这他妈是个头</p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    // title () {
    //   // this.$route
    // }
  },
  created () {
    console.log(this.$route)
    console.log(this.$router)
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
