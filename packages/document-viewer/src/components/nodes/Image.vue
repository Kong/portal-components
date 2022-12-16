<template>
  <figure>
    <img :src="url" :alt="alt" :title="title" />
    <figcaption>
      <slot />
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
const { url, alt, title } = defineProps({
  url: {
    type: String,
    required: true
  },
  alt: {
    type: String
  },
  title: {
    type: String
  }
})
</script>
