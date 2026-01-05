<template>
  <header class="sticky top-0 z-50 bg-white shadow-md">
    <div class="section-container">
      <div class="flex items-center justify-between h-[4rem]">
        <!-- Logo -->
        <NuxtLink to="/">
          <img
            src="/images/christoph-jasek-logo.svg"
            alt="Malermeister Christoph Jasek Logo"
            class="h-12 w-auto"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/ueber-uns" class="nav-link">Über uns</NuxtLink>

          <!-- Leistungen Dropdown -->
          <div class="relative" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
            <NuxtLink to="/leistungen" class="nav-link flex items-center gap-1">
              Leistungen
              <ChevronDown class="w-4 h-4 transition-transform" :class="{ 'rotate-180': showDropdown }" />
            </NuxtLink>

            <Transition name="dropdown">
              <div
                v-if="showDropdown"
                class="absolute top-full left-1/2 -translate-x-1/2 pt-2"
              >
                <div class="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                  <NuxtLink
                    v-for="service in services"
                    :key="service.id"
                    :to="`/leistungen#${service.id}`"
                    @click="showDropdown = false"
                    class="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                  >
                    <component :is="service.icon" class="w-5 h-5 text-brand-blue" />
                    <span class="text-gray-700 hover:text-brand-blue">{{ service.label }}</span>
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>

          <NuxtLink to="/referenzen" class="nav-link">Referenzen</NuxtLink>
          <NuxtLink to="/kontakt" class="nav-link">Kontakt</NuxtLink>
        </nav>

        <!-- CTA Button -->
        <button @click="openQuote" class="hidden md:block btn-primary">
          Angebot anfordern
        </button>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-2">
          <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t">
        <nav class="section-container py-4 flex flex-col space-y-3">
          <NuxtLink to="/" class="mobile-nav-link" @click="mobileMenuOpen = false">Home</NuxtLink>
          <NuxtLink to="/ueber-uns" class="mobile-nav-link" @click="mobileMenuOpen = false">Über uns</NuxtLink>

          <!-- Mobile Leistungen with sub-items -->
          <div>
            <button
              @click="mobileLeistungenOpen = !mobileLeistungenOpen"
              class="mobile-nav-link w-full flex items-center justify-between"
            >
              <span>Leistungen</span>
              <ChevronDown class="w-4 h-4 transition-transform" :class="{ 'rotate-180': mobileLeistungenOpen }" />
            </button>
            <Transition name="slide">
              <div v-if="mobileLeistungenOpen" class="pl-4 mt-2 space-y-2 border-l-2 border-brand-blue/20">
                <NuxtLink
                  v-for="service in services"
                  :key="service.id"
                  :to="`/leistungen#${service.id}`"
                  @click="mobileMenuOpen = false; mobileLeistungenOpen = false"
                  class="flex items-center gap-2 py-1.5 text-gray-600 hover:text-brand-blue transition-colors text-sm"
                >
                  <component :is="service.icon" class="w-4 h-4" />
                  <span>{{ service.label }}</span>
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <NuxtLink to="/referenzen" class="mobile-nav-link" @click="mobileMenuOpen = false">Referenzen</NuxtLink>
          <NuxtLink to="/kontakt" class="mobile-nav-link" @click="mobileMenuOpen = false">Kontakt</NuxtLink>
          <button @click="openQuote" class="btn-primary w-full mt-4">Angebot anfordern</button>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { Menu, X, ChevronDown, Paintbrush, Building2, Brush, Wallpaper, Shield, Wrench, Layers, Thermometer, SquareStack } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)
const mobileLeistungenOpen = ref(false)
const showDropdown = ref(false)
const openQuoteModal = inject('openQuoteModal')

const services = [
  { id: 'innenanstrich', label: 'Innenanstrich', icon: Paintbrush },
  { id: 'fassade', label: 'Fassadenarbeiten', icon: Building2 },
  { id: 'lackierung', label: 'Lackierungen', icon: Brush },
  { id: 'tapezieren', label: 'Tapezierarbeiten', icon: Wallpaper },
  { id: 'schimmel', label: 'Schimmelbehandlung', icon: Shield },
  { id: 'spachtel', label: 'Spachtel-/Putztechniken', icon: Wrench },
  { id: 'trockenbau', label: 'Trockenbau', icon: Layers },
  { id: 'waermedaemmung', label: 'Wärmedämmung', icon: Thermometer },
  { id: 'bodenbelaege', label: 'Bodenbeläge', icon: SquareStack }
]

const openQuote = () => {
  mobileMenuOpen.value = false
  openQuoteModal?.()
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-brand-blue font-medium transition-colors duration-200 relative;
}

.nav-link.router-link-active {
  @apply text-brand-blue;
}

.nav-link.router-link-active::after {
  content: '';
  @apply absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-blue;
}

.mobile-nav-link {
  @apply text-gray-700 hover:text-brand-blue font-medium py-2 transition-colors duration-200;
}

.mobile-nav-link.router-link-active {
  @apply text-brand-blue font-semibold;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
