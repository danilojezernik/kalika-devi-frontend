import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Header from '@/components/Header/Header.vue'
import Hero from '@/components/Hero/Hero.vue'

const app = createApp(App)

// Global components
app.component('Header', Header)

app.component('Hero', Hero)

app.use(createPinia())
app.use(router)

app.mount('#app')
