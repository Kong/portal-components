<template>
  <div class="sandbox-container">
    <main>
      <div>
        <h3>Default</h3>
        <VueSpecRenderer :document="defaultDocument" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import yamlContent from './test.yaml'

const defaultDocument = yamlContent
</script>
