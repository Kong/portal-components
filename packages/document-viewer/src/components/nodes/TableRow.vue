<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { TableRowSection } from '../../types'

const { section } = defineProps({
  section: {
    type: String as PropType<TableRowSection>,
    default: TableRowSection.body
  },
})

let tag: string
if (section === TableRowSection.header) {
  tag = 'thead'
} else if (section === TableRowSection.body) {
  tag = 'tbody'
} else if (section === TableRowSection.footer) {
  tag = 'tfoot'
}
</script>
