import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
   base: '/lit/',
    build: {
    outDir: 'docs',  
    emptyOutDir: true,
      rollupOptions: {
      output: {
        entryFileNames: 'msr-web-component.js',     
        chunkFileNames: 'msr-web-component.js', 
        assetFileNames: 'msr-web-component.[ext]'
      }
    }
    }
})