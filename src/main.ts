import './assets/main.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Header from '@/core/Header/Header.vue'
import Hero from '@/shared/componenets/Hero/Hero.vue'

const app = createApp(App)

// Global components
app.component('Header', Header)

app.component('Hero', Hero)

app.use(createPinia())
app.use(router)

app.mount('#app')
