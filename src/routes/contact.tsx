import { createFileRoute } from '@tanstack/react-router'
import { Contact } from '../components/MarketingPage'
export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { property: 'og:url', content: 'https://icongraphics.com.ng/contact' },
      { title: 'Contact | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Contact Rapheal Adebayo at ICON GRAPHICS by email, WhatsApp or our enquiry form. Nigerian and international enquiries welcome.',
      },
      {
        property: 'og:title',
        content: 'Contact | ICON GRAPHICS',
      },
      {
        property: 'og:description',
        content:
          'Contact Rapheal Adebayo at ICON GRAPHICS by email, WhatsApp or our enquiry form. Nigerian and international enquiries welcome.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/contact' }],
  }),
  component: () => <Contact />,
})
