import { useEffect, useState } from 'react'
import { track } from '../lib/analytics'
import {
  services,
  projects,
  socials,
  whatsapp,
  catalogueUrl,
  process,
  processDescriptions,
  faqCategories,
  testimonials,
  pricingDisclaimer,
  type Project,
} from '../data/site'
import { EnquiryForm } from './EnquiryForm'
export const image = (file: string, _w = 800) => '/img/' + file

export function WA({
  children = 'Let’s talk on WhatsApp',
  message,
  className = 'button outline',
}: {
  children?: React.ReactNode
  message?: string
  className?: string
  showArrow?: boolean
}) {
  return (
    <a
      className={className}
      href={whatsapp(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleNewsletter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email || loading) return
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('form-name', 'newsletter')
      formData.append('email', email)
      await fetch('/__forms.html', {
        method: 'POST',
        body: formData,
        signal: AbortSignal.timeout(10000),
      })
      setSubmitted(true)
      setEmail('')
    } catch {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="footer-newsletter">
      <h3>Stay Connected With Our Newsletter</h3>
      <p className="muted" style={{ fontSize: '13px', lineHeight: 1.6, marginBottom: '14px' }}>
        Get curated creative insights, design trends, and studio announcements delivered directly to your inbox.
      </p>
      {submitted ? (
        <div style={{ padding: '12px 16px', background: '#65dbed18', border: '1px solid #65dbed', borderRadius: '4px', color: '#65dbed', fontSize: '13px' }}>
          ✓ Thank you for subscribing. We look forward to connecting.
        </div>
      ) : (
        <form onSubmit={handleNewsletter} style={{ display: 'flex', gap: '8px', maxWidth: '440px', flexWrap: 'wrap' }}>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            style={{
              flex: '1 1 200px',
              padding: '12px 14px',
              background: '#1d1e22',
              border: '1px solid #33353b',
              borderRadius: '4px',
              color: '#f6f6f7',
              fontSize: '13px',
            }}
          />
          <button
            type="submit"
            disabled={loading}
            className="button yellow small"
            style={{ padding: '12px 22px', fontWeight: 700 }}
          >
            {loading ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
      )}
    </div>
  )
}
export function GradientSpark({
  size = 28,
  className = '',
}: {
  size?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="brandSparkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f72585" />
          <stop offset="50%" stopColor="#9b5de5" />
          <stop offset="100%" stopColor="#00b4d8" />
        </linearGradient>
      </defs>
      <path
        d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z"
        fill="url(#brandSparkGrad)"
      />
    </svg>
  )
}

function Logo() {
  return (
    <a className="logo" href="/" aria-label="ICON GRAPHICS home">
      <img
        src="/img/logo.png"
        width="44"
        height="44"
        alt="ICON GRAPHICS 3D gradient logo"
        style={{ objectFit: 'contain', borderRadius: '4px' }}
      />
      <span>
        ICON GRAPHICS<small>CREATIVE, MEDIA & DIGITAL SOLUTIONS</small>
      </span>
    </a>
  )
}
export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return
      const anchor = event.target.closest('a')
      if (!anchor) return
      const url = anchor.getAttribute('href') || ''
      if (url.startsWith('https://wa.me/')) track('whatsapp_clicked')
      else if (url.startsWith('mailto:')) track('email_clicked')
      else if (url.startsWith('/portfolio/'))
        track('portfolio_opened', { project: url.split('/').pop() || '' })
      else if (catalogueUrl && url === catalogueUrl) track('catalogue_clicked')
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header
        className="header"
        onKeyDown={(event) => {
          if (event.key === 'Escape') setOpen(false)
        }}
      >
        <div className="wrap nav">
          <Logo />
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
          >
            {open ? 'Close ×' : 'Menu ☰'}
          </button>
          <nav
            id="main-nav"
            className={open ? 'open' : ''}
            aria-label="Main navigation"
          >
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Services', '/services'],
              ['Portfolio', '/portfolio'],
              ['Pricing', '/pricing'],
              ['How We Work', '/how-we-work'],
              ['Insights', '/insights'],
              ['Contact', '/contact'],
            ].map(([label, url]) => (
              <a href={url} key={url}>
                {label}
              </a>
            ))}
            <a className="button yellow small" href="/request-a-quote">
              Request a Quote
            </a>
          </nav>
        </div>
      </header>
      <main id="main">{children}</main>
      <section className="cta">
        <div className="wrap">
          <div className="eyebrow">GREAT WORK STARTS WITH A CONVERSATION</div>
          <div className="cta-row">
            <h2>
              Have a vision?
              <br />
              Let’s make it <em>iconic.</em>
            </h2>
            <a
              className="circle-link"
              href="/request-a-quote"
              aria-label="Start a project"
            >
              <GradientSpark size={24} />
            </a>
          </div>
          <div className="cta-bottom">
            <p>Bring the idea. We’ll bring the creative thinking.</p>
            <WA className="text-link">Start a conversation</WA>
          </div>
        </div>
      </section>
      <footer>
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>Design. Create. Produce. Connect.</p>
            <p className="muted">
              Creative thinking. Purposeful execution.
              <br />
              From Nigeria, connected to your world.
            </p>
            <SocialLinks />
          </div>
          <div>
            <h3>Explore</h3>
            {[
              ['About the brand', '/about'],
              ['Meet the founder', '/founder'],
              ['Portfolio', '/portfolio'],
              ['Pricing', '/pricing'],
              ['How We Work', '/how-we-work'],
              ['Insights', '/insights'],
              ['FAQs', '/faq'],
              ['Request a quote', '/request-a-quote'],
            ].map(([t, u]) => (
              <a key={u} href={u}>
                {t}
              </a>
            ))}
          </div>
          <div className="footer-services">
            <h3>Our capabilities</h3>
            {services.map((s) => (
              <a key={s.id} href={'/services#' + s.id}>
                {s.title}
              </a>
            ))}
          </div>
          <div>
            <h3>Let’s connect</h3>
            <a href="mailto:hello@icongraphics.com.ng">
              hello@icongraphics.com.ng
            </a>
            <a href={whatsapp()}>+234 808 671 4454</a>
            <p className="muted">
              Founder & Creative Director
              <br />
              Rapheal Adebayo
            </p>
            <Catalogue />
          </div>
        </div>
        <div className="wrap footer-newsletter-row">
          <NewsletterSignup />
        </div>
        <div className="wrap footer-bottom">
          <span>© 2026 ICON GRAPHICS. All Rights Reserved.</span>
          <div>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
            <a href="/refund-cancellation">Refund & Cancellation</a>
            <a href="/project-delivery">Project Delivery</a>
          </div>
        </div>
      </footer>
      <WA className="floating-wa">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#waGradient)"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="waGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f72585" />
              <stop offset="50%" stopColor="#9b5de5" />
              <stop offset="100%" stopColor="#00b4d8" />
            </linearGradient>
          </defs>
          <path d="M21 11.5a9 9 0 0 1-13.2 8L3 21l1.5-4.8A9 9 0 1 1 21 11.5Z" />
          <path d="M8 7c0 5 3 8 8 9l1-3-3-1-1 1-3-3 1-1-1-3Z" />
        </svg>
        <span className="floating-label">Let’s talk</span>
      </WA>
    </>
  )
}
export function SocialLinks() {
  return (
    <div className="socials">
      {socials.map(([name, url], i) => (
        <a
          href={url}
          key={name}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          title={name}
        >
          <svg
            viewBox="0 0 24 24"
            width="19"
            height="19"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            {i === 0 ? (
              <>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".7" />
              </>
            ) : i === 1 ? (
              <path d="M14 3v12a4 4 0 1 1-4-4m4-8c0 4 3 6 6 6" />
            ) : i === 2 ? (
              <path d="m4 3 16 18h-5L4 3h5L20 21M20 3 4 21" />
            ) : (
              <>
                <rect x="2" y="5" width="20" height="14" rx="4" />
                <path d="m10 9 5 3-5 3Z" />
              </>
            )}
          </svg>
        </a>
      ))}
    </div>
  )
}
export function Catalogue({ className = 'catalogue button outline' }: { className?: string }) {
  return (
    <a
      className={className}
      href={catalogueUrl || 'https://wa.me/c/2348086714454'}
      target="_blank"
      rel="noopener noreferrer"
    >
      View WhatsApp Catalogue
    </a>
  )
}
function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span className="dot" />
      {children}
    </div>
  )
}
export function Art({
  project,
  hero = false,
}: {
  project: Project
  hero?: boolean
}) {
  return (
    <div
      className={'art art-' + (project.art || 'brand') + (hero ? ' hero-art' : '')}
      role="img"
      aria-label={`${project.title} · client case study`}
    >
      {project.image ? (
        <img
          src={`/.netlify/images?url=${encodeURIComponent(project.image)}&w=1000&fm=webp`}
          loading="lazy"
          alt={project.title}
        />
      ) : project.video ? (
        <video
          muted
          playsInline
          preload="metadata"
          src={project.video}
          aria-label={project.title + ' video preview'}
        />
      ) : project.id === 'erin-fashion-world' ? (
        <div className="brand-object" style={{ transform: 'none', width: '85%', height: '80%' }}>
          <div
            className="brand-card"
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #18191d 0%, #2b2c34 100%)',
              border: '1px solid #d4af3750',
              color: '#f6f6f7',
              borderRadius: '6px',
              padding: '28px',
              boxShadow: '0 12px 30px #00000040',
            }}
          >
            <div>
              <span style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#65dbed', textTransform: 'uppercase', fontWeight: 700 }}>
                CLIENT CASE STUDY · ILORIN
              </span>
              <h4 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '26px', margin: '14px 0 6px', color: '#ffffff', letterSpacing: '-0.03em' }}>
                ERIN FASHION WORLD
              </h4>
              <small style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#c2c6d0', textTransform: 'uppercase' }}>
                LUXURY THRIFT IDENTITY & BRAND SYSTEM
              </small>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '20px' }}>
              <span style={{ fontSize: '32px', fontFamily: 'Manrope, sans-serif', fontWeight: 800, color: '#65dbed' }}>
                EFW
              </span>
              <span style={{ fontSize: '11px', color: '#888d98', letterSpacing: '0.08em' }}>
                ICON GRAPHICS
              </span>
            </div>
          </div>
        </div>
      ) : project.id === 'lewa-glam-beauty-empire' ? (
        <div className="brand-object" style={{ transform: 'none', width: '85%', height: '80%' }}>
          <div
            className="brand-card"
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #20131e 0%, #3a1a33 100%)',
              border: '1px solid #e2739650',
              color: '#f6f6f7',
              borderRadius: '6px',
              padding: '28px',
              boxShadow: '0 12px 30px #00000040',
            }}
          >
            <div>
              <span style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#65dbed', textTransform: 'uppercase', fontWeight: 700 }}>
                CLIENT CASE STUDY · OFFA
              </span>
              <h4 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '24px', margin: '14px 0 6px', color: '#ffffff', letterSpacing: '-0.03em' }}>
                LEWA GLAM BEAUTY EMPIRE
              </h4>
              <small style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#e8b4c8', textTransform: 'uppercase' }}>
                SALON PROMOTIONAL FLYERS & SOCIAL SUITE
              </small>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '20px' }}>
              <span style={{ fontSize: '28px', fontFamily: 'Manrope, sans-serif', fontWeight: 800, color: '#e27396' }}>
                LEWA
              </span>
              <span style={{ fontSize: '11px', color: '#b9a8b4', letterSpacing: '0.08em' }}>
                BEAUTY & BRIDAL
              </span>
            </div>
          </div>
        </div>
      ) : project.id === 'opeyemi-beauty-touch' ? (
        <div className="brand-object" style={{ transform: 'none', width: '85%', height: '80%' }}>
          <div
            className="brand-card"
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #191b22 0%, #202738 100%)',
              border: '1px solid #4a6fa550',
              color: '#f6f6f7',
              borderRadius: '6px',
              padding: '28px',
              boxShadow: '0 12px 30px #00000040',
            }}
          >
            <div>
              <span style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#65dbed', textTransform: 'uppercase', fontWeight: 700 }}>
                CLIENT CASE STUDY · ILORIN
              </span>
              <h4 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '23px', margin: '14px 0 6px', color: '#ffffff', letterSpacing: '-0.03em' }}>
                OPEYEMI BEAUTY TOUCH
              </h4>
              <small style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#a8bbd9', textTransform: 'uppercase' }}>
                BRIDAL GLAM BROCHURE & EXECUTIVE CARDS
              </small>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '20px' }}>
              <span style={{ fontSize: '26px', fontFamily: 'Manrope, sans-serif', fontWeight: 800, color: '#65dbed' }}>
                OBT
              </span>
              <span style={{ fontSize: '11px', color: '#8898b0', letterSpacing: '0.08em' }}>
                COLLECTIONS
              </span>
            </div>
          </div>
        </div>
      ) : project.id === 'global-trade-connect' ? (
        <div className="brand-object" style={{ transform: 'none', width: '85%', height: '80%' }}>
          <div
            className="brand-card"
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #101921 0%, #172c3c 100%)',
              border: '1px solid #65dbed40',
              color: '#f6f6f7',
              borderRadius: '6px',
              padding: '28px',
              boxShadow: '0 12px 30px #00000040',
            }}
          >
            <div>
              <span style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#65dbed', textTransform: 'uppercase', fontWeight: 700 }}>
                CLIENT CASE STUDY · UNITED KINGDOM
              </span>
              <h4 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '24px', margin: '14px 0 6px', color: '#ffffff', letterSpacing: '-0.03em' }}>
                GLOBAL TRADE CONNECT
              </h4>
              <small style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#a0c4d8', textTransform: 'uppercase' }}>
                INVESTOR PITCH DECK & EXPORT PROPOSALS
              </small>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '20px' }}>
              <span style={{ fontSize: '26px', fontFamily: 'Manrope, sans-serif', fontWeight: 800, color: '#65dbed' }}>
                GTC
              </span>
              <span style={{ fontSize: '11px', color: '#7ba0b4', letterSpacing: '0.08em' }}>
                UK & CROSS BORDER
              </span>
            </div>
          </div>
        </div>
      ) : project.id === 'nova-global-brands' ? (
        <div className="brand-object" style={{ transform: 'none', width: '85%', height: '80%' }}>
          <div
            className="brand-card"
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #1b1712 0%, #302619 100%)',
              border: '1px solid #e5a93b50',
              color: '#f6f6f7',
              borderRadius: '6px',
              padding: '28px',
              boxShadow: '0 12px 30px #00000040',
            }}
          >
            <div>
              <span style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#65dbed', textTransform: 'uppercase', fontWeight: 700 }}>
                CLIENT CASE STUDY · UNITED STATES
              </span>
              <h4 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '24px', margin: '14px 0 6px', color: '#ffffff', letterSpacing: '-0.03em' }}>
                NOVA GLOBAL BRANDS
              </h4>
              <small style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#dfc28d', textTransform: 'uppercase' }}>
                CONSUMER PACKAGING & DIGITAL CAMPAIGNS
              </small>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '20px' }}>
              <span style={{ fontSize: '26px', fontFamily: 'Manrope, sans-serif', fontWeight: 800, color: '#e5a93b' }}>
                NOVA
              </span>
              <span style={{ fontSize: '11px', color: '#a08f76', letterSpacing: '0.08em' }}>
                AFRICA FOCUSED LINE
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="editorial-object">
          <small>ICON GRAPHICS · CLIENT CASE STUDY</small>
          <strong>{project.title}</strong>
          <span>{project.client || 'CREATIVE EXCELLENCE'}</span>
        </div>
      )}
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const s = services.find((s) => s.id === project.category)!
  return (
    <article className="project-card">
      <a href={'/portfolio/' + project.id} className="project-image">
        <Art project={project} />
        <span className="project-arrow">↗</span>
      </a>
      <div className="project-info">
        <div>
          <p>{s.title}</p>
          <h3>
            <a href={'/portfolio/' + project.id}>{project.title}</a>
          </h3>
        </div>
        <span>↗</span>
      </div>
      <WA
        className="button small dark"
        message={`Hello ICON GRAPHICS, I saw your case study for ${project.title} and would like to enquire about a similar project.`}
      >
        Enquire on WhatsApp
      </WA>
    </article>
  )
}
function ServicesOverview() {
  return (
    <section className="section light">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <Label>WHAT WE DO</Label>
            <h2>
              One creative partner.
              <br />
              <em>So many possibilities.</em>
            </h2>
          </div>
          <p>
            From the first idea to the final impression, thoughtful creative
            solutions for every part of your brand.
          </p>
        </div>
        <div className="service-list">
          {services.map((s, i) => (
            <a href={'/services#' + s.id} key={s.id}>
              <span className="service-number">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{s.title}</h3>
              <span className="service-icon">{s.icon}</span>
              <span className="service-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
function Featured() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <Label>CREATIVE DIRECTIONS</Label>
            <h2>
              A glimpse of
              <br />
              <em>what’s possible.</em>
            </h2>
          </div>
          <div>
            <p>
              Ideas, expressions and possibilities.
              <br />
              Purposeful design, media production and digital growth for brands that aspire to lead.
            </p>
            <a className="text-link" href="/portfolio">
              Explore the portfolio ↗
            </a>
          </div>
        </div>
        <div className="featured-grid">
          {['branding', 'web', 'video']
            .flatMap((category) =>
              projects.filter((p) => p.category === category).slice(0, 1),
            )
            .map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
        </div>
      </div>
    </section>
  )
}
export function CinematicFounderSection() {
  return (
    <section className="cinematic-founder-section" id="founder-spotlight">
      <div className="wrap cinematic-founder-grid">
        <div className="cinematic-founder-visual">
          <div className="cinematic-founder-frame">
            <img
              src="/img/rapheal-adebayo-studio.jpeg"
              alt="Rapheal Adebayo, Founder & Creative Director of ICON GRAPHICS"
              loading="lazy"
              width="1200"
              height="675"
            />
            <span className="cinematic-founder-badge">
              FOUNDER & CREATIVE DIRECTOR
            </span>
          </div>
        </div>
        <div className="cinematic-founder-copy">
          <Label>FOUNDER LED CREATIVE AGENCY</Label>
          <h2 className="cinematic-statement">
            WE CREATE.
            <br />
            WE CONNECT.
            <br />
            <em>WE TRANSFORM.</em>
          </h2>
          <p className="cinematic-supporting">
            “We turn ideas into powerful visual, creative and digital
            experiences that help brands stand out, communicate confidently and
            grow beyond boundaries.”
          </p>
          <div className="cinematic-meta">
            <span className="cinematic-founder-name">Rapheal Adebayo</span>
            <span className="cinematic-founder-title">
              Founder & Creative Director, ICON GRAPHICS
            </span>
          </div>
          <div className="cinematic-actions">
            <a className="button yellow" href="/founder">
              Meet the Founder
            </a>
            <WA
              className="button dark"
              message="Hello Rapheal, I would like to discuss a project with ICON GRAPHICS."
            >
              Start a Conversation
            </WA>
          </div>
        </div>
      </div>
    </section>
  )
}
function Why() {
  return (
    <section className="section why">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <Label>THE ICON GRAPHICS DIFFERENCE</Label>
            <h2>
              Good design is thoughtful.
              <br />
              <em>So is good collaboration.</em>
            </h2>
          </div>
        </div>
        <div className="why-grid">
          {[
            [
              'Creative breadth',
              'Nine connected creative and digital capabilities, with a considered approach to each brief.',
            ],
            [
              'A direct connection',
              'Speak directly with the founder responsible for creative direction and delivery.',
            ],
            [
              'Your brand, considered',
              'Attention to detail and creative problem solving grounded in your goals and audience.',
            ],
            [
              'Clarity at every step',
              'A clear project journey for businesses, individuals and organisations, in Nigeria and internationally.',
            ],
          ].map(([t, d], i) => (
            <div key={t}>
              <span>0{i + 1} /</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export function Process() {
  return (
    <section className="section light">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <Label>HOW WE WORK</Label>
            <h2>
              From your first hello
              <br />
              <em>to the final detail.</em>
            </h2>
          </div>
          <p>
            A clear, collaborative process. We agree on the scope, keep the
            conversation open, and create with purpose.
          </p>
        </div>
        <div className="process-list">
          {process.map((p, i) => (
            <div key={p}>
              <span>0{i + 1}</span>
              <div>
                <h3>{p}</h3>
                <p>{processDescriptions[i]}</p>
              </div>
              <span>↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
function Testimonials() {
  return (
    <section className="testimonials wrap">
      <Label>CLIENT VOICES</Label>
      <h2>
        Good work deserves
        <br />
        <em>honest feedback.</em>
      </h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <article className="testimonial-card" key={t.name}>
            <div className="testimonial-quote-mark" aria-hidden="true">
              “
            </div>
            <p className="testimonial-text">{t.quote}</p>
            <div className="testimonial-author">
              <strong>{t.name}</strong>
              {t.role && <span className="testimonial-role">{t.role}</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
export function FAQ() {
  return (
    <section className="section light" id="faq">
      <div className="wrap faq-layout">
        <div>
          <Label>A LITTLE CLARITY</Label>
          <h2>
            You ask.
            <br />
            <em>We answer.</em>
          </h2>
          <p style={{ marginTop: '16px', color: '#555b66', fontSize: '15px' }}>
            Everything you need to know about starting a project, transparent
            pricing, revision workflows, and delivery arrangements.
          </p>
          <WA className="text-link">Let’s discuss your project</WA>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {faqCategories.map((category) => (
            <div key={category.title}>
              <h3
                style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  letterSpacing: '0.1em',
                  color: '#116780',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                {category.title}
              </h3>
              <div>
                {category.items.map(([q, a]) => (
                  <details key={q}>
                    <summary>
                      {q}
                      <span>+</span>
                    </summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export function Home() {
  return (
    <Layout>
      <section className="hero wrap">
        <div className="hero-copy">
          <Label>ICON GRAPHICS / CREATIVE, MEDIA & DIGITAL SOLUTIONS</Label>
          <h1>
            Your vision.
            <br />
            Our creative
            <br />
            <em>expertise.</em>
            <span className="headline-spark" aria-hidden="true">
              ✳
            </span>
          </h1>
          <p>
            We turn ideas into identities, stories and digital experiences that
            connect. Creative, media and digital solutions, all in one place.
          </p>
          <div className="hero-buttons">
            <a className="button yellow" href="/services">
              Explore Our Services
            </a>
            <a className="button outline" href="/portfolio">
              View Our Portfolio
            </a>
          </div>
          <WA className="hero-whatsapp">Let’s Discuss Your Project</WA>
        </div>
        <div className="hero-collage">
          <div className="collage-caption">
            <span>DESIGNED TO STAND OUT.</span>
            <span>MADE TO CONNECT. ↗</span>
          </div>
          <div className="hero-brand-stage">
            <img
              src="/img/rapheal-adebayo-studio.jpeg"
              width="700"
              height="394"
              fetchPriority="high"
              alt="Rapheal Adebayo, Founder & Creative Director of ICON GRAPHICS"
              style={{ objectFit: 'cover', aspectRatio: '16/9' }}
            />
            <span>DESIGN. CREATE. PRODUCE. CONNECT.</span>
          </div>
          <div className="round-stamp">
            <span>DESIGN. CREATE.</span>
            <b>↗</b>
            <span>PRODUCE. CONNECT.</span>
          </div>
          <div className="collage-foot">
            <span>IDEAS WITH INTENTION.</span>
            <span>EXECUTION WITH IMPACT.</span>
          </div>
        </div>
      </section>
      <div className="hero-bottom wrap">
        <span>
          <i className="dot" /> BASED IN NIGERIA. CREATING BEYOND BORDERS.
        </span>
        <a href="#intro">SCROLL TO EXPLORE ↓</a>
      </div>
      <div className="ticker" aria-label="Design. Create. Produce. Connect.">
        <div>
          DESIGN <span>✳</span> CREATE <span>✳</span> PRODUCE <span>✳</span>{' '}
          CONNECT <span>✳</span> DESIGN <span>✳</span> CREATE <span>✳</span>
        </div>
      </div>
      <section id="intro" className="intro wrap">
        <Label>WE ARE ICON GRAPHICS</Label>
        <div>
          <h2>
            Big ideas deserve
            <br />
            <em>exceptional expression.</em>
          </h2>
          <p>
            ICON GRAPHICS delivers creative, media and digital solutions that
            help businesses, brands and individuals build stronger identities,
            communicate effectively and stand out in the digital world.
          </p>
          <a className="text-link" href="/about">
            Get to know us ↗
          </a>
        </div>
      </section>
      <ServicesOverview />
      <Featured />
      <CinematicFounderSection />
      <Why />
      <Process />
      <Testimonials />
      <section className="section light">
        <div className="wrap next-step-grid">
          <div>
            <Label>PLAN WITH CLARITY</Label>
            <h2>
              A scope that fits
              <br />
              <em>your next step.</em>
            </h2>
            <p>
              Explore quotation-based service packages. Agree the deliverables,
              schedule and payment arrangements directly with Rapheal.
            </p>
            <a className="button dark" href="/pricing">
              Explore Pricing & Packages
            </a>
          </div>
          <div>
            <Label>INSIGHTS / KNOWLEDGE CENTRE</Label>
            <h2>
              Before the brief,
              <br />
              <em>a little perspective.</em>
            </h2>
            <p>
              Practical guides to preparing a creative brief, planning a website
              and sharing useful media references.
            </p>
            <a className="button dark" href="/insights">
              Read the guides
            </a>
          </div>
        </div>
      </section>
      <FAQ />
      <section className="contact-strip wrap">
        <Label>LET’S CONNECT</Label>
        <a href="mailto:hello@icongraphics.com.ng">
          hello@icongraphics.com.ng ↗
        </a>
        <SocialLinks />
      </section>
    </Layout>
  )
}
export function PageHero({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description: string
}) {
  return (
    <section className="page-hero wrap">
      <Label>{label}</Label>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}
export function About() {
  return (
    <Layout>
      <PageHero
        label="THE BRAND"
        title="Creative by nature. Intentional by design."
        description="ICON GRAPHICS is a founder led creative, media and digital solutions business. We connect ideas with purposeful execution for brands, businesses and individuals."
      />
      <div className="wrap" style={{ margin: '30px auto 40px' }}>
        <div className="cinematic-founder-frame">
          <img
            src="/img/rapheal-adebayo-studio.jpeg"
            alt="Rapheal Adebayo, Founder & Creative Director of ICON GRAPHICS, in studio"
            loading="lazy"
            width="1200"
            height="675"
            style={{ width: '100%', height: 'auto', aspectRatio: '16/9', objectFit: 'cover' }}
          />
          <span className="cinematic-founder-badge">
            RAPHEAL ADEBAYO · FOUNDER & CREATIVE DIRECTOR
          </span>
        </div>
      </div>
      <section className="section light">
        <div className="wrap about-grid">
          <div>
            <Label>OUR PURPOSE</Label>
            <h2>
              Make the idea clear.
              <br />
              <em>Make the outcome matter.</em>
            </h2>
          </div>
          <div>
            <p className="large-copy">
              Good creative work starts with understanding. Who are you speaking
              to? What needs to change? What should your audience remember?
            </p>
            <p>
              Our purpose is to help you answer those questions through
              identity, images, words, sound and digital experiences. Rooted in
              Nigeria and open to international collaboration, ICON GRAPHICS
              brings a personal, thoughtful approach to each conversation.
            </p>
          </div>
        </div>
        <div className="wrap values-grid">
          {[
            [
              'Vision',
              'To be a trusted creative partner for people and organisations who value purposeful expression and clear communication.',
            ],
            [
              'Mission',
              'To translate client needs into considered creative, media and digital solutions that communicate effectively.',
            ],
            [
              'Values',
              'Clarity, care, creative problem solving and attention to detail guide how we think, communicate and create.',
            ],
            [
              'Approach',
              'Listen first. Define the brief. Explore the right direction. Develop the details together, with quality at the centre.',
            ],
          ].map(([t, d]) => (
            <article key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <CinematicFounderSection />
      <Why />
    </Layout>
  )
}
export function Founder() {
  return (
    <Layout>
      <PageHero
        label="MEET THE FOUNDER"
        title="The person behind the perspective."
        description="Direct collaboration. Thoughtful creative direction. A personal commitment to quality and craft."
      />
      <div className="wrap" style={{ margin: '30px auto 50px' }}>
        <div className="cinematic-founder-frame">
          <img
            src="/img/rapheal-adebayo-studio.jpeg"
            alt="Rapheal Adebayo, Founder & Creative Director of ICON GRAPHICS, in studio"
            width="1200"
            height="675"
            style={{ width: '100%', height: 'auto', aspectRatio: '16/9', objectFit: 'cover' }}
          />
          <span className="cinematic-founder-badge">
            RAPHEAL ADEBAYO · FOUNDER & CREATIVE DIRECTOR
          </span>
        </div>
      </div>
      <section className="section light">
        <div className="wrap founder-split">
          <div className="portrait-wrap">
            <img
              src={image('rapheal-adebayo-supplied.jpeg', 900)}
              alt="Rapheal Adebayo, Founder and Creative Director of ICON GRAPHICS"
            />
            <span className="portrait-label">RAPHEAL ADEBAYO / FOUNDER</span>
          </div>
          <div className="founder-copy">
            <Label>FOUNDER & CREATIVE DIRECTOR</Label>
            <h2>
              Rapheal
              <br />
              <em>Adebayo.</em>
            </h2>
            <p className="large-copy">
              The creative mind and direct point of contact behind ICON
              GRAPHICS.
            </p>
            <p>
              Rapheal leads the brand’s creative direction and service delivery.
              From the initial discussion to the final handover, his approach
              centres on understanding what clients need and finding a clear,
              considered way to express it.
            </p>
            <h3>We create. We connect. We transform.</h3>
            <p>
              “We turn ideas into powerful visual, creative and digital
              experiences that help brands stand out, communicate confidently
              and grow beyond boundaries.”
            </p>
            <h3>A philosophy of purpose</h3>
            <p>
              Every visual, word and creative decision serves a purpose. The
              work begins with listening, develops through creative
              problem solving, and comes together through attention to detail.
            </p>
            <h3>Built on direct communication</h3>
            <p>
              A productive creative partnership needs an understood brief,
              honest conversations and an agreed process. When you work with
              ICON GRAPHICS, you collaborate directly with the founder responsible
              for your creative deliverables.
            </p>
            <WA
              className="button yellow"
              message="Hello Rapheal, I would like to discuss a project with ICON GRAPHICS."
            >
              Talk to Rapheal on WhatsApp
            </WA>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export function Services() {
  return (
    <Layout>
      <PageHero
        label="OUR CAPABILITIES"
        title="Nine disciplines. One creative connection."
        description="From how your brand looks to how it sounds, speaks and shows up online, discover the right creative support for your next step."
      />
      <div className="service-jumps wrap">
        {services.map((s, i) => (
          <a key={s.id} href={'#' + s.id}>
            0{i + 1} {s.title}
          </a>
        ))}
      </div>
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={'section service-detail ' + (i % 2 === 0 ? 'light' : '')}
        >
          <div className="wrap service-detail-grid">
            <div>
              <Label>
                0{i + 1} / {s.title.toUpperCase()}
              </Label>
              <h2>{s.title}</h2>
              <p className="large-copy">{s.description}</p>

              <div className="service-items-box">
                <div className="service-items-heading">
                  KEY CAPABILITIES & DELIVERABLES
                </div>
                <div className="service-items-chips">
                  {s.items.map((item) => (
                    <span className="service-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="service-tiers-grid">
                {s.tiers.map((tier) => (
                  <div className="tier-card" key={tier.name}>
                    <div>
                      <div className="tier-header">
                        <span className="tier-name">{tier.name}</span>
                        <span className="tier-billing-badge">
                          {tier.billing}
                        </span>
                      </div>
                      <div className="tier-price-row">
                        <span className="tier-price-ngn">{tier.priceNgn}</span>
                        <span className="tier-price-usd">
                          / {tier.priceUsd}
                        </span>
                      </div>
                      <p className="tier-desc">{tier.description}</p>
                    </div>
                    <WA
                      className="button small outline"
                      message={`Hello ICON GRAPHICS, I am interested in the ${tier.name} package (${tier.priceNgn} / ${tier.priceUsd}) for ${s.title}.`}
                    >
                      Enquire {tier.name}
                    </WA>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '14px',
                  flexWrap: 'wrap',
                  marginTop: '24px',
                }}
              >
                <WA
                  className={'button ' + (i % 2 === 0 ? 'dark' : 'yellow')}
                  message={`Hello ICON GRAPHICS, I would like to enquire about ${s.title}.`}
                >
                  Discuss this service
                </WA>
                <a className="button outline" href="/request-a-quote">
                  Request a Quote
                </a>
              </div>
            </div>
            <div>
              {projects
                .filter((p) => p.category === s.id)
                .slice(0, 1)
                .map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              <a className="text-link" href={'/portfolio?category=' + s.id}>
                Explore this portfolio category ↗
              </a>
            </div>
          </div>
        </section>
      ))}
      <section
        className="section"
        style={{ paddingTop: '20px', paddingBottom: '60px' }}
      >
        <div className="wrap">
          <div className="pricing-disclaimer-box">
            <strong>Pricing Information:</strong> {pricingDisclaimer}
          </div>
        </div>
      </section>
    </Layout>
  )
}
export function Portfolio({
  initialFilter = 'all',
}: {
  initialFilter?: string
}) {
  const [filter, setFilter] = useState(
    services.some((s) => s.id === initialFilter) ? initialFilter : 'all',
  )
  const displayableProjects = projects
  const activeServices = services.filter((s) =>
    displayableProjects.some((p) => p.category === s.id),
  )
  return (
    <Layout>
      <PageHero
        label="THE PORTFOLIO"
        title="Client Case Studies"
        description="Explore authentic client work and design systems delivered by ICON GRAPHICS for brands in Nigeria, the United Kingdom, and the United States."
      />
      <section className="section portfolio-section">
        <div className="wrap">
          <div className="filter-bar" aria-label="Filter portfolio">
            <button
              aria-pressed={filter === 'all'}
              onClick={() => setFilter('all')}
            >
              All projects
            </button>
            {activeServices.map((s) => (
              <button
                key={s.id}
                aria-pressed={filter === s.id}
                onClick={() => setFilter(s.id)}
              >
                {s.title}
              </button>
            ))}
          </div>
          <p className="results-count" aria-live="polite">
            {filter === 'all'
              ? displayableProjects.length
              : displayableProjects.filter((p) => p.category === filter).length}{' '}
            client case studies · Real client projects
          </p>
          <div className="portfolio-grid">
            {displayableProjects
              .filter((p) => filter === 'all' || p.category === filter)
              .map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
          </div>

          <div
            style={{
              marginTop: '60px',
              padding: '40px 30px',
              background: '#16171b',
              border: '1px solid #ffffff15',
              borderRadius: '6px',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                color: '#65dbed',
                textTransform: 'uppercase',
                fontWeight: '600',
              }}
            >
              START YOUR PROJECT
            </span>
            <h3
              style={{
                fontSize: '26px',
                color: '#f6f6f7',
                margin: '14px 0 10px',
                fontFamily: 'Manrope, sans-serif',
              }}
            >
              Ready to elevate your brand?
            </h3>
            <p
              style={{
                maxWidth: '680px',
                margin: '0 auto 24px',
                fontSize: '14px',
                color: '#a6abb6',
                lineHeight: 1.7,
              }}
            >
              Collaborate directly with Rapheal Adebayo to craft a distinctive brand identity, engaging digital content, or custom documentation tailored to your audience.
            </p>
            <WA
              className="button yellow small"
              message="Hello Rapheal, I would like to enquire about commissioned work with ICON GRAPHICS."
            >
              Enquire on WhatsApp
            </WA>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export function ProjectDetail({ project }: { project: Project }) {
  const s = services.find((s) => s.id === project.category)!
  return (
    <Layout>
      <PageHero
        label={s.title.toUpperCase()}
        title={project.title}
        description={project.label || 'CLIENT CASE STUDY'}
      />
      <section className="wrap project-detail">
        <Art project={project} />

        {project.video ? (
          <div
            style={{
              margin: '30px 0',
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid #ffffff20',
              background: '#000',
            }}
          >
            <video
              controls
              preload="metadata"
              poster={project.image}
              style={{ width: '100%', display: 'block', maxHeight: '560px' }}
            >
              <source src={project.video} />
              {project.captions && (
                <track
                  kind="captions"
                  src={project.captions}
                  srcLang="en"
                  label="English"
                  default
                />
              )}
              Your browser does not support this video.
            </video>
          </div>
        ) : null}

        {project.audio ? (
          <audio controls preload="metadata" src={project.audio} />
        ) : null}

        <div className="project-description">
          <div>
            <Label>CASE STUDY OVERVIEW</Label>
            <h2>Project details.</h2>
          </div>
          <div>
            <p>{project.description}</p>
            <div className="case-study-sections">
              {[
                ['Project objectives', project.objectives],
                ['Creative direction', project.direction],
                ['Execution approach', project.execution],
              ].map(([title, copy]) => (
                <section key={title}>
                  <h3>{title}</h3>
                  <p>
                    {copy ||
                      'Project details to be updated with owner release.'}
                  </p>
                </section>
              ))}
              <section>
                <h3>Deliverables</h3>
                {project.deliverables?.length ? (
                  <ul>
                    {project.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>
                    Deliverable details will accompany the completed case
                    study.
                  </p>
                )}
              </section>
            </div>
            <p>
              Interested in a similar creative direction? Tell us about your
              brand and the result you have in mind.
            </p>
            <WA
              className="button yellow"
              message={`Hello ICON GRAPHICS, I saw your case study for ${project.title} and would like to enquire about a similar project.`}
            >
              Enquire on WhatsApp
            </WA>
            <a href="/portfolio" className="text-link">
              ← Back to portfolio
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export function Contact({ quote = false }: { quote?: boolean }) {
  return (
    <Layout>
      <PageHero
        label={quote ? 'START SOMETHING GOOD' : 'LET’S CONNECT'}
        title={
          quote
            ? 'Your next idea starts here.'
            : 'Good conversations. Great possibilities.'
        }
        description={
          quote
            ? 'Tell us what you have in mind. We’ll discuss your requirements and prepare a quotation around the scope of your project.'
            : 'A new identity, a story to tell, or a digital presence to build. Get in touch and let’s explore the right direction.'
        }
      />
      <section className="section light">
        <div className="wrap enquiry-layout">
          <aside>
            <Label>ICON GRAPHICS</Label>
            <h2>
              Let’s create
              <br />
              <em>something meaningful.</em>
            </h2>
            <p>Creative, Media & Digital Solutions</p>
            <div className="contact-info">
              <small>EMAIL US</small>
              <a href="mailto:hello@icongraphics.com.ng">
                hello@icongraphics.com.ng ↗
              </a>
              <small>WHATSAPP</small>
              <a href={whatsapp()}>+234 808 671 4454 ↗</a>
              <small>WEBSITE</small>
              <a href="https://icongraphics.com.ng">icongraphics.com.ng ↗</a>
              <small>YOUR CREATIVE CONTACT</small>
              <p>
                Rapheal Adebayo
                <br />
                Founder & Creative Director
              </p>
            </div>
            <WA className="button dark">Prefer WhatsApp?</WA>
            <SocialLinks />
            <Catalogue />
          </aside>
          <div className="form-panel">
            <h3>{quote ? 'Request a quote' : 'Send an enquiry'}</h3>
            <p>
              Fields marked * are required. Each project starts with a
              discussion of your requirements.
            </p>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export function Privacy() {
  return (
    <Layout>
      <PageHero
        label="DATA PROTECTION"
        title="Privacy Policy"
        description="How ICON GRAPHICS collects, protects, and retains project and enquiry information."
      />
      <article className="legal wrap">
        <p>Last updated: November 2026</p>
        <h2>Information We Collect</h2>
        <p>
          When you submit an enquiry, request a quote, or message us, we collect the details you provide: your full name, email address, WhatsApp telephone number, business or brand name, service selections, project description, deliverables, deadline, budget parameters, and reference materials.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
          We use this information exclusively to communicate with you regarding your creative brief, prepare quotations, schedule project deliverables, and execute client contracts. We do not sell, rent, or share client information with third party advertisers.
        </p>
        <h2>Hosting and Form Processing</h2>
        <p>
          Our web services are hosted via Netlify infrastructure with TLS encryption. Enquiries submitted through our forms are securely routed to our creative director. Technical logging is restricted to standard server telemetry for security and spam prevention.
        </p>
        <h2>Data Retention Period</h2>
        <p>
          In accordance with our commercial policy, all client enquiry records, correspondence, and project files are securely maintained for <strong>12 months</strong> following delivery or last active contact, after which they are safely deleted.
        </p>
        <h2>Your Rights and Data Inquiries</h2>
        <p>
          You may request access to, correction of, or earlier deletion of your personal data at any time by contacting{' '}
          <a href="mailto:hello@icongraphics.com.ng">hello@icongraphics.com.ng</a>.
        </p>
      </article>
    </Layout>
  )
}

export function Terms() {
  return (
    <Layout>
      <PageHero
        label="LEGAL & COMMERCIAL TERMS"
        title="Terms of Service"
        description="Official commercial terms, payment milestones, usage rights, and engagement conditions for ICON GRAPHICS."
      />
      <article className="legal wrap">
        <p>Last updated: November 2026</p>
        <h2>1. Scope and Agreement</h2>
        <p>
          These Terms of Service govern all creative, media, and digital services provided by ICON GRAPHICS (led by Rapheal Adebayo, Founder & Creative Director) to clients worldwide. Engaging our services or submitting a project agreement constitutes full acceptance of these terms.
        </p>
        <h2>2. Payment Terms</h2>
        <p>
          To commence any creative or digital project, a <strong>50% non-refundable deposit</strong> of the total agreed quotation is required. Work commences only once this deposit has been confirmed. The <strong>remaining 50% balance</strong> is strictly payable upon project completion, prior to the final handover of production deliverables, source files, or commercial assets. For monthly recurring retainers (such as Social Media Management and Digital Marketing), fees are billed and payable in advance of each service cycle. Ad spend for digital advertising campaigns is funded separately by the client.
        </p>
        <h2>3. Intellectual Property and Usage Rights</h2>
        <p>
          <strong>Full copyright and commercial usage rights</strong> for all approved, finalized deliverables transfer completely and unconditionally to the client upon receipt of final 50% payment. Until full payment is received, all preliminary concepts, working drafts, and final designs remain the exclusive intellectual property of ICON GRAPHICS. ICON GRAPHICS reserves the customary professional right to showcase completed client work and project case studies within its official portfolio, website, and promotional presentations.
        </p>
        <h2>4. Revisions and Scope Adjustments</h2>
        <p>
          Standard and Premium packages include between 2 and 3 structured rounds of revisions within the agreed brief. Revisions must align with the original project objectives. Any fundamental change of direction, scope expansion, or additional deliverables requested outside the signed agreement will be quoted separately before execution.
        </p>
        <h2>5. Data and File Retention</h2>
        <p>
          Completed project files, high resolution masters, source files, and enquiry records are securely archived and <strong>stored for 12 months</strong> following final delivery. Clients are advised to download and maintain their own local archives upon project completion. After 12 months, project archives are systematically deleted from active storage.
        </p>
        <h2>6. Cancellation and Project Delivery</h2>
        <p>
          Because creative time, talent allocation, and preparatory work begin immediately upon scheduling, the 50% deposit is non-refundable. If a client pauses or cancels a project before delivery, ICON GRAPHICS will deliver all work completed up to the point of cancellation, and fees corresponding to completed milestones will apply.
        </p>
        <h2>7. Governing Law and Jurisdiction</h2>
        <p>
          These Terms of Service, all quotation agreements, and any related disputes or claims are exclusively governed by, construed, and enforced in accordance with the laws of the <strong>Federal Republic of Nigeria</strong>.
        </p>
        <h2>8. Contact & Official Enquiries</h2>
        <p>
          For questions regarding these terms or commercial contracts, contact Rapheal Adebayo at{' '}
          <a href="mailto:hello@icongraphics.com.ng">hello@icongraphics.com.ng</a> or via WhatsApp at{' '}
          <a href={whatsapp()}>+234 808 671 4454</a>.
        </p>
      </article>
    </Layout>
  )
}
