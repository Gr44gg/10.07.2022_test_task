import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import AuthView from '../views/AuthView.vue'
import { useStore } from '../stores/store'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainView
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthView
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to) => {
    const store = useStore()
    if (
      !store.authToken &&
      to.name !== 'Auth'
    ) {
      return { name: 'Auth' }
    }
  })


export default router