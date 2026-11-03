import { createFileRoute } from '@tanstack/react-router'
import { Home } from '../components/MarketingPage'
export const Route = createFileRoute('/')({
  head: () => ({
    links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/' }],
  }),
  component: Home,
})
