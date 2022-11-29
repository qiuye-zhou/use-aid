<script setup lang="ts">// @ts-nocheck
import { ref } from 'vue';
import Side from './components/Side.vue';
import useMedia from '../../packages/core/useMedia/demo.vue';
import useLocalStorage from '../../packages/core/useLocalStorage/demo.vue';

const tableList = [
    {
        name: 'useMedia',
        com: useMedia
    },
    {
        name: 'useLocalStorage',
        com: useLocalStorage
    }
];
const active = ref(0);
const change = index => {
    active.value = index;
};
</script>

<template>
    <div class="container">
        <div class="side">
            <Side
                v-for="(item, index) in tableList"
                :key="item.name"
                :name="item.name"
                @click="change(index)"
            />
        </div>
        <div class="content">
            <div>
                <component :is="tableList[active].com" />
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
}
.side {
    min-width: 100px;
    box-shadow: 0 0 3px 1px black;
    overflow: hidden;
}
.content {
    flex-grow: 4;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 2rem;
    text-align: center;
}
</style>
