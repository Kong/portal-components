# @kong/portal-vue-spec-renderer

A Kong UI component for displaying uuid and copying it to clipboard.

- [Features](#features)
- [Requirements](#requirements)
- [Usage](#usage)
  - [Install](#install)
  - [Register](#register)
- [Props](#props)
  - [`document`](#document)
  - [`url`](#url)
  - [`hasSidebar`](#hassidebar)
  - [`essentialsOnly`](#essentialsonly)
  - [`slimMode`](#slimmode)

## Features

- Render `.yaml` and `.json` OAS specs
- Customize display of parts of the UI

## Requirements

- `vue` must be initialized in the host application

## Usage

### Install

Install the component in your host application

```sh
@kong/portal-vue-spec-renderer
```

### Register

You can register `portal-vue-spec-renderer` globally or locally.

```typescript
// Global registration
import { createApp } from 'vue'
import VueSpecRenderer from '@kong/portal-vue-spec-renderer'
import '@kong/portal-vue-spec-renderer/dist/style.css'

const app = createApp(App)

app.use(VueSpecRenderer)

```

```html
<!-- Local registration -->
<template>
  <VueSpecRenderer />
</template>

<script setup lang="ts">
import VueSpecRenderer from '@kong/portal-vue-spec-renderer'
import '@kong/portal-vue-spec-renderer/dist/style.css'
</script>
```

## Props

### `document`

- type: `String|Object`
- required: `false`
- default: `null`

Specification object or string. Required if `url` property is not set.

### `url`

- type: `String`
- required: `false`
- default: `''`

URL of the specification file. Required if `document` property is not set.

### `hasSidebar`

- type: `Boolean`
- required: `false`
- default: `true`

Whether or not the SwaggerUI navigation sidebar is enabled.

### `essentialsOnly`

- type: `Boolean`
- required: `false`
- default: `false`

If enabled, only display the spec `paths` section; general information, schemes, models, etc. are hidden.

### `slimMode`

- type: `Boolean`
- required: `false`
- default: `false`

If enabled, will apply styles to conserve space. Hides path descriptions, decreases font-size of headings.

