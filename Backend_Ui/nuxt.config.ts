// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  alias: {
  '@': resolve(__dirname, "/"),
},
css: [
  "/assets/main.css",
],
modules: [
  '@nuxtjs/auth-next',
  '@nuxtjs/axios',
],
auth: {
  strategies: {
    github: {
      clientId: '149920e727612fa05202',
      clientSecret: 'fd2cceff3d858b7265cdc39f7a4cf481e3c96e1c',
      scope: ['user'],
    },
  },
},
})
