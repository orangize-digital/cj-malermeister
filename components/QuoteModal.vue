<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="true" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" @click.self="$emit('close')">
        <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <!-- Header -->
          <div class="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-2xl">
            <div>
              <h2 class="text-2xl font-display font-bold text-brand-blue">Kostenloses Angebot</h2>
              <p class="text-sm text-gray-600 mt-1">Schritt {{ currentStep }} von 3</p>
            </div>
            <button @click="$emit('close')" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <X class="w-6 h-6" />
            </button>
          </div>

          <!-- Progress Bar -->
          <div class="px-6 pt-4">
            <div class="flex space-x-2">
              <div v-for="step in 3" :key="step" class="flex-1 h-2 rounded-full" :class="step <= currentStep ? 'bg-brand-blue' : 'bg-gray-200'"></div>
            </div>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleSubmit" class="p-6 space-y-6">
            <!-- Step 1: Personal Info -->
            <div v-show="currentStep === 1" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input v-model="formData.name" type="text" required class="form-input" placeholder="Ihr Name">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
                  <input v-model="formData.email" type="email" required class="form-input" placeholder="ihre@email.de">
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                  <input v-model="formData.phone" type="tel" required class="form-input" placeholder="+49 123 456 7890">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Postleitzahl *</label>
                  <input v-model="formData.postalCode" type="text" required class="form-input" placeholder="12345">
                </div>
              </div>
            </div>

            <!-- Step 2: Service Details -->
            <div v-show="currentStep === 2" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Leistungsart *</label>
                <select v-model="formData.serviceType" required class="form-input">
                  <option value="">Bitte wählen...</option>
                  <option value="innenanstrich">Innenanstrich</option>
                  <option value="aussenanstrich">Außenanstrich</option>
                  <option value="fassade">Fassadenarbeiten</option>
                  <option value="lackierung">Lackierungen</option>
                  <option value="tapezieren">Tapezierarbeiten</option>
                  <option value="schimmel">Schimmelbehandlung</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Wunschtermin</label>
                <input v-model="formData.preferredDate" type="date" class="form-input">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
                <textarea v-model="formData.message" rows="4" class="form-input" placeholder="Beschreiben Sie Ihr Projekt..."></textarea>
              </div>
            </div>

            <!-- Step 3: File Upload & Consent -->
            <div v-show="currentStep === 3" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dateien hochladen (optional)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-brand-blue transition-colors cursor-pointer">
                  <Upload class="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <p class="text-sm text-gray-600">Klicken oder Dateien hierher ziehen</p>
                  <p class="text-xs text-gray-500 mt-1">PNG, JPG, PDF bis 10MB</p>
                  <input type="file" multiple accept="image/*,.pdf" class="hidden">
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <input v-model="formData.gdprConsent" type="checkbox" required class="mt-1 w-4 h-4 text-brand-blue border-gray-300 rounded focus:ring-brand-blue">
                <label class="text-sm text-gray-600">
                  Ich stimme der Verarbeitung meiner Daten gemäß der <NuxtLink to="/datenschutz" class="text-brand-blue hover:underline">Datenschutzerklärung</NuxtLink> zu. *
                </label>
              </div>
              <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div class="flex items-start space-x-3">
                  <Clock class="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="text-sm font-medium text-brand-blue">24h Rückruf-Garantie</p>
                    <p class="text-xs text-gray-600 mt-1">Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="flex justify-between pt-4 border-t">
              <button
                v-if="currentStep > 1"
                type="button"
                @click="currentStep--"
                class="btn-secondary"
              >
                Zurück
              </button>
              <div v-else></div>
              <button
                v-if="currentStep < 3"
                type="button"
                @click="currentStep++"
                class="btn-primary"
              >
                Weiter
              </button>
              <button
                v-else
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Wird gesendet...' : 'Angebot anfordern' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { X, Upload, Clock } from 'lucide-vue-next'

const emit = defineEmits(['close'])

const currentStep = ref(1)
const isSubmitting = ref(false)

const formData = ref({
  name: '',
  email: '',
  phone: '',
  postalCode: '',
  serviceType: '',
  preferredDate: '',
  message: '',
  gdprConsent: false
})

const getServiceTypeLabel = (type) => {
  const labels = {
    'innenanstrich': 'Innenanstrich',
    'aussenanstrich': 'Außenanstrich',
    'fassade': 'Fassadenarbeiten',
    'lackierung': 'Lackierungen',
    'tapezieren': 'Tapezierarbeiten',
    'schimmel': 'Schimmelbehandlung',
    'sonstiges': 'Sonstiges'
  }
  return labels[type] || type
}

const handleSubmit = async () => {
  isSubmitting.value = true

  try {
    const subject = `Angebotsanfrage: ${getServiceTypeLabel(formData.value.serviceType)} - ${formData.value.name}`

    const htmlBody = `
      <h2>Neue Angebotsanfrage von Malermeister Christoph Jasek Website</h2>
      <p><strong>Name:</strong> ${formData.value.name}</p>
      <p><strong>E-Mail:</strong> ${formData.value.email}</p>
      <p><strong>Telefon:</strong> ${formData.value.phone}</p>
      <p><strong>Postleitzahl:</strong> ${formData.value.postalCode}</p>
      <p><strong>Leistungsart:</strong> ${getServiceTypeLabel(formData.value.serviceType)}</p>
      <p><strong>Wunschtermin:</strong> ${formData.value.preferredDate || 'Nicht angegeben'}</p>
      <h3>Nachricht:</h3>
      <p>${formData.value.message || 'Keine Nachricht angegeben'}</p>
    `

    const textBody = `
Neue Angebotsanfrage von Malermeister Christoph Jasek Website

Name: ${formData.value.name}
E-Mail: ${formData.value.email}
Telefon: ${formData.value.phone}
Postleitzahl: ${formData.value.postalCode}
Leistungsart: ${getServiceTypeLabel(formData.value.serviceType)}
Wunschtermin: ${formData.value.preferredDate || 'Nicht angegeben'}

Nachricht:
${formData.value.message || 'Keine Nachricht angegeben'}
    `.trim()

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: subject,
        html: htmlBody,
        text: textBody
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    alert('Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.')

    // Reset form
    formData.value = {
      name: '',
      email: '',
      phone: '',
      postalCode: '',
      serviceType: '',
      preferredDate: '',
      message: '',
      gdprConsent: false
    }
    currentStep.value = 1
    emit('close')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.form-input {
  @apply w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
