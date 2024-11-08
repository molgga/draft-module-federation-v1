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
        '@vueuse/core', // element-plus 등 라이브러리를 모두 shared 처리 해줘야함.
        '@jood/v-modal', // host 에서도 shared 로 가져와야 함(설치도 해야함)
        '@jood/v-colrow', // shared 에 넣지 않아도 expose/remote 는 문제없이 되는데, host 에서 vue 반응성이 정상 동작하질 않음.
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
