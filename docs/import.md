---
title: 导入
---

# 导入

有几种方法能将 useaid 引入你的项目。

## ESM

如果你使用 [Vite](https://vitejs.dev) 或 [Webpack](https://webpack.js.org) 等打包器，你可以使用包管理器来管理 useaid：
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

然后使用下面的代码来导入 useaid中需要使用的方法：

```ts
import { useMedia } from 'useaid';
```

## IIFE

只需要在 HTML 里添加如下标签。

```html
<script src="./dist/index.iife"></script>
```

## CJS

首先，先用包管理器下载 useaid：

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

然后，把 useaid 作为 commonjs 模块导入：

```ts
const useMedia = require('useaid');
```
