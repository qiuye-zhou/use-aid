---
title: useMedia
---

# useMedia

## 参数
`useMedia(value, type) => vue.Ref<boolean>`

`value` 接受一个number **(可以接受一个ref动态监听)** 默认768，即媒体查询判断的边界值

`type` 只接受一个string类型 **(可以接受一个ref动态监听)** 的 `max` 或 `min` 值 默认max, 
即媒体查询类型，max (浏览器宽度比 `value` 小返回true) 或 min (浏览器宽度比 `value` 大返回true)

`vue.Ref<boolean>` 返回一个 `ref(boolean)` 值，即是否符合查询条件

## 使用
```ts
<script lang="ts" setup>
import { ref } from 'vue';
import { useMedia } from 'use-aid';

const valuetest = ref(768);
const typetest = ref('max');

const isMedia = ref(useMedia(valuetest, typetest));
</script>
<template>
    <button @click="typetest = 'max';">
        change max
    </button>
    <button @click="typetest = 'min';">
        change min
    </button>
    <select v-model="valuetest">
        <option value="768">
            768
        </option>
        <option value="920">
            920
        </option>
        <option value="1024">
            1024
        </option>
    </select>
    <div>
        {{ (isMedia ? 'be in' : 'Not in') + `  ${typetest}: ${valuetest}` }}
    </div>
</template>
```