import { useState } from 'react'
import { Layout, PageHero, WA, remoteImage } from './MarketingPage'
import { packages, pricingDisclaimer } from '../data/site'
import {
  insights,
  insightTopics,
  insightDate,
  type Insight,
} from '../data/insights'

export function Pricing() {
  return (
    <Layout>
      <PageHero
        label="PRICING & PACKAGES"
        title="The right scope. A considered quotation."
        description="Every project starts with what you need. Explore transparent rates across our nine services with Basic, Standard and Premium tiers in NGN and USD."
      />
      <section className="section dark-pricing-section">
        <div className="wrap">
          <div className="pricing-intro">
            <span className="eyebrow">BUILT AROUND YOUR BRIEF</span>
            <h2>Clarity before commitment.</h2>
            <p>
              We collaborate with businesses, brands and individuals in Nigeria
              and internationally. Prices are provided in Nigerian Naira (₦) and
              US Dollars ($). Standard packages include 2 to 3 rounds of
              revisions.
            </p>
          </div>
          <div className="package-grid">
            {packages.map((p, i) => (
              <article className="package" key={p.serviceId}>
                <span className="package-number">
                  {String(i + 1).padStart(2, '0')} / SERVICE PACKAGE
                </span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                <div className="service-items-chips" style={{ margin: '18px 0' }}>
                  {p.items.map((item) => (
                    <span
                      className="service-chip"
                      key={item}
                      style={{ fontSize: '11px', padding: '5px 10px' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    width: '100%',
                    margin: '15px 0 24px',
                  }}
                >
                  {p.tiers.map((t) => (
                    <div
                      key={t.name}
                      style={{
                        padding: '14px 16px',
                        background: '#181a24',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '6px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '4px',
                        }}
                      >
                        <strong
                          style={{
                            fontSize: '12px',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            color: '#ffffff',
                          }}
                        >
                          {t.name}
                        </strong>
                        <span
                          className="tier-billing-badge"
                          style={{
                            fontSize: '10px',
                            background: 'rgba(247, 37, 133, 0.2)',
                            color: '#ff5c8a',
                            padding: '3px 8px',
                            borderRadius: '12px',
                          }}
                        >
                          {t.billing}
                        </span>
                      </div>
                      <div style={{ margin: '6px 0' }}>
                        <span
                          style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#ffffff',
                            fontFamily: 'Manrope, sans-serif',
                          }}
                        >
                          {t.priceNgn}
                        </span>
                        <span
                          style={{
                            fontSize: '14px',
                            color: '#c4c7d0',
                            marginLeft: '8px',
                            fontWeight: '600',
                          }}
                        >
                          / {t.priceUsd}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: '13px',
                          color: '#b0b4be',
                          margin: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        {t.description}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href={'/services#' + p.serviceId}
                  className="text-link"
                  style={{ color: '#ffffff', borderBottomColor: '#ffffff', marginBottom: '18px' }}
                >
                  Explore full scope & deliverables
                </a>
                <WA
                  className="button primary"
                  message={`Hello ICON GRAPHICS, I would like to discuss pricing and options for ${p.title}.`}
                >
                  Discuss this package
                </WA>
              </article>
            ))}
          </div>

          <div className="pricing-disclaimer-box" style={{ marginTop: '50px' }}>
            <strong style={{ color: '#ffffff' }}>Official Pricing Disclaimer:</strong>
            <p style={{ margin: '8px 0 0', color: '#c4c7d0' }}>
              {pricingDisclaimer}
            </p>
            <p
              style={{
                margin: '10px 0 0',
                fontSize: '13px',
                color: '#959aa5',
              }}
            >
              Deposit policy: A 50% non-refundable deposit is required to
              commence work. The final 50% balance is payable upon project
              completion before the final handover of deliverables. Full
              copyright transfers to the client upon full payment.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export function InsightThumbnail({
  thumbnail,
  title,
  eager = false,
}: {
  thumbnail: Insight['thumbnail']
  title: string
  eager?: boolean
}) {
  return (
    <div className="insight-thumbnail-box insight-thumbnail-photo">
      <img
        src={remoteImage(thumbnail.src, 800)}
        srcSet={[480, 800, 1200]
          .map((w) => remoteImage(thumbnail.src, w) + ' ' + w + 'w')
          .join(', ')}
        sizes="(max-width: 768px) 100vw, 400px"
        alt={thumbnail.alt}
        width={800}
        height={450}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
      <span className="insight-thumbnail-tag">{title}</span>
    </div>
  )
}

export function Insights() {
  const [category, setCategory] = useState('All')
  const visible = insights.filter(
    (a) => category === 'All' || a.category === category,
  )
  return (
    <Layout>
      <PageHero
        label="INSIGHTS / KNOWLEDGE CENTRE"
        title="Good questions. Clearer creative decisions."
        description="Practical editorial guides for planning your next brand, media or digital project. Start with the purpose, then work through the details."
      />
      <section className="section dark-insights-section">
        <div className="wrap">
          <div className="filter-bar" aria-label="Article categories">
            {['All', ...insightTopics].map((topic) => (
              <button
                key={topic}
                className={category === topic ? 'active' : ''}
                aria-pressed={category === topic}
                onClick={() => setCategory(topic)}
                style={
                  category === topic
                    ? {
                        background:
                          'linear-gradient(135deg, #f72585 0%, #9b5de5 50%, #00b4d8 100%)',
                        color: '#ffffff',
                        borderColor: 'transparent',
                        fontWeight: 700,
                      }
                    : undefined
                }
              >
                {topic}
              </button>
            ))}
          </div>
          <div className="insight-grid">
            {visible.map((a) => (
              <article className="insight-card dark-insight-card" key={a.slug}>
                <a href={'/insights/' + a.slug} aria-label={a.title}>
                  <InsightThumbnail thumbnail={a.thumbnail} title={a.category} />
                </a>
                <div className="insight-meta">
                  <span className="insight-category-chip">{a.category}</span>
                  <time dateTime={a.published}>{insightDate(a.published)}</time>
                  <span>{a.readingMinutes} min read</span>
                </div>
                <h2>
                  <a href={'/insights/' + a.slug}>{a.title}</a>
                </h2>
                <p>{a.summary}</p>
                <a className="text-link" href={'/insights/' + a.slug}>
                  Read the guide
                </a>
              </article>
            ))}
          </div>
          {!visible.length && (
            <div className="editorial-empty">
              <h2>More perspectives to come.</h2>
              <p>
                Guides on {category.toLowerCase()} will appear here as they are
                published. Explore our services or ask Rapheal about your
                project in the meantime.
              </p>
              <a href="/services" className="button yellow">
                Explore services
              </a>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export function InsightDetail({ article }: { article: Insight }) {
  return (
    <Layout>
      <PageHero
        label={article.category.toUpperCase() + ' / EDITORIAL GUIDE'}
        title={article.title}
        description={article.summary}
      />
      <article className="legal wrap editorial-article">
        <div className="insight-author-card">
          <img
            src="/img/rapheal-avatar.png"
            alt="Rapheal Adebayo"
            className="insight-author-avatar"
          />
          <div>
            <strong>Rapheal Adebayo</strong>
            <p>Founder & Creative Director · ICON GRAPHICS</p>
          </div>
          <span className="insight-read-badge">
            <time dateTime={article.published}>{insightDate(article.published)}</time> ·{' '}
            {article.readingMinutes} min read
          </span>
        </div>

        <div style={{ margin: '30px 0' }}>
          <InsightThumbnail thumbnail={article.thumbnail} title={article.category} eager />
        </div>

        <div className="insight-lead-box">
          <p className="large-copy" style={{ color: '#ffffff', fontSize: '18px', lineHeight: 1.8 }}>
            {article.content}
          </p>
        </div>

        {article.sections?.map((section) => (
          <section key={section.heading} style={{ marginTop: '36px' }}>
            <h2 style={{ color: '#ffffff', fontSize: '24px', marginBottom: '14px' }}>
              {section.heading}
            </h2>
            <p style={{ color: '#c4c7d0', fontSize: '16px', lineHeight: 1.85 }}>
              {section.text}
            </p>
          </section>
        ))}

        <div style={{ marginTop: '50px', display: 'flex', gap: '18px', flexWrap: 'wrap', alignItems: 'center' }}>
          <WA className="button yellow">Discuss your project</WA>
          <a className="text-link" href="/insights">
            ← All insights
          </a>
        </div>
      </article>
    </Layout>
  )
}

export function BusinessPolicy({ delivery = false }: { delivery?: boolean }) {
  const sections = delivery
    ? [
        [
          'Agreeing Project Delivery & Milestones',
          'Each project starts with a written scope outlining deliverables, required formats, delivery channels, approval stages and estimated schedule. Work commences upon receipt of the agreed 50% non-refundable deposit. Turnaround is estimated from the date all necessary brief materials are provided.',
        ],
        [
          'Client Materials, Feedback & Revisions',
          'Standard and Premium packages include 2 to 3 rounds of revisions within the agreed scope. Timely feedback and approvals ensure milestone momentum. Any substantial scope changes or additional features will be quoted separately before work begins.',
        ],
        [
          'Final Review & File Handover',
          'Upon client sign-off of the final revision, the remaining 50% balance becomes due. Approved deliverables (including master vector files, high-resolution media, documentation or production-ready code) are transferred immediately following receipt of the final balance.',
        ],
        [
          'Copyright & Intellectual Property',
          'Upon full and final payment, full copyright and usage rights for all final deliverables are transferred completely to the client. ICON GRAPHICS reserves the standard right to display completed project deliverables and case studies in its portfolio, marketing and promotional materials.',
        ],
        [
          'File Archiving & Retention',
          'Final project deliverables are archived securely for up to 12 months following project completion. Clients are advised to maintain backup copies of all delivered master files. Extended maintenance or ongoing retention agreements can be established separately.',
        ],
      ]
    : [
        [
          'Deposit & Booking Confirmation',
          'A 50% non-refundable deposit is required to confirm a project booking and reserve creative production schedule. Quotes and brief discussions remain non-binding until the deposit has been received and confirmed.',
        ],
        [
          'Requesting a Project Cancellation',
          'To request a project cancellation or hold, please notify Rapheal Adebayo in writing via hello@icongraphics.com.ng or the official WhatsApp channel as early as possible. Cancellation notices take effect upon written acknowledgment.',
        ],
        [
          'Refund Policy & Work Undertaken',
          'Because creative resources and scheduled calendar hours are dedicated upon project confirmation, the initial 50% deposit is non-refundable. For cancellations requested during active production, any unbilled hours or completed milestones will be reconciled honestly based on the project agreement.',
        ],
        [
          'Pauses, Changes & Postponements',
          'If project circumstances change, work may be paused for up to 30 days upon mutual agreement. Resumed projects will be rescheduled based on available studio capacity without penalty, provided project requirements have not altered.',
        ],
        [
          'Governing Law',
          'All business agreements and transactions with ICON GRAPHICS are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.',
        ],
      ]
  return (
    <Layout>
      <PageHero
        label="PROJECT POLICIES"
        title={
          delivery ? 'Project Delivery Policy' : 'Refund & Cancellation Policy'
        }
        description="Clear terms, honest communication and mutual respect guide every ICON GRAPHICS partnership."
      />
      <article className="legal wrap">
        <p style={{ color: '#a4a8b4', marginBottom: '24px' }}>
          Official studio policy · Governed by the laws of the Federal Republic of Nigeria.
        </p>
        {sections.map(([title, copy]) => (
          <section key={title} style={{ marginTop: '30px' }}>
            <h2 style={{ color: '#ffffff' }}>{title}</h2>
            <p style={{ color: '#c4c7d0' }}>{copy}</p>
          </section>
        ))}
        <div className="review-note">
          <h3>Client Agreement & Scope Alignment</h3>
          <p style={{ color: '#c4c7d0' }}>
            Standard payment structure requires a 50% deposit before commencement and 50% before final delivery. Copyright transfers upon full payment. Portfolio display rights are retained by ICON GRAPHICS. Contact Rapheal to confirm any special project requirements before commencing.
          </p>
        </div>
        <div style={{ marginTop: '30px' }}>
          <a className="text-link" href="/contact">
            Contact Rapheal Adebayo
          </a>
        </div>
      </article>
    </Layout>
  )
}
