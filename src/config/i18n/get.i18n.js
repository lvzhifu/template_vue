const i18nRule = require.context('../../', true, /^\.\/(pages|views)(\/[\w.-]+)?\/i18n.(js|ts)$/)
const moduleConfig = (r => {
  return r.keys().map(key => r(key).default)
})(i18nRule)
const localeI18n = (locale) =>
  moduleConfig
    .reduce((state, current) => {
      return {
        ...state,
        ...current[locale]
      }
    }, {})
export default localeI18n
