/**
 * Service to get BLOG from backend API
 */

/**
 * Import the Blog type definition from the local module.
 * This helps ensure that the data fetched from the API conforms to the expected Blog structure.
 */
import type { Blog } from '@/models/blog'

/**
 * Import the Axios instances configured for different purposes:
 * - `adminApiClient` for authenticated requests.
 * - `publicApiClient` for public requests.
 */
import adminApiClient from '@/services/instance/admin/axiosAdmin'
import publicApiClient from '@/services/instance/public/axiosPublic'

/**
 * Function to fetch PUBLIC blog data.
 * This function makes an HTTP GET request to the public API to retrieve blog data that is accessible without authentication.
 *
 * @returns {Promise<Blog[]>} - A promise that resolves to an array of Blog objects.
 * @throws {Error} - Throws an error if the request fails.
 */
export const fetchBlogPublic = async (): Promise<Blog[]> => {
  try {
    /**
     * Make a GET request to the public API endpoint for blogs.
     * The `publicApiClient` is used here, which is configured for non-authenticated requests.
     */
    const response = await publicApiClient.get<Blog[]>('blog/')

    return response.data
  } catch (error) {
    /**
     * Log any errors that occur during the request.
     */
    console.log(error)

    /**
     * Rethrow the error to be handled by the calling code or component.
     */
    throw error
  }
}

/**
 * Function to fetch blog data for ADMIN user.
 * This function makes an HTTP GET request to the authenticated API endpoint to retrieve blog data that requires authentication.
 *
 * @returns {Promise<Blog[]>} - A promise that resolves to an array of Blog objects.
 * @throws {Error} - Throws an error if the request fails.
 */
export const fetchBlogAdmin = async (): Promise<Blog[]> => {
  try {
    /**
     * Make a GET request to the admin API endpoint for blogs.
     * The `adminApiClient` is used here, which is configured for authenticated requests and includes necessary tokens.
     */
    const response = await adminApiClient.get<Blog[]>('blog/admin/')

    /**
     * Return the data from the response.
     */
    return response.data
  } catch (error) {
    /**
     * Log any errors that occur during the request.
     */
    console.log(error)

    /**
     * Rethrow the error to be handled by the calling code or component.
     */
    throw error
  }
}
