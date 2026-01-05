<template>
  <div class="leistungen">
    <!-- Hero Section -->
    <section class="relative h-[400px] md:h-[500px] flex items-center bg-gradient-to-r from-brand-blue to-brand-blue-light">
      <div class="section-container relative z-10">
        <h1 class="font-display text-4xl md:text-5xl font-bold text-white mb-4">Unsere Leistungen</h1>
        <p class="text-xl text-blue-100 max-w-2xl">
          Professionelle Malerarbeiten für Privat- und Gewerbekunden – von der Beratung bis zur Abnahme.
        </p>
      </div>
    </section>

    <!-- Services Detail Sections -->
    <section id="innenanstrich" class="py-20 bg-white">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center space-x-2 bg-brand-blue/10 rounded-full px-4 py-2 mb-4">
              <Paintbrush class="w-5 h-5 text-brand-blue" />
              <span class="text-brand-blue font-medium">Innenanstrich</span>
            </div>
            <h2 class="font-display text-3xl md:text-4xl font-bold text-brand-blue mb-6">Innenanstrich & Wandgestaltung</h2>
            <p class="text-lg text-gray-600 mb-6">
              Verleihen Sie Ihren Räumen neuen Glanz mit professionellen Innenanstrichen. Wir verwenden hochwertige, 
              emissionsarme Farben für ein gesundes Raumklima.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Wände & Decken in Wohn- und Geschäftsräumen</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Farbberatung und individuelle Farbkonzepte</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Staubarmes Arbeiten mit Sauber-Garantie</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Umweltfreundliche, lösemittelfreie Farben</span>
              </li>
            </ul>
            <button @click="openQuote" class="btn-primary">Angebot anfordern</button>
          </div>
          <div class="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/work/image00070.jpeg"
              alt="Innenanstrich Beispiel"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="fassade" class="py-20 bg-gray-50">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/work/image00014.jpeg"
              alt="Fassadenarbeiten Beispiel"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="order-1 lg:order-2">
            <div class="inline-flex items-center space-x-2 bg-brand-blue/10 rounded-full px-4 py-2 mb-4">
              <Building2 class="w-5 h-5 text-brand-blue" />
              <span class="text-brand-blue font-medium">Fassadenarbeiten</span>
            </div>
            <h2 class="font-display text-3xl md:text-4xl font-bold text-brand-blue mb-6">Fassadensanierung & -anstrich</h2>
            <p class="text-lg text-gray-600 mb-6">
              Schützen Sie Ihr Gebäude vor Witterungseinflüssen und verleihen Sie ihm ein frisches Aussehen. 
              Unsere Fassadenarbeiten vereinen Ästhetik und langanhaltenden Schutz.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Fassadenanstrich für Wohn- und Gewerbegebäude</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Rissesanierung und Untergrundvorbereitung</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Wärmedämmverbundsysteme (WDVS)</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Wetterbeständige Beschichtungen</span>
              </li>
            </ul>
            <button @click="openQuote" class="btn-primary">Angebot anfordern</button>
          </div>
        </div>
      </div>
    </section>

    <section id="lackierung" class="py-20 bg-white">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center space-x-2 bg-brand-blue/10 rounded-full px-4 py-2 mb-4">
              <Brush class="w-5 h-5 text-brand-blue" />
              <span class="text-brand-blue font-medium">Lackierungen</span>
            </div>
            <h2 class="font-display text-3xl md:text-4xl font-bold text-brand-blue mb-6">Hochwertige Lackierarbeiten</h2>
            <p class="text-lg text-gray-600 mb-6">
              Perfekte Oberflächen für Türen, Fenster, Möbel und mehr. Unsere Lackierungen sind nicht nur schön, 
              sondern auch langlebig und pflegeleicht.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Türen, Fenster und Zargen</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Heizkörper und Metallteile</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Möbel und Einbauten</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Verschiedene Lackarten (Acryl, Kunstharz, etc.)</span>
              </li>
            </ul>
            <button @click="openQuote" class="btn-primary">Angebot anfordern</button>
          </div>
          <div class="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/work/Lackierarbeiten.jpeg"
              alt="Lackierarbeiten Beispiel"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="tapezieren" class="py-20 bg-gray-50">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/work/image00017.jpeg"
              alt="Tapezierarbeiten Beispiel"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="order-1 lg:order-2">
            <div class="inline-flex items-center space-x-2 bg-brand-blue/10 rounded-full px-4 py-2 mb-4">
              <Wallpaper class="w-5 h-5 text-brand-blue" />
              <span class="text-brand-blue font-medium">Tapezierarbeiten</span>
            </div>
            <h2 class="font-display text-3xl md:text-4xl font-bold text-brand-blue mb-6">Professionelles Tapezieren</h2>
            <p class="text-lg text-gray-600 mb-6">
              Von klassischen Mustertapeten bis zu modernen Vliestapeten – wir bringen Ihre Wände zum Leben. 
              Fachgerechte Verarbeitung für ein perfektes Ergebnis.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Raufaser-, Vlies- und Mustertapeten</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Fototapeten und Designtapeten</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Untergrundvorbereitung und Altbelagsentfernung</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Präzise Musteranpassung</span>
              </li>
            </ul>
            <button @click="openQuote" class="btn-primary">Angebot anfordern</button>
          </div>
        </div>
      </div>
    </section>

    <section id="schimmel" class="py-20 bg-white">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center space-x-2 bg-brand-blue/10 rounded-full px-4 py-2 mb-4">
              <Shield class="w-5 h-5 text-brand-blue" />
              <span class="text-brand-blue font-medium">Schimmelbehandlung</span>
            </div>
            <h2 class="font-display text-3xl md:text-4xl font-bold text-brand-blue mb-6">Schimmelentfernung & Prävention</h2>
            <p class="text-lg text-gray-600 mb-6">
              Schimmel ist nicht nur unschön, sondern auch gesundheitsschädlich. Wir entfernen Schimmel fachgerecht 
              und ergreifen vorbeugende Maßnahmen für ein gesundes Raumklima.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Professionelle Schimmelentfernung</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Ursachenanalyse und Beratung</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Anti-Schimmel-Beschichtungen</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Langfristiger Schutz</span>
              </li>
            </ul>
            <button @click="openQuote" class="btn-primary">Angebot anfordern</button>
          </div>
          <div class="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/work/image00075.jpeg"
              alt="Schimmelbehandlung Beispiel"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="spachtel" class="py-20 bg-gray-50">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/work/image00061.jpeg"
              alt="Spachtelarbeiten Beispiel"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="order-1 lg:order-2">
            <div class="inline-flex items-center space-x-2 bg-brand-blue/10 rounded-full px-4 py-2 mb-4">
              <Wrench class="w-5 h-5 text-brand-blue" />
              <span class="text-brand-blue font-medium">Spachtel-/Putztechniken</span>
            </div>
            <h2 class="font-display text-3xl md:text-4xl font-bold text-brand-blue mb-6">Spachtel- & Putztechniken</h2>
            <p class="text-lg text-gray-600 mb-6">
              Perfekte Oberflächen sind die Grundlage für ein schönes Endergebnis. Mit verschiedenen Spachtel- und 
              Putztechniken schaffen wir glatte oder strukturierte Wände nach Ihren Wünschen.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Glättspachtel für perfekte Oberflächen</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Dekorative Strukturputze</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Reparatur von Rissen und Löchern</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Vorbereitung für Anstrich oder Tapete</span>
              </li>
            </ul>
            <button @click="openQuote" class="btn-primary">Angebot anfordern</button>
          </div>
        </div>
      </div>
    </section>

    <section id="trockenbau" class="py-20 bg-white">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center space-x-2 bg-brand-blue/10 rounded-full px-4 py-2 mb-4">
              <Layers class="w-5 h-5 text-brand-blue" />
              <span class="text-brand-blue font-medium">Trockenbau</span>
            </div>
            <h2 class="font-display text-3xl md:text-4xl font-bold text-brand-blue mb-6">Trockenbauarbeiten</h2>
            <p class="text-lg text-gray-600 mb-6">
              Flexible Raumgestaltung mit professionellem Trockenbau. Ob Trennwände, abgehängte Decken oder
              Dachausbau – wir setzen Ihre Ideen fachgerecht um.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Trennwände und Raumteiler</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Abgehängte Decken und Deckensysteme</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Dachgeschossausbau</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Akustik- und Brandschutzlösungen</span>
              </li>
            </ul>
            <button @click="openQuote" class="btn-primary">Angebot anfordern</button>
          </div>
          <div class="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/work/image00067.jpeg"
              alt="Trockenbau Beispiel"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="waermedaemmung" class="py-20 bg-gray-50">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-brand-blue/10 flex items-center justify-center">
            <div class="text-center p-8">
              <Thermometer class="w-20 h-20 text-brand-blue/30 mx-auto mb-4" />
              <p class="text-brand-blue/50 font-medium">Projektbilder folgen</p>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <div class="inline-flex items-center space-x-2 bg-brand-blue/10 rounded-full px-4 py-2 mb-4">
              <Thermometer class="w-5 h-5 text-brand-blue" />
              <span class="text-brand-blue font-medium">Wärmedämmung</span>
            </div>
            <h2 class="font-display text-3xl md:text-4xl font-bold text-brand-blue mb-6">Wärmedämmung & Energieeffizienz</h2>
            <p class="text-lg text-gray-600 mb-6">
              Senken Sie Ihre Energiekosten und verbessern Sie das Wohnklima mit professioneller Wärmedämmung.
              Wir beraten Sie zu den besten Lösungen für Ihr Gebäude.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Wärmedämmverbundsysteme (WDVS)</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Innendämmung für Altbauten</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Dachdämmung und Kellerdeckendämmung</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Energieberatung und Fördermittelberatung</span>
              </li>
            </ul>
            <button @click="openQuote" class="btn-primary">Angebot anfordern</button>
          </div>
        </div>
      </div>
    </section>

    <section id="bodenbelaege" class="py-20 bg-white">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center space-x-2 bg-brand-blue/10 rounded-full px-4 py-2 mb-4">
              <SquareStack class="w-5 h-5 text-brand-blue" />
              <span class="text-brand-blue font-medium">Bodenbeläge</span>
            </div>
            <h2 class="font-display text-3xl md:text-4xl font-bold text-brand-blue mb-6">Bodenbeläge & Verlegung</h2>
            <p class="text-lg text-gray-600 mb-6">
              Der richtige Bodenbelag macht jeden Raum perfekt. Wir verlegen verschiedene Bodenbeläge
              fachgerecht und sorgen für ein langlebiges Ergebnis.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Laminat und Vinyl</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Teppichböden</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Designböden und PVC</span>
              </li>
              <li class="flex items-start space-x-3">
                <CheckCircle2 class="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Untergrundvorbereitung und Ausgleich</span>
              </li>
            </ul>
            <button @click="openQuote" class="btn-primary">Angebot anfordern</button>
          </div>
          <div class="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/work/image00059.jpeg"
              alt="Bodenbeläge Beispiel"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-brand-blue">
      <div class="section-container">
        <div class="text-center">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">Bereit für Ihr Projekt?</h2>
          <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Fordern Sie jetzt Ihr kostenloses und unverbindliches Angebot an. Wir beraten Sie gerne!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button @click="openQuote" class="bg-white text-brand-blue hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg">
              Kostenloses Angebot
            </button>
            <NuxtLink to="/kontakt" class="border-2 border-white text-white hover:bg-white hover:text-brand-blue font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-center">
              Kontakt aufnehmen
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Paintbrush, Building2, Brush, Wallpaper, Shield, Wrench, CheckCircle2, Layers, Thermometer, SquareStack } from 'lucide-vue-next'

// SEO Meta Tags
useSEO({
  title: 'Leistungen',
  description: 'Professionelle Malerarbeiten: Innenanstrich, Fassaden, Lackierungen, Tapezierarbeiten, Schimmelbehandlung, Spachteltechniken, Trockenbau, Wärmedämmung & Bodenbeläge. Meisterqualität für Privat- und Gewerbekunden.',
  keywords: 'Malerarbeiten, Innenanstrich, Fassadenanstrich, Lackierung, Tapezieren, Schimmelbehandlung, Spachteltechnik, Trockenbau, Wärmedämmung, Bodenbeläge',
  url: '/leistungen'
})

const openQuoteModal = inject<() => void>('openQuoteModal')
const openQuote = () => openQuoteModal?.()
</script>
