<template>
  <mi-Header :title="title" class="yz-header">
    <template slot="left">
      <slot name="left" v-if="isLeft"></slot>
      <mt-button v-if="!isLeft && isLeftButton" icon="back" @click="onBack()">
        back
      </mt-button>
    </template>
    <template slot="right">
      <slot name="right"></slot>
    </template>
  </mi-Header>
</template>
<script>
import { Header } from 'mint-ui'
console.log(Header)
export default {
  name: 'yz-header',
  props: {
    title: String,
    isLeft: {
      type: Boolean,
      default: false
    },
    isLeftButton: {
      type: Boolean,
      default: true
    }
  },
  components: {
    miHeader: Header
  },
  mounted () {
  },
  methods: {
    onBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less">
// .yz-header {
// }
</style>
