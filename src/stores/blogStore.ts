import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { Blog } from '@/models/blog'
import { fetchBlogByIdPublic, fetchBlogPublic } from '@/services/api/blog'
import { useRoute } from 'vue-router'

// Define state type
interface BlogState {
  blog: Blog[]
  error: string
}

interface BlogStateId {
  blog: Blog | null
  isLoading: boolean
  error: string | null
}

export const useBlogStore = defineStore('blogStore', () => {

  const state = reactive<BlogState>({
    blog: [] as Blog[],
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

export const useBlogById = defineStore('blogById', () => {
  const route = useRoute()

  const state = reactive<BlogStateId>({
    blog: {} as Blog,
    isLoading: true,
    error: '' as string
  })

  const loadBlogById = async () => {
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