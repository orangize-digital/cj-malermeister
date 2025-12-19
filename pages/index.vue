<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="relative h-[85vh] md:h-[85vh] flex items-center">
      <!-- Background Video with Overlay -->
      <div class="absolute inset-0">
        <video
          autoplay
          muted
          loop
          playsinline
          class="w-full h-full object-cover"
        >
          <source src="/images/hero/hero-compressed.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/70 to-transparent"></div>
      </div>

      <!-- Content -->
      <div class="section-container relative z-10">
        <div class="max-w-3xl">
          <!-- Badge -->
          <div class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Award class="w-5 h-5 text-white" />
            <span class="text-white text-sm font-medium">Meisterqualität im Malerhandwerk</span>
          </div>

          <!-- Heading -->
          <h1 class="font-display text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            Präzision & Qualität im Malerhandwerk
          </h1>
          <p class="text-xl text-gray-200 mb-8 text-pretty">
            Innen- & Außenanstriche, Fassaden, Lackierungen, Tapezierarbeiten – vom Aufmaß bis zur Abnahme.
          </p>

          <!-- Badges -->
          <div class="flex flex-wrap gap-4 mb-4">
            <div class="badge">
              <CheckCircle2 class="w-5 h-5" />
              <span>Meisterbetrieb</span>
            </div>
            <div class="badge">
              <Wind class="w-5 h-5" />
              <span>Staubarm</span>
            </div>
            <div class="badge">
              <Sparkles class="w-5 h-5" />
              <span>Sauber-Garantie</span>
            </div>
          </div>
          <!-- TÜV Badge -->
          <div class="inline-flex items-center space-x-2 bg-brand-gold text-brand-blue-dark font-semibold rounded-full px-5 py-2.5 mb-8 shadow-lg">
            <ShieldCheck class="w-5 h-5" />
            <span>TÜV-geprüfter Schimmelgutachter</span>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button @click="openQuote" class="btn-primary text-lg">
              Angebot anfordern
            </button>
            <NuxtLink to="/referenzen" class="btn-secondary text-white text-lg text-center">
              Projekte ansehen
            </NuxtLink>
          </div>

          <!-- Scroll Indicator -->
          <div class="mt-12 flex items-center space-x-2 text-white/80">
            <ChevronDown class="w-5 h-5 animate-bounce" />
            <span class="text-sm">Mehr entdecken</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="py-20 bg-gray-50">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-brand-blue mb-4">Unsere Leistungen</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Von der Beratung bis zur Abnahme – wir bieten Ihnen professionelle Malerarbeiten für jeden Bedarf.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            v-for="service in services"
            :key="service.title"
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
            :link="service.link"
          />
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="relative py-20 overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0">
        <img 
          src="/images/team-background.jpg"
          alt="Unser Team"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-brand-blue-dark/90 mix-blend-multiply"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-brand-blue/50 to-brand-blue-dark/70 mix-blend-overlay"></div>
      </div>

      <!-- Content -->
      <div class="section-container relative z-10">
        <StatsSection 
          title="Die Mannschaft für Ihr Meisterwerk"
          subtitle="Gemeinsam stark"
          :stats="stats"
        />
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-brand-blue mb-4">Unser Prozess</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            In vier einfachen Schritten zu Ihrem perfekten Ergebnis.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep
            v-for="(step, index) in processSteps"
            :key="step.title"
            :number="index + 1"
            :icon="step.icon"
            :title="step.title"
            :description="step.description"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-brand-blue">
      <div class="section-container">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="text-white">
            <h2 class="font-display text-3xl font-bold mb-2">Bereit für Ihr Projekt?</h2>
            <p class="text-blue-100 text-lg">Fordern Sie jetzt Ihr kostenloses Angebot an.</p>
            <p class="text-blue-200 text-sm mt-2 flex items-center space-x-2">
              <Clock class="w-4 h-4" />
              <span>24h Rückruf-Garantie</span>
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <button @click="openQuote" class="bg-white text-brand-blue hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg">
              Kostenloses Angebot
            </button>
            <a href="tel:+4917622585100" class="border-2 border-white text-white hover:bg-white hover:text-brand-blue font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-center">
              Jetzt anrufen
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Award, CheckCircle2, Wind, Sparkles, ChevronDown, Clock, Paintbrush, Building2, Brush, Wallpaper, Shield, Wrench, MessageSquare, ClipboardCheck, Hammer, CheckCircle, ShieldCheck } from 'lucide-vue-next'
import ServiceCard from '../components/ServiceCard.vue'
import ProcessStep from '../components/ProcessStep.vue'
import StatsSection from '../components/StatsSection.vue'

// SEO Meta Tags
useSEO({
  title: 'Malermeister Christoph Jasek - Meisterqualität im Malerhandwerk',
  description: 'Professionelle Malerarbeiten für Innen & Außen. Fassaden, Lackierungen, Tapezierarbeiten vom Meisterbetrieb. Meisterqualität seit 2019. Jetzt kostenloses Angebot anfordern!',
  keywords: 'Malermeister, Maler, Innenanstrich, Außenanstrich, Fassade, Lackierung, Tapezieren, Meisterbetrieb',
  url: '/'
})

const openQuoteModal = inject<() => void>('openQuoteModal')
const openQuote = () => openQuoteModal?.()

const stats = [
  { value: '2019', label: 'Meistertitel' },
  { value: '3', label: 'Team-Mitglieder' },
  { value: '100%', label: 'Kundenzufriedenheit' },
  { value: '24h', label: 'Rückruf-Garantie' }
]

const services = [
  {
    icon: Paintbrush,
    title: 'Innenanstrich',
    description: 'Professionelle Wandgestaltung für Wohn- und Geschäftsräume mit hochwertigen Farben.',
    link: '/leistungen#innenanstrich'
  },
  {
    icon: Building2,
    title: 'Fassadenarbeiten',
    description: 'Fassadensanierung und -anstrich für langanhaltenden Schutz und ansprechende Optik.',
    link: '/leistungen#fassade'
  },
  {
    icon: Brush,
    title: 'Lackierungen',
    description: 'Hochwertige Lackierarbeiten für Türen, Fenster, Möbel und mehr.',
    link: '/leistungen#lackierung'
  },
  {
    icon: Wallpaper,
    title: 'Tapezierarbeiten',
    description: 'Fachgerechtes Tapezieren mit verschiedenen Materialien und Mustern.',
    link: '/leistungen#tapezieren'
  },
  {
    icon: Shield,
    title: 'Schimmelbehandlung',
    description: 'Professionelle Schimmelentfernung und vorbeugende Maßnahmen.',
    link: '/leistungen#schimmel'
  },
  {
    icon: Wrench,
    title: 'Spachtel-/Putztechniken',
    description: 'Glatte Oberflächen und kreative Strukturen für individuelle Gestaltung.',
    link: '/leistungen#spachtel'
  }
]

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Beratung',
    description: 'Kostenlose Erstberatung und Besichtigung vor Ort.'
  },
  {
    icon: ClipboardCheck,
    title: 'Aufmaß',
    description: 'Präzise Vermessung und detailliertes Angebot.'
  },
  {
    icon: Hammer,
    title: 'Ausführung',
    description: 'Professionelle Umsetzung durch erfahrene Maler.'
  },
  {
    icon: CheckCircle,
    title: 'Abnahme',
    description: 'Gemeinsame Endabnahme und Qualitätskontrolle.'
  }
]
</script>

<style scoped>
.badge {
  @apply inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white text-sm font-medium;
}
</style>
