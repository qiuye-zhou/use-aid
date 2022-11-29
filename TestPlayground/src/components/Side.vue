<script lang="ts" setup>
const props = defineProps<{
    name: string
}>()
</script>
<template>
    <div class="tab">
        {{ props.name }}
    </div>
</template>
<style lang="css" scoped>
.tab {
    user-select: none;
    cursor: pointer;
    margin: 0.5rem 0.2rem;
}
</style>
