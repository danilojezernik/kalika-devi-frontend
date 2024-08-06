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
 * PUBLIC
 */

/**
 * Function to fetch PUBLIC blog data.
 * This function makes an HTTP GET request to the public API to retrieve blog data that is accessible without authentication.
 *
 * @returns {Promise<Blog[]>} - A promise that resolves to an array of Blog objects.
 * @throws {Error} - Throws an error if the request fails.
 */
export const fetchBlogPublic = async (): Promise<Blog[]> => {
  try {
    const response = await publicApiClient.get<Blog[]>('blog/')
    return response.data

  } catch (error) {
    console.log(error)
    throw error
  }
}

export const fetchBlogByIdPublic = async (id: string): Promise<Blog> => {
  try {
    const response = await publicApiClient.get<Blog>(`blog/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * ADMIN
 */

/**
 * Function to fetch blog data for ADMIN user.
 * This function makes an HTTP GET request to the authenticated API endpoint to retrieve blog data that requires authentication.
 *
 * @returns {Promise<Blog[]>} - A promise that resolves to an array of Blog objects.
 * @throws {Error} - Throws an error if the request fails.
 */
export const fetchBlogAdmin = async (): Promise<Blog[]> => {
  try {
    const response = await adminApiClient.get<Blog[]>('blog/admin/')
    return response.data

  } catch (error) {
    console.log(error)
    throw error
  }
}
