<template>
  <footer class="bg-brand-blue-dark text-white">
    <div class="section-container py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Company Info -->
        <div>
          <img
            src="/images/christoph-jasek-logo.svg"
            alt="Malermeister Christoph Jasek Logo"
            class="h-10 w-auto brightness-0 invert mb-4"
          />
          <p class="text-gray-300 text-sm">
            Meisterqualität im Malerhandwerk seit über 20 Jahren.
          </p>
        </div>
        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Schnellzugriff</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-300 hover:text-white transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/ueber-uns" class="text-gray-300 hover:text-white transition-colors">Über uns</NuxtLink></li>
            <li><NuxtLink to="/leistungen" class="text-gray-300 hover:text-white transition-colors">Leistungen</NuxtLink></li>
            <li><NuxtLink to="/referenzen" class="text-gray-300 hover:text-white transition-colors">Referenzen</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Kontakt</h3>
          <ul class="space-y-3 text-gray-300 text-sm">
            <li class="flex items-start space-x-2">
              <MapPin class="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Musterstraße 123<br>12345 Musterstadt</span>
            </li>
            <li class="flex items-center space-x-2">
              <Phone class="w-5 h-5 flex-shrink-0" />
              <a href="tel:+491234567890" class="hover:text-white transition-colors">+49 123 456 7890</a>
            </li>
            <li class="flex items-center space-x-2">
              <Mail class="w-5 h-5 flex-shrink-0" />
              <a href="mailto:info@malermeister-jasek.de" class="hover:text-white transition-colors">info@malermeister-jasek.de</a>
            </li>
          </ul>
        </div>

        <!-- Opening Hours -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Öffnungszeiten</h3>
          <ul class="space-y-2 text-gray-300 text-sm">
            <li class="flex justify-between">
              <span>Mo - Fr:</span>
              <span class="font-medium">07:00 - 18:00</span>
            </li>
            <li class="flex justify-between">
              <span>Sa:</span>
              <span class="font-medium">09:00 - 14:00</span>
            </li>
            <li class="flex justify-between">
              <span>So:</span>
              <span class="font-medium">Geschlossen</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p class="text-gray-400 text-sm">
          © {{ new Date().getFullYear() }} Malermeister Christoph Jasek. Alle Rechte vorbehalten.
        </p>
        <div class="flex space-x-6 text-sm">
          <NuxtLink to="/impressum" class="text-gray-400 hover:text-white transition-colors">Impressum</NuxtLink>
          <NuxtLink to="/datenschutz" class="text-gray-400 hover:text-white transition-colors">Datenschutz</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { MapPin, Phone, Mail } from 'lucide-vue-next'
</script>
