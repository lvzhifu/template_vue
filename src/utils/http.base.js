import fetch from '../config/http/axios.set'
import { execonfig } from '../config/http.config'

const POST_HEADER = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
}
/**
 * get 提交
 * @param {String} url 请求的url
 * @param {any} params  请求的参数
 * @param {Boolean} isApiHost  是否添加前缀 默认是true
 * @param {Obejct} config  请求配置
 * @returns Promise
 */
export function get(url, params = {}, config = {}) {
  const opts = { ...execonfig, ...config }
  opts.params = params
  return fetch.get(getUrl(url, opts.isApiHost), opts)
}

/**
 *
 * post 提交
 * @param {String} url 请求的url
 * @param {any} [params={}] 请求的参数
 * @param {Boolean} isApiHost 是否添加前缀 默认是true
 * @param {any} isApiHost 请求配置
 * @returns Promise
 *
 * @memberOf HttpBase
 */
export function post(url, params = {}, config = {}) {
  console.log(execonfig)
  const opts = { ...execonfig, ...config, ...POST_HEADER }
  // TODO：qs 树胶
  console.log(opts)
  return fetch.post(getUrl(url, opts.isApiHost), params, opts)
}

/**
 *
 * 上传
 * @export
 * @param {any} url 请求的url
 * @param {any} [params={}] 请求的参数
 * @param {any} [config={}] 配置
 * @returns Promise
 */
export function upload(url, params = {}, config = {}) {
  const opts = { ...execonfig, ...POST_HEADER, ...config }
  const form = new FormData()
  Object.keys(params).forEach(key => {
    form.append(key, params[key])
  })
  return fetch.post(getUrl(url, opts.isApiHost), form, opts)
}
/**
 *
 * 下载
 * @export
 * @param {any} url 请求的url
 * @param {any} [params={}] 请求的参数
 * @param {any} [config={}] 配置
 * @returns Promise
 */

export function download(url, params = {}, type = 'post', config = {}) {
  const opts = { ...execonfig, ...config }
  const $form = document.createElement('form')
  $form.setAttribute('method', type)
  $form.setAttribute('hidden', 'hidden')
  $form.setAttribute('action', getUrl(url, opts.isApiHost))

  const createInput = (name, value) => {
    const input = document.createElement('input')
    input.setAttribute('type', 'hidden')
    input.setAttribute('name', name)
    input.setAttribute('value', value)

    $form.appendChild(input)
  }

  Object.keys(params).forEach(key => {
    createInput(key, params[key])
  })

  const $body = document.body || document.getElementsByTagName('body')[0]
  $body.append($form)
  $form.submit()
  $form.remove()
}
/**
 *
 * 生成下载路径
 * @export
 * @param {any} url 请求的url
 * @param {any} [params={}] 请求的参数
 * @param {any} [config={}] 配置
 * @returns Promise
 */
export function downloadUrl(url, params = {}, isApiHost = true, config = {}) {
  const opts = { ...execonfig, ...POST_HEADER, ...config }
  const paramsArry = []
  for (const item in params) {
    paramsArry.push(`${item}=${params[item]}`)
  }
  const res = `${getUrl(url, isApiHost, opts.isMEMAPI)}?1=1&${paramsArry.join('&')}`
  return res
}

export function httpInstall (Vue) {
  const http = {
    get,
    post,
    upload,
    download,
    downloadUrl
  }
  Vue.$Http = Vue.prototype.$Http = http
}
/**
 *
 * url 处理如果 isApiHost 为true 则添加 API_HOST
 * @param {any} url
 * @param {any} isApiHost
 * @returns
 *
 */
function getUrl(url, isApiHost) {
  if (!isApiHost) {
    return url
  }
  const arr = ['/api']
  arr.push(url)
  return arr.join('')
}
