import axios from 'axios'

/**
 * Create an Axios instance for making HTTP requests to the public API.
 * This instance is configured with a base URL for the public API.
 */
const publicApiClient = axios.create({
  baseURL: '/api/' // Base URL for the public API. All requests made using this instance will start with this URL.
})

/**
 * Export the configured Axios instance.
 */
export default publicApiClient
