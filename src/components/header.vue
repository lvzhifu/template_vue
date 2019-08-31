<template>
  <mi-Header fixed title="固定在顶部"/>
</template>
<script>
import { Header } from 'mint-ui'
console.log(Header)
export default {
  // name: 'yz-header',
  // props: {
  //   title: String,
  //   isLeft: {
  //     type: Boolean,
  //     default: false
  //   },
  //   isLeftButton: {
  //     type: Boolean,
  //     default: true
  //   },
  //   isLeftIcon: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  // components: {
  //   miHeader: Header
  // },
  // mounted () {
  //   // this.init()
  // },
  // methods: {
  //   init () {
  //     // const $el = $(this.$el)
  //     // $el.on('touchmove', e => {
  //     //   e.preventDefault()
  //     // })
  //   },
  //   // 返回
  //   onBack(e) {
  //     if (this.$device.isBeiquan) {
  //       this.$device.nativeBridge('back')
  //       return
  //     }
  //     let { bq_mart_source: bqSource, bq_mart_share_source: bqShareSource, from } = this.$route.query
  //     if (bqSource === 'old' || bqShareSource === 'weixin' || from) {
  //       this.$router.push({ name: 'home' })
  //       return
  //     }
  //     this.$router.go(-1)
  //   }
  // }
}
</script>
