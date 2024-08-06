import { computed, defineComponent } from 'vue'
import { useBlogStore } from '@/stores/blogStore'

export default defineComponent({
  setup() {

    const blogStore = useBlogStore()

    const blog = computed(() => blogStore.state.blog)
    const error = computed(() => blogStore.state.error)

    return {
      blog,
      error
    }

  }
})