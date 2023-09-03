// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  css: ["~/assets/scss/app.scss"],
  plugins: ["~/plugins/directive.client.ts"],
  modules: [
    "nuxt-swiper",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@hypernym/nuxt-gsap",
  ],
  googleFonts: {
    families: {
      "Playfair+Display": true,
    },
  },
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/variables.scss" as *;',
        },
      },
    },
  },
});
