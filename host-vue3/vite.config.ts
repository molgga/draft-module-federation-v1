import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host-vue3',
      remotes: {
        'remote-vue3': 'http://localhost:3011/assets/remoteEntry.js',
        'remote-react': 'http://localhost:3021/assets/remoteEntry.js',
      },
      shared: ['vue', 'react', 'react-dom', '@vueuse/core', '@jood/v-modal'],
    }),
  ],
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
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
