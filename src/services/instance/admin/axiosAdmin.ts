import axios from 'axios'

/**
 * Create an Axios instance for making HTTP requests.
 * This instance is configured with a base URL and default headers.
 */
const adminApiClient = axios.create({
  baseURL: '/api/', // Base URL for the API. All requests made using this instance will start with this URL.
  headers: {
    'Content-Type': 'application/json' // Default header indicating that request bodies will be in JSON format.
  }
})

/**
 * Request Interceptor
 * Interceptors allow you to run functions before a request is sent to the server.
 * This interceptor adds an Authorization header to the request if a token is found in localStorage.
 */
adminApiClient.interceptors.request.use(
  config => {

    const token = localStorage.getItem('access_token')

    /**
     * If the token exists, add it to the request headers.
     * This sets the Authorization header so that the server can verify the user's identity.
     */
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    /**
     * Return the modified configuration object.
     * This allows the request to proceed with the updated headers.
     */
    return config
  },
  error => {
    /**
     * Handle errors that occur before the request is sent.
     * Return a rejected promise with the error so that it can be handled by the calling code.
     */
    return Promise.reject(error)
  }
)

/**
 * Response Interceptor
 * Interceptors also run when a response is received from the server.
 * This interceptor processes the response and handles errors.
 */
adminApiClient.interceptors.response.use(
  response => {
    /**
     * If the server responds with a status code in the range of 2xx, this function is called.
     * Simply return the response to be used by the calling code.
     */
    return response
  },
  error => {
    /**
     * If the server responds with an error status code (e.g., 4xx or 5xx), this function is called.
     * Check if the error response exists and has a status code of 401.
     */
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access - perhaps the token has expired.')
    }

    /**
     * Return a rejected promise with the error.
     */
    return Promise.reject(error)
  }
)

/**
 * Export the configured Axios instance.
 */
export default adminApiClient
