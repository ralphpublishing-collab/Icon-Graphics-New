import { createFileRoute } from '@tanstack/react-router'
import { Portfolio } from '../components/MarketingPage'
export const Route = createFileRoute('/portfolio')({
  head: () => ({
    meta: [
      { property: 'og:url', content: 'https://icongraphics.com.ng/portfolio' },
      { title: 'Portfolio | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Explore nine creative disciplines through clearly labelled concept previews. Real ICON GRAPHICS project work will be added here.',
      },
      { property: 'og:title', content: 'Portfolio | ICON GRAPHICS' },
      {
        property: 'og:description',
        content:
          'Creative directions across branding, media and digital experiences.',
      },
    ],
    links: [
      { rel: 'canonical', href: 'https://icongraphics.com.ng/portfolio' },
    ],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === 'string' ? search.category : 'all',
  }),
  component: () => <Portfolio initialFilter={Route.useSearch().category} />,
})
