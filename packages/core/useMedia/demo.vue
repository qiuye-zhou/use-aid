<script lang="ts" setup>
import { ref } from 'vue';
import { useMedia } from '.';

const valuetest = ref(920);
const typetest = ref('max');

const isMedia = ref(useMedia(valuetest.value, typetest.value));
</script>
<template>
    <div>
        {{ (isMedia ? 'be in' : 'Not in') + `${typetest}: ${valuetest}` }}
    </div>
</template>
