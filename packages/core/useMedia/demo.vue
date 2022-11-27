<script lang="ts" setup>
import { ref } from 'vue';
import { useMedia } from '.';

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
