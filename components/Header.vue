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
          <NuxtLink to="/leistungen" class="nav-link">Leistungen</NuxtLink>
          <NuxtLink to="/referenzen" class="nav-link">Referenzen</NuxtLink>
          <NuxtLink to="/faq" class="nav-link">FAQ</NuxtLink>
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
          <NuxtLink to="/leistungen" class="mobile-nav-link" @click="mobileMenuOpen = false">Leistungen</NuxtLink>
          <NuxtLink to="/referenzen" class="mobile-nav-link" @click="mobileMenuOpen = false">Referenzen</NuxtLink>
          <NuxtLink to="/faq" class="mobile-nav-link" @click="mobileMenuOpen = false">FAQ</NuxtLink>
          <NuxtLink to="/kontakt" class="mobile-nav-link" @click="mobileMenuOpen = false">Kontakt</NuxtLink>
          <button @click="openQuote" class="btn-primary w-full mt-4">Angebot anfordern</button>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { Menu, X } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)
const openQuoteModal = inject('openQuoteModal')

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
</style>
