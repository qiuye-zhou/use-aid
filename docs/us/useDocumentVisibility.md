---
title: useDocumentVisibility
---

# useDocumentVisibility

## Use
```ts
<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useDocumentVisibility } from '.';

const startMessage = 'π‘ζε°ει‘΅ι’ζεζ’ιι‘Ήε‘οΌηΆεθΏεηηοΌ';
const message = ref(startMessage);
const visibility = useDocumentVisibility();
watch(visibility, (current, previous) => {
    if (current === 'visible' && previous === 'hidden') {
        message.value = 'π ζ¬’θΏεζ₯οΌ';
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