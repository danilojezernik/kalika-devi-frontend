import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import type { Blog } from '@/models/blog'
import { fetchBlogByIdPublic } from '@/services/api/blog'

export default defineComponent({
  setup() {

    /**
     * Get the current route object to access route parameters.
     */
    const route = useRoute()

    /**
     * Define a reactive state object to manage blog data and loading/error states.
     */
    const state = reactive({
      blog: null as Blog | null,
      isLoading: true,
      error: null as string | null
    })

    /**
     * Lifecycle hook that runs when the component is mounted.
     */
    onMounted(async () => {
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
    })

    return {
      state
    }
  }
})