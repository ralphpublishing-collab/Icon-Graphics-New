import { useState } from 'react'
import { track } from '../lib/analytics'
import { services } from '../data/site'
export function EnquiryForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle',
  )
  const [fileError, setFileError] = useState('')
  async function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    if (state === 'sending') return
    const form = e.currentTarget
    const body = new FormData(form)
    const attachment = body.get('reference-file')
    if (attachment instanceof File && attachment.size > 5 * 1024 * 1024) {
      setFileError(
        'Please choose a file under 5 MB, or share a reference link instead.',
      )
      return
    }
    if (
      attachment instanceof File &&
      attachment.size &&
      !['application/pdf', 'image/jpeg', 'image/png', 'image/webp'].includes(
        attachment.type,
      )
    ) {
      setFileError('Please use a PDF, JPEG, PNG or WebP file.')
      return
    }
    setFileError('')
    body.set(
      'additional-services',
      body.getAll('additional-services').join(', '),
    )
    setState('sending')
    try {
      const r = await fetch('/__forms.html', {
        method: 'POST',
        body,
        signal: AbortSignal.timeout(20000),
      })
      const text = await r.text()
      if (!r.ok || text.includes('ICON_FORMS_REGISTRATION')) throw new Error()
      track('enquiry_submitted', { form: 'project-enquiry' })
      setState('success')
      form.reset()
    } catch {
      setState('error')
    }
  }
  return state === 'success' ? (
    <div className="form-success" role="status">
      <span style={{ fontSize: '26px', color: '#65dbed' }}>✓</span>
      <h2>Enquiry received.</h2>
      <p>
        Thank you for sharing your project. Rapheal Adebayo and the ICON
        GRAPHICS team will review your requirements and follow up within 24
        hours.
      </p>
      <div style={{ display: 'flex', gap: '14px', marginTop: '18px', flexWrap: 'wrap' }}>
        <a className="button yellow small" href="/success">
          View Confirmation Details
        </a>
        <button className="button outline small" onClick={() => setState('idle')}>
          Send Another Enquiry
        </button>
      </div>
    </div>
  ) : (
    <form
      name="project-enquiry"
      method="POST"
      encType="multipart/form-data"
      action="/__forms.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      aria-busy={state === 'sending'}
    >
      <input type="hidden" name="form-name" value="project-enquiry" />
      <p hidden>
        <label>
          Leave this empty
          <input name="bot-field" tabIndex={-1} />
        </label>
      </p>
      <fieldset disabled={state === 'sending'}>
        <div className="form-grid">
          <label>
            Full name *
            <input
              name="name"
              autoComplete="name"
              required
              placeholder="Your full name"
            />
          </label>
          <label>
            Email address *
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
            />
          </label>
          <label>
            WhatsApp number *
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              placeholder="Include country code"
            />
          </label>
          <label>
            Business or brand name
            <input
              name="business"
              autoComplete="organization"
              placeholder="Optional"
            />
          </label>
          <label>
            Service required *
            <select name="service" required defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s.id}>{s.title}</option>
              ))}
              <option>Multiple services</option>
            </select>
          </label>
          <label>
            Budget range
            <input
              name="budget"
              placeholder="Optional · your estimated range"
            />
          </label>
          <label className="full">
            Tell us about your project *
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Your goals, deliverables, and anything we should know…"
            />
          </label>
          <label>
            Budget currency
            <input
              name="currency"
              placeholder="e.g. NGN, USD, GBP"
              maxLength={20}
            />
          </label>
          <label>
            Preferred deadline
            <input name="deadline" type="date" />
          </label>
          <label className="full">
            Expected deliverables
            <textarea
              name="deliverables"
              rows={3}
              placeholder="What would you like to receive? Include formats or quantities if known."
            />
          </label>
          <label className="full">
            Existing website or reference links
            <textarea
              name="reference-links"
              rows={2}
              placeholder="Website, social profiles or public folder links. Please do not include passwords or private access tokens."
            />
          </label>
          <label className="full">
            Reference attachment (optional, up to 5 MB)
            <input
              type="file"
              name="reference-file"
              accept=".pdf,.jpg,.jpeg,.png,.webp"
              aria-describedby="file-help"
            />
            <small id="file-help">
              One PDF or image. Share larger materials by link. Do not upload
              sensitive personal documents.
            </small>
          </label>
          <details className="full detailed-brief">
            <summary>Add a detailed project brief (optional)</summary>
            <label>
              Audience and objectives
              <textarea
                name="brief-goals"
                rows={3}
                placeholder="Who is this for, and what should it communicate?"
              />
            </label>
            <label>
              Creative preferences and existing materials
              <textarea
                name="brief-direction"
                rows={3}
                placeholder="Brand guidelines, tone, references and materials you can provide."
              />
            </label>
            <label>
              Approvals and project requirements
              <textarea
                name="brief-requirements"
                rows={3}
                placeholder="Who approves the work? Any format, platform or accessibility requirements?"
              />
            </label>
          </details>
          <label className="full">
            Preferred contact method *
            <select name="contact-method" required>
              <option>WhatsApp</option>
              <option>Email</option>
            </select>
          </label>
        </div>
        <label className="consent">
          <input name="consent" value="agreed" type="checkbox" required />
          <span>
            I agree to the <a href="/privacy">Privacy Policy</a> and consent to
            being contacted about my enquiry.
          </span>
        </label>
        {fileError && (
          <p className="error" role="alert">
            {fileError}
          </p>
        )}
        {state === 'error' && (
          <div className="error" role="alert" style={{ marginBottom: '14px' }}>
            <p style={{ margin: '0 0 8px' }}>
              Your enquiry could not be sent automatically. Please try again or message our founder directly on WhatsApp.
            </p>
            <a href="/failure" className="text-link" style={{ fontSize: '13px', color: '#116780', textDecoration: 'underline' }}>
              View alternative direct contact channels
            </a>
          </div>
        )}
        <button className="button yellow" type="submit">
          {state === 'sending' ? 'Sending enquiry…' : 'Send Project Enquiry'}
        </button>
        <p className="fine">
          Your information is used to respond to your enquiry.
        </p>
      </fieldset>
    </form>
  )
}
