import Vue from 'vue' // 框架组件
import i18n from './config/i18n.config'
import router from './config/router.config' // 路由信息
import store from './store' // vuex store配置
import commonComponents from './components/index' // 公共组件存储
import './style/index.less'
import { setRemInit } from '@utils/rem'
import { httpInstall } from '@utils/http.base'
import cookieInstall from '@utils/cookie'
setRemInit()
Vue.use(cookieInstall)
Vue.use(commonComponents)
Vue.use(httpInstall)
console.log(Vue.$cookie)
const app = new Vue({
  i18n,
  router,
  store
}).$mount('#app')

export default app
