import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {

    const state = reactive({
      title: 'Title working',
      subtitle: 'Subtitle working',
    })

    return {
      state
    }

  }
})


