// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'normalize.css',
    '~/assets/css/style.css'
  ],
  modules: [
    [
      'nuxt-microcms-module',
      {
        serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
        apiKey: process.env.MICROCMS_API_KEY,
      },
    ],
  ],
  app: {
    baseURL: process.env.BASE_URL,
    buildAssetsDir: process.env.BUILD_ASSETS_DIR,
  }
})
