<script setup lang="ts">
import type { Blog } from '@/models/blog'
import { onMounted, ref } from 'vue'
import { fetchBlog } from '@/services/api/blog'

const blog = ref<Blog[] | null>(null)
const error = ref('')

onMounted( async () => {
  try {
    blog.value = await fetchBlog()
    console.log(blog.value)
  } catch (err) {
    console.log(err)
    error.value = 'Something went wrong'
  }
})

</script>
<template>
  <div>
    <h1>Blog</h1>
    <div v-for="data in blog" :key="data._id">
      {{ data.title }}
    </div>
  </div>
</template>
