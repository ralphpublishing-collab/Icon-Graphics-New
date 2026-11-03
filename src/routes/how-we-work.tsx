import { createFileRoute } from '@tanstack/react-router'
import { Process, Layout, PageHero } from '../components/MarketingPage'
export const Route = createFileRoute('/how-we-work')({
  head: () => ({
    meta: [
      {
        property: 'og:url',
        content: 'https://icongraphics.com.ng/how-we-work',
      },
      { title: 'How We Work | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Explore the eight stages from your initial enquiry to creative development, agreed revisions and final delivery.',
      },
      { property: 'og:title', content: 'How We Work | ICON GRAPHICS' },
      {
        property: 'og:description',
        content:
          'Explore the eight stages from your initial enquiry to creative development, agreed revisions and final delivery.',
      },
    ],
    links: [
      { rel: 'canonical', href: 'https://icongraphics.com.ng/how-we-work' },
    ],
  }),
  component: () => (
    <Layout>
      <PageHero
        label="HOW WE WORK"
        title="A clear path from idea to delivery."
        description="Explore the eight stages from your initial enquiry to creative development, agreed revisions and final delivery."
      />
      <Process />
    </Layout>
  ),
})
