<template>
  {{text}}
  <br v-if="hard_break" />
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
<script setup lang="ts">
const { text, hard_break } = defineProps({
  text: {
    type: String,
    required: true
  },
  hard_break: {
    type: Boolean,
    default: false
  }
})
</script>
