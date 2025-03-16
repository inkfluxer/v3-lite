import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import SVG from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    plugins: [
        vue(),
        vueDevTools(),
        UnoCSS(),
        AutoImport({
            imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
            dts: true,
            dirs: [
                './src/router',
                './src/utils',
                './src/stores',
            ],
        }),
        SVG({
            defaultImport: 'url',
        }),
    ],
    server: {
        host: true,
        port: 6957,
        proxy: {},
    },
})
