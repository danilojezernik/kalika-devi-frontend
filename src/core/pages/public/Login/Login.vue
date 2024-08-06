<script setup lang="ts">

import { reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, minLength } from '@vuelidate/validators'

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
      const response = await axios.post('/api/login', {
        username: state.username,
        password: state.password
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })

      localStorage.setItem('access_token', response.data.access_token)

      router.push('/admin')

    } catch (error: any) {
      console.error(error)
    }
  }

}

</script>

<template>
  <div class="login">
    <h1>Login</h1>
    <form @click.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input v-model="state.username" type="text" id="username" required>
        <p v-if="v$.username.$error">
          {{ v$.username.$errors[0].$message }}
        </p>
      </div>
      <div>
        <label for="password">Password:</label>
        <input v-model="state.password" type="password" id="password" required>
        <p v-if="v$.password.$error">
          {{ v$.password.$errors[0].$message }}
        </p>
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="state.error">{{ state.error }}</p>
  </div>
</template>
