---
title: Type
---

# Type

```ts
import * as vue from 'vue';

/**
 * Media query to determine whether the browser is in the current condition
 * @param value Must be of type number
 * @param type Must be 'max' or 'min'
 * @returns Whether it is in the judging state( true || false )
 */
declare const useMedia: (value?: number, type?: string) => vue.Ref<boolean>;

export { useMedia };
```