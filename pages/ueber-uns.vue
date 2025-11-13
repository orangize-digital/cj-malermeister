<template>
  <div class="ueber-uns">
    <!-- Hero Section -->
    <section class="relative h-[400px] md:h-[500px] flex items-center bg-gradient-to-r from-brand-blue to-brand-blue-light">
      <div class="section-container relative z-10">
        <h1 class="font-display text-4xl md:text-5xl font-bold text-white mb-4">Über uns</h1>
        <p class="text-xl text-blue-100 max-w-2xl">
          Meisterqualität und Leidenschaft für das Handwerk seit über 20 Jahren.
        </p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="font-display text-3xl md:text-4xl font-bold text-brand-blue mb-6">Malermeister Christoph Jasek</h2>
            <p class="text-lg text-gray-600 mb-4">
              Seit über 20 Jahren steht der Name Christoph Jasek für höchste Qualität im Malerhandwerk. 
              Was als kleiner Malerbetrieb begann, hat sich zu einem anerkannten Meisterbetrieb entwickelt, 
              der für Präzision, Zuverlässigkeit und Kundenzufriedenheit steht.
            </p>
            <p class="text-lg text-gray-600 mb-4">
              Als Malermeister lege ich großen Wert auf fachgerechte Ausführung, hochwertige Materialien und 
              eine saubere Arbeitsweise. Jedes Projekt wird mit der gleichen Sorgfalt behandelt – egal ob 
              kleiner Innenanstrich oder große Fassadensanierung.
            </p>
            <p class="text-lg text-gray-600">
              Mein Team und ich freuen uns darauf, auch Ihr Projekt zu realisieren und Ihre Räume in neuem 
              Glanz erstrahlen zu lassen.
            </p>
          </div>
          <div class="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src=""
              alt="Malermeister Christoph Jasek"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-gray-50">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-brand-blue mb-4">Unsere Werte</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Diese Prinzipien leiten uns bei jedem Projekt und sind die Grundlage unseres Erfolgs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-md">
            <div class="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
              <Award class="w-7 h-7 text-brand-blue" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Meisterqualität</h3>
            <p class="text-gray-600">
              Als Meisterbetrieb garantieren wir höchste handwerkliche Qualität und fachgerechte Ausführung 
              nach aktuellen Standards.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-md">
            <div class="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
              <Users class="w-7 h-7 text-brand-blue" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Kundenzufriedenheit</h3>
            <p class="text-gray-600">
              Ihre Zufriedenheit ist unser Ziel. Wir hören zu, beraten ehrlich und setzen Ihre Wünsche 
              präzise um.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-md">
            <div class="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
              <Clock class="w-7 h-7 text-brand-blue" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Zuverlässigkeit</h3>
            <p class="text-gray-600">
              Pünktlichkeit und Termintreue sind für uns selbstverständlich. Wir halten, was wir versprechen.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-md">
            <div class="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
              <Sparkles class="w-7 h-7 text-brand-blue" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Sauberkeit</h3>
            <p class="text-gray-600">
              Staubarmes Arbeiten und gründliche Reinigung nach jedem Arbeitstag – unsere Sauber-Garantie.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-md">
            <div class="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
              <Leaf class="w-7 h-7 text-brand-blue" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Nachhaltigkeit</h3>
            <p class="text-gray-600">
              Wir verwenden umweltfreundliche, emissionsarme Farben und Materialien für ein gesundes Raumklima.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-md">
            <div class="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
              <MapPin class="w-7 h-7 text-brand-blue" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Regional</h3>
            <p class="text-gray-600">
              Als regionaler Betrieb sind wir schnell vor Ort und kennen die Besonderheiten der Region.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-brand-blue mb-4">Unser Team</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Erfahrene Fachkräfte mit Leidenschaft für das Handwerk.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
              <img 
                src=""
                alt="Team Mitglied"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-1">Christoph Jasek</h3>
            <p class="text-brand-blue font-medium mb-2">Malermeister & Geschäftsführer</p>
            <p class="text-gray-600 text-sm">
              Über 20 Jahre Erfahrung im Malerhandwerk
            </p>
          </div>

          <div class="text-center">
            <div class="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
              <img 
                src=""
                alt="Team Mitglied"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-1">Michael Schmidt</h3>
            <p class="text-brand-blue font-medium mb-2">Geselle</p>
            <p class="text-gray-600 text-sm">
              Spezialist für Fassadenarbeiten
            </p>
          </div>

          <div class="text-center">
            <div class="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
              <img 
                src=""
                alt="Team Mitglied"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-1">Anna Müller</h3>
            <p class="text-brand-blue font-medium mb-2">Gesellin</p>
            <p class="text-gray-600 text-sm">
              Expertin für Innenraumgestaltung
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-brand-blue">
      <div class="section-container">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div class="font-display text-4xl md:text-5xl font-bold mb-2">20+</div>
            <div class="text-blue-100">Jahre Erfahrung</div>
          </div>
          <div>
            <div class="font-display text-4xl md:text-5xl font-bold mb-2">500+</div>
            <div class="text-blue-100">Projekte</div>
          </div>
          <div>
            <div class="font-display text-4xl md:text-5xl font-bold mb-2">100%</div>
            <div class="text-blue-100">Kundenzufriedenheit</div>
          </div>
          <div>
            <div class="font-display text-4xl md:text-5xl font-bold mb-2">24h</div>
            <div class="text-blue-100">Rückruf-Garantie</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-50">
      <div class="section-container">
        <div class="text-center">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-brand-blue mb-4">Lernen Sie uns kennen</h2>
          <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von unserer Qualität und Zuverlässigkeit. Wir freuen uns auf Ihre Anfrage!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button @click="openQuote" class="btn-primary text-lg">
              Kostenloses Angebot
            </button>
            <NuxtLink to="/kontakt" class="btn-secondary text-lg text-center">
              Kontakt aufnehmen
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Award, Users, Clock, Sparkles, Leaf, MapPin } from 'lucide-vue-next'

const openQuoteModal = inject<() => void>('openQuoteModal')
const openQuote = () => openQuoteModal?.()
</script>
