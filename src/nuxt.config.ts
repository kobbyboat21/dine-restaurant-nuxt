// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

// ENVIRONMENT VARIABLES
devtools: { enabled: true },
  runtimeConfig: { 
    MONGO_URI: process.env.MONGO_URI,
    FLASK_API: process.env.FLASK_API
    // MONGO_URI: 'mongodb://root:example@mongo:27017',
    // FLASK_API: 'http://flask:5000/api/'
  },


// MODULES
  modules: [
    '@nuxt/ui', 
    'nuxt-aos',
    '@nuxtjs/google-fonts',
    'nuxt-viewport',
    '@pinia/nuxt',
    '@sidebase/nuxt-auth',
  ],

// AUTHENTICATION
  build: {
    transpile: ['jsonwebtoken']
  },
  auth: {
    provider: {
      type: 'local',
      endpoints: {
        getSession: { path: '/user' }
      },
      pages: {
        login: '/'
      },
      token: {
        signInResponseTokenPointer: '/token/accessToken'
      },
      session: {
        dataType: { id: 'string', email: 'string', name: 'string', role: "'admin' | 'guest' | 'account'", subscriptions: "{ id: number, status: 'ACTIVE' | 'INACTIVE' }[]" },
        dataResponsePointer: '/'
      }
    },
    session: {
      // Whether to refresh the session every time the browser window is refocused.
      enableRefreshOnWindowFocus: true,
      // Whether to refresh the session every `X` milliseconds. Set this to `false` to turn it off. The session will only be refreshed if a session already exists.
      enableRefreshPeriodically: 5000
    },
    globalAppMiddleware: {
      // isEnabled: true
      isEnabled: false
    }
  },
  routeRules: {
    '/with-caching': {
      swr: 86400000,
      auth: {
        disableServerSideAuth: true
      }
    }
  },
  app: {
  navigateTo: {
      external: true
    }
  },

// MIDDLEWARE
   pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },


// STYLES
googleFonts: {
  families: {
    // a simple name
    download: true,
    K2D: true,
    LibreBaskerville: true,
    'Source Code Pro': true
  }
},

// WEBSITE METADATA
  head: {
    title:'arrayOfObjects',
    htmlAttrs: {
    lang: 'en'
    },
    meta: [
      // Add meta tags as needed
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Example:
      { hid: 'description', name: 'description', content: 'Your website description' }
    ],

    link: [
      { rel: "stylesheet", href:"https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" }
    ],


  }
})

