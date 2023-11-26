import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: 'src/main.js',
        'lib/example': 'src/lib/example.js'
      },
      output: {
        format: 'esm',
        entryFileNames: `[name]-[hash].js`,
        chunkFileNames: `chunks/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash][extname]`,
      },
      preserveEntrySignatures: 'strict'
    }
  },
  plugins: [svelte()],
})
