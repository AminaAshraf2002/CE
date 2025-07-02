import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['gsap', 'aos'],  
          routing: ['react-router-dom'],
          icons: ['lucide-react']
          // Remove hotspots from manual chunks
        }
      }
    }
  },
  resolve: {
    alias: {
      'prop-types': 'prop-types'
    }
  }
})