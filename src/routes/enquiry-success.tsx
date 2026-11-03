import { createFileRoute } from '@tanstack/react-router'
import { Layout, PageHero, WA } from '../components/MarketingPage'

export const Route = createFileRoute('/enquiry-success')({
  head: () => ({
    meta: [
      { title: 'Enquiry Received | ICON GRAPHICS' },
      {
        name: 'description',
        content:
          'Thank you for submitting your creative project enquiry to ICON GRAPHICS. Rapheal Adebayo will review your requirements and respond within 24 hours.',
      },
      { name: 'robots', content: 'noindex, follow' },
    ],
    links: [
      { rel: 'canonical', href: 'https://icongraphics.com.ng/enquiry-success' },
    ],
  }),
  component: EnquirySuccessPage,
})

function EnquirySuccessPage() {
  return (
    <Layout>
      <PageHero
        label="ENQUIRY CONFIRMATION"
        title="We’ve received your enquiry."
        description="Thank you for sharing your project details with ICON GRAPHICS. Your message has been routed directly to our founder and creative team."
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
                background: '#65dbed20',
                color: '#116780',
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '20px',
              }}
            >
              ✓
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                marginBottom: '16px',
                color: '#121315',
              }}
            >
              What happens next?
            </h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                margin: '25px 0 35px',
              }}
            >
              <div style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#116780',
                    background: '#edf1f5',
                    padding: '6px 12px',
                    borderRadius: '4px',
                  }}
                >
                  01
                </span>
                <div>
                  <h3 style={{ fontSize: '16px', color: '#1a1f26', margin: '0 0 6px' }}>
                    Personal Review by Rapheal Adebayo
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: '#555b66' }}>
                    Our Founder & Creative Director will review your objectives,
                    deliverables, and timeline to prepare a custom scope.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#116780',
                    background: '#edf1f5',
                    padding: '6px 12px',
                    borderRadius: '4px',
                  }}
                >
                  02
                </span>
                <div>
                  <h3 style={{ fontSize: '16px', color: '#1a1f26', margin: '0 0 6px' }}>
                    Response Within 24 Hours
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: '#555b66' }}>
                    We will follow up via your preferred contact channel (WhatsApp
                    or Email) with clarifying questions or an initial quotation.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#116780',
                    background: '#edf1f5',
                    padding: '6px 12px',
                    borderRadius: '4px',
                  }}
                >
                  03
                </span>
                <div>
                  <h3 style={{ fontSize: '16px', color: '#1a1f26', margin: '0 0 6px' }}>
                    Collaboration & Agreement
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: '#555b66' }}>
                    Once scope and pricing are agreed, work commences with an
                    initial 50% deposit and scheduled milestones.
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                borderTop: '1px solid #e1e5ec',
                paddingTop: '25px',
              }}
            >
              <WA
                className="button yellow"
                message="Hello Rapheal, I just submitted an enquiry on the ICON GRAPHICS website and wanted to say hello."
              >
                Chat on WhatsApp Now ↗
              </WA>
              <a className="button dark" href="/">
                Return to Homepage ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
