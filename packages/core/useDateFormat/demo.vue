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
