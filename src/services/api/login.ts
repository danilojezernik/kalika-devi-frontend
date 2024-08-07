import type { Login } from '@/models/login'

import publicApiClient from '@/services/instance/public/axiosPublic'
import { ENDPOINTS } from '@/shared/global-const/global.const'

/**
 * Function to handle user login.
 * Sends a POST request with the provided credentials to the login endpoint.
 *
 * @param {Login} newData - The username and password for login.
 * @returns {Promise<any>} - A promise that resolves with the server response.
 * @throws {Error} - Throws an error if the request fails.
 */
export const login = async (newData: Login): Promise<Login> => {
  try {
    const response = await publicApiClient.post<Login>(`${ENDPOINTS.login}`, newData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}