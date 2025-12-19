<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      @click="close"
      class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <Transition name="scale">
        <div
          v-if="isOpen"
          @click.stop
          class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
        >
          <!-- Success Icon -->
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle class="w-10 h-10 text-green-600" />
          </div>

          <!-- Title -->
          <h3 class="font-display text-2xl font-bold text-gray-900 mb-3">
            {{ title }}
          </h3>

          <!-- Message -->
          <p class="text-gray-600 mb-8">
            {{ message }}
          </p>

          <!-- Button -->
          <button
            @click="close"
            class="w-full bg-brand-blue text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-blue-dark transition-colors"
          >
            {{ buttonText }}
          </button>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Erfolgreich gesendet!'
  },
  message: {
    type: String,
    default: 'Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb von 24 Stunden bei Ihnen.'
  },
  buttonText: {
    type: String,
    default: 'Alles klar'
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
