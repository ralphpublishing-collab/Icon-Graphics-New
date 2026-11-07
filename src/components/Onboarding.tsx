import { Layout, PageHero } from './MarketingPage'

const fieldStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 15px',
  border: '1px solid rgba(255,255,255,.16)',
  borderRadius: '6px',
  background: '#1b1d22',
  color: '#fff',
  font: 'inherit',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '8px',
  color: '#e8e9ed',
  fontSize: '13px',
  fontWeight: 600,
}

export function Onboarding() {
  return (
    <Layout>
      <PageHero
        label="START A PROJECT"
        title="Let’s bring your next idea to life."
        description="Share the details of your project and attach relevant reference files. Rapheal and the ICON GRAPHICS team will review your brief and follow up."
      />
      <section className="section dark-contact-section">
        <div className="wrap" style={{ maxWidth: '850px' }}>
          <form
            name="project-onboarding"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            encType="multipart/form-data"
            action="/success"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '22px',
              padding: 'clamp(20px, 4vw, 38px)',
              border: '1px solid rgba(255,255,255,.14)',
              borderRadius: '10px',
              background: '#121419',
            }}
          >
            <input type="hidden" name="form-name" value="project-onboarding" />
            <p hidden>
              <label>Do not fill this out: <input name="bot-field" /></label>
            </p>
            <div>
              <label style={labelStyle} htmlFor="onboard-name">Full name *</label>
              <input id="onboard-name" name="name" type="text" autoComplete="name" required style={fieldStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor="onboard-email">Email address *</label>
              <input id="onboard-email" name="email" type="email" autoComplete="email" required style={fieldStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor="onboard-phone">WhatsApp / phone</label>
              <input id="onboard-phone" name="phone" type="tel" autoComplete="tel" style={fieldStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor="onboard-business">Business or brand name</label>
              <input id="onboard-business" name="business" type="text" style={fieldStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor="onboard-service">Project type *</label>
              <select id="onboard-service" name="service" required defaultValue="" style={fieldStyle}>
                <option value="" disabled>Select a service</option>
                <option>Branding & Graphic Design</option>
                <option>Photography & Photo Editing</option>
                <option>Video Production & Editing</option>
                <option>Website Design & Development</option>
                <option>Social Media Management & Content Creation</option>
                <option>Digital Marketing</option>
                <option>Writing & Copywriting</option>
                <option>Business Documentation</option>
                <option>Audio Production</option>
                <option>Other / Multiple Services</option>
              </select>
            </div>
            <div>
              <label style={labelStyle} htmlFor="onboard-budget">Estimated budget</label>
              <select id="onboard-budget" name="budget" defaultValue="" style={fieldStyle}>
                <option value="">Select a range (optional)</option>
                <option>Below ₦25,000</option>
                <option>₦25,000 – ₦75,000</option>
                <option>₦75,000 – ₦150,000</option>
                <option>₦150,000 – ₦300,000</option>
                <option>Above ₦300,000</option>
                <option>To be discussed</option>
              </select>
            </div>
            <div>
              <label style={labelStyle} htmlFor="onboard-deadline">Preferred deadline</label>
              <input id="onboard-deadline" name="deadline" type="date" style={fieldStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor="onboard-reference">Reference files</label>
              <input id="onboard-reference" name="attachment" type="file" accept=".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx,.ppt,.pptx,.zip" style={{ ...fieldStyle, padding: '10px' }} />
              <small style={{ display: 'block', marginTop: '7px', color: '#a6abb6', lineHeight: 1.6 }}>Attach one file. For larger or multiple files, we’ll arrange a secure transfer after reviewing your brief.</small>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle} htmlFor="onboard-brief">Project brief *</label>
              <textarea id="onboard-brief" name="brief" required rows={7} placeholder="Tell us about your goals, audience, required deliverables, preferred style and any important details..." style={{ ...fieldStyle, resize: 'vertical' }} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <button type="submit" className="button yellow" style={{ width: '100%', justifyContent: 'center' }}>Submit project brief</button>
              <p style={{ color: '#a6abb6', fontSize: '12px', lineHeight: 1.7, marginTop: '14px' }}>Submitting this form allows ICON GRAPHICS to use your details to respond to this project enquiry. Please do not upload passwords, payment card details or other sensitive information.</p>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}
