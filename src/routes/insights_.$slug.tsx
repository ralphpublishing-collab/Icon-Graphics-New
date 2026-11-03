import { createFileRoute, notFound } from '@tanstack/react-router'
import { insights } from '../data/insights'
import { InsightDetail } from '../components/UpgradePages'
export const Route = createFileRoute('/insights_/$slug')({
  loader: ({ params }) => {
    const article = insights.find((a) => a.slug === params.slug)
    if (!article) throw notFound()
    return article
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title || 'Insight'} | ICON GRAPHICS` },
      { name: 'description', content: loaderData?.summary || '' },
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: loaderData?.title || 'Insight' },
      { property: 'og:description', content: loaderData?.summary || '' },
      {
        property: 'article:published_time',
        content: loaderData?.published || '',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: `https://icongraphics.com.ng/insights/${loaderData?.slug || ''}`,
      },
    ],
  }),
  component: () => <InsightDetail article={Route.useLoaderData()} />,
})
