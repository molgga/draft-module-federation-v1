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
      },
      shared: ['vue'],
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
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
