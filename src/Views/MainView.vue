<script setup>
import List from '../components/List.vue'
import Graph from '../components/Graph.vue';

import { useStore } from '../stores/store'
const store = useStore()

</script>

<template>
  <List />
  <Graph v-if="store.orderedLists[0]"/>
</template>

<style>

</style>
