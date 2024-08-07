import { computed, defineComponent } from 'vue'
import { useContactStore } from '@/stores/contactStore'

export default defineComponent({
  setup() {

    const contactStore = useContactStore()

    const state = computed(() => contactStore.state)
    const v$ = computed(() => contactStore.v$)
    const sendMail = computed(() => contactStore.sendMail)

    return {
      state,
      v$,
      sendMail
    }
  }
})
