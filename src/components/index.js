import { Lazyload, Spinner, Toast, Actionsheet, Switch, Indicator } from 'mint-ui' //eslint-disable-line
// import Header from './header.vue'

const install = (Vue) => {
  if (install.installed) {
    return
  }
  // Vue.component(Header.name, Header)
  Vue.$indicator = Vue.prototype.$indicator = Indicator
}

export default {
  install
}
