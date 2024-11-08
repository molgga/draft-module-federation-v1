import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remote-vue3',
      filename: 'remoteEntry.js',
      exposes: {
        './HelloRemoteVue': './src/components/HelloRemoteVue.vue',
        './PageRemoteVue': './src/components/PageRemoteVue.vue',
      },
      shared: [
        'vue',
        /**
         * ! https://github.com/originjs/vite-plugin-federation/issues/495
         * ! https://github.com/originjs/vite-plugin-federation/issues/334
         * @TODO vue 리모트 쪽 반응성을 잃는것 때문에 우선 remote, host 쪽에 shared 처리.
         */
        '@vueuse/core',
        '@jood/v-modal',
      ],
    }),
  ],
  server: {
    port: 3011,
  },
  preview: {
    port: 3011,
  },
  build: {
    target: 'esnext',
    minify: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
