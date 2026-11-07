import { useState } from 'react'
import { track } from '../lib/analytics'
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
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [fileError, setFileError] = useState('')

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (state === 'sending') return
    const form = e.currentTarget
    const body = new FormData(form)
    const attachment = body.get('reference-file')

    if (attachment instanceof File && attachment.size > 5 * 1024 * 1024) {
      setFileError('Please choose a file under 5 MB, or share a reference link instead.')
      return
    }
    if (
      attachment instanceof File &&
      attachment.size &&
      !['application/pdf', 'image/jpeg', 'image/png', 'image/webp'].includes(attachment.type)
    ) {
      setFileError('Please use a PDF, JPEG, PNG or WebP file.')
      return
    }

    const brief = String(body.get('brief') || '').trim()
    body.set('form-name', 'project-enquiry')
    body.set('message', brief)
    body.set('contact-method', 'WhatsApp')
    body.set('consent', 'agreed')
    body.delete('brief')
    setFileError('')
    setState('sending')

    try {
      const response = await fetch('https://forms-api.icongraphics.com.ng/', {
        method: 'POST',
        body,
        signal: AbortSignal.timeout(20000),
      })
      const result = await response.text()
      if (!response.ok || result.includes('ICON_FORMS_REGISTRATION')) throw new Error('Submission failed')
      track('enquiry_submitted', { form: 'project-onboarding' })
      setState('success')
      form.reset()
    } catch {
      setState('error')
    }
  }

  return (
    <Layout>
      <PageHero
        label="START A PROJECT"
        title="Let’s bring your next idea to life."
        description="Share the details of your project and attach a reference file. Rapheal and the ICON GRAPHICS team will review your brief and follow up."
      />
      <section className="section dark-contact-section">
        <div className="wrap" style={{ maxWidth: '850px' }}>
          {state === 'success' ? (
            <div className="form-success" role="status">
              <span style={{ fontSize: '26px', color: '#65dbed' }}>✓</span>
              <h2>Project brief received.</h2>
              <p>Thank you for sharing your project requirements. Our team will review the details and follow up with you within 24 hours.</p>
              <a className="button yellow small" href="/success">View Confirmation Details</a>
              <button className="button outline small" onClick={() => setState('idle')} style={{ marginLeft: '12px' }}>Send Another Brief</button>
            </div>
          ) : (
            <form
              name="project-onboarding"
              method="POST"
              encType="multipart/form-data"
              action="https://forms-api.icongraphics.com.ng/"
              onSubmit={submit}
              aria-busy={state === 'sending'}
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
              <input type="hidden" name="form-name" value="project-enquiry" />
              <p hidden><label>Leave this empty <input name="bot-field" tabIndex={-1} /></label></p>
              <div>
                <label style={labelStyle} htmlFor="onboard-name">Full name *</label>
                <input id="onboard-name" name="name" type="text" autoComplete="name" required style={fieldStyle} />
              </div>
              <div>
                <label style={labelStyle} htmlFor="onboard-email">Email address *</label>
                <input id="onboard-email" name="email" type="email" autoComplete="email" required style={fieldStyle} />
              </div>
              <div>
                <label style={labelStyle} htmlFor="onboard-phone">WhatsApp / phone *</label>
                <input id="onboard-phone" name="phone" type="tel" autoComplete="tel" required style={fieldStyle} />
              </div>
              <div>
                <label style={labelStyle} htmlFor="onboard-business">Business or brand name</label>
                <input id="onboard-business" name="business" type="text" autoComplete="organization" style={fieldStyle} />
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
                <label style={labelStyle} htmlFor="onboard-reference">Reference file</label>
                <input id="onboard-reference" name="reference-file" type="file" accept=".pdf,.png,.jpg,.jpeg,.webp" style={{ ...fieldStyle, padding: '10px' }} />
                <small style={{ display: 'block', marginTop: '7px', color: '#a6abb6', lineHeight: 1.6 }}>One PDF or image, up to 5 MB. For larger or multiple files, share a secure link after submitting your brief.</small>
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle} htmlFor="onboard-brief">Project brief *</label>
                <textarea id="onboard-brief" name="brief" required rows={7} placeholder="Tell us about your goals, audience, required deliverables, preferred style and any important details..." style={{ ...fieldStyle, resize: 'vertical' }} />
              </div>
              {fileError && <p role="alert" style={{ color: '#ff8a8a', gridColumn: '1 / -1' }}>{fileError}</p>}
              {state === 'error' && <p role="alert" style={{ color: '#ff8a8a', gridColumn: '1 / -1' }}>We could not submit your project brief. Please try again or contact us on WhatsApp.</p>}
              <div style={{ gridColumn: '1 / -1' }}>
                <button type="submit" disabled={state === 'sending'} className="button yellow" style={{ width: '100%', justifyContent: 'center', opacity: state === 'sending' ? .65 : 1 }}>{state === 'sending' ? 'Submitting…' : 'Submit project brief'}</button>
                <p style={{ color: '#a6abb6', fontSize: '12px', lineHeight: 1.7, marginTop: '14px' }}>Submitting this form allows ICON GRAPHICS to use your details to respond to this project enquiry. Please do not upload passwords, payment card details or other sensitive information.</p>
              </div>
            </form>
          )}
        </div>
      </section>
    </Layout>
  )
}
