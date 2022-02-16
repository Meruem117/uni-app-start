import { createSSRApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import '@/static/css/global.css'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}
