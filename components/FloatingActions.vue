<template>
  <!-- Desktop: Right Rail -->
  <div class="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40">
    <div class="flex flex-col space-y-3">
      <a
        href="tel:+491234567890"
        class="floating-action-btn group"
        title="Anrufen"
      >
        <Phone class="w-6 h-6" />
        <span class="tooltip">Anrufen</span>
      </a>
      <a
        href="mailto:info@malermeister-jasek.de"
        class="floating-action-btn group"
        title="E-Mail"
      >
        <Mail class="w-6 h-6" />
        <span class="tooltip">E-Mail</span>
      </a>
      <a
        href="https://wa.me/491234567890"
        target="_blank"
        rel="noopener noreferrer"
        class="floating-action-btn group"
        title="WhatsApp"
      >
        <MessageCircle class="w-6 h-6" />
        <span class="tooltip">WhatsApp</span>
      </a>
    </div>
  </div>

  <!-- Mobile: Bottom Bar -->
  <div class="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-lg">
    <div class="grid grid-cols-3 gap-2 p-3">
      <a
        href="tel:+491234567890"
        class="mobile-action-btn"
      >
        <Phone class="w-5 h-5" />
        <span class="text-xs mt-1">Anrufen</span>
      </a>
      <a
        href="mailto:info@malermeister-jasek.de"
        class="mobile-action-btn"
      >
        <Mail class="w-5 h-5" />
        <span class="text-xs mt-1">E-Mail</span>
      </a>
      <a
        href="https://wa.me/491234567890"
        target="_blank"
        rel="noopener noreferrer"
        class="mobile-action-btn"
      >
        <MessageCircle class="w-5 h-5" />
        <span class="text-xs mt-1">WhatsApp</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Phone, Mail, MessageCircle } from 'lucide-vue-next'
</script>

<style scoped>
.floating-action-btn {
  @apply relative bg-brand-blue hover:bg-brand-blue-light text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200;
}

.tooltip {
  @apply absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none;
}

.mobile-action-btn {
  @apply flex flex-col items-center justify-center text-brand-blue hover:bg-gray-50 py-2 rounded-lg transition-colors duration-200;
}
</style>
