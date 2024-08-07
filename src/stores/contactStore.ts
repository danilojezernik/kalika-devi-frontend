import { defineStore } from 'pinia'
import { STORE_ID } from '@/shared/global-const/global.const'
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { sendContact } from '@/services/api/contact'
import { CONTACT_RULES } from '@/shared/global-const/rules'

export const useContactStore = defineStore(STORE_ID.public.contact, () => {

  const state = reactive({
    name: '',
    surname: '',
    email: '',
    message: '',
    datum_vnosa: new Date().toISOString(),
    error: ''
  })

  const v$ = useVuelidate(CONTACT_RULES, state)

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

})