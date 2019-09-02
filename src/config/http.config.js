import Vue from 'vue'
console.log(Vue)
// axios 基础配置
// TODO: 实例的基础配置
const config = {
  // timeout: 300000,
  // withCredentials: true
}
const execonfig = {
  isAutoMsg: true,
  // 自动loading
  isLoading: true,
  hasSid: true,
  hasUid: true,
  // isApiHost  是否添加前缀 默认是true
  isApiHost: true,
  timeout: 200000

}
function requestResolve (config) {
  if (config.isLoading) {
    Vue.$indicator.open('Loading...')
  }
  return config
  // TODO: 请求拦
}

function requestReject (err) {
  Promise.reject(err)
}

function responseResolve (response) {
  // console.log(respong)
  if (response.config.isLoading) {
    Vue.$indicator.close()
  }
  // TODO: 响应成功
  // Promise.resolve()
  return response
}

function responseReject (err) {
  // TODO: 响应失败
  Promise.reject(err)
}
export {
  config,
  execonfig,
  requestResolve,
  requestReject,
  responseResolve,
  responseReject
}
