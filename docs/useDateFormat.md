---
title: useDateFormat
---

# useDateFormat

## 参数
```ts
const useDateFormat: (date: DateType, formatstr?: string | Ref) => ComputedRef<string>
```
1. date 
- new Date() => Date 对象 
- new Date().geTime() | Date.now() => 传入一个时间的格林威治时间数值

2. formatstr 匹配格式 `YYYY-DD`

3. returns 返回一个 `computed()`

## formatstr

| Format | Output  | Description        |
| ------ | ------- | ------------------ |
| `YYYY` | 2022    | 四位数年份         |
| `M`    | 1-12    | 月份，1位数        |
| `MM`   | 01-12   | 月份，2位数        |
| `D`    | 1-31    | 当月的日期         |
| `DD`   | 01-31   | 当月的日期，两位数 |
| `H`    | 0-23    | 小时               |
| `HH`   | 00-23   | 小时, 2位数        |
| `m`    | 0-59    | 分钟               |
| `mm`   | 00-59   | 分钟, 2位数        |
| `s`    | 0-59    | 秒钟               |
| `ss`   | 00-59   | 秒钟, 2位数        |
| `SSS`  | 000-999 | 毫秒, 3位数        |
| `d`    | 0-6     | 星期0-6            |

## 使用
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