---
title: useMedia
---

# MediaQuery

## parameter
`useMedia(value, type) => vue.Ref<boolean>`

`value` Accept a number **(Can accept a ref dynamic monitoring)** of 768 by default, that is, the boundary value determined by media query

`type` Only one string type **(Can accept a ref dynamic monitoring)** `max` or `min` Value Default `max`,
That is, the media query type, `max` (Browser width smaller than `value` returns true) or
 `min` (Browser width greater than `value` returns true)

`vue.Ref<boolean>` Returns a `ref (boolean)` value，That is, whether the query criteria are met

## use
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