<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/kalika">Kalika</RouterLink>
  <RouterLink to="/blog">Blog</RouterLink>
  <RouterLink to="/blog/:id">Blog</RouterLink>
</template>
