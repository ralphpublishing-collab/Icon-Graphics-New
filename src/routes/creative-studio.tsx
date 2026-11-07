import { useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '../components/MarketingPage'
import { services } from '../data/site'

function CreativeStudio() {
  const [goal, setGoal] = useState('Launch a new business')
  const [industry, setIndustry] = useState('Fashion & beauty')
  const [audience, setAudience] = useState('Everyday consumers')
  const [campaign, setCampaign] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('Branding & Graphic Design')
  const [brief, setBrief] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [fileInputKey, setFileInputKey] = useState(0)
  const [fileError, setFileError] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  const recommendation = useMemo(() => {
    if (/website|online|store|sell/i.test(goal)) return 'Website Design & Development'
    if (/audience|sales|awareness|promote/i.test(goal)) return 'Digital Marketing'
    if (/content|social/i.test(goal)) return 'Social Media Management & Content Creation'
    return 'Branding & Graphic Design'
  }, [goal])

  const ideas = useMemo(() => {
    const label = industry.toLowerCase()
    return [
      { title: 'Make the first impression count', concept: 'Introduce the brand with a clear visual identity, a concise origin story and a memorable launch announcement tailored to ' + label + '.', format: 'Launch graphic + short brand video' },
      { title: 'Show the value in action', concept: 'Create a short series showing how the offer solves a real customer problem for ' + audience.toLowerCase() + '.', format: 'Three social posts + one short-form video' },
      { title: 'Turn interest into enquiries', concept: 'Use a focused offer, a clear benefit and one direct call to action to invite people to take the next step.', format: 'Promotional flyer + WhatsApp call to action' },
    ]
  }, [industry, audience])

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
            <div className="creative-result"><span className="eyebrow">SUGGESTED SERVICE</span><h3>{recommendation}</h3><a className="text-link" href="/services">Explore services ↗</a></div>
            <p className="creative-note">This is a guided service matcher, not an AI-generated consultation.</p>
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
            <button className="button yellow" type="button" onClick={()=>setCampaign(true)}>Generate campaign ideas</button>
            {campaign && <div className="campaign-ideas">{ideas.map((idea,i)=><article key={idea.title}><span className="eyebrow">IDEA 0{i+1} · {idea.format}</span><h3>{idea.title}</h3><p>{idea.concept}</p></article>)}</div>}
            <p className="creative-note">Starter concepts are generated from guided templates; they are not live AI output.</p>
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
    { title: 'Creative Studio | ICON GRAPHICS' },
    { name: 'description', content: 'Explore creative service guidance, campaign starter ideas and send a design request to ICON GRAPHICS.' },
    { property: 'og:title', content: 'Creative Studio | ICON GRAPHICS' },
    { property: 'og:description', content: 'Find a creative direction, explore campaign ideas and start a project with ICON GRAPHICS.' },
  ], links: [{ rel: 'canonical', href: 'https://icongraphics.com.ng/creative-studio' }] }),
  component: CreativeStudio,
})
