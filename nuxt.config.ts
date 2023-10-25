// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/public/css/normalize.css',
    '~/public/css/style.css'
  ],
  modules: [
    [
      'nuxt-microcms-module',
      {
        serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
        apiKey: process.env.MICROCMS_API_KEY,
        target: 'all',
      },
    ]
  ]
})
