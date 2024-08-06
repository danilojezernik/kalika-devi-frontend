import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { helpers, minLength, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { login } from '@/services/api/login'

export default defineComponent({
  setup() {

    const router = useRouter()

    // Variables
    const state = reactive({
      username: '',
      password: '',
      error: ''
    })

    const rules = {
      username: {
        required: helpers.withMessage('Username is required!', required),
        minLength: minLength(3)
      },
      password: {
        required: helpers.withMessage('Password is required!', required)
      }
    }

    // Using Vuelidate with rules and state
    const v$ = useVuelidate(rules, state)

    // Function to handle login process
    const handleLogin = async () => {

      // Trigger validation
      v$.value.$touch()

      if (!v$.value.$invalid) {
        try {
          // reset the error in case of error was thrown
          state.error = ''

          // Send a POST request to the login route
          const response = await login({
            username: state.username,
            password: state.password
          })

          // Check if the response contains access_token
          if (response && response.access_token) {
            // Store the access token
            localStorage.setItem('access_token', response.access_token)

            // Navigate to a protected route (e.g., admin dashboard)
            router.push('/admin')
          } else {
            // Handle the case where access_token is not present
            state.error = 'Login failed. Please check your credentials.'
          }

        } catch (error: any) {
          console.error(error)
        }
      }

    }

    return {
      state,
      rules,
      v$,
      handleLogin
    }
  }
})