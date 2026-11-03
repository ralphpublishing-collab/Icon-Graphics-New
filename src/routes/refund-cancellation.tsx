import { createFileRoute } from '@tanstack/react-router'
import { BusinessPolicy } from '../components/UpgradePages'
export const Route = createFileRoute('/refund-cancellation')({
  head: () => ({
    meta: [
      { title: 'Refund & Cancellation Policy | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Discuss project cancellations, changes and refund arrangements with ICON GRAPHICS.',
      },
      {
        property: 'og:title',
        content: 'Refund & Cancellation Policy | ICON GRAPHICS',
      },
      {
        property: 'og:description',
        content:
          'Discuss project cancellations, changes and refund arrangements with ICON GRAPHICS.',
      },
      {
        property: 'og:url',
        content: 'https://icongraphics.com.ng/refund-cancellation',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://icongraphics.com.ng/refund-cancellation',
      },
    ],
  }),
  component: () => <BusinessPolicy />,
})
