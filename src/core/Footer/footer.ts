import { computed, defineComponent } from 'vue'
import { useNewsletterStore } from '@/stores/newsletterStore'

export default defineComponent({
  setup() {

    const useStore = useNewsletterStore()

    const state = computed(() => useStore.state)
    const v$ = computed(() => useStore.v$)
    const subscribeFunction = computed(() => useStore.sendNewsletter)

    return {
      v$,
      state,
      subscribeFunction
    }
  }


})