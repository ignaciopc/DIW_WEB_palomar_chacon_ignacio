import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  appType: 'mpa',
  base: './',
  root: resolve(__dirname, 'fuente'),
  build: {
    outDir: '../produccion',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'fuente/index.html'),
        service: resolve(__dirname, 'fuente/pages/home.html'),
        login: resolve(__dirname, 'fuente/pages/login.html'),
        rutinaDia: resolve(__dirname, 'fuente/pages/rutinaDia.html'),
        semanal: resolve(__dirname, 'fuente/pages/semanal.html'),
        social: resolve(__dirname, 'fuente/pages/social.html'),
      },
    },
    minify: 'terser',
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
  server: {
    open: true,
  },
  preview: {
    open: true,
    port: 4173,
  },
});
