<template>
  <blockquote>
    <slot />
  </blockquote>
</template>

<style scoped>
blockquote {
  margin: var(--document-viewer-blockquote-margin, 16px 0);
  padding: var(--document-viewer-blockquote-padding, 16px 19px);
  background: var(--document-viewer-blockquote-background, #f8f8fa);
  border-radius: var(--document-viewer-blockquote-border-radius, 3px);
}
</style>
