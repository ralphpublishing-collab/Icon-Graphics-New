import { createFileRoute } from '@tanstack/react-router'
import { FAQ, Layout, PageHero } from '../components/MarketingPage'
export const Route = createFileRoute('/faq')({
  head: () => ({
    meta: [
      { property: 'og:url', content: 'https://icongraphics.com.ng/faq' },
      { title: 'Frequently Asked Questions | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Find answers about ICON GRAPHICS services, quotations, project requirements, revisions, delivery and international collaboration.',
      },
      {
        property: 'og:title',
        content: 'Frequently Asked Questions | ICON GRAPHICS',
      },
      {
        property: 'og:description',
        content:
          'Find answers about ICON GRAPHICS services, quotations, project requirements, revisions, delivery and international collaboration.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/faq' }],
  }),
  component: () => (
    <Layout>
      <PageHero
        label="FREQUENTLY ASKED QUESTIONS"
        title="A little clarity for your next project."
        description="Find answers about ICON GRAPHICS services, quotations, project requirements, revisions, delivery and international collaboration."
      />
      <FAQ />
    </Layout>
  ),
})
