import { createFileRoute } from '@tanstack/react-router'
import { Home } from '../components/MarketingPage'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'ICON GRAPHICS | Branding, Design & Digital Services in Nigeria' },
      {
        name: 'description',
        content:
          'Get branding, graphic design, photography, video production, website design and digital marketing from ICON GRAPHICS in Ilorin, Nigeria.',
      },
      {
        property: 'og:title',
        content: 'ICON GRAPHICS | Branding, Design & Digital Services in Nigeria',
      },
      {
        property: 'og:description',
        content:
          'Get branding, graphic design, photography, video production, website design and digital marketing from ICON GRAPHICS in Ilorin, Nigeria.',
      },
      { property: 'og:url', content: 'https://icongraphics.com.ng/' },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/' }],
  }),
  component: Home,
})
