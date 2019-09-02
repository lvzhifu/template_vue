import { post } from '@utils/http.base.js'
/**
 * 用户登录
 *
 * @class UserService
 */

class UserService {
  /**
   * 退出登录
   *
   * @param {String} [params={remember_token}] 登录时获得的token
   * @memberof UserService
   */
  logout (params = {}) {
    // return post('/auth/logout', params)
    return post('/tsone', {
      name: 'ts',
      password: 'tss'
    })
  }

  /**
   * 登录
   *
   * @param {String} params.username 用户名
   * @param {String} params.password 密码
   * @param {bool} params.remember 自动登录
   *
   * @returns
   * @memberof UserService
   */
  doLogin (params = {}) {
    return post('/auth/login', params)
    // return res.data || {}
  }

  /**
   * 获取短信验证码
   *
   * @param {String} params.username 用户名
   * @param {String} params.password 密码
   *
   * @returns
   * @memberof UserService
   */
  getCode (params = {}) {
    return post('/auth/captcha', params)
  }
}
export default new UserService()
