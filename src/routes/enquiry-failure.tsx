import { createFileRoute } from '@tanstack/react-router'
import { Layout, PageHero, WA } from '../components/MarketingPage'

export const Route = createFileRoute('/enquiry-failure')({
  head: () => ({
    meta: [
      { title: 'Enquiry Submission Issue | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'There was a temporary issue transmitting your message. Please reach out to ICON GRAPHICS directly via WhatsApp or email.',
      },
      { name: 'robots', content: 'noindex, follow' },
    ],
    links: [
      { rel: 'canonical', href: 'https://icongraphics.com.ng/enquiry-failure' },
    ],
  }),
  component: EnquiryFailurePage,
})

function EnquiryFailurePage() {
  return (
    <Layout>
      <PageHero
        label="MESSAGE STATUS"
        title="We encountered a temporary issue."
        description="Your browser was unable to complete the automated submission. Do not worry — you can reach Rapheal Adebayo directly through WhatsApp or email."
      />
      <section className="section light">
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <div
            style={{
              padding: '45px 35px',
              background: '#ffffff',
              border: '1px solid #d4d8e0',
              borderRadius: '6px',
              boxShadow: '0 8px 30px #00000008',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: '#de497a20',
                color: '#de497a',
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '20px',
              }}
            >
              !
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                marginBottom: '16px',
                color: '#121315',
              }}
            >
              Direct contact channels
            </h2>
            <p style={{ fontSize: '15px', color: '#555b66', lineHeight: 1.8 }}>
              Network interruptions or browser ad-blockers can sometimes
              prevent form transmissions. You can message our founder directly
              on WhatsApp or email us with your project description:
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                margin: '30px 0',
              }}
            >
              <div
                style={{
                  padding: '20px',
                  background: '#f6f7f9',
                  border: '1px solid #e1e5ec',
                  borderRadius: '4px',
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    color: '#116780',
                    textTransform: 'uppercase',
                  }}
                >
                  INSTANT MESSAGING
                </span>
                <h3 style={{ margin: '8px 0 6px', fontSize: '18px' }}>
                  WhatsApp Direct
                </h3>
                <p style={{ fontSize: '13px', color: '#555b66', margin: '0 0 16px' }}>
                  +234 808 671 4454
                </p>
                <WA
                  className="button yellow small"
                  message="Hello Rapheal, I tried submitting the website enquiry form and would like to share my project here."
                >
                  Open WhatsApp Chat ↗
                </WA>
              </div>

              <div
                style={{
                  padding: '20px',
                  background: '#f6f7f9',
                  border: '1px solid #e1e5ec',
                  borderRadius: '4px',
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    color: '#116780',
                    textTransform: 'uppercase',
                  }}
                >
                  OFFICIAL EMAIL
                </span>
                <h3 style={{ margin: '8px 0 6px', fontSize: '18px' }}>
                  Email Studio
                </h3>
                <p style={{ fontSize: '13px', color: '#555b66', margin: '0 0 16px' }}>
                  hello@icongraphics.com.ng
                </p>
                <a
                  className="button dark small"
                  href="mailto:hello@icongraphics.com.ng?subject=Project%20Enquiry%20-%20ICON%20GRAPHICS"
                >
                  Send an Email ↗
                </a>
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid #e1e5ec',
                paddingTop: '25px',
                display: 'flex',
                gap: '16px',
              }}
            >
              <a className="button outline" href="/contact">
                ← Return to Contact Form
              </a>
              <a className="text-link" href="/">
                Go to Homepage
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
