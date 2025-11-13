<template>
  <div class="text-center">
    <div class="relative mb-6">
      <div class="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center mx-auto shadow-lg">
        <component :is="icon" class="w-10 h-10 text-white" />
      </div>
      <div class="absolute -top-2 -right-2 w-8 h-8 bg-white border-4 border-brand-blue rounded-full flex items-center justify-center font-bold text-brand-blue">
        {{ number }}
      </div>
    </div>
    <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: number
  icon: any
  title: string
  description: string
}>()
</script>
