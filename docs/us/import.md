---
title: Import
---

# Import

There are several ways to introduce useaid into your project.

## ESM

If you use [Vite](https://vitejs.dev) Or [Webpack](https://webpack.js.org) You can use the package manager to manage useeid：
<CodeGroup>
<CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm add useaid
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add useaid
```

  </CodeGroupItem>
  <CodeGroupItem title="NPM">

```bash:no-line-numbers
npm install useaid
```

  </CodeGroupItem>

</CodeGroup>

Then use the following code to import the methods to be used in useaid:

```ts
import { useMedia } from 'useaid';
```

## IIFE

Just add the following tags to the HTML.

```html
<script src="./dist/index.iife"></script>
```

## CJS

First, use the package manager to download the useaid:

<CodeGroup>
  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm add useaid
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add useaid
```

  </CodeGroupItem>
  <CodeGroupItem title="NPM">

```bash:no-line-numbers
npm install useaid
```

  </CodeGroupItem>

</CodeGroup>

Then, import the useeid as the commonjs module:

```ts
const useMedia = require('useaid');
```
