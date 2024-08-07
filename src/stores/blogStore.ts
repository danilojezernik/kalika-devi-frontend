import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { Blog } from '@/models/blog'
import { fetchBlogAdmin, fetchBlogByIdPublic, fetchBlogPublic } from '@/services/api/blog'
import { useRoute } from 'vue-router'
import { STORE_ID } from '@/shared/global-const/global.const'

// Define state type for blogStore
interface BlogState {
  blog: Blog[]
  error: string
}

interface BlogStateId {
  blog: Blog
  isLoading: boolean
  error: string
}

/**
 * PUBLIC
 * */

export const useBlogStore = defineStore(STORE_ID.public.blogAll, () => {

  const state = reactive<BlogState>({
    blog: [],
    error: ''
  })

  const loadBlogs = async () => {
    try {
      state.blog = await fetchBlogPublic()
    } catch (err) {
      console.log(err)
      state.error = 'Something went wrong'
    }
  }

  loadBlogs()

  return {
    state
  }
})

export const useBlogById = defineStore(STORE_ID.public.blogById, () => {
  const route = useRoute()

  const state = reactive<BlogStateId>({
    blog: {},
    isLoading: true,
    error: ''
  })

  const loadBlogById = async (): Promise<Blog> => {
    try {
      // Extract the blog ID from the route parameters.
      const blogId = route.params.id as string

      // Fetch the blog data using the provided ID and store it in the state.
      state.blog = await fetchBlogByIdPublic(blogId)
    } catch (error) {
      console.error('Failed to fetch blog data:', error)
      state.error = 'Failed to load blog data'
    } finally {
      // Fetch the blog data using the provided ID and store it in the state.
      state.isLoading = false
    }
  }

  loadBlogById()

  return {
    state
  }

})

/**
 * ADMIN
 * */

export const useBlogAdmin = defineStore(STORE_ID.private.blogAll, () => {

  const state = reactive<BlogState>({
    blog: [],
    error: ''
  })

  const loadBlogsAdmin = async (): Promise<Blog[]> => {
    try {
      state.blog = await fetchBlogAdmin()
    } catch (err) {
      console.log(err)
      state.error = 'Something went wrong'
    }
  }

  loadBlogsAdmin()

  return {
    state
  }
})