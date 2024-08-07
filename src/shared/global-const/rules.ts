/**
 * THIS FILE IS FOR ALL THE RULES THAT ARE USED
 * */

import { email, helpers, required } from '@vuelidate/validators'

/**
 * RULES for Vuelidate in CONTACT component
 * @interface: name, surname, email, message
 * */
export const CONTACT_RULES = {
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