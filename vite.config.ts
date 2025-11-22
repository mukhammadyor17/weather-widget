import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue({
      customElement: true,
    }),
  ],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'WeatherWidget',
      fileName: 'weather-widget',
      formats: ['es'],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
    cssCodeSplit: false,
    minify: 'terser',
  },
})
