import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configure your domain and routes
const DOMAIN = 'https://malermeister-jasek.de'
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/ueber-uns', priority: '0.8', changefreq: 'monthly' },
  { path: '/leistungen', priority: '0.9', changefreq: 'monthly' },
  { path: '/referenzen', priority: '0.8', changefreq: 'weekly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/kontakt', priority: '0.9', changefreq: 'monthly' },
  { path: '/impressum', priority: '0.3', changefreq: 'yearly' },
  { path: '/datenschutz', priority: '0.3', changefreq: 'yearly' }
]

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0]
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  
  routes.forEach(route => {
    sitemap += '  <url>\n'
    sitemap += `    <loc>${DOMAIN}${route.path}</loc>\n`
    sitemap += `    <lastmod>${today}</lastmod>\n`
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`
    sitemap += `    <priority>${route.priority}</priority>\n`
    sitemap += '  </url>\n'
  })
  
  sitemap += '</urlset>'
  
  return sitemap
}

function saveSitemap() {
  const sitemap = generateSitemap()
  const publicDir = path.resolve(__dirname, '../public')
  
  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  
  const sitemapPath = path.join(publicDir, 'sitemap.xml')
  fs.writeFileSync(sitemapPath, sitemap, 'utf-8')
  
  console.log('✅ Sitemap generated successfully at:', sitemapPath)
}

// Run the generator
saveSitemap()
