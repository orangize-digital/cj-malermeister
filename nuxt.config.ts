// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'de'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Malermeister Christoph Jasek',
      meta: [
        { name: 'description', content: 'Meisterqualität im Malerhandwerk - Innen- & Außenanstriche, Fassaden, Lackierungen' }
      ]
    }
  },

  compatibilityDate: '2025-01-13'
})
