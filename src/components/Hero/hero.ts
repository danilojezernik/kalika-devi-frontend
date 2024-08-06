import { defineComponent } from 'vue'

export default defineComponent({

  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    newsletter: {
      type: Object,
      required: false
    }
  }

})