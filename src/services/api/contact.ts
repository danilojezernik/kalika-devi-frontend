import type { Contact } from '@/models/contact'

import publicApiClient from '@/services/instance/public/axiosPublic'
import { ENDPOINTS } from '@/shared/global-const/global.const'

/**
 * Function to handle user contact.
 * Sends a POST request with the provided credentials to the contact endpoint.
 *
 * @param {Login} sendContact - The values that are needed for email.
 * @returns {Promise<Contact>} - A promise that resolves with the server response.
 * @throws {Error} - Throws an error if the request fails.
 */
export const sendContact = async (sendContact: Contact): Promise<Contact> => {
  try {
    const response = await publicApiClient.post<Contact>(`${ENDPOINTS.contact}`, sendContact)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}