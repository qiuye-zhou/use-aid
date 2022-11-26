---
title: Import
---

# Import

There are several ways to introduce use-aid into your project.

## ESM

If you use [Vite](https://vitejs.dev) Or [Webpack](https://webpack.js.org) You can use the package manager to manage useeid：
<CodeGroup>
<CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm add use-aid
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add use-aid
```

  </CodeGroupItem>
  <CodeGroupItem title="NPM">

```bash:no-line-numbers
npm install use-aid
```

  </CodeGroupItem>

</CodeGroup>

Then use the following code to import the methods to be used in use-aid:

```ts
import { useMedia } from 'use-aid';
```

## IIFE

Just add the following tags to the HTML.

```html
<script src="./dist/seiife.iife"></script>
```

## CJS

First, use the package manager to download the use-aid:

<CodeGroup>
  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm add use-aid
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add use-aid
```

  </CodeGroupItem>
  <CodeGroupItem title="NPM">

```bash:no-line-numbers
npm install use-aid
```

  </CodeGroupItem>

</CodeGroup>

Then, import the useeid as the commonjs module:

```ts
const useMedia = require('use-aid');
```
