export default ({ app, $axios, store }) => {
  app.i18n.beforeLanguageSwitch = async (oldLocale, newLocale) => {
    $axios.setHeader('Accept-Language', newLocale)
    await store.dispatch('getInitData')
  }
}
