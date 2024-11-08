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
         * element-plus 등 라이브러리를 모두 shared 처리 해줘야함. (host 에서도 설치 + shared 도 해줘야함)
         * shared 에 넣지 않아도 expose/remote 는 문제없이 되는데, host 에서 vue 반응성이 정상 동작하질 않음.
         *
         * @TODO
         * 이렇게 하면 사용한걸 전부 host 쪽에서도 넣어줘야 하는데.. 다른 해결 방법 찾아봐야함.
         * react (ahooks) 같은 경우는 라이브러리 shared 처리 안해도 잘 되는듯.
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
