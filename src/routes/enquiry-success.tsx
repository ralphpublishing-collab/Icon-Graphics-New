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
      <section className="section">
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <div
            style={{
              padding: '45px 35px',
              background: '#12141e',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '8px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
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
                background: 'linear-gradient(135deg, #f72585 0%, #9b5de5 50%, #00b4d8 100%)',
                color: '#ffffff',
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '20px',
                boxShadow: '0 0 20px rgba(247, 37, 133, 0.4)',
              }}
            >
              ✓
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                marginBottom: '16px',
                color: '#ffffff',
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
                    color: '#ffffff',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    padding: '6px 12px',
                    borderRadius: '4px',
                  }}
                >
                  01
                </span>
                <div>
                  <h3 style={{ fontSize: '16px', color: '#ffffff', margin: '0 0 6px' }}>
                    Personal Review by Rapheal Adebayo
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: '#c4c7d0' }}>
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
                    color: '#ffffff',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    padding: '6px 12px',
                    borderRadius: '4px',
                  }}
                >
                  02
                </span>
                <div>
                  <h3 style={{ fontSize: '16px', color: '#ffffff', margin: '0 0 6px' }}>
                    Response Within 24 Hours
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: '#c4c7d0' }}>
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
                    color: '#ffffff',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    padding: '6px 12px',
                    borderRadius: '4px',
                  }}
                >
                  03
                </span>
                <div>
                  <h3 style={{ fontSize: '16px', color: '#ffffff', margin: '0 0 6px' }}>
                    Collaboration & Agreement
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: '#c4c7d0' }}>
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
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                paddingTop: '25px',
              }}
            >
              <WA
                className="button yellow"
                message="Hello Rapheal, I just submitted an enquiry on the ICON GRAPHICS website and wanted to say hello."
              >
                Chat on WhatsApp Now
              </WA>
              <a className="button outline" href="/">
                Return to Homepage
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
