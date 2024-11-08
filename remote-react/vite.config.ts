import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote-react',
      filename: 'remoteEntry.js',
      exposes: {
        './HelloRemoteReact': './src/components/HelloRemoteReact.tsx',
        './PageRemoteReact': './src/components/PageRemoteReact.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3021,
  },
  preview: {
    port: 3021,
  },
  build: {
    target: 'esnext',
  },
});
