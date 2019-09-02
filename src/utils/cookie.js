import cookie from 'arale-cookie'
/**
 * set https://github.com/aralejs/cookie
 *  Vue.$cookie.set(name, value,{
 *    domain: 域
 *    path: 路径
 *    expires: 失效日期
 *  })
 *  Vue.$cookie.get(name,options)
 *  Vue.$cookie.remove(name,options)
 */
export default {
  install(Vue) {
    Vue.$cookie = Vue.prototype.$cookie = cookie
  }
}
