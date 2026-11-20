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
          'Meet the founder-led creative, media and digital solutions agency in Ilorin, Nigeria. Discover the thinking, values and approach behind ICON GRAPHICS.',
      },
      { property: 'og:title', content: 'About | ICON GRAPHICS' },
      {
        property: 'og:description',
        content:
          'Meet the founder-led creative, media and digital solutions agency in Ilorin, Nigeria. Discover the thinking, values and approach behind ICON GRAPHICS.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/about' }],
  }),
  component: () => <About />,
})
