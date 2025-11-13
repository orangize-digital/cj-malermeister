# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Nuxt 3** application for "Malermeister Christoph Jasek", a German painting/masonry business website. The site is built with Vue 3 using the Composition API (`<script setup>`), Nuxt's file-based routing, and Tailwind CSS for styling.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000 or 3001 if 3000 is in use)
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate

# Preview production build
npm run preview
```

**Important**: Just run `npm run dev` - Nuxt automatically handles both frontend and backend (server API routes) in a single process.

## Project Architecture

### Tech Stack
- **Nuxt 3** (full-stack framework with Vue 3)
- **Vue 3** with Composition API (`<script setup>`)
- **Nuxt file-based routing** (pages/ directory)
- **Nuxt server routes** (server/api/ directory for backend endpoints)
- **Tailwind CSS** via `@nuxtjs/tailwindcss` module
- **lucide-vue-next** for icons

### Directory Structure

```
pages/              # File-based routing - each .vue file becomes a route
├── index.vue       # Home page (/)
├── kontakt.vue     # Contact page (/kontakt)
├── ueber-uns.vue   # About page (/ueber-uns)
└── ...

components/         # Auto-imported Vue components
├── Header.vue
├── Footer.vue
├── QuoteModal.vue
└── ...

composables/        # Auto-imported composables
└── useSEO.js       # SEO helper using Nuxt's useHead

server/
└── api/
    └── contact.post.ts  # POST /api/contact endpoint

public/
├── images/         # Static images
└── robots.txt      # Search engine directives

assets/
└── css/
    └── main.css    # Global CSS with Tailwind directives

app.vue             # Root component wrapper
nuxt.config.ts      # Nuxt configuration
tailwind.config.js  # Tailwind theme configuration
```

### Key Architectural Patterns

#### 1. File-Based Routing
Nuxt automatically creates routes from the `pages/` directory:
- `pages/index.vue` → `/`
- `pages/kontakt.vue` → `/kontakt`
- `pages/ueber-uns.vue` → `/ueber-uns`

No need for manual router configuration!

#### 2. Auto-Imports
Nuxt auto-imports:
- Vue APIs (`ref`, `computed`, `inject`, etc.) - no need to import from 'vue'
- Nuxt composables (`useHead`, `useFetch`, `navigateTo`, etc.)
- Components from `components/` directory
- Composables from `composables/` directory
- `NuxtLink` for navigation (replaces `RouterLink`)

#### 3. Server API Routes
The `server/api/` directory contains backend endpoints:
- `server/api/contact.post.ts` handles POST requests to `/api/contact`
- These run on the server side (Nitro server)
- In development, they run alongside the dev server
- On Netlify, they become serverless functions automatically

#### 4. Global Modal Management
The application uses Vue's `provide/inject` pattern:
- `app.vue` provides an `openQuoteModal` function
- Components can inject this to trigger the quote modal
- The `QuoteModal` component is conditionally rendered in `app.vue`

#### 5. SEO Strategy
- **useSEO composable** (`composables/useSEO.js`): Uses Nuxt's built-in `useHead()` for meta tags
- **app.vue**: Sets default titleTemplate for all pages
- Each page calls `useSEO()` with specific metadata

### Brand Styling

Custom Tailwind theme colors defined in `tailwind.config.js`:
- `brand-blue-light`: #4A90E2
- `brand-blue`: #2C5F8D (default)
- `brand-blue-dark`: #1A3A52
- `brand-gold`: #D4AF37

Font families:
- `font-sans`: Inter (body text)
- `font-display`: Playfair Display (headings)

Custom component classes:
- `.btn-primary`: Primary button styling
- `.btn-secondary`: Secondary button styling
- `.section-container`: Max-width container with responsive padding

### Form Submissions & Email Service

The application includes two forms that send emails via an external service:
1. **Contact Form** (`pages/kontakt.vue`): General inquiries
2. **Quote Modal** (`components/QuoteModal.vue`): Quote requests

**Email Flow**:
- Forms submit to `/api/contact` endpoint via `fetch()`
- `server/api/contact.post.ts` receives the request
- Server forwards email to `https://www.joshevski.com/v1/send`
- API key: `pk_Nwcl5UAKdc8BU9kr3ZBxUA`
- Emails sent to: `naumchedev@gmail.com`

**For Netlify**: This works out of the box! Netlify automatically converts `server/api/` routes into serverless functions.

### Deployment to Netlify

1. Build command: `npm run generate` (for static site + serverless functions)
2. Publish directory: `.output/public`
3. Netlify automatically detects Nuxt and handles serverless functions from `server/api/`

### Important Notes

1. **Language**: All content is in German (website for German market)
2. **Routes**: All routes use German names (e.g., `/ueber-uns`, `/leistungen`)
3. **No TypeScript compilation**: Files use `lang="ts"` but no strict type checking is configured
4. **Domain**: Production domain is `https://malermeister-jasek.de` (referenced in sitemap script)
5. **Not a Git repository**: This project is not tracked with Git
6. **Auto-imports**: Most Vue/Nuxt APIs don't need explicit imports - they're auto-imported
