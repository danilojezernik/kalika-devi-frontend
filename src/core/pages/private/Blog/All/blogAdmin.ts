import { computed, defineComponent } from 'vue'
import { useBlogStore } from '@/stores/blogStore'

export default defineComponent({
  setup() {

    const blogAdminStore = useBlogStore()

    const blog = computed(() => blogAdminStore.state.blog)

    return {
      blog
    }

  }
})