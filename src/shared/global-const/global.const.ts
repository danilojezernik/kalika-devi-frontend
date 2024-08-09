// Global constants for header links
export const HEADER = [
  { class: 'p-3', to: '/', title: 'Home' },
  { class: 'p-3', to: '/kalika', title: 'Kalika' },
  { class: 'p-3', to: '/blog', title: 'Blog' },
  { class: 'p-3', to: '/about-me', title: 'About Me' },
  { class: 'p-3', to: '/contact', title: 'Contact' },
  { class: 'p-3', to: '/login', title: 'Login' }
]

// Endpoints for axios
export enum ENDPOINTS {
  blog = 'blog/',
  blogAdmin = 'blog/admin/',
  contact = '/contact',
  login = 'login',
  subscribe = '/subscriber/subscribe',
}

// Enums for Pinia store ID
export enum STORE_ID {
  public = {
    blogAll: 'blogStore',
    blogById: 'blogStoreById',
    contact: 'contactStore',
    newsletter: 'newsletterStore'
  },
  private = {
    blogAll: 'blogAdminStore',
    blogById: 'blogByIdAdminStore'
  }
}