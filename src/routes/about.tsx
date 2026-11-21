import { createFileRoute } from '@tanstack/react-router'
import { About } from '../components/MarketingPage'
export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { property: 'og:url', content: 'https://icongraphics.com.ng/about/' },
      { title: 'About | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Meet ICON GRAPHICS, a founder-led creative and digital studio in Ilorin, Nigeria, serving businesses locally and worldwide.',
      },
      { property: 'og:title', content: 'About | ICON GRAPHICS' },
      {
        property: 'og:description',
        content:
          'Meet ICON GRAPHICS, a founder-led creative and digital studio in Ilorin, Nigeria, serving businesses locally and worldwide.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/about/' }],
  }),
  component: () => <About />,
})
