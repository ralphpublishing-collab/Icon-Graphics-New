import { createFileRoute } from '@tanstack/react-router'
import { Home } from '../components/MarketingPage'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'ICON GRAPHICS | Branding & Digital Solutions' },
      {
        name: 'description',
        content:
          'Branding, graphic design, websites and media for businesses in Nigeria. Explore ICON GRAPHICS services and request a project quote.',
      },
      {
        property: 'og:title',
        content: 'ICON GRAPHICS | Branding & Digital Solutions',
      },
      {
        property: 'og:description',
        content:
          'Branding, graphic design, websites and media for businesses in Nigeria. Explore ICON GRAPHICS services and request a project quote.',
      },
      { property: 'og:url', content: 'https://icongraphics.com.ng/' },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/' }],
  }),
  component: Home,
})
