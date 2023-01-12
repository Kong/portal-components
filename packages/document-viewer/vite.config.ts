import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import sharedViteConfig from '../../vite.config.shared'
import { resolve } from 'path'
import { defineConfig, mergeConfig } from 'vite'

// Package name MUST always match the kebab-case package name inside the component's package.json file and the name of your `/packages/{package-name}` directory
const packageName = 'document-viewer'

// Merge the shared Vite config with the local one defined below
const config = mergeConfig(sharedViteConfig, defineConfig({
  build: {
    lib: {
      // The kebab-case name of the exposed global variable. MUST be in the format `portal-{package-name}`
      // Example: name: 'portal-demo-component'
      name: `portal-${packageName}`,
      entry: resolve(__dirname, './src/index.ts'),
      fileName: (format) => `${packageName}.${format}.js`,
    },
  },
}))

// We need to override the provided `vue` plugin with a custom config that includes `isCustomElement`
// If additional plugins are added to the root `vite.config.shared.ts`, you'll need to include them here as well
const customPlugins = [
  vue(),
  vueJsx(),
]

// Replace the existing plugins array with our custom array
config.plugins = customPlugins

// If we are trying to preview a build of the local `package/copy-uuid/sandbox` directory,
// unset the external and lib properties
if (process.env.PREVIEW_SANDBOX) {
  config.build.rollupOptions.external = undefined
  config.build.lib = undefined
}

export default config
