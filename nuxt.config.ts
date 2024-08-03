// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src",
  modules: ['@nuxt/ui'],

  // ssr: false
  ui: {
    icons: ['solar', 'ri'],
  },

  compatibilityDate: '2024-07-28'
})