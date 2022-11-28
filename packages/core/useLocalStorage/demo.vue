<script lang="ts" setup>
import { useLocalStorage } from '.';
const uselocal = useLocalStorage();
uselocal.set('stroage1', {
    test1: 1,
    test2: 2
});

uselocal.set('stroage2', ['1', '2', ['2', '5']]);

uselocal.set('stroage3', 'stro3');

console.log(uselocal.get('stroage1'));

console.log(uselocal.get('stroage2'));

console.log(uselocal.getForIndex(0), uselocal.getForIndex(1));

console.log(uselocal.getKeys());

console.log(uselocal.getLength(), 'length');

console.log(uselocal.getAll());

uselocal.remove('stroage3');
console.log('remove stroage3');

console.log(uselocal.getAll());

uselocal.removeAll();
console.log('removeAll');

console.log(uselocal.getAll());

</script>
<template>
    <div>Open console</div>
</template>
