import { createFileRoute } from '@tanstack/react-router'
import { Home } from '../components/MarketingPage'

const pageTitle = 'ICON GRAPHICS | Branding, Media & Digital Solutions in Nigeria'
const pageDescription =
  'Founder-led branding, video production, web design and executive documentation for ambitious businesses in Nigeria and worldwide. Explore the ICON GRAPHICS portfolio and request a custom quote.'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: 'description', content: pageDescription },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:url', content: 'https://icongraphics.com.ng/' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: pageDescription },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/' }],
  }),
  component: Home,
})
