
export default {
  global: [
    {
      name: 'login',
      path: '/login',
      component: () => import('./src/login.vue'),
      meta: {
        // isLeft: false,
        // title: window.$i18n.t('home.name')
      }
    }
  ]
}
