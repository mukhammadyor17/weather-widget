// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ command }) => ({
  plugins: [
    vue({
      customElement: command === 'build',
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'weather-widget',
        },
      },
    }),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build:
    command === 'build'
      ? {
          lib: {
            entry: './src/widget.ts',
            formats: ['es'],
            fileName: () => 'weather-widget.js',
          },
        }
      : undefined,
}))
