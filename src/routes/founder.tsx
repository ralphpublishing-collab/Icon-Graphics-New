import { createFileRoute } from '@tanstack/react-router'
import { Founder } from '../components/MarketingPage'
export const Route = createFileRoute('/founder')({
  head: () => ({
    meta: [
      { property: 'og:url', content: 'https://icongraphics.com.ng/founder' },
      { title: 'Meet Rapheal Adebayo | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Meet Rapheal Adebayo, Founder & Creative Director of ICON GRAPHICS, and discuss your next creative project directly.',
      },
      { property: 'og:title', content: 'Meet Rapheal Adebayo | ICON GRAPHICS' },
      {
        property: 'og:description',
        content:
          'Meet Rapheal Adebayo, Founder & Creative Director of ICON GRAPHICS, and discuss your next creative project directly.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/founder' }],
  }),
  component: () => <Founder />,
})
