import { computed, defineComponent } from 'vue'
import { useBlogAdmin } from '@/stores/blogStore'

export default defineComponent({
  setup() {

    const blogAdminStore = useBlogAdmin()

    const blog = computed(() => blogAdminStore.state.blog)

    return {
      blog
    }

  }
})