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
      shared: [
        'vue',
        'react',
        'react-dom',
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
