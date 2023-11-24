import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import browserslistToEsbuild from 'browserslist-to-esbuild'
import lightningcss from 'vite-plugin-lightningcss';
// import { browserslistToTargets } from 'lightningcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    lightningcss({
      browserslist: '>= 0.25%',
    }),
  ],
  css: {
    // transformer: 'lightningcss',
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "src/sass/main.scss";`,
      },
    },
    lightningcss: {
      // targets: browserslistToTargets(browserslist('>= 0.25%'))
    }
    
  },
  build: {
    cssMinify: 'lightningcss',
    target: browserslistToEsbuild(),
  }
})