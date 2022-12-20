# Kong Portal Components

> **Note**: This repository is a work in progress. Some features and docs may be missing.

A set of reusable UI components for [Konnect Developer Portal](https://docs.konghq.com/konnect/dev-portal/).

## Development

### Requirements

- [NodeJS >= 18.x](https://nodejs.org/en/download/)
- [pnpm 7.x](https://pnpm.io/installation)

### Setup

To get started, install dependencies

```shell
pnpm install
```

Next, make sure all dependent packages from this monorepo are built and available

```shell
pnpm run build
```

You can also run `pnpm install-autocomplete` to integrate `pnpm` autocompletion into your command line tools.

### Dev Server

Run the dev server in your `packages/{package-name}/sandbox/` directory with hot-module reload

```shell
pnpm --filter "@kong-portal-components/{package-name}" run dev
```

### Preview sandbox build

Build your `packages/{package-name}/sandbox/` directory for production and serve locally

```shell
pnpm --filter "@kong-portal-components/{package-name}" run preview
```

### ESLint

Lint package files

```shell
# Lint only
pnpm --filter "@kong-portal-components/{package-name}" run lint

# Lint and fix
pnpm --filter "@kong-portal-components/{package-name}" run lint:fix
```

### Type Checking

Type check your package

```shell
pnpm --filter "@kong-portal-components/{package-name}" run typecheck
```

## Running consuming application with local copy of the package

You are modifying a shared component (let's say `@kong-portal-components/document-viewer`) and you need to run 
a consuming application (e.g. `konnect-portal`) with the current version of the code you have locally in your 
`portal-components/packages/document-viewer` branch. Here is how to do it:

1. Go to the `packages/document-viewer` directory inside your local clone of this repository and run

    ```shell
    yarn link
    ```

1. Make sure your package is getting build in watch mode, for this in the `packages/document-viewer` directory run:

    ```shell
    pnpm build:package --watch
    ```

1. In the root directory of the consuming application (e.g. `konnect-portal`) run:

    ```shell
    yarn link "@kong-portal-components/document-viewer"
    ```

1. Run your consuming application as usual and enjoy your document-viewer code changes 
    visible in your local env immediately.

    ```shell
    yarn run dev
    ```

In some cases HMR (hot module reloading) is not working out of the box in this configuration.
To force it you might need following changes in `vite.config.ts` of the consuming application:

1. add `watch: ignored` into the `server` config:

    ```typescript
   server: {
      watch: {
        ignored: ['!**/node_modules/@kong-portal-components/document-viewer/**']
      }
    }
    ```

1. add `optimizeDeps` into the root of the config:

    ```typescript
    optimizeDeps: {
      exclude: ['@kong-portal-components/document-viewer']
    }
    ```

   _Please do not commit these changes._

And finally, when you're done working with local (linked copy) of your kong-portal-components package, unlink it:

1. Go to the `packages/document-viewer` directory inside your local clone of this repository and run

    ```shell
    yarn unlink
    ```

1. In the root directory of the consuming application (e.g. `konnect-portal`) run:

    ```shell
    yarn unlink "@kong-portal-components/document-viewer"
    yarn install --force --frozen-lockfile
    ```
