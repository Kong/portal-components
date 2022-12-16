import type { App } from 'vue'
import DocumentViewer from './components/DocumentViewer.vue'

export default {
  install: (app: App): void => {
    app.component('DocumentViewer', DocumentViewer)
  }
}

export { DocumentViewer }
