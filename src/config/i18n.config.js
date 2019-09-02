import Vue from 'vue'
import VueI18n from 'vue-i18n'
import i18nConfig from './i18n/get.i18n'
console.log(i18nConfig)
Vue.use(VueI18n)
const messages = {
  'zh-CN': {
    dd: {
      hello: 'hello world'
    },
    ...i18nConfig('zh-CN')
  },
  'en-US': {
    aa: {
      hello: 'こんにちは、世界'
    },
    ...i18nConfig('en-US')
  }
}
const i18n = new VueI18n({
  locale: 'en-US', // TODO: 后期修改localstore获取 目前测试可用性
  messages
})

window.$i18n = i18n

export default i18n
