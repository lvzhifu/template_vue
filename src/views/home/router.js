
export default {
  tabs: [
    {
      name: 'home',
      path: '/',
      component: () => import('./src/home.vue'),
      meta: {
        isLeft: false,
        title: window.$i18n.t('home.name')
      }
    }
  ]
}
