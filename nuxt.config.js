
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ingala Valley Natural Foods LTD',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '' 
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat&display=swap'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: 'components/loading.vue',
  /*
  ** Global CSS
  */
  css: ['~/assets/scss/main.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n',
    '~/plugins/lazysizes.client',
    '~/plugins/vue-swiper',
    '~/plugins/photoswipe.client'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    'nuxt-validate',
    'nuxt-i18n'
  ],
  nuxtValidate: {
    lang: 'en',
    nuxti18n: true,
    rules: ['required', 'email']
  },
  i18n: {
    locales: [
      {
        code: 'ru',
        iso: 'ru',
        file: 'ru-RU.js'
      },
      {
        code: 'en',
        iso: 'en',
        file: 'en-US.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    seo: false,
    vueI18n: {
      fallbackLocale: 'en'
    }
  },
  styleResources: {
    srcDir: '../',
    scss: [
      '~/assets/scss/abstracts/_mixins.scss',
      '~/assets/scss/abstracts/_variables.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    extend(
      config,
      {
        isClient,
        loaders: { vue }
      }
    ) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    }
  }
}
