const path = require('path')
const webpack = require('webpack')
const Config  = require('webpack-chain')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackDevServer = require('webpack-dev-server')
const open = require('opn')
const config = new Config();
// TODO: 这里感觉没有生效后面研究
// .add('babel-polyfill')
// TODO： EsModel 运行时+编译器模式
config.mode('development')
config.devtool('inline-source-map')
config.entry('app').add('./src/index.js').end()
config.output.path(path.resolve(__dirname, '../dist')).filename('[name].bundle.js')
// es+
config.module.rule('bablets').test('/\.js$/').use('babel').loader('babel-loader')
// 设置运行时 + 编译器的vue的组件 //TODO: 后面会使用Vue-loader 看是是否可以去掉这个
config.resolve.alias.set('vue$', `vue/dist/vue.esm.js`)
config.plugin('html-create').use(HtmlWebpackPlugin, [{
  template: path.resolve(__dirname, '../src/index.tp'),
  templateParameters: {
    'BASE_URL': path.resolve(__dirname, '../dist')
  },
  favicon: 'favicon.ico'
}])
config.plugin('clear-html').use(CleanWebpackPlugin)
let compile = webpack(config.toConfig())
let serverapp = new WebpackDevServer(compile, {
  contentBase: path.resolve(__dirname, '../dist'),
  publicPath: '/',
  hot: true
  // TODO: 代理配置详见地址
  // https://github.com/chimurai/http-proxy-middleware
})

serverapp.listen(8001, 'localhost', err => {
  console.log('adf')
  console.log(open)
  if (err) {
    // TODO: 异常信息的处理
    console.log(err)
    return
  }
  open(`http://localhost:8001`)
})
// compile.run((err, state) => {
//   console.log(err)
// })
