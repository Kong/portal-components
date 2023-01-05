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

<style lang="scss" scoped>
.vue-spec-renderer {
  font-family: var(--kong-portal-vue-spec-renderer-font-family-default, Roboto, Helvetica, sans-serif);
  font-size: var(--kong-portal-vue-spec-renderer-font-size, 16px);
  color: var(--kong-portal-vue-spec-renderer-text-color, #000);
}
</style>
