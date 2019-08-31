
import { isUndefined } from 'utils'
console.log(isUndefined)
const routerRule = require.context('../../', true, /^\.\/(pages|views)(\/[\w.-]+)?\/router.(js|ts)$/)

// 去中心化 加载路由
const moduleConfig = (r => {
  return r.keys().map(key => r(key).default)
})(routerRule)

export default {
  mode: 'history',
  // 全局路由 适用于 登录 注册 或者新开 窗口
  global: getRouterConfig(moduleConfig, 'global'),
  // 带tab 模块的页面
  tabs: getRouterConfig(moduleConfig, 'tabs'),
  // 重定向路由
  redirect: {
    path: '*',
    redirect: '/'
  }
}

/**
 *
 * 获取单个路由配置
 * @param {*} m
 * @param {*} attribute
 * @returns
 */
function getRouterConfig (m, attribute) {
  return m.map(module => module[attribute]).filter(module => !isUndefined(module)).reduce((routes, route) => {
    return routes.concat(route)
  }, [])
}
