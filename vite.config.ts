import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
   base: '/msr/',
    build: {
    outDir: 'docs',  
    emptyOutDir: true,
      rollupOptions: {
      output: {
        entryFileNames: 'web-components.js',     
        chunkFileNames: 'web-components.js', 
        assetFileNames: 'web-components.[ext]'
      }
    }
    }
})