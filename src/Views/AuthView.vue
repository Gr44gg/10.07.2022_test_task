<script setup>
import { ref } from 'vue';
import { useStore } from '../stores/store'
import router from '../router';
const store = useStore()


const username = ref(null)
const password = ref(null)


function handleSubmit() {
  if (username.value == 'admin' && password.value == '123456') {
    const token = 'QwfR45H45Sx$5hY'
    store.authToken = token
    console.log(store.authToken)
    localStorage.setItem('token', token)
    router.push({name: 'Main'})

  } else {
    alert('Неверный логин или пароль')
  }
}
</script>

<template>
<div class="wrapper">
  <div class="auth">
      <label for="username">Логин</label>
      <input v-model="username" id="username" type="text">
      
      <label for="password">Пароль</label>
      <input v-model="password" id="password" type="password">
    
      <button @click.prevent="handleSubmit()">Вход</button>
  </div>  
</div>
</template>

<style scoped>
.wrapper {
    position: relative;
    flex-grow: 1;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.auth {
  width: 40%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

input {
  background-color: lightgray;
  padding-left: 0.5rem;
  margin-bottom: 1rem;
  height: 2rem;
}


button  {
  background-color: lightgray;
  height: 2rem;
  width: 5rem;
}

</style>