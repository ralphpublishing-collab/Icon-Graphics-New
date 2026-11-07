import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '../components/MarketingPage'
import { services } from '../data/site'

function CreativeStudio() {
  const [goal, setGoal] = useState('Launch a new business')
  const [industry, setIndustry] = useState('Fashion & beauty')
  const [audience, setAudience] = useState('Everyday consumers')
  const [campaign, setCampaign] = useState<{campaign_title?: string; objective?: string; ideas?: {title: string; concept: string; format: string; call_to_action: string}[]; recommended_sequence?: string[] } | null>(null)
  const [campaignLoading, setCampaignLoading] = useState(false)
  const [campaignError, setCampaignError] = useState('')
  const [match, setMatch] = useState<{service?: string; rationale?: string; next_step?: string} | null>(null)
  const [matchLoading, setMatchLoading] = useState(false)
  const [matchError, setMatchError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('Branding & Graphic Design')
  const [brief, setBrief] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [fileInputKey, setFileInputKey] = useState(0)
  const [fileError, setFileError] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  async function generateMatch() {
    setMatchLoading(true)
    setMatchError('')
    try {
      const response = await fetch('https://studio-ai.icongraphics.com.ng/api/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal }),
        signal: AbortSignal.timeout(30000),
      })
      const payload = await response.json() as { ok?: boolean; result?: { service?: string; rationale?: string; next_step?: string }; error?: string }
      if (!response.ok || !payload.ok || !payload.result) throw new Error(payload.error || 'The service guide is temporarily unavailable.')
      setMatch(payload.result)
    } catch (error) {
      setMatchError(error instanceof Error ? error.message : 'Unable to generate guidance. Please try again.')
    } finally {
      setMatchLoading(false)
    }
  }

  async function generateCampaign() {
    setCampaignLoading(true)
    setCampaignError('')
    setCampaign(null)
    try {
      const response = await fetch('https://studio-ai.icongraphics.com.ng/api/campaign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ industry, audience }),
        signal: AbortSignal.timeout(45000),
      })
      const payload = await response.json() as { ok?: boolean; result?: { campaign_title?: string; objective?: string; ideas?: {title: string; concept: string; format: string; call_to_action: string}[]; recommended_sequence?: string[] }; error?: string }
      if (!response.ok || !payload.ok || !payload.result?.ideas?.length) throw new Error(payload.error || 'The campaign generator is temporarily unavailable.')
      setCampaign(payload.result)
    } catch (error) {
      setCampaignError(error instanceof Error ? error.message : 'Unable to generate campaign ideas. Please try again.')
    } finally {
      setCampaignLoading(false)
    }
  }

  function resetRequest() {
    setName('')
    setEmail('')
    setPhone('')
    setService('Branding & Graphic Design')
    setBrief('')
    setFile(null)
    setFileError('')
    setFileInputKey(key => key + 1)
    setStatus('idle')
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return
    if (file && file.size > 5 * 1024 * 1024) {
      setFileError('Please choose a file under 5 MB.')
      return
    }
    if (file && !['application/pdf', 'image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setFileError('Please use a PDF, JPEG, PNG or WebP file.')
      return
    }
    setFileError('')
    const data = new FormData()
    data.append('form-name', 'project-enquiry')
    data.append('bot-field', '')
    data.append('name', name)
    data.append('email', email)
    data.append('phone', phone)
    data.append('service', service)
    data.append('message', brief)
    data.append('business', '')
    data.append('budget', '')
    data.append('currency', 'NGN')
    data.append('deadline', '')
    data.append('deliverables', 'Submitted through Creative Studio')
    data.append('reference-links', '')
    data.append('contact-method', 'WhatsApp')
    data.append('consent', 'agreed')
    data.append('additional-services', '')
    if (file) data.append('reference-file', file)
    setStatus('sending')
    try {
      const response = await fetch('https://forms-api.icongraphics.com.ng/', {
        method: 'POST',
        body: data,
        signal: AbortSignal.timeout(20000),
      })
      const result = await response.json() as { ok?: boolean }
      if (!response.ok || result.ok !== true) throw new Error('Request failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return <Layout>
    <section className="section">
      <div className="wrap">
        <div className="eyebrow">THE ICON GRAPHICS CREATIVE STUDIO</div>
        <h1 style={{ maxWidth: 900, margin: '24px 0' }}>Turn an idea into <em>a direction.</em></h1>
        <p style={{ maxWidth: 680 }}>Explore creative directions for your business, generate a starter campaign plan and send your project brief to our team.</p>
        <div className="creative-grid" style={{ marginTop: 55 }}>
          <section className="creative-panel">
            <span className="eyebrow">01 / FIND YOUR DIRECTION</span>
            <h2 style={{ margin: '16px 0' }}>Creative service guide</h2>
            <p>Tell us what you are trying to achieve. We’ll point you towards a relevant ICON GRAPHICS service.</p>
            <label className="creative-label">What are you looking to do?
              <select value={goal} onChange={e=>setGoal(e.target.value)}>
                <option>Launch a new business</option><option>Refresh my brand identity</option><option>Build a website or online store</option><option>Promote a product or service</option><option>Grow my social media presence</option><option>Create business content</option>
              </select>
            </label>
            <button className="button yellow" type="button" onClick={generateMatch} disabled={matchLoading}>{matchLoading ? 'Thinking…' : 'Find my best-fit service'}</button>
            {match && <div className="creative-result" aria-live="polite"><span className="eyebrow">AI SERVICE RECOMMENDATION</span><h3>{match.service}</h3><p>{match.rationale}</p><p><strong>Suggested next step:</strong> {match.next_step}</p><a className="text-link" href="/services">Explore services ↗</a></div>}
            {matchError && <p className="creative-error" role="alert">{matchError}</p>}
            <p className="creative-note">AI-generated guidance to help you choose a starting point. Our team will confirm the best scope for your project.</p>
          </section>
          <section className="creative-panel">
            <span className="eyebrow">02 / BUILD A CAMPAIGN STARTER</span>
            <h2 style={{ margin: '16px 0' }}>Campaign idea generator</h2>
            <p>Generate a practical starting point for a promotional campaign.</p>
            <label className="creative-label">Your industry
              <select value={industry} onChange={e=>setIndustry(e.target.value)}><option>Fashion & beauty</option><option>Food & hospitality</option><option>Education</option><option>Professional services</option><option>Retail & ecommerce</option><option>Technology</option><option>Health & wellness</option><option>Other small business</option></select>
            </label>
            <label className="creative-label">Who do you want to reach?
              <select value={audience} onChange={e=>setAudience(e.target.value)}><option>Everyday consumers</option><option>Business owners</option><option>Young adults</option><option>Parents and families</option><option>Corporate decision-makers</option></select>
            </label>
            <button className="button yellow" type="button" onClick={generateCampaign} disabled={campaignLoading}>{campaignLoading ? 'Developing your campaign…' : 'Generate campaign ideas'}</button>
            {campaignError && <p className="creative-error" role="alert">{campaignError}</p>}
            {campaign && <div className="campaign-ideas" aria-live="polite"><h3>{campaign.campaign_title}</h3>{campaign.objective && <p>{campaign.objective}</p>}{campaign.ideas?.map((idea,i)=><article key={idea.title}><span className="eyebrow">IDEA 0{i+1} · {idea.format}</span><h3>{idea.title}</h3><p>{idea.concept}</p><p><strong>Call to action:</strong> {idea.call_to_action}</p></article>)}{campaign.recommended_sequence?.length ? <article><h3>Suggested rollout</h3><ol>{campaign.recommended_sequence.map((step,i)=><li key={i}>{step}</li>)}</ol></article> : null}</div>}
            <p className="creative-note">Campaign concepts are generated by AI and should be reviewed against your offer, budget and audience before launch.</p>
          </section>
        </div>
        <section className="creative-panel creative-request" id="quick-request">
          <span className="eyebrow">03 / TAKE THE NEXT STEP</span>
          <h2 style={{ margin: '16px 0' }}>Send a design request</h2>
          <p>Share the essentials and attach a reference. The ICON GRAPHICS team will review your request and follow up.</p>
          {status === 'success' ? <div className="form-success" role="status"><h2>Request received.</h2><p>Your request has been saved successfully. A confirmation email will be sent if email delivery is available.</p><button className="button outline small" onClick={resetRequest}>Send another request</button></div> :
          <form onSubmit={submit} className="creative-form" aria-busy={status === 'sending'}>
            <label className="creative-label">Your name<input required value={name} onChange={e=>setName(e.target.value)} autoComplete="name" /></label>
            <label className="creative-label">Email address<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} autoComplete="email" /></label>
            <label className="creative-label">WhatsApp number<input required type="tel" value={phone} onChange={e=>setPhone(e.target.value)} autoComplete="tel" /></label>
            <label className="creative-label">Service required<select value={service} onChange={e=>setService(e.target.value)}>{services.map(s=><option key={s.id}>{s.title}</option>)}</select></label>
            <label className="creative-label creative-full">Describe what you need<textarea required rows={5} value={brief} onChange={e=>setBrief(e.target.value)} placeholder="Tell us about the design, intended audience, content and expected outcome." /></label>
            <label className="creative-label creative-full">Reference file (optional, PDF/JPG/PNG/WebP, max 5 MB)<input key={fileInputKey} type="file" accept=".pdf,.jpg,.jpeg,.png,.webp" onChange={e=>setFile(e.target.files?.[0] || null)} /></label>
            {fileError && <p className="creative-error creative-full" role="alert">{fileError}</p>}
            <label className="creative-consent creative-full"><input type="checkbox" required /> I agree to the <a href="/privacy">Privacy Policy</a> and consent to being contacted about this request.</label>
            {status==='error' && <p className="creative-error creative-full" role="alert">We could not confirm that your request was saved. Please try again, or use the existing <a href="/request-a-quote">project enquiry form</a>.</p>}
            <button className="button yellow creative-full" disabled={status==='sending'}>{status==='sending'?'Sending request…':'Send design request'}</button>
          </form>}
        </section>
      </div>
    </section>
  </Layout>
}

export const Route = createFileRoute('/creative-studio')({
  head: () => ({ meta: [
    { title: 'AI Creative Studio | Campaign Ideas & Design Guidance | ICON GRAPHICS' },
    {
      name: 'description',
      content:
        'Use the ICON GRAPHICS AI Creative Studio for service guidance, campaign ideas and a direct design enquiry. Available to Nigerian and global businesses.',
    },
    { property: 'og:title', content: 'AI Creative Studio | ICON GRAPHICS' },
    {
      property: 'og:description',
      content:
        'Explore creative service guidance, generate campaign ideas and send a project request to ICON GRAPHICS.',
    },
    { property: 'og:url', content: 'https://icongraphics.com.ng/creative-studio' },
  ], links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/creative-studio' }] }),
  component: CreativeStudio,
})
