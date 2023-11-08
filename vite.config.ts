import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { browserslistToTargets } from 'lightningcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    transformer: 'lightningcss',
    // lightningcss: {
    //   targets: browserslistToTargets(browserslist('>= 0.25%'))
    // }
  },
  build: {
    cssMinify: 'lightningcss'
  }
})