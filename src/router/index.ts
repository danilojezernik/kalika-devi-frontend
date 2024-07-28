import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home/Home.vue'
import AboutKalika from '@/components/Kalika/AboutKalika.vue'
import Blog from '@/components/Blog/Blog.vue'
import NotFound from '@/components/404/NotFound.vue'
import BlogId from '@/components/BlogId/BlogId.vue'

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
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
