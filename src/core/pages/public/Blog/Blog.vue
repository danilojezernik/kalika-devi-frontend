<script setup lang="ts">
import type { Blog } from '@/models/blog'
import { onMounted, ref } from 'vue'
import { fetchBlogPublic } from '@/services/api/blog'

const blog = ref<Blog[]>([])
const error = ref('')

onMounted( async () => {
  try {
    blog.value = await fetchBlogPublic()
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
      <RouterLink :to="'/blog/' + data._id">
        {{ data.title }}
      </RouterLink>
    </div>
  </div>
</template>
