import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { site, services, socials } from '../data/site'
import { NotFoundPage } from '../components/NotFoundPage'

import '../styles.css'

const siteName = site.name
const siteDescription = site.description

export const Route = createRootRoute({
  notFoundComponent: NotFoundPage,
  head: () => ({
    links: [
      { rel: 'icon', type: 'image/png', href: '/img/logo-reference.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;450;500;550;600;650;700&family=Manrope:wght@400;500;600;650;700;750;800&display=swap',
      },
    ],
    meta: [
      {
        property: 'og:image',
        content: 'https://icongraphics.com.ng/img/logo-reference.png',
      },
      {
        property: 'og:image:alt',
        content: 'ICON GRAPHICS original multicoloured iG logo',
      },
      { property: 'og:site_name', content: 'ICON GRAPHICS' },
      {
        name: 'twitter:image',
        content: 'https://icongraphics.com.ng/img/logo-reference.png',
      },
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://icongraphics.com.ng/#organization',
                  name: 'ICON GRAPHICS',
                  url: 'https://icongraphics.com.ng',
                  description: site.description,
                  slogan: 'Design. Create. Produce. Connect.',
                  logo: 'https://icongraphics.com.ng/img/logo-reference.png',
                  email: 'hello@icongraphics.com.ng',
                  telephone: '+2348086714454',
                  sameAs: socials.map(([, url]) => url),
                  founder: {
                    '@type': 'Person',
                    name: 'Rapheal Adebayo',
                    jobTitle: 'Founder & Creative Director',
                  },
                },
                ...services.map((service) => ({
                  '@type': 'Service',
                  name: service.title,
                  description: service.description,
                  url: 'https://icongraphics.com.ng/services#' + service.id,
                  provider: {
                    '@id': 'https://icongraphics.com.ng/#organization',
                  },
                })),
              ],
            }).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
