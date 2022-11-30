---
title: useDocumentVisibility
---

# useDocumentVisibility

## Use
```ts
<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useDocumentVisibility } from '.';

const startMessage = '💡最小化页面或切换选项卡，然后返回看看？';
const message = ref(startMessage);
const visibility = useDocumentVisibility();
watch(visibility, (current, previous) => {
    if (current === 'visible' && previous === 'hidden') {
        message.value = '🎉 欢迎回来！';
        const timeout = setTimeout(() => {
            message.value = startMessage;
            clearTimeout(timeout);
        }, 3000);
    }
});
</script>

<template>
    <div>{{ message }}</div>
</template>
```