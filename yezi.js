module.exports = {
  remUnit: 37.5, // rem设置
  // eslit 错误展示
  overlay: {
    warnings: true,
    errors: true
  },
  // url信息
  host: 'localhost',
  // 端口信息
  port: 9001,
  // 浏览器前缀信息
  browsers: ['last 7 versions', 'Android >= 4.0', 'iOS >= 6'],
  // 资源文件夹
  assetsSubDirectory: 'static',
  // build 基础路径
  assetsPublicPath: '/',
  // build 存放文件夹
  saveFile: 'dist',
  limit: 500,
  // 代理信息
  proxyTable: {
    '^/api': {
      target: 'http://test.ttp.com'
      // changeOrigin: true,
      // pathRewrite: {
      //   // '^/api/mock': '/'
      // }
    }
  }
}
