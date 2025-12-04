<template>
  <div>
    <div class="text-center mb-6">
      <span class="inline-block text-brand-gold text-sm font-semibold tracking-wider uppercase mb-2">
        {{ subtitle }}
      </span>
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white">
        {{ title }}
      </h2>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      <div 
        v-for="stat in stats" 
        :key="stat.label"
        class="text-center group"
      >
        <div class="text-5xl md:text-6xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
          {{ stat.value }}
        </div>
        <div class="text-brand-gold text-sm md:text-base font-semibold">
          {{ stat.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Stat {
  value: string
  label: string
}

interface Props {
  title?: string
  subtitle?: string
  stats?: Stat[]
}

withDefaults(defineProps<Props>(), {
  title: 'Die Mannschaft für Ihr Meisterwerk',
  subtitle: 'Gemeinsam stark',
  stats: () => [
    { value: '2019', label: 'Meistertitel' },
    { value: '3', label: 'Team-Mitglieder' },
    { value: '100%', label: 'Kundenzufriedenheit' },
    { value: '24h', label: 'Rückruf-Garantie' }
  ]
})
</script>
