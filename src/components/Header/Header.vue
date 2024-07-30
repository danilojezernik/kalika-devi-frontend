<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { HEADER } from '@/shared/global-const/global.const'
</script>

<template>
  <RouterLink v-for="links in HEADER" :class="links.class" :to="links.to">{{ links.title }}</RouterLink>
</template>
