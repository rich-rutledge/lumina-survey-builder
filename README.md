# Lumina Survey Builder

## Accomplished

* Initialization of Vue project with Vite, and unit tests
* Page layout - left nav, header, main content
* Beginning of survey project data model
* Beginning of managing the global application data
* Content of the page header including buttons and binding to the project data (name)

## Next Steps

* Component library - tailwindUI?
  * Needed for
    * fully-functioning buttons (hover states, mouse-down/up states, etc)
    * modal dialogs
    * pop-up menus
    * toggle buttons
    * left nav
    * tooltips
  * These can be done without a component library, but then they have to be developed in-house.
* Button actions
* Menus
* Left nav content
* Main content
* Routing
* Responsive design
* Internationalization and translations
* Integration with the backend
* Build/deploy system
* AWS Resources - cloudfront, route53, s3 bucket, etc

-----

## Original Generated Readme Content

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
