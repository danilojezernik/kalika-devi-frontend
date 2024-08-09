import { defineStore } from 'pinia'
import { STORE_ID } from '@/shared/global-const/global.const'
import { reactive } from 'vue'
import { newsletterSubscription } from '@/services/api/newsletterSubscribe'
import { useVuelidate } from '@vuelidate/core'
import { NEWSLETTER_RULES } from '@/shared/global-const/rules'

export const useNewsletterStore = defineStore(STORE_ID.public.newsletter, () => {

  const state = reactive({
    name: '',
    surname: '',
    email: '',
    confirmed: false,
    datum_vnosa: new Date().toISOString(),
    error: ''
  })
  const v$ = useVuelidate(NEWSLETTER_RULES, state)

  const sendNewsletter = async () => {
    v$.value.$touch()

    if (!v$.value.$invalid) {
      try {

        state.error = ''

        await newsletterSubscription({
          name: state.name,
          surname: state.surname,
          email: state.email,
          confirmed: state.confirmed,
          datum_vnosa: state.datum_vnosa
        })


        // Clear form fields
        state.name = ''
        state.surname = ''
        state.email = ''


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
    sendNewsletter
  }

})