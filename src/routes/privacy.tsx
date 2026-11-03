import { createFileRoute } from '@tanstack/react-router'
import { Privacy } from '../components/MarketingPage'
export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { property: 'og:url', content: 'https://icongraphics.com.ng/privacy' },
      { title: 'Privacy Policy | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'How ICON GRAPHICS handles website enquiry information, form submissions and privacy requests.',
      },
      { property: 'og:title', content: 'Privacy Policy | ICON GRAPHICS' },
      {
        property: 'og:description',
        content:
          'How ICON GRAPHICS handles website enquiry information, form submissions and privacy requests.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/privacy' }],
  }),
  component: () => <Privacy />,
})
