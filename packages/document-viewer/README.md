# @kong/portal-document-viewer

A Kong UI component for rendering the documents

- [Features](#features)
- [Requirements](#requirements)
- [Usage](#usage)
  - [Install](#install)
  - [Register](#register)
- [Props](#props)
  - [`document`](#document)

## Features

- Render `.md` content
- Customize display of parts of the UI

## Requirements

- `vue` must be initialized in the host application

## Usage

### Install

Install the component in your host application

```sh
@kong/portal-document-viewer
```

### Register

You can register `portal-document-viewer` globally or locally.

```typescript
// Global registration
import { createApp } from 'vue'
import DocumentViewer from '@kong/portal-document-viewer'
import '@kong/portal-document-viewer/dist/style.css'

const app = createApp(App)

app.use(VueSpecRenderer)

```

```html
<!-- Local registration -->
<template>
  <DocumentViewer />
</template>

<script setup lang="ts">
import DocumentViewer from '@kong/portal-document-viewer'
import '@kong/portal-document-viewer/dist/style.css'
</script>
```

## Props

### `document`

- type: `String|Object`
- required: `true`
- default: `null`

Markdown object or string. Required.
