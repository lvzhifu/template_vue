import axios from 'axios'
import { config, requestResolve, requestReject, responseResolve, responseReject } from '../http.config'
console.log(responseResolve)
console.log(responseReject)
// import store from '@/stores'

/**
 * 请求配置
 * @see https://github.com/mzabriskie/axios
 */

const service = axios.create(config)

service.interceptors.request.use(config => {
  console.log(config)
  requestResolve(config)
  return config
}, error => {
  requestReject(error)
})

service.interceptors.response.use(
  response => {
    return responseResolve(response)
  },
  error => {
    return responseReject(error)
  }
)

export default service
