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

