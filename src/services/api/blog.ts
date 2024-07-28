import axios from 'axios'
import type { Blog } from '@/models/blog'

export const fetchBlog = async () => {
  try {
    const response = await axios.get<Blog[]>('http://localhost:3010/blog/')
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}