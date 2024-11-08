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
      shared: ['vue', 'react', 'react-dom'],
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
});
