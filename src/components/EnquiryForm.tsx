import { useState } from 'react'
import { services } from '../data/site'
export function EnquiryForm() {
  const [state, setState] = useState&lt;'idle' | 'sending' | 'success' | 'error'&gt;(
    'idle',
  )
  const [fileError, setFileError] = useState('')
  function submit(e: React.FormEvent&lt;HTMLFormElement&gt;) {
    const body = new FormData(e.currentTarget)
    const attachment = body.get('reference-file')
    if (attachment instanceof File &amp;&amp; attachment.size &gt; 5 * 1024 * 1024) {
 e.preventDefault()
      setFileError(
        'Please choose a file under 5 MB, or share a reference link instead.',
      )
      return
    }
    if (
 attachment instanceof File &amp;&amp;
 attachment.size &amp;&amp;
 !['application/pdf', 'image/jpeg', 'image/png', 'image/webp'].includes(
 attachment.type,
      )
    ) {
 e.preventDefault()
      setFileError('Please use a PDF, JPEG, PNG or WebP file.')
      return
    }
    setFileError('')
  }
  return state === 'success' ? (
 &lt;div className="form-success" role="status"&gt;
 &lt;span style={{ fontSize: '26px', color: '#65dbed' }}&gt;✓&lt;/span&gt;
 &lt;h2&gt;Enquiry received.&lt;/h2&gt;
      &lt;p&gt;
 Thank you for sharing your project. Rapheal Adebayo and the ICON
 GRAPHICS team will review your requirements and follow up within 24
        hours.
 &lt;/p&gt;
 &lt;div style={{ display: 'flex', gap: '14px', marginTop: '18px', flexWrap: 'wrap' }}&gt;
 &lt;a className="button yellow small" href="/success"&gt;
          View Confirmation Details
 &lt;/a&gt;
 &lt;button className="button outline small" onClick={() =&gt; setState('idle')}&gt;
          Send Another Enquiry
 &lt;/button&gt;
 &lt;/div&gt;
 &lt;/div&gt;
  ) : (
    &lt;form
 ame="project-enquiry"
 method="POST"
 encType="multipart/form-data"
 action="https://formsubmit.co/hello@icongraphics.com.ng"
      onSubmit={submit}
      aria-busy={state === 'sending'}
    &gt;
      &lt;input type="hidden" name="_subject" value="New ICON GRAPHICS Project Enquiry" /&gt;
      &lt;input type="hidden" name="_template" value="table" /&gt;
      &lt;input type="hidden" name="_next" value="https://icongraphics.com.ng/success" /&gt;
      &lt;input type="text" name="_honey" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} /&gt;
      &lt;fieldset disabled={state === 'sending'}&gt;
        &lt;div className="form-grid"&gt;
          &lt;label&gt;
            Full name *
            &lt;input
              name="name"
              autoComplete="name"
              required
              placeholder="Your full name"
            /&gt;
          &lt;/label&gt;
          &lt;label&gt;
            Email address *
            &lt;input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
            /&gt;
          &lt;/label&gt;
          &lt;label&gt;
            WhatsApp number *
            &lt;input
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              placeholder="Include country code"
            /&gt;
          &lt;/label&gt;
          &lt;label&gt;
            Business or brand name
            &lt;input
              name="business"
              autoComplete="organization"
              placeholder="Optional"
            /&gt;
          &lt;/label&gt;
          &lt;label&gt;
            Service required *
            &lt;select name="service" required defaultValue=""&gt;
              &lt;option value="" disabled&gt;
                Select a service
              &lt;/option&gt;
              {services.map((s) =&gt; (
                &lt;option key={s.id}&gt;{s.title}&lt;/option&gt;
              ))}
              &lt;option&gt;Multiple services&lt;/option&gt;
            &lt;/select&gt;
          &lt;/label&gt;
          &lt;label&gt;
            Budget range
            &lt;input
              name="budget"
              placeholder="Optional · your estimated range"
            /&gt;
          &lt;/label&gt;
          &lt;label className="full"&gt;
            Tell us about your project *
            &lt;textarea
              name="message"
              rows={5}
              required
              placeholder="Your goals, deliverables, and anything we should know…"
            /&gt;
          &lt;/label&gt;
          &lt;label&gt;
            Budget currency
            &lt;input
              name="currency"
              placeholder="e.g. NGN, USD, GBP"
              maxLength={20}
            /&gt;
          &lt;/label&gt;
          &lt;label&gt;
            Preferred deadline
            &lt;input name="deadline" type="date" /&gt;
          &lt;/label&gt;
          &lt;label className="full"&gt;
            Expected deliverables
            &lt;textarea
              name="deliverables"
              rows={3}
              placeholder="What would you like to receive? Include formats or quantities if known."
            /&gt;
          &lt;/label&gt;
          &lt;label className="full"&gt;
            Existing website or reference links
            &lt;textarea
              name="reference-links"
              rows={2}
              placeholder="Website, social profiles or public folder links. Please do not include passwords or private access tokens."
            /&gt;
          &lt;/label&gt;
          &lt;label className="full"&gt;
            Reference attachment (optional, up to 5 MB)
            &lt;input
              type="file"
              name="reference-file"
              accept=".pdf,.jpg,.jpeg,.png,.webp"
              aria-describedby="file-help"
            /&gt;
            &lt;small id="file-help"&gt;
              One PDF or image. Share larger materials by link. Do not upload
              sensitive personal documents.
            &lt;/small&gt;
          &lt;/label&gt;
          &lt;details className="full detailed-brief"&gt;
            &lt;summary&gt;Add a detailed project brief (optional)&lt;/summary&gt;
            &lt;label&gt;
              Audience and objectives
              &lt;textarea
                name="brief-goals"
                rows={3}
                placeholder="Who is this for, and what should it communicate?"
              /&gt;
            &lt;/label&gt;
            &lt;label&gt;
              Creative preferences and existing materials
              &lt;textarea
                name="brief-direction"
                rows={3}
                placeholder="Brand guidelines, tone, references and materials you can provide."
              /&gt;
            &lt;/label&gt;
            &lt;label&gt;
              Approvals and project requirements
              &lt;textarea
                name="brief-requirements"
                rows={3}
                placeholder="Who approves the work? Any format, platform or accessibility requirements?"
              /&gt;
            &lt;/label&gt;
          &lt;/details&gt;
          &lt;label className="full"&gt;
            Preferred contact method *
            &lt;select name="contact-method" required&gt;
              &lt;option&gt;WhatsApp&lt;/option&gt;
              &lt;option&gt;Email&lt;/option&gt;
            &lt;/select&gt;
          &lt;/label&gt;
        &lt;/div&gt;
        &lt;label className="consent"&gt;
          &lt;input name="consent" value="agreed" type="checkbox" required /&gt;
          &lt;span&gt;
            I agree to the &lt;a href="/privacy"&gt;Privacy Policy&lt;/a&gt; and consent to
            being contacted about my enquiry.
          &lt;/span&gt;
        &lt;/label&gt;
        {fileError &amp;&amp; (
          &lt;p className="error" role="alert"&gt;
            {fileError}
          &lt;/p&gt;
        )}
        {state === 'error' &amp;&amp; (
          &lt;div className="error" role="alert" style={{ marginBottom: '14px' }}&gt;
            &lt;p style={{ margin: '0 0 8px' }}&gt;
              Your enquiry could not be sent automatically. Please try again or message our founder directly on WhatsApp.
            &lt;/p&gt;
            &lt;a href="/failure" className="text-link" style={{ fontSize: '13px', color: '#116780', textDecoration: 'underline' }}&gt;
              View alternative direct contact channels
            &lt;/a&gt;
          &lt;/div&gt;
        )}
        &lt;button className="button yellow" type="submit"&gt;
          {state === 'sending' ? 'Sending enquiry…' : 'Send Project Enquiry'}
        &lt;/button&gt;
        &lt;p className="fine"&gt;
          Your information is used to respond to your enquiry.
        &lt;/p&gt;
      &lt;/fieldset&gt;
    &lt;/form&gt;
  )
              }
