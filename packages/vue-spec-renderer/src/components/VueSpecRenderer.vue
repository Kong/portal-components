<template>
  <div class="kong-portal-vue-spec-renderer">
    <kong-swagger-ui
      v-if="hasRequiredProps"
      :url="url"
      :spec="document"
      :has-sidebar="hasSidebar"
      :essentials-only="essentialsOnly"
      :slim-mode="slimMode"
    >
    </kong-swagger-ui>
    <div
      v-else
      data-testid="kong-portal-vue-spec-renderer-error"
    >
      Error: No document spec provided
    </div>
  </div>
</template>

<script setup lang="ts">
import '@kong/swagger-ui-web-component'
import { PropType, computed } from 'vue'
import { Document } from '../types'

const props  = defineProps({
  document: {
    type: Object as PropType<Document>,
    default: null
  },
  url: {
    type: String,
    default: ''
  },
  hasSidebar: {
    type: Boolean,
    default: true
  },
  essentialsOnly: {
    type: Boolean,
    default: false
  },
  slimMode: {
    type: Boolean,
    default: false
  }
})

const hasRequiredProps = computed((): boolean => {
  return !!(props.document || props.url)
})
</script>

<style lang="scss" scoped>
.kong-portal-vue-spec-renderer {
  font-family: var(--kong-portal-vue-spec-renderer-font-family-default, Roboto, Helvetica, sans-serif);
  font-size: var(--kong-portal-vue-spec-renderer-font-size, 16px);
  color: var(--kong-portal-vue-spec-renderer-text-color, #000);
}
</style>
