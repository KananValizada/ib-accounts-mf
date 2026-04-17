import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'accounts',
      filename: 'remoteEntry.js',
      exposes: {
    './AccountsPage': './src/AccountsPage.tsx'
    },
      shared: { 
        react: {
          requiredVersion: '^19.2.4',
        },
        'react-dom': {
          requiredVersion: '^19.2.4',
        },
    }
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