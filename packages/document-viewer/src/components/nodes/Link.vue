<template>
  <a :href="href" :title="title" rel="noreferrer noopener nofollow">
    <slot />
  </a>
</template>

<script setup lang="ts">
const { href, title } = defineProps({
  href: {
    type: String,
    required: true
  },
  title: {
    type: String
  }
})
</script>

<style scoped>
a {
  color: var(--document-viewer-link-color, #1155cb);
  text-decoration: none;
}

a:hover {
  color: var(--document-viewer-link-hover-color, #5e8adc);
  text-decoration: underline;
}
</style>
