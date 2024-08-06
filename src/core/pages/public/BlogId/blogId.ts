import { computed, defineComponent } from 'vue'
import { useBlogById } from '@/stores/blogStore'

export default defineComponent({
  setup() {

    const blogStore = useBlogById()

    const blogById = computed(() => blogStore.state.blog)
    const error = computed(() => blogStore.state.error)
    const loading = computed(() => blogStore.state.isLoading)

    return {
      blogById,
      error,
      loading
    }
  }
})