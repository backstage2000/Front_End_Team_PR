import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@GlobalStyle': path.resolve(__dirname, 'src/assets/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@GlobalComponents': path.resolve(__dirname, 'src/components'),
    },
  },
  css: {
    modules: {
      generateScopedName: (name, fileName) => {
        const file = path.basename(fileName, '.module.scss');
        const shortHash = Buffer.from(file + name)
          .toString('base64')
          .slice(0, 5);

        return `${file}__${name}___${shortHash}`;
      },
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@GlobalStyle/global' as *;`,
      },
    },
  },
});
