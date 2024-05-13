
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: '123',
        // Keys within public, will be also exposed to the client-side
        public: {
            apiBase: 'https://func-poketraderapi.azurewebsites.net/api'
        }
    }
})
