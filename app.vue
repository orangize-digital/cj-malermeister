<template>
  <div id="app">
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
    <FloatingActions />
    <QuoteModal v-if="showQuoteModal" @close="showQuoteModal = false" />
  </div>
</template>

<script setup>
const showQuoteModal = ref(false)

provide('openQuoteModal', () => {
  showQuoteModal.value = true
})

// Set default page metadata
useHead({
  titleTemplate: '%s - Malermeister Christoph Jasek',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>
