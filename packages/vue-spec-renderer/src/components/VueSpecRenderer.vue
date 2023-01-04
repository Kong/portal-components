<template>
  <div class="vue-spec-renderer">
    <kong-swagger-ui :spec="document"></kong-swagger-ui>
  </div>
</template>

<script setup lang="ts">
import '@kong/swagger-ui-web-component'
import { PropType } from 'vue'
import { Document } from '../types'

defineProps({
  document: {
    type: Object as PropType<Document>,
    required: true
  }
})
</script>

<style lang="scss">
:root {
  --document-viewer-font-family-default: Roboto, Helvetica, sans-serif;
  --document-viewer-font-family-monospace: Consolas, 'Liberation Mono', Menlo, Courier, monospace;
}
</style>

<style lang="scss" scoped>
.vue-spec-renderer {
  font-family: var(--document-viewer-font-family-default);
  font-size: var(--document-viewer-font-size, 16px);
  color: var(--document-viewer-color, #000);
}
</style>
