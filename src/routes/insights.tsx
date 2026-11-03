import { createFileRoute } from '@tanstack/react-router'
import { Insights } from '../components/UpgradePages'
export const Route = createFileRoute('/insights')({
  head: () => ({
    meta: [
      { title: 'Insights & Knowledge Centre | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Practical guides on creative briefs, branding, websites and media projects from ICON GRAPHICS.',
      },
      {
        property: 'og:title',
        content: 'Insights & Knowledge Centre | ICON GRAPHICS',
      },
      {
        property: 'og:description',
        content:
          'Practical guides on creative briefs, branding, websites and media projects from ICON GRAPHICS.',
      },
      { property: 'og:url', content: 'https://icongraphics.com.ng/insights' },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/insights' }],
  }),
  component: () => <Insights />,
})
