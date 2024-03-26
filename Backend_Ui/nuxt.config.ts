// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  alias: {
  '@': resolve(__dirname, "/"),
},
css: [
  "/assets/main.css",
],

})
