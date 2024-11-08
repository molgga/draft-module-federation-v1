import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-react',
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
         *  - shared 에 안넣어도 expose, remote 는 정상적으로 되는데, library 의 reactivity 들이 정상 동작하지를 않음. (ex: @vueuse/core 의 useMouse 로 가져온 state 가 값은 업데이트 되는데 리렌더링이 되지를 않음)
         *  - (remote 쪽에 컴포넌트에서 넣은 reactivity 들은 정상 동작함)
         */
        '@vueuse/core',
        '@jood/v-modal',
      ],
    }),
  ],
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    dedupe: ['vue'],
  },
});
