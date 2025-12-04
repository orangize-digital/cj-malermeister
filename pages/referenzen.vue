<template>
  <div class="referenzen">
    <!-- Hero Section -->
    <section class="relative h-[400px] md:h-[500px] flex items-center bg-gradient-to-r from-brand-blue to-brand-blue-light">
      <div class="section-container relative z-10">
        <h1 class="font-display text-4xl md:text-5xl font-bold text-white mb-4">Unsere Referenzen</h1>
        <p class="text-xl text-blue-100 max-w-2xl">
          Überzeugen Sie sich von der Qualität unserer Arbeit. Hier finden Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte.
        </p>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-12 bg-white border-b">
      <div class="section-container">
        <!-- Debug Info -->
        <div class="text-center mb-4 text-sm text-gray-600">
          Active Filter: {{ activeFilter }} | Showing: {{ filteredProjects.length }} projects
        </div>
        <div class="flex flex-wrap gap-3 justify-center">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="setFilter(category.id)"
            :class="[
              'px-6 py-3 rounded-xl font-medium transition-all duration-200',
              activeFilter === category.id
                ? 'bg-brand-blue text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            <component :is="category.icon" class="w-5 h-5 inline-block mr-2" />
            {{ category.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-20 bg-gray-50">
      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            @click="openLightbox(project)"
            class="group cursor-pointer"
          >
            <div class="relative h-80 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <img 
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div class="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium mb-2">
                    {{ getCategoryLabel(project.category) }}
                  </div>
                  <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
                  <p class="text-sm text-gray-200">{{ project.location }}</p>
                </div>
              </div>
              <div class="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye class="w-5 h-5 text-brand-blue" />
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="text-center py-20">
          <div class="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <ImageIcon class="w-10 h-10 text-gray-400" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Keine Projekte gefunden</h3>
          <p class="text-gray-600">Für diese Kategorie sind aktuell keine Referenzen verfügbar.</p>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <Transition name="fade">
      <div
        v-if="lightboxOpen && selectedProject"
        @click="closeLightbox"
        class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      >
        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-10"
        >
          <X class="w-6 h-6" />
        </button>

        <div @click.stop class="max-w-5xl w-full">
          <div class="relative">
            <img 
              :src="selectedProject.image"
              :alt="selectedProject.title"
              class="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
          <div class="mt-6 text-white text-center">
            <div class="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-3">
              {{ getCategoryLabel(selectedProject.category) }}
            </div>
            <h2 class="text-3xl font-display font-bold mb-2">{{ selectedProject.title }}</h2>
            <p class="text-gray-300 mb-4">{{ selectedProject.location }}</p>
            <p class="text-gray-400 max-w-2xl mx-auto">{{ selectedProject.description }}</p>
          </div>
        </div>
      </div>
    </Transition>

    <!-- CTA Section -->
    <section class="py-16 bg-brand-blue">
      <div class="section-container">
        <div class="text-center">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ihr Projekt könnte hier stehen</h2>
          <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihr nächstes Projekt realisieren. Fordern Sie jetzt Ihr kostenloses Angebot an!
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

<script setup>
import { Paintbrush, Building2, Brush, Wallpaper, Shield, Wrench, LayoutGrid, Eye, X, ImageIcon } from 'lucide-vue-next'

const openQuoteModal = inject('openQuoteModal')
const openQuote = () => openQuoteModal?.()

const activeFilter = ref('all')
const lightboxOpen = ref(false)
const selectedProject = ref(null)

const categories = [
  { id: 'all', label: 'Alle Projekte', icon: LayoutGrid },
  { id: 'innenanstrich', label: 'Innenanstrich', icon: Paintbrush },
  { id: 'fassade', label: 'Fassade', icon: Building2 },
  { id: 'lackierung', label: 'Lackierung', icon: Brush },
  { id: 'tapezieren', label: 'Tapezieren', icon: Wallpaper },
  { id: 'schimmel', label: 'Schimmel', icon: Shield },
  { id: 'spachtel', label: 'Spachtel', icon: Wrench }
]

const projects = [
  {
    id: 1,
    title: 'Moderne Wohnraumgestaltung',
    category: 'innenanstrich',
    location: 'Bad Rothenfelde, Einfamilienhaus',
    description: 'Komplette Neugestaltung eines Wohnzimmers mit hochwertigen Wandfarben in warmen Grautönen. Inklusive Deckenanstrich und Fußleisten.',
    image: '/images/hero.jpg'
  },
  {
    id: 2,
    title: 'Fassadensanierung Mehrfamilienhaus',
    category: 'fassade',
    location: 'Dissen, Mehrfamilienhaus',
    description: 'Vollständige Fassadensanierung mit Rissreparatur, Grundierung und wetterbeständigem Anstrich. Fläche: ca. 450 m².',
    image: '/images/hero.jpg'
  },
  {
    id: 3,
    title: 'Büroräume in frischem Weiß',
    category: 'innenanstrich',
    location: 'Osnabrück, Bürogebäude',
    description: 'Professioneller Anstrich von Büroräumen mit emissionsarmen Farben für ein gesundes Arbeitsklima. 8 Räume, ca. 200 m².',
    image: '/images/hero.jpg'
  },
  {
    id: 4,
    title: 'Türen & Zargen Lackierung',
    category: 'lackierung',
    location: 'Hilter, Einfamilienhaus',
    description: 'Hochwertige Lackierung von 12 Innentüren und Zargen in mattem Weiß. Perfekte Oberfläche ohne Pinselspuren.',
    image: '/images/hero.jpg'
  },
  {
    id: 5,
    title: 'Altbau-Fassade restauriert',
    category: 'fassade',
    location: 'Bad Iburg, Denkmalgeschütztes Gebäude',
    description: 'Behutsame Restaurierung einer historischen Fassade unter Berücksichtigung des Denkmalschutzes. Originalfarbtöne wiederhergestellt.',
    image: '/images/hero.jpg'
  },
  {
    id: 6,
    title: 'Designtapete im Schlafzimmer',
    category: 'tapezieren',
    location: 'Georgsmarienhütte, Privatwohnung',
    description: 'Verlegung einer hochwertigen Designtapete mit floralen Mustern. Präzise Musteranpassung für ein perfektes Gesamtbild.',
    image: '/images/hero.jpg'
  },
  {
    id: 7,
    title: 'Kinderzimmer in bunten Farben',
    category: 'innenanstrich',
    location: 'Glandorf, Einfamilienhaus',
    description: 'Fröhliche Farbgestaltung eines Kinderzimmers mit schadstofffreien Farben. Inklusive kreativer Akzentwand.',
    image: '/images/hero.jpg'
  },
  {
    id: 8,
    title: 'Schimmelentfernung Badezimmer',
    category: 'schimmel',
    location: 'Bad Laer, Wohnung',
    description: 'Professionelle Schimmelsanierung im Badezimmer mit Anti-Schimmel-Beschichtung und vorbeugenden Maßnahmen.',
    image: '/images/hero.jpg'
  },
  {
    id: 9,
    title: 'Glattspachtel Wohnzimmer',
    category: 'spachtel',
    location: 'Bad Rothenfelde, Altbauwohnung',
    description: 'Perfekt gespachtelte Wände für eine glatte Oberfläche. Vorbereitung für hochwertigen Anstrich in Altbauwohnung.',
    image: '/images/hero.jpg'
  },
  {
    id: 10,
    title: 'Gewerbefassade Neubau',
    category: 'fassade',
    location: 'Osnabrück, Bürogebäude',
    description: 'Erstanstrich der Fassade eines Neubaus im Gewerbegebiet. Moderne Farbgestaltung in Grau- und Weißtönen.',
    image: '/images/hero.jpg'
  },
  {
    id: 11,
    title: 'Treppenhaus Renovierung',
    category: 'innenanstrich',
    location: 'Dissen, Mehrfamilienhaus',
    description: 'Komplette Renovierung eines Treppenhauses über 4 Etagen. Helle, freundliche Farbgestaltung für mehr Licht.',
    image: '/images/hero.jpg'
  },
  {
    id: 12,
    title: 'Heizkörper Lackierung',
    category: 'lackierung',
    location: 'Beispielort, Privathaus',
    description: 'Professionelle Lackierung von 15 Heizkörpern in Weiß. Hitzebeständiger Speziallack für langanhaltende Schönheit.',
    image: '/images/hero.jpg'
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === activeFilter.value)
})

const setFilter = (categoryId) => {
  activeFilter.value = categoryId
}

const getCategoryLabel = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId)
  return category ? category.label : categoryId
}

const openLightbox = (project) => {
  selectedProject.value = project
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  selectedProject.value = null
  document.body.style.overflow = ''
}

// SEO
useSEO({
  title: 'Unsere Referenzen',
  description: 'Überzeugen Sie sich von der Qualität unserer Arbeit. Hier finden Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte.'
})
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

.fade-grid-move,
.fade-grid-enter-active,
.fade-grid-leave-active {
  transition: all 0.3s ease;
}

.fade-grid-enter-from,
.fade-grid-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.fade-grid-leave-active {
  position: absolute;
}
</style>
