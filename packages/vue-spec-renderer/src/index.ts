import type { App } from 'vue'
import VueSpecRenderer from './components/VueSpecRenderer.vue'

export default {
  install: (app: App): void => {
    app.component('VueSpecRenderer', VueSpecRenderer)
  }
}

export { VueSpecRenderer }
