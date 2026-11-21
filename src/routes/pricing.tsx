import { createFileRoute } from '@tanstack/react-router'
import { Pricing } from '../components/UpgradePages'
export const Route = createFileRoute('/pricing')({
  head: () => ({
    meta: [
      { title: 'Pricing & Packages | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Compare creative service packages from ICON GRAPHICS. Get a tailored quote for branding, websites, video and digital projects.',
      },
      { property: 'og:title', content: 'Pricing & Packages | ICON GRAPHICS' },
      {
        property: 'og:description',
        content:
          'Compare creative service packages from ICON GRAPHICS. Get a tailored quote for branding, websites, video and digital projects.',
      },
      { property: 'og:url', content: 'https://icongraphics.com.ng/pricing/' },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/pricing/' }],
  }),
  component: () => <Pricing />,
})
