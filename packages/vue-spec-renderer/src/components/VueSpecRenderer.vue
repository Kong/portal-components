<template>
  <div class="kong-portal-vue-spec-renderer">
    <kong-swagger-ui v-if="document" :spec="document" :has-sidebar="hasSidebar" :essentials-only="essentialsOnly"></kong-swagger-ui>
    <div v-else>Error: No document spec provided</div>
  </div>
</template>

<script setup lang="ts">
import '@kong/swagger-ui-web-component'
import { PropType } from 'vue'
import { Document } from '../types'

// TODO: add prop for url

defineProps({
  document: {
    type: Object as PropType<Document>,
    required: true
  },
  hasSidebar: {
    type: Boolean,
    default: true
  },
  essentialsOnly: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.kong-portal-vue-spec-renderer {
  font-family: var(--kong-portal-vue-spec-renderer-font-family-default, Roboto, Helvetica, sans-serif);
  font-size: var(--kong-portal-vue-spec-renderer-font-size, 16px);
  color: var(--kong-portal-vue-spec-renderer-text-color, #000);
}
</style>
