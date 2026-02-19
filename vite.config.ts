import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { staticSeoPlugin } from './src/plugins/staticSeoPlugin'

const stub = fileURLToPath(new URL('./src/stubs/empty-player.tsx', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), staticSeoPlugin()],
  resolve: {
    alias: {
      // Stub unused react-player providers (only YouTube is used)
      'hls-video-element/react': stub,
      'dash-video-element/react': stub,
      '@mux/mux-player-react': stub,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'framer-motion': ['framer-motion'],
        },
      },
    },
  },
})
