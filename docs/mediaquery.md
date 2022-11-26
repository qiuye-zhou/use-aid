---
title: 媒体查询
---

# 媒体查询

## 参数
`useMedia(value, type) => vue.Ref<boolean>`

`value` 接受一个number 默认768，即媒体查询判断的边界值

`type` 只接受一个string类型的 `max` 或 `min` 值 默认max, 
即媒体查询类型，max (浏览器宽度比 `value` 小返回true) 或 min (浏览器宽度比 `value` 大返回true)

`vue.Ref<boolean>` 返回一个 `ref(boolean)` 值，即是否符合查询条件

## 使用
```ts
import { ref } from 'vue';
import { useMedia } from 'useaid';

const isMedia = ref(useMedia())
// or
const isMedia = ref(useMedia(1024, 'max'))
// or
const isMedia = ref(useMedia(1024, 'min'))
```