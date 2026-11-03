import { createFileRoute } from '@tanstack/react-router'
import { Pricing } from '../components/UpgradePages'
export const Route = createFileRoute('/pricing')({
  head: () => ({
    meta: [
      { title: 'Pricing & Packages | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Explore quotation-based service packages for all nine ICON GRAPHICS creative, media and digital services.',
      },
      { property: 'og:title', content: 'Pricing & Packages | ICON GRAPHICS' },
      {
        property: 'og:description',
        content:
          'Explore quotation-based service packages for all nine ICON GRAPHICS creative, media and digital services.',
      },
      { property: 'og:url', content: 'https://icongraphics.com.ng/pricing' },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/pricing' }],
  }),
  component: () => <Pricing />,
})
