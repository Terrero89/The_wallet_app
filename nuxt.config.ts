// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/assets/css/main.css"],
    app: {
      pageTransition: { name: 'page', mode: 'out-in' }
    },
    modules: [
        '@element-plus/nuxt',
        '@pinia/nuxt',
      ],


})
