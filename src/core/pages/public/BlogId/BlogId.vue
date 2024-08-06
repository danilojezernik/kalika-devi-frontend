<script setup lang="ts">

import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { fetchBlogByIdPublic } from '@/services/api/blog'
import type { Blog } from '@/models/blog'

/**
 * Get the current route object to access route parameters.
 */
const route = useRoute()

/**
 * Define a reactive state object to manage blog data and loading/error states.
 */
const state = reactive({
  blog: null as Blog | null,
  isLading: true,
  error: null as string | null
})

/**
 * Lifecycle hook that runs when the component is mounted.
 */
onMounted(async () => {
  try {
    // Extract the blog ID from the route parameters.
    const blogId = route.params.id as string

    // Fetch the blog data using the provided ID and store it in the state.
    state.blog = await fetchBlogByIdPublic(blogId)

  } catch (error) {
    console.error('Failed to fetch blog data:', error)
    state.error = 'Failed to load blog data'
  } finally {
    // Fetch the blog data using the provided ID and store it in the state.
    state.isLading = false
  }
})

</script>

<template>
  <div>
    <h1>Blog Post</h1>

    <!-- Display a loading message while the data is being fetched -->
    <div v-if="state.isLading">
      <p>Loading blog data...</p>
    </div>

    <!-- Display an error message if there was an error fetching the data -->
    <div v-else-if="state.error">
      <p>{{ state.error }}</p>
    </div>

    <!-- Display the blog data once it has been successfully fetched -->
    <div v-else-if="state.blog">
      <h2>{{ state.blog.title }}</h2>
      <p>{{ state.blog.vsebina }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>