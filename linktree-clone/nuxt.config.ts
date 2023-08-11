// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  pages:true,
  experimental:{
    payloadExtraction:false
  },

  modules:[
    "nuxt-icon",
    "nuxt-lodash",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vite-pwa/nuxt",
  ],

  pwa: {
    manifest: {
      name: "Linktree Clone",
      short_name:"Linktree Clone",
      description:"This is a Linktree Clone",
      theme_color: "#32CD32",
      icons: [
        {
          src:"pwa-192x192.png",
          sizes:"192x192",
          type:"image/png",
        },
        {
          src:"pwa-512x512.png",
          sizes:"152x152",
          type:"image/png",
        },
      ]
    },
    devOptions:{
      enabled:true, 
      type:"module",
    }
  }, 
app:{
  head: {
    charset: 'utf-8',
    viewport:'width=device-width, initial-scale=1, maximum-scale=1',
  }
},

})
