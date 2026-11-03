import { createFileRoute } from '@tanstack/react-router'
import { About } from '../components/MarketingPage'
export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { property: 'og:url', content: 'https://icongraphics.com.ng/about' },
      { title: 'About | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Discover the purpose, values and creative approach behind ICON GRAPHICS, a founder-led creative and digital business rooted in Nigeria.',
      },
      { property: 'og:title', content: 'About | ICON GRAPHICS' },
      {
        property: 'og:description',
        content:
          'Discover the purpose, values and creative approach behind ICON GRAPHICS, a founder-led creative and digital business rooted in Nigeria.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/about' }],
  }),
  component: () => <About />,
})
