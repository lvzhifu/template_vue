import Vue from 'vue'
import Router from 'vue-router'
import { isUndefined } from 'utils'
import RouterConfig from './router/get.router'
import Layout from '../layout'
Vue.use(Router)
let routes = []
const layoutRouter = {
  path: '/',
  component: Layout,
  children: []
}
// 加载全局路由
if (!isUndefined(RouterConfig.global)) {
  routes = routes.concat(RouterConfig.global)
}
// 加载全局路由
if (!isUndefined(RouterConfig.tabs)) {
  layoutRouter.children = RouterConfig.tabs
}
routes.push(layoutRouter)
routes.push(RouterConfig.redirect)
const router = new Router({
  // TODO: 路由配置
  routes
})

console.log(router)
// TODO: 此处配置路由的守卫导航

export default router
