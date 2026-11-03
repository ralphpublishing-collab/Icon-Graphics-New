import { Layout } from './MarketingPage'
export function NotFoundPage() {
  return (
    <Layout>
      <section className="notfound wrap">
        <div className="eyebrow">A SMALL DETOUR</div>
        <h1>404. Lost in the ideas?</h1>
        <p>
          This page could not be found. Let’s get you back to something
          creative.
        </p>
        <a className="button yellow" href="/">
          Back to home ↗
        </a>
      </section>
    </Layout>
  )
}
