<template>
  <div class="kontakt">
    <!-- Hero Section -->
    <section class="relative h-[400px] md:h-[500px] flex items-center bg-gradient-to-r from-brand-blue to-brand-blue-light">
      <div class="section-container relative z-10">
        <h1 class="font-display text-4xl md:text-5xl font-bold text-white mb-4">Kontakt</h1>
        <p class="text-xl text-blue-100 max-w-2xl">
          Wir freuen uns auf Ihre Anfrage. Kontaktieren Sie uns telefonisch, per E-Mail oder über unser Kontaktformular.
        </p>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="py-20 bg-gray-50">
      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div class="bg-white p-8 rounded-xl shadow-md text-center">
            <div class="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone class="w-8 h-8 text-brand-blue" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Telefon</h3>
            <a href="tel:+4917622585100" class="text-brand-blue hover:underline text-lg font-medium">
              0176 22585100
            </a>
            <p class="text-sm text-gray-600 mt-2">Mo-Fr: 07:00 - 18:00 Uhr</p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-md text-center">
            <div class="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail class="w-8 h-8 text-brand-blue" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">E-Mail</h3>
            <a href="mailto:info@malermeister-jasek.de" class="text-brand-blue hover:underline text-lg font-medium break-all">
              info@malermeister-jasek.de
            </a>
            <p class="text-sm text-gray-600 mt-2">Antwort innerhalb 24h</p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-md text-center">
            <div class="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle class="w-8 h-8 text-brand-blue" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <a href="https://wa.me/4917622585100" target="_blank" rel="noopener noreferrer" class="text-brand-blue hover:underline text-lg font-medium">
              Nachricht senden
            </a>
            <p class="text-sm text-gray-600 mt-2">Schnelle Antwort</p>
          </div>
        </div>

        <!-- Contact Form & Info Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white p-8 rounded-xl shadow-md">
            <h2 class="font-display text-2xl font-bold text-brand-blue mb-6">Kontaktformular</h2>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input v-model="contactForm.name" type="text" required class="form-input" placeholder="Ihr Name">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
                  <input v-model="contactForm.email" type="email" required class="form-input" placeholder="ihre@email.de">
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                <input v-model="contactForm.phone" type="tel" class="form-input" placeholder="+49 123 456 7890">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Betreff *</label>
                <input v-model="contactForm.subject" type="text" required class="form-input" placeholder="Worum geht es?">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nachricht *</label>
                <textarea v-model="contactForm.message" rows="5" required class="form-input" placeholder="Ihre Nachricht an uns..."></textarea>
              </div>
              <div class="flex items-start space-x-3">
                <input v-model="contactForm.gdprConsent" type="checkbox" required class="mt-1 w-4 h-4 text-brand-blue border-gray-300 rounded focus:ring-brand-blue">
                <label class="text-sm text-gray-600">
                  Ich stimme der Verarbeitung meiner Daten gemäß der <NuxtLink to="/datenschutz" class="text-brand-blue hover:underline">Datenschutzerklärung</NuxtLink> zu. *
                </label>
              </div>
              <button type="submit" :disabled="isSubmitting" class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
                {{ isSubmitting ? 'Wird gesendet...' : 'Nachricht senden' }}
              </button>
            </form>
          </div>

          <!-- Contact Info & Map -->
          <div class="space-y-6">
            <!-- Address & Hours -->
            <div class="bg-white p-8 rounded-xl shadow-md">
              <h2 class="font-display text-2xl font-bold text-brand-blue mb-6">Unser Standort</h2>
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <MapPin class="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <p class="font-medium text-gray-900">Malermeister Christoph Jasek</p>
                    <p class="text-gray-600">Osterfeld 18</p>
                    <p class="text-gray-600">49214 Bad Rothenfelde</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <Clock class="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <p class="font-medium text-gray-900 mb-2">Öffnungszeiten</p>
                    <div class="space-y-1 text-sm text-gray-600">
                      <div class="flex justify-between">
                        <span>Montag - Freitag:</span>
                        <span class="font-medium">07:00 - 18:00</span>
                      </div>
                      <div class="flex justify-between">
                        <span>Samstag:</span>
                        <span class="font-medium">09:00 - 14:00</span>
                      </div>
                      <div class="flex justify-between">
                        <span>Sonntag:</span>
                        <span class="font-medium">Geschlossen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Anfahrt -->
            <div class="bg-white p-8 rounded-xl shadow-md">
              <h3 class="font-semibold text-gray-900 mb-4">Anfahrt</h3>
              <p class="text-gray-600 mb-6">
                Sie finden uns in Bad Rothenfelde, zentral im Osnabrücker Land.
                Parkplätze sind direkt vor Ort verfügbar.
              </p>
              <div class="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-6 mb-6">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Osterfeld 18</p>
                    <p class="text-gray-600">49214 Bad Rothenfelde</p>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Osterfeld+18+49214+Bad+Rothenfelde"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center space-x-2 bg-brand-blue text-white hover:bg-brand-blue-dark font-medium px-6 py-3 rounded-xl transition-colors"
              >
                <Navigation class="w-5 h-5" />
                <span>Route in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-brand-blue">
      <div class="section-container">
        <div class="text-center">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">Lieber direkt ein Angebot?</h2>
          <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nutzen Sie unser Anfrageformular für ein kostenloses und unverbindliches Angebot.
          </p>
          <button @click="openQuote" class="bg-white text-brand-blue hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg">
            Kostenloses Angebot anfordern
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Phone, Mail, MessageCircle, MapPin, Clock, Navigation } from 'lucide-vue-next'

// SEO Meta Tags
useSEO({
  title: 'Kontakt',
  description: 'Kontaktieren Sie Malermeister Christoph Jasek. Kostenlose Beratung und schnelles Angebot. Telefon, E-Mail oder Kontaktformular. 24h Rückruf-Garantie.',
  keywords: 'Kontakt, Malermeister, Angebot, Beratung, Telefon, E-Mail',
  url: '/kontakt'
})

const openQuoteModal = inject<() => void>('openQuoteModal')
const openQuote = () => openQuoteModal?.()

const contactForm = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  gdprConsent: false
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true

  try {
    const subject = `Kontaktanfrage: ${contactForm.value.subject} - ${contactForm.value.name}`

    const htmlBody = `
      <h2>Neue Kontaktanfrage von Malermeister Christoph Jasek Website</h2>
      <p><strong>Name:</strong> ${contactForm.value.name}</p>
      <p><strong>E-Mail:</strong> ${contactForm.value.email}</p>
      <p><strong>Telefon:</strong> ${contactForm.value.phone || 'Nicht angegeben'}</p>
      <p><strong>Betreff:</strong> ${contactForm.value.subject}</p>
      <h3>Nachricht:</h3>
      <p>${contactForm.value.message}</p>
    `

    const textBody = `
Neue Kontaktanfrage von Malermeister Christoph Jasek Website

Name: ${contactForm.value.name}
E-Mail: ${contactForm.value.email}
Telefon: ${contactForm.value.phone || 'Nicht angegeben'}
Betreff: ${contactForm.value.subject}

Nachricht:
${contactForm.value.message}
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

    alert('Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen.')

    // Reset form
    contactForm.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      gdprConsent: false
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.form-input {
  @apply w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all;
}
</style>
