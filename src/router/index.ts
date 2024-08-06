import { createRouter, createWebHistory } from 'vue-router'

// Components PUBLIC
import Home from '@/core/pages/public/Home/Home.vue'
import AboutKalika from '@/core/pages/public/Kalika/AboutKalika.vue'
import Blog from '@/core/pages/public/Blog/Blog.vue'
import NotFound from '@/core/pages/public/404/NotFound.vue'
import BlogId from '@/core/pages/public/BlogId/BlogId.vue'
import AboutMe from '@/core/pages/public/AboutMe/AboutMe.vue'
import Login from '@/core/pages/public/Login/Login.vue'

// Components ADMIN
import Admin from '@/core/pages/private/Admin/Admin.vue'
import BlogAdmin from '@/core/pages/private/Blog/All/BlogAdmin.vue'
import Contact from '@/core/pages/public/Contact/Contact.vue'

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
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: { requiresAuth: true }
    },
    {
      path: '/blog-admin',
      name: 'blog-admin',
      component: BlogAdmin,
      meta: { requiresAuth: true }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

/**
 * Global navigation guard for Vue Router.
 * This function runs before each route navigation and checks if the user is authenticated.
 */
router.beforeEach((to, from, next) => {
  /**
   * Retrieve the access token from localStorage.
   * The presence of a token indicates that the user is authenticated.
   */
  const token = localStorage.getItem('access_token')

  /**
   * Check if the target route requires authentication.
   * The meta field in the route definition is used to indicate this.
   * If the route requires authentication and the user does not have a token, they are not authenticated.
   */
  if (to.meta.requiresAuth && !token) {
    /**
     * Redirect the user to the login page if they are not authenticated.
     * The next() function is called with an object containing the route name to navigate to.
     * In this case, it navigates to the route named 'login'.
     */
    next({ name: 'login' })
  } else {
    /**
     * If the user is authenticated or the route does not require authentication, allow the navigation.
     * The next() function is called without any arguments, allowing the navigation to proceed to the target route.
     */
    next()
  }
})

export default router
