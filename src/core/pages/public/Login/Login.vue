<script setup lang="ts">

import { reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter();

// Variables
const state = reactive({
  username: '',
  password: '',
  error: ''
})

// Function to handle login process
const handleLogin = async () => {
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

    if(error.response.status === 401) {
      state.error = error.response.data.message || 'Login failed'
    } else {
      state.error = 'An error has occurred'
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
    </div>
    <div>
      <label for="password">Password:</label>
      <input v-model="state.password" type="password" id="password" required>
    </div>
    <button type="submit">Login</button>
  </form>
  <p v-if="state.error">{{ state.error }}</p>
</div>
</template>

<style scoped>
.login {
  max-width: 300px;
  margin: auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login div {
  margin-bottom: 1em;
}

label {
  display: block;
  margin-bottom: 0.5em;
}

input {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 0.7em;
  border: none;
  border-radius: 4px;
  background-color: #007BFF;
  color: white;
  font-size: 1em;
}

p {
  color: red;
}
</style>