<template>
  <a :href="link" class="service-card group">
    <div class="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors duration-200">
      <component :is="icon" class="w-7 h-7 text-brand-blue group-hover:text-white transition-colors duration-200" />
    </div>
    <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ title }}</h3>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <span class="text-brand-blue font-medium flex items-center space-x-2 group-hover:space-x-3 transition-all">
      <span>Mehr erfahren</span>
      <ArrowRight class="w-4 h-4" />
    </span>
  </a>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

defineProps<{
  icon: any
  title: string
  description: string
  link: string
}>()
</script>

<style scoped>
.service-card {
  @apply block bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border border-gray-100;
}
</style>
