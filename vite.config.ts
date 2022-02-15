import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    WindiCSS({
      scan: {
        dirs: ['.'],
        fileExtensions: ['vue']
      }
    })
  ]
})
