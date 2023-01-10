<template>
  <div class="vue-spec-renderer-sandbox sandbox-container">
    <main>
      <div>
        <h1>✨✨ Awesome VueSpecRenderer ✨✨</h1>
        <VueSpecRenderer
          :document="defaultDocument"
          :has-sidebar="false"
          :essentials-only="true"
        />
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

<style lang="scss" scoped>
.vue-spec-renderer-sandbox {
  h1 {
    text-align: center;
  }
}
</style>
