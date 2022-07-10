<script setup>

import { useStore } from './stores/store'

const store = useStore()

</script>

<template>
  <router-view/>
</template>

<style>
#app {
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
</style>
