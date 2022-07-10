<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from '../stores/store'
import  Preloader from './Preloader.vue'

const store = useStore()

function loadData() {
  const api = 'https://jsonplaceholder.typicode.com/todos'
  store.getList(api)  
  store.loading = true
}

</script>

<template>
<div class="lists container mx-auto p-5">
  <div class="lists__controls flex">
    <div :class="{'locked': store.loading}" class="lists__button mb-8 mr-4 text-left border-2 rounded w-max p-2 bg-gray-100
      cursor-pointer hover:bg-slate-200 active:bg-blue-500 active:text-gray-50" @click="loadData()">Загрузить данные</div>
    <Preloader v-if="store.loading"/>
  </div>
  <div class="lists__wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div class="lists__item item text-left p-10 border-2 rounded bg-gray-100" v-for="list in store.orderedLists">
      <div class="item__header flex mb-2.5" >
        <div class="item__user w-full font-semibold">Пользователь {{ list.id }}</div>
        <div class="item__completed flex font-semibold gap-0.5">
          <div class="item__true text-green-500">{{ list.true }}</div> 
          <div>/</div>
          <div class="item__false text-red-700">{{ list.false }}</div>       
        </div>
      </div>
      <div class="item__main">
        <ul class="item__titles list-disc" v-for="title in list.titles">
          <li>{{ title }}</li>
        </ul>
      </div>
    </div>
  </div>
</div>

</template>

<style scoped>
.locked {
   pointer-events: none;
}
</style>
