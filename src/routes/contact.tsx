import { createFileRoute } from '@tanstack/react-router'
import { Contact } from '../components/MarketingPage'
export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { property: 'og:url', content: 'https://icongraphics.com.ng/contact/' },
      { title: 'Contact ICON GRAPHICS | Get a Project Quote' },
      {
        name: 'description',
        content:
          'Contact ICON GRAPHICS in Nigeria for branding, design, photography, video, website and digital services. Send a project enquiry or WhatsApp Rapheal.',
      },
      { property: 'og:title', content: 'Contact ICON GRAPHICS | Get a Project Quote' },
      {
        property: 'og:description',
        content:
          'Contact ICON GRAPHICS in Nigeria for branding, design, photography, video, website and digital services. Send a project enquiry or WhatsApp Rapheal.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/contact/' }],
  }),
  component: () => <Contact />,
})
