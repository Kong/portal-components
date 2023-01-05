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
// @ts-ignore
import yamlContent from './test.yaml'
import VueSpecRenderer from '../src'

const defaultDocument = yamlContent
</script>
