import type { Subscriber } from '@/models/newsletterSubscriber'

import publicApiClient from '@/services/instance/public/axiosPublic'
import { ENDPOINTS } from '@/shared/global-const/global.const'

/**
 * Function to handle user contact.
 * Sends a POST request with the provided credentials to the contact endpoint.
 *
 * @param {Login} subscriberInfo - The values that are needed for subscription.
 * @returns {Promise<Subscriber>} - A promise that resolves with the server response.
 * @throws {Error} - Throws an error if the request fails.
 */
export const newsletterSubscription = async (subscriberInfo: Subscriber): Promise<Subscriber> => {
  try {
    const response = await publicApiClient.post<Subscriber>(`${ENDPOINTS.subscribe}`, subscriberInfo)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}