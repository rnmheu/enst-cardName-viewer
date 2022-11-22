import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
import { ssr } from 'vite-plugin-ssr/plugin'

export default defineConfig({
    plugins: [vue(), ssr({ prerender: true })],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@use "./src/assets/_variables.scss" as *;',
            },
        },
    },
    resolve: {
        alias: {
            '@': `${__dirname}/src/`,
        },
    },
})
