<script setup>
import { onMounted } from 'vue';
import Plotly from 'plotly.js-dist-min'

import { useStore } from '../stores/store'
const store = useStore()

var trace1 = {
  x: store.orderedLists.map(el => el.id),
  y: store.orderedLists.map(el => el.true),
  name: 'True',
  type: 'bar'
};

var trace2 = {
  x: store.orderedLists.map(el => el.id),
  y: store.orderedLists.map(el => el.false),
  name: 'False',
  type: 'bar'
};

var data = [trace1, trace2];

var layout = {barmode: 'stack'};


onMounted(() => {
  Plotly.newPlot('graph', data, layout, {responsive: true});
})

</script>

<template>
<div id="graph"></div>
</template>

<style scoped>
#graph{
    width: 95%;
    height: 100%;
}
</style>