# TinyMCE Plugin template

TinyMCE plugin template built upon React.

Note: Use yarn instead of npm to in order to have the same dependencies versions across multiple devices.

## Installation

```sh
git clone https://github.com/Digital-Crafting/plugin-template.git
yarn
```

## How to run it

```sh
yarn start
```

Use live reload server extension (VSCode) in file src/demo/html/index.html for hot reload.

## How to build

For production environments

```sh
yarn run build
```

## Todo
- Refactor file structure
    a. Deprecate /ts/core
    b. Render react application in Plugin.ts and not in components folder.
- Configure linter
- Configure prettier
- Add linter to webpack production build
