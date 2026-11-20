import { createFileRoute } from '@tanstack/react-router'
import { Pricing } from '../components/UpgradePages'
export const Route = createFileRoute('/pricing')({
  head: () => ({
    meta: [
      { title: 'Pricing & Packages | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Explore Basic, Standard and Premium packages for nine creative services, scoped by deliverables and timeline. Larger brand, web, video and documentation projects receive custom quotes.',
      },
      { property: 'og:title', content: 'Pricing & Packages | ICON GRAPHICS' },
      {
        property: 'og:description',
        content:
          'Explore Basic, Standard and Premium packages for nine creative services, scoped by deliverables and timeline. Larger brand, web, video and documentation projects receive custom quotes.',
      },
      { property: 'og:url', content: 'https://icongraphics.com.ng/pricing' },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/pricing' }],
  }),
  component: () => <Pricing />,
})
