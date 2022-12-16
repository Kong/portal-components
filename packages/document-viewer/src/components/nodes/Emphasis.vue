<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script setup lang="ts">
const { level } = defineProps({
  level: {
    type: Number,
    default: 1,
    validator(value: unknown): boolean {
      if (!Number.isInteger(value)) {
        return false
      }

      const num = value as number
      return num > 0 && num < 3
    }
  }
})

const tag = level === 1 ? 'em' : 'strong'
</script>
