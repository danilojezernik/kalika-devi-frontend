import { defineComponent, reactive } from 'vue'
import { sendContact } from '@/services/api/contact'
import { email, helpers, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

export default defineComponent({
  setup() {

    const state = reactive({
      name: '',
      surname: '',
      email: '',
      message: '',
      datum_vnosa: new Date().toISOString(),
      error: ''
    })

    const rules = {
      name: {
        required: helpers.withMessage('Name is required!', required)
      },
      surname: {
        required: helpers.withMessage('Surname is required!', required)
      },
      email: {
        required: helpers.withMessage('Email is required!', email)
      },
      message: {
        required: helpers.withMessage('Message is required!', required)
      }
    }

    const v$ = useVuelidate(rules, state)

    const sendMail = async () => {
      v$.value.$touch()

      if (!v$.value.$invalid) {
        try {
          // Reset the error message
          state.error = ''

          await sendContact({
            name: state.name,
            surname: state.surname,
            email: state.email,
            message: state.message,
            datum_vnosa: state.datum_vnosa
          })

          // Clear form fields
          state.name = ''
          state.surname = ''
          state.email = ''
          state.message = ''
          state.error = ''

          // Reset validation state
          v$.value.$reset()
        } catch (error) {
          console.error(error)
          state.error = 'An error occurred while sending your message. Please try again.'
        }
      }
    }

    return {
      state,
      v$,
      sendMail
    }
  }
})
