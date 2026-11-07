import { createFileRoute } from '@tanstack/react-router'
import { Onboarding } from '../components/Onboarding'

export const Route = createFileRoute('/onboarding')({
  head: () => ({
    meta: [
      { title: 'Start a Project | ICON GRAPHICS' },
      {
        name: 'description',
        content: 'Share your project brief and reference files with ICON GRAPHICS to begin your creative, media or digital project.',
      },
      { property: 'og:title', content: 'Start a Project | ICON GRAPHICS' },
      {
        property: 'og:description',
        content: 'Share your project brief and reference files with ICON GRAPHICS to begin your creative, media or digital project.',
      },
      { property: 'og:url', content: 'https://icongraphics.com.ng/onboarding' },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/onboarding' }],
  }),
  component: Onboarding,
})
