import Vue from 'vue' // 框架组件
import router from './config/router.config' // 路由信息
import store from './store' // vuex store配置
import commonComponents from './components/index' // 公共组件存储
import './style/index.less'
import { setRemInit } from './lib/rem'
setRemInit()
Vue.use(commonComponents)
const app = new Vue({
  router,
  store
}).$mount('#app')

export default app
