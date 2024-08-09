import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {

    const router = useRouter()
    const count = ref(5)
    let intervalId: number | undefined

    const startCountdown = () => {
      intervalId = setInterval(() => {
        if (count.value > 1) {
          count.value--
        } else {
          clearInterval(intervalId)
          router.push('/')
        }
      }, 1000)
    }

    onMounted(() => {
      setTimeout(startCountdown, 100)
    })

    onUnmounted(() => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    })

    return {
      count
    }
  }
})