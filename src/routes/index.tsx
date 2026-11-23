import { createFileRoute } from '@tanstack/react-router'
import { Home } from '../components/MarketingPage'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Graphic Design & Branding in Ilorin, Nigeria | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Based in Ilorin, Kwara State, ICON GRAPHICS provides branding, graphic design, websites and media services for businesses across Nigeria and worldwide. Request a project quote.',
      },
      {
        property: 'og:title',
        content: 'Graphic Design & Branding in Ilorin, Nigeria | ICON GRAPHICS',
      },
      {
        property: 'og:description',
        content:
          'Based in Ilorin, Kwara State, ICON GRAPHICS provides branding, graphic design, websites and media services for businesses across Nigeria and worldwide. Request a project quote.',
      },
      { property: 'og:url', content: 'https://icongraphics.com.ng/' },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/' }],
  }),
  component: Home,
})
