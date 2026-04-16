import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_accounts',
      filename: 'remoteEntry.js',
      exposes: {
    './AccountsPage': './src/AccountsPage.tsx'
    },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    port: 3001,
    cors: true,
  },
  preview: {
    port: 3001,
    cors: true,
  },
});