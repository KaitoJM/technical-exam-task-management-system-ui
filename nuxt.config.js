const env = require('dotenv').config();
const api_url = env.parsed.API_URL

export default {
  env: env.parsed,
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'technical-exam-task-management-system-ui',
    htmlAttrs: {
      lang: 'en'
    },
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
    '~/assets/style.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuelidate.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
  ],

  axios: {
    baseURL: api_url,
    credentials: true,
  },

  auth: {
    rewriteRedirects: true,
    fullPathRedirect: true,
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: false,
    },
    strategies: {
      local: {
        token: {
          maxAge: 259200,
        },
        endpoints: {
          login: { url: `${api_url}/login`, method: 'post', propertyName: 'token' },
          logout: { url: `${api_url}/logout`, method: 'post' },
          user: { url: `${api_url}/self`, method: 'get', propertyName: false },
        },
        tokenType: 'Bearer',
        user: {
          property: false,
        },
      },
    },
    watchLoggedIn: true,
  },

  router: {
    middleware: ['auth'],
  },

  toast: {
    position: 'bottom-right',
    duration: 3000,
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },

  fontawesome: {
    icons:{
      solid:true,
      brands:true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
