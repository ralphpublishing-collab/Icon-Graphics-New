import { createFileRoute } from '@tanstack/react-router'
import { Home } from '../components/MarketingPage'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'ICON GRAPHICS | Branding, Design & Digital Services in Nigeria' },
      {
        name: 'description',
        content:
          'Founder-led branding, video production, web design and executive documentation for ambitious businesses in Nigeria and worldwide. Explore the ICON GRAPHICS portfolio and request a custom quote.',
      },
      {
        property: 'og:title',
        content: 'ICON GRAPHICS | Branding, Design & Digital Services in Nigeria',
      },
      {
        property: 'og:description',
        content:
          'Founder-led branding, video production, web design and executive documentation for ambitious businesses in Nigeria and worldwide. Explore the ICON GRAPHICS portfolio and request a custom quote.',
      },
      { property: 'og:url', content: 'https://icongraphics.com.ng/' },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/' }],
  }),
  component: Home,
})
