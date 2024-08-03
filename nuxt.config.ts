// https://nuxt.com/docs/api/configuration/nuxt-config
// https://pinia.vuejs.org/ssr/nuxt.html
// https://favicon.io/
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src",
  modules: ['@nuxt/ui'],

  // ssr: false
  ui: {
    icons: ['solar', 'ri'],
  },
  runtimeConfig: {
    public: {
      appName: '开发者平台',
    }
  },
  compatibilityDate: '2024-07-28'
})