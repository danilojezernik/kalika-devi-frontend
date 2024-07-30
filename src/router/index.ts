import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/core/pages/public/Home/Home.vue'
import AboutKalika from '@/core/pages/public/Kalika/AboutKalika.vue'
import Blog from '@/core/pages/public/Blog/Blog.vue'
import NotFound from '@/core/pages/public/404/NotFound.vue'
import BlogId from '@/core/pages/public/BlogId/BlogId.vue'
import AboutMe from '@/core/pages/public/AboutMe/AboutMe.vue'
import Login from '@/core/pages/public/Login/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/kalika',
      name: 'kalika',
      component: AboutKalika
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: AboutMe
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/:id',
      name: 'blogId',
      component: BlogId
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
