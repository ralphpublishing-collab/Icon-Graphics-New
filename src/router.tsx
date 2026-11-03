import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    defaultErrorComponent: () => (
      <main className="notfound wrap">
        <h1>A small interruption.</h1>
        <p>This page could not load. Please try again.</p>
        <a className="button yellow" href="/">
          Return home ↗
        </a>
      </main>
    ),
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  })

  return router
}
