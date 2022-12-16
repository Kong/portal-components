<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script setup lang="ts">
const { is_ordered } = defineProps({
  is_ordered: {
    type: Boolean,
    default: false
  },
})

const tag = is_ordered ? 'ol' : 'ul'
</script>

<style scoped>
ul, ol {
  margin: var(--document-viewer-list-margin, 24px 0);
  padding: var(--document-viewer-list-padding, 0 0 0 20px);
}
</style>
