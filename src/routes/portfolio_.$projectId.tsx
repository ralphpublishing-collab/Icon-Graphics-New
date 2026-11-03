import { createFileRoute, notFound } from '@tanstack/react-router'
import { projects, services } from '../data/site'
import { ProjectDetail } from '../components/MarketingPage'
export const Route = createFileRoute('/portfolio_/$projectId')({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId)
    if (!project) throw notFound()
    return project
  },
  head: ({ loaderData: p }) => ({
    meta: [
      {
        title: p
          ? p.title + ' | ICON GRAPHICS'
          : 'Project not found | ICON GRAPHICS',
      },
      {
        name: 'description',
        content: p?.description ?? 'This project could not be found.',
      },
      { property: 'og:title', content: p?.title ?? 'Project not found' },
      {
        property: 'og:description',
        content: p
          ? (services.find((s) => s.id === p.category)?.title ??
            'ICON GRAPHICS portfolio')
          : 'Project not found',
      },
    ],
    links: p
      ? [
          {
            rel: 'canonical',
            href: 'https://icongraphics.com.ng/portfolio/' + p.id,
          },
        ]
      : [],
  }),
  component: () => <ProjectDetail project={Route.useLoaderData()} />,
})
