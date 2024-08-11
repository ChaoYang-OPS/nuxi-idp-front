// https://nuxt.com/docs/api/configuration/nuxt-config
// https://pinia.vuejs.org/ssr/nuxt.html
// https://favicon.io/
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src",
  modules: ['@nuxt/ui','@pinia/nuxt'],

  // ssr: false
  ui: {
    icons: ['solar', 'ri'],
  },
  runtimeConfig: {
    public: {
      appName: '开发者平台',
    }
  },
  colorMode: {

  },
  compatibilityDate: '2024-07-28'
})