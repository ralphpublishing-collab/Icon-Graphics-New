import { createFileRoute } from '@tanstack/react-router'
import { Terms } from '../components/MarketingPage'
export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { property: 'og:url', content: 'https://icongraphics.com.ng/terms' },
      { title: 'Terms of Service | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Website terms and the starting point for project discussions with ICON GRAPHICS.',
      },
      { property: 'og:title', content: 'Terms of Service | ICON GRAPHICS' },
      {
        property: 'og:description',
        content:
          'Website terms and the starting point for project discussions with ICON GRAPHICS.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/terms' }],
  }),
  component: () => <Terms />,
})
