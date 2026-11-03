import { createFileRoute } from '@tanstack/react-router'
import { Services } from '../components/MarketingPage'
export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { property: 'og:url', content: 'https://icongraphics.com.ng/services' },
      { title: 'Creative, Media & Digital Services | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Explore nine creative services: branding, photography, video, websites, social media, marketing, writing, business documentation and audio.',
      },
      {
        property: 'og:title',
        content: 'Creative, Media & Digital Services | ICON GRAPHICS',
      },
      {
        property: 'og:description',
        content:
          'Explore nine creative services: branding, photography, video, websites, social media, marketing, writing, business documentation and audio.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/services' }],
  }),
  component: () => <Services />,
})
