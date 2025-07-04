import { createRouter, createWebHistory } from 'vue-router/auto'
import App from './App.vue'

import './style/main.css'
import 'uno.css'
import '@unocss/reset/tailwind.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    component: () => import('~/pages/index.vue'),
  }],
})
app.use(router).mount('#app')
