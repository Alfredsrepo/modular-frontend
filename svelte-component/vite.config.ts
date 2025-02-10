import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // custom output to split files into different folder
      // output: {
      //   chunkFileNames: 'chunks/[name]-[hash].js',
      //   entryFileNames: 'assets/[name]-[hash].js'
      // }
    }
  },
  plugins: [
    svelte({      
      // in case for hypbrid app
      // include: ["src/**/*.svelte"],      
      // only include part of the component to compile.
      // include: [      
      //   "src/components/Counter.svelte",
      //   "src/components/h1.svelte"
      // ],
      // exclude: [
      //   "src/components/Counter.svelte",
      //   "src/components/h1.svelte"
      // ],
      compilerOptions: {
        customElement: true
      }
    })
  ],
})
