import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { site, services, socials } from '../data/site'
import { NotFoundPage } from '../components/NotFoundPage'

import '../styles.css'

const siteName = 'ICON GRAPHICS | Creative & Digital Studio in Ilorin, Nigeria'
const siteDescription = 'ICON GRAPHICS is an Ilorin, Nigeria creative studio for branding, graphic design, photography, video production, website design and digital marketing.'

export const Route = createRootRoute({
  notFoundComponent: NotFoundPage,
  head: () => ({
    links: [
      { rel: 'icon', type: 'image/png', href: '/img/logo-3d.png' },
      { rel: 'apple-touch-icon', href: '/img/logo-3d.png' },
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
      { property: 'og:locale', content: 'en_NG' },
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
                  '@type': 'WebSite',
                  '@id': 'https://icongraphics.com.ng/#website',
                  url: 'https://icongraphics.com.ng/',
                  name: 'ICON GRAPHICS',
                  description: siteDescription,
                  inLanguage: 'en-NG',
                  publisher: { '@id': 'https://icongraphics.com.ng/#organization' },
                },
                {
                  '@type': 'ProfessionalService',
                  '@id': 'https://icongraphics.com.ng/#organization',
                  name: 'ICON GRAPHICS',
                  url: 'https://icongraphics.com.ng',
                  description: site.description,
                  slogan: 'Design. Create. Produce. Connect.',
                  logo: 'https://icongraphics.com.ng/img/logo-reference.png',
                  email: 'hello@icongraphics.com.ng',
                  telephone: '+2348086714454',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Ilorin',
                    addressRegion: 'Kwara State',
                    addressCountry: 'NG',
                  },
                  areaServed: [
                    { '@type': 'Country', name: 'Nigeria' },
                    { '@type': 'Place', name: 'Worldwide (remote services)' },
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+2348086714454',
                    email: 'hello@icongraphics.com.ng',
                    contactType: 'sales',
                    availableLanguage: ['English'],
                  },
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
