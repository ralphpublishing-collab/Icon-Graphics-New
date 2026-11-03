import { createFileRoute } from '@tanstack/react-router'
import { Contact } from '../components/MarketingPage'
export const Route = createFileRoute('/request-a-quote')({
  head: () => ({
    meta: [
      {
        property: 'og:url',
        content: 'https://icongraphics.com.ng/request-a-quote',
      },
      { title: 'Request a Quote | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Tell ICON GRAPHICS about your creative, media or digital project and request a personalised quotation.',
      },
      { property: 'og:title', content: 'Request a Quote | ICON GRAPHICS' },
      {
        property: 'og:description',
        content:
          'Tell ICON GRAPHICS about your creative, media or digital project and request a personalised quotation.',
      },
    ],
    links: [
      { rel: 'canonical', href: 'https://icongraphics.com.ng/request-a-quote' },
    ],
  }),
  component: () => <Contact quote />,
})
