export function useSEO(options = {}) {
  const {
    title = 'Malermeister Christoph Jasek',
    description = 'Meisterqualität im Malerhandwerk - Innen- & Außenanstriche, Fassaden, Lackierungen',
    keywords = 'Malermeister, Maler, Anstrich, Fassade, Lackierung, Tapezieren',
    ogImage = '/images/og-image.jpg',
    url = ''
  } = options

  const fullTitle = title.includes('Malermeister') ? title : `${title} - Malermeister Christoph Jasek`

  useHead({
    title: fullTitle,
    meta: [
      {
        name: 'description',
        content: description
      },
      {
        name: 'keywords',
        content: keywords
      },
      // Open Graph
      {
        property: 'og:title',
        content: fullTitle
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:image',
        content: ogImage
      },
      {
        property: 'og:url',
        content: url
      },
      {
        property: 'og:type',
        content: 'website'
      },
      // Twitter Card
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: fullTitle
      },
      {
        name: 'twitter:description',
        content: description
      },
      {
        name: 'twitter:image',
        content: ogImage
      }
    ]
  })
}
