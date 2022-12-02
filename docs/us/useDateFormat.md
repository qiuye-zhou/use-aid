---
title: useDateFormat
---

# useDateFormat

## parameter
```ts
const useDateFormat: (date: DateType, formatstr?: string | Ref) => ComputedRef<string>
```
1. date 
- new Date() => Date object 
- new Date().geTime() | Date.now() => Enter the Greenwich Mean Time value of a time

2. formatstr Match Format `YYYY-DD`

3. returns Return a `computed()`

## formatstr

| Format | Output  | Description                           |
| ------ | ------- | ------------------------------------- |
| `YYYY` | 2022    | Four-digit year                       |
| `M`    | 1-12    | The month, beginning at 1             |
| `MM`   | 01-12   | The month, 2-digits                   |
| `D`    | 1-31    | The day of the month                  |
| `DD`   | 01-31   | The day of the month, 2-digits        |
| `H`    | 0-23    | The hour                              |
| `HH`   | 00-23   | The hour, 2-digits                    |
| `m`    | 0-59    | The minute                            |
| `mm`   | 00-59   | The minute, 2-digits                  |
| `s`    | 0-59    | The second                            |
| `ss`   | 00-59   | The second, 2-digits                  |
| `SSS`  | 000-999 | The millisecond, 3-digits             |
| `d`    | 0-6     | The day of the week, with Sunday as 0 |

## Use
```ts
<script lang="ts" setup>
import { ref } from 'vue';
import { useDateFormat } from '.';

const formatsstr = ref('YYYY-MM-DD-HH:mm:ss');

const date = useDateFormat(Date.now(), formatsstr);

console.log(date.value);

</script>

<template>
    <input
        v-model="formatsstr"
        style="width: 13rem;padding: 0.3rem;"
        type="text"
    >
    <div>{{ date }}</div>
</template>
```