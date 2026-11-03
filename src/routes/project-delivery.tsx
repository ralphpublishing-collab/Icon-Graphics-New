import { createFileRoute } from '@tanstack/react-router'
import { BusinessPolicy } from '../components/UpgradePages'
export const Route = createFileRoute('/project-delivery')({
  head: () => ({
    meta: [
      { title: 'Project Delivery Policy | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Understand project delivery, approvals, file formats and usage-rights discussions at ICON GRAPHICS.',
      },
      {
        property: 'og:title',
        content: 'Project Delivery Policy | ICON GRAPHICS',
      },
      {
        property: 'og:description',
        content:
          'Understand project delivery, approvals, file formats and usage-rights discussions at ICON GRAPHICS.',
      },
      {
        property: 'og:url',
        content: 'https://icongraphics.com.ng/project-delivery',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://icongraphics.com.ng/project-delivery',
      },
    ],
  }),
  component: () => <BusinessPolicy delivery />,
})
