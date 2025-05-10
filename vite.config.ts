import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@/components/ui', replacement: path.resolve(__dirname, './@/components/ui') },
      { find: '@/components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@/lib', replacement: path.resolve(__dirname, './src/lib') },
      { find: '@/hooks', replacement: path.resolve(__dirname, './src/hooks') },
    ],
  },
});
