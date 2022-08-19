export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dashboardawari',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
  ],

  firebase: {
    config: {
      apiKey: "AIzaSyDr5zRrbsjym-CgQS9OFfy2UHKzJ7GHDJY",
      authDomain: "awari-3fc51.firebaseapp.com",
      projectId: "awari-3fc51",
      storageBucket: "awari-3fc51.appspot.com",
      messagingSenderId: "617929026568",
      appId: "1:617929026568:web:dc01c93315fcc6739eb5bd",
      measurementId: "G-SL3BNHT4HD"
    },
    services: {
      auth: true,
      storage: true,
      firestore: true,
      analytics: true,

    },

    auth: {
      persistence: 'local', // default
      initialize: {
        onAuthStateChangedMutation: 'auth/ON_AUTH_STATE_CHANGED_MUTATION',
        onAuthStateChangedAction: 'onAuthStateChangedAction',
        subscribeManually: false
      },
    },
  },


  


  router: {
    middleware: ['auth'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
