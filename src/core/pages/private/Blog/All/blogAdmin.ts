import { defineComponent, onMounted, reactive } from 'vue'
import type { Blog } from '@/models/blog'
import { fetchBlogAdmin } from '@/services/api/blog'

export default defineComponent({
  setup() {

    const state = reactive({
      blog: [] as Blog[],
      error: ''
    })

    onMounted( async () => {
      try {
        state.blog = await fetchBlogAdmin()
      } catch (err) {
        console.log(err)
        state.error = 'Something went wrong'
      }
    })

    return {
      state
    }

  }
})