<template>
  <div class="faq">
    <!-- Hero Section -->
    <section class="relative h-[400px] flex items-center bg-gradient-to-r from-brand-blue to-brand-blue-light">
      <div class="section-container relative z-10">
        <h1 class="font-display text-4xl md:text-5xl font-bold text-white mb-4">Häufig gestellte Fragen</h1>
        <p class="text-xl text-blue-100 max-w-2xl">
          Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zu unseren Leistungen.
        </p>
      </div>
    </section>

    <!-- FAQ Content -->
    <section class="py-20 bg-gray-50">
      <div class="section-container max-w-4xl">
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900 pr-4">{{ faq.question }}</span>
              <ChevronDown
                :class="['w-5 h-5 text-brand-blue flex-shrink-0 transition-transform duration-200', openFaq === index ? 'rotate-180' : '']"
              />
            </button>
            <Transition name="accordion">
              <div v-show="openFaq === index" class="px-6 pb-5">
                <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Still have questions CTA -->
        <div class="mt-12 bg-white p-8 rounded-xl shadow-md text-center">
          <h3 class="font-display text-2xl font-bold text-brand-blue mb-3">Noch Fragen?</h3>
          <p class="text-gray-600 mb-6">
            Wir helfen Ihnen gerne weiter. Kontaktieren Sie uns für eine persönliche Beratung.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/kontakt" class="btn-primary">
              Kontakt aufnehmen
            </NuxtLink>
            <button @click="openQuote" class="btn-secondary">
              Angebot anfordern
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const openQuoteModal = inject<() => void>('openQuoteModal')
const openQuote = () => openQuoteModal?.()

const openFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}

const faqs = [
  {
    question: 'Wie lange dauert ein typisches Maler-Projekt?',
    answer: 'Die Dauer hängt vom Umfang des Projekts ab. Ein einzelnes Zimmer (ca. 20 m²) können wir in der Regel in 1-2 Tagen streichen. Größere Projekte wie Fassadenanstriche oder komplette Wohnungen benötigen entsprechend mehr Zeit. Nach der Besichtigung geben wir Ihnen einen genauen Zeitplan.'
  },
  {
    question: 'Muss ich die Möbel selbst ausräumen?',
    answer: 'Nein, das ist nicht zwingend notwendig. Wir können die Möbel für Sie abdecken und schützen. Wenn Sie die Möbel jedoch in die Raummitte rücken oder kleinere Gegenstände entfernen können, erleichtert das unsere Arbeit und spart Zeit.'
  },
  {
    question: 'Welche Farben verwenden Sie?',
    answer: 'Wir arbeiten ausschließlich mit hochwertigen, emissionsarmen Farben namhafter Hersteller. Auf Wunsch verwenden wir auch ökologische Farben auf Naturharzbasis. Bei der Farbauswahl beraten wir Sie gerne und erstellen auf Wunsch ein individuelles Farbkonzept.'
  },
  {
    question: 'Wie viel kostet ein Malerauftrag?',
    answer: 'Die Kosten variieren je nach Projektumfang, Raumgröße, gewünschter Leistung und verwendeten Materialien. Nach einer kostenlosen Besichtigung erstellen wir Ihnen ein detailliertes, transparentes Angebot. Durchschnittlich liegen die Kosten für einen Innenanstrich bei 15-30 € pro m².'
  },
  {
    question: 'Bieten Sie auch Notdienste an?',
    answer: 'Für dringende Fälle wie Wasserschäden oder akute Schimmelprobleme bieten wir einen Notdienst an. Kontaktieren Sie uns telefonisch, und wir besprechen die Möglichkeiten für einen schnellen Einsatz.'
  },
  {
    question: 'Wie weit ist Ihr Einsatzgebiet?',
    answer: 'Unser Haupteinsatzgebiet ist Musterstadt und Umgebung (ca. 50 km Radius). Für größere Projekte kommen wir auch gerne weiter. Kontaktieren Sie uns einfach, und wir klären, ob wir Ihr Projekt übernehmen können.'
  },
  {
    question: 'Gibt es eine Garantie auf Ihre Arbeiten?',
    answer: 'Ja, wir gewähren auf alle unsere Arbeiten eine Gewährleistung gemäß den gesetzlichen Bestimmungen (in der Regel 2 Jahre für Privataufträge, 5 Jahre für Gewerbe). Bei Verwendung spezieller Produkte können auch längere Garantiezeiten gelten.'
  },
  {
    question: 'Kann ich während der Arbeiten in der Wohnung bleiben?',
    answer: 'Grundsätzlich ja. Wir arbeiten staubarm und sauber. Allerdings sollten Sie bedenken, dass frisch gestrichene Räume gelüftet werden müssen und einen gewissen Geruch haben können. Bei größeren Projekten empfehlen wir, vorübergehend auszuweichen.'
  },
  {
    question: 'Wie bereiten Sie den Untergrund vor?',
    answer: 'Eine gründliche Untergrundvorbereitung ist entscheidend für ein perfektes Ergebnis. Wir reinigen die Flächen, bessern Risse und Löcher aus, schleifen bei Bedarf und grundieren den Untergrund. Alle Vorarbeiten sind in unserem Angebot enthalten.'
  },
  {
    question: 'Bieten Sie auch Farbberatung an?',
    answer: 'Ja, eine professionelle Farbberatung gehört zu unserem Service. Wir helfen Ihnen bei der Auswahl der richtigen Farbtöne, die zu Ihrem Einrichtungsstil passen und die gewünschte Atmosphäre schaffen. Auf Wunsch erstellen wir auch Farbkonzepte für mehrere Räume.'
  }
]
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
