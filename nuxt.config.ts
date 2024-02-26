// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui', 
    'nuxt-aos',
    '@nuxtjs/google-fonts',
    'nuxt-viewport',
    '@pinia/nuxt',
  ],
   pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
googleFonts: {
  families: {
    // a simple name
    download: true,
    K2D: true,
    LibreBaskerville: true,
    'Source Code Pro': true
  }
},

devtools: { enabled: true },
  runtimeConfig: { 
    MONGO_URI: process.env.MONGO_URI
  },

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

