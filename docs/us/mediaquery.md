---
title: MediaQuery
---

# MediaQuery

## parameter
`useMedia(value, type) => vue.Ref<boolean>`

`value` Accept a number of 768 by default, that is, the boundary value determined by media query

`type` Only one string type `max` or `min` Value Default `max`,
That is, the media query type, `max` (Browser width smaller than `value` returns true) or
 `min` (Browser width greater than `value` returns true)

`vue.Ref<boolean>` Returns a `ref (boolean)` value，That is, whether the query criteria are met

## use
```ts
import { ref } from 'vue';
import { useMedia } from 'use-aid';

const isMedia = ref(useMedia())
// or
const isMedia = ref(useMedia(1024, 'max'))
// or
const isMedia = ref(useMedia(1024, 'min'))
```