import { useEffect, useRef, useState } from 'react'
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
  LOCATION,
  type Project,
} from '../data/site'
import { EnquiryForm } from './EnquiryForm'

export const image = (file: string, _w = 800) => '/img/' + file

/** Direct image load (Bypassing Netlify CDN to fix broken images) */
export const remoteImage = (url: string, _w = 1200) => url

const SHOWREEL_BG = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d'
const SHOWREEL_VIDEO = projects.find((p) => p.video)

function Showreel() {
  const [playing, setPlaying] = useState(false)
  if (!SHOWREEL_VIDEO?.video) return null
  return (
    <div className="showreel-card">
      {playing ? (
        <video
          className="showreel-video"
          src={SHOWREEL_VIDEO.video}
          controls
          autoPlay
          playsInline
          aria-label={SHOWREEL_VIDEO.title + ' promotional video'}
        />
      ) : (
        <>
          <img
            className="showreel-bg"
            src={remoteImage(SHOWREEL_BG, 1200)}
            srcSet={[640, 960, 1400]
              .map((w) => remoteImage(SHOWREEL_BG, w) + ' ' + w + 'w')
              .join(', ')}
            sizes="(max-width: 768px) 100vw, 45vw"
            alt=""
            width={1200}
            height={800}
            fetchPriority="high"
          />
          <div className="showreel-overlay" aria-hidden="true" />
          <div className="showreel-top">
            <span className="showreel-rec">
              <i aria-hidden="true" /> SHOWREEL
            </span>
            <span>VIDEO PRODUCTION</span>
          </div>
          <button
            type="button"
            className="showreel-play"
            onClick={() => {
              setPlaying(true)
              track('showreel_play', { project: SHOWREEL_VIDEO.id })
            }}
            aria-label={'Play the ' + SHOWREEL_VIDEO.title + ' promotional video'}
          >
            <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
            </svg>
          </button>
          <div className="showreel-caption">
            <strong>Watch our video work</strong>
            <span>Client promo: {SHOWREEL_VIDEO.title}</span>
          </div>
        </>
      )}
    </div>
  )
}

export function WA({
  children = 'Let’s talk on WhatsApp',
  message,
  className = 'button outline',
  style,
}: {
  children?: React.ReactNode
  message?: string
  className?: string
  showArrow?: boolean
  style?: React.CSSProperties
}) {
  return (
    <a
      className={className}
      style={style}
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
  const [newsletterError, setNewsletterError] = useState('')

  async function handleNewsletter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email || loading) return
    setLoading(true)
    setNewsletterError('')
    try {
      const formData = new FormData()
      formData.append('form-name', 'newsletter')
      formData.append('email', email)
      const response = await fetch('https://forms-api.icongraphics.com.ng/', {
        method: 'POST',
        body: formData,
        signal: AbortSignal.timeout(10000),
      })
      if (!response.ok) throw new Error('Newsletter subscription failed')
      setSubmitted(true)
      setEmail('')
    } catch {
      setNewsletterError('We could not complete your subscription. Please try again.')
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
        <>
          {newsletterError && <p role="alert" style={{ color: '#ff8a8a', fontSize: '13px', marginBottom: '10px' }}>{newsletterError}</p>}
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
        </>
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
              ['Creative Studio', '/creative-studio'],
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
              ['Start a project', '/onboarding'],
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
            <div className="location-block">
              <span className="location-label">HEADQUARTERS</span>
              <span className="location-value">{LOCATION.headquarters}</span>
              <span className="location-label">AVAILABILITY</span>
              <span className="location-value">{LOCATION.availability}</span>
            </div>
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
      <WA className="floating-wa" aria-label="Chat on WhatsApp">
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="#ffffff"
          aria-hidden="true"
          className="wa-icon"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.14l-.3-.18-3.12.82.83-3.04-.2-.32a8.196 8.196 0 01-1.25-4.38c0-4.54 3.69-8.24 8.24-8.24m-3.5 3.77c-.16 0-.43.06-.65.3-.22.23-.84.82-.84 2.01s.87 2.33.99 2.49c.12.16 1.69 2.58 4.17 3.55 1.66.65 2.32.46 2.87.41.73-.07 1.9-.71 2.14-1.39.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34-.29-.15-1.71-.85-1.97-.94-.26-.09-.45-.14-.64.15-.19.29-.73.94-.89 1.13-.16.19-.33.21-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.63-1.56-.88-2.14-.24-.57-.48-.49-.65-.5z" />
        </svg>
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
      className={
        'art art-' +
        (project.art || 'brand') +
        (hero ? ' hero-art' : '') +
        (project.image || project.video ? ' art-media' : '')
      }
      role="img"
      aria-label={`${project.title} · client case study`}
    >
      {project.image ? (
        <img
          src={project.image}
          loading="lazy"
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
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
      </a>
      <div className="project-info">
        <div>
          <p>{s.title}</p>
          <h3>
            <a href={'/portfolio/' + project.id}>{project.title}</a>
          </h3>
        </div>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const DIFFERENCE_POINTS = [
  [
    'Founder-Led Direction',
    'Direct access to Rapheal Adebayo from the initial brief to the final delivery. No middlemen.',
  ],
  [
    'Global Standards',
    'Based in Nigeria and creating beyond borders. We deliver international quality to clients worldwide.',
  ],
  [
    'Nine Disciplines, One Studio',
    'From branding and video to web design and audio. All your creative needs under one seamless roof.',
  ],
  [
    'Ideas with Intention',
    "We don't just make things look good. We solve business problems with strategic design and media.",
  ],
]

function IconDifference() {
  return (
    <section className="section icon-difference" aria-labelledby="icon-difference-title">
      <div className="wrap">
        <div className="icon-difference-heading">
          <Label>WHY ICON GRAPHICS</Label>
          <h2 id="icon-difference-title">
            The ICON GRAPHICS <em>Difference.</em>
          </h2>
        </div>
        <div className="icon-difference-grid">
          {DIFFERENCE_POINTS.map(([title, text], i) => (
            <article key={title} className="difference-card">
              <span className="difference-index" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AboutFounderSection({
  photo = '/img/rapheal-adebayo-supplied.jpeg',
}: {
  photo?: string
}) {
  return (
    <section className="dedicated-founder-section" id="founder">
      <div className="wrap dedicated-founder-grid">
        <div className="founder-visual-wrap">
          <div className="founder-portrait-card">
            <img
              src={photo}
              alt="Rapheal Adebayo, Founder & Creative Director of ICON GRAPHICS"
              loading="lazy"
            />
            <div className="founder-badge-overlay">
              <span className="founder-name-tag">Rapheal Adebayo</span>
              <span className="founder-role-tag">Founder & Creative Director</span>
            </div>
          </div>
        </div>
        <div className="founder-story-column">
          <Label>MEET THE FOUNDER</Label>
          <h2 className="founder-heading">
            The visionary mind
            <br />
            <em>behind the work.</em>
          </h2>
          <div className="founder-bio-text">
            <p>
              Rapheal Adebayo is the Founder and Creative Director of ICON GRAPHICS. Driven by a belief that every brand has a unique story, Rapheal founded the agency to bridge the gap between bold ideas and flawless execution. With a hands-on approach, he personally oversees the creative direction of every project, ensuring that clients don't just get a service, they get a dedicated partner. Based in Nigeria and working with clients globally, Rapheal's vision is to empower businesses with design that speaks, media that engages, and digital solutions that convert.
            </p>
            <p>
              From the initial conversation through to final delivery, you collaborate directly with the founder responsible for your creative deliverables. Every visual, word, and strategic choice is crafted with precision, passion, and genuine accountability.
            </p>
          </div>
          <div className="founder-action-buttons">
            <WA
              className="button yellow"
              message="Hello Rapheal, I would like to discuss a project with ICON GRAPHICS."
            >
              Talk to Rapheal on WhatsApp
            </WA>
            <a className="button outline" href="/contact">
              Send a Project Brief
            </a>
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
        <div className="faq-intro">
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
        </div>
        <div
          className="faq-list"
          style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
        >
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
        <aside className="faq-contact-card" aria-labelledby="faq-contact-title">
          <h3 id="faq-contact-title">Still have questions?</h3>
          <div className="faq-contact-person">
            <img
              src="/img/rapheal-adebayo-supplied.jpeg"
              alt="Rapheal Adebayo, Founder & Creative Director"
              width={64}
              height={64}
              loading="lazy"
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
            <p>
              Talk directly with Rapheal Adebayo, Founder &amp; Creative
              Director.
            </p>
          </div>
          <WA
            className="faq-contact-button"
            message="Hello Rapheal, I have a question about working with ICON GRAPHICS."
          >
            Chat on WhatsApp
          </WA>
        </aside>
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
          </h1>
          <p>
            We turn ideas into identities, stories and digital experiences that
            connect. Creative, media and digital solutions, all in one place.
          </p>
          <div className="hero-buttons">
            <a className="button yellow" href="/services">
              Explore Our Services
            </a>
            <a className="button yellow" href="/portfolio">
              View Our Portfolio
            </a>
          </div>
          <WA className="hero-whatsapp">Let’s Discuss Your Project</WA>
        </div>
        <div className="hero-showreel-wrap">
          <Showreel />
        </div>
        <a className="hero-scroll" href="#intro">
          <span>SCROLL TO EXPLORE</span>
          <svg
            className="hero-scroll-arrow"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 4v16M5 13l7 7 7-7" />
          </svg>
        </a>
      </section>

      {/* Structured CSS Grid of Portfolio Preview Cards cleanly BELOW hero */}
      <section className="hero-portfolio-showcase wrap">
        <div className="section-heading section-heading--stacked">
          <Label>AUTHENTIC CLIENT PORTFOLIO</Label>
          <h2>
            Featured Case <em>Studies.</em>
          </h2>
          <p className="section-subtitle">
            Purposeful identity design, social campaigns, brochures and
            commercial packages delivered for clients globally.{' '}
            <a className="text-link" href="/portfolio">
              Explore the portfolio
            </a>
          </p>
        </div>
        <div className="portfolio-preview-grid">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <div className="hero-bottom wrap">
        <span>
          <i className="dot" /> BASED IN NIGERIA. CREATING BEYOND BORDERS.
        </span>
      </div>
      <div className="ticker" role="img" aria-label="Design. Create. Produce. Connect.">
        <div className="ticker-track" aria-hidden="true">
          {[0, 1, 2, 3, 4, 5].map((copy) => (
            <span className="ticker-group" key={copy}>
              {['DESIGN', 'CREATE', 'PRODUCE', 'CONNECT'].map((word) => (
                <span className="ticker-item" key={word}>
                  {word}
                  <b className="ticker-bullet">•</b>
                </span>
              ))}
            </span>
          ))}
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
            Get to know us
          </a>
        </div>
      </section>
      <AboutFounderSection />
      <ServicesOverview />
      <IconDifference />
      <Testimonials />
      <Process />
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
          hello@icongraphics.com.ng
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
      <AboutFounderSection photo="/img/rapheal-adebayo-about.jpeg" />
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
      <section className="section light">
        <div className="wrap founder-split">
          <div className="portrait-wrap">
            <img
              src={image('rapheal-adebayo-about.jpeg', 900)}
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
              Rapheal Adebayo is the Founder and Creative Director of ICON GRAPHICS. Driven by a belief that every brand has a unique story, Rapheal founded the agency to bridge the gap between bold ideas and flawless execution. With a hands-on approach, he personally oversees the creative direction of every project, ensuring that clients don't just get a service, they get a dedicated partner. Based in Nigeria and working with clients globally, Rapheal's vision is to empower businesses with design that speaks, media that engages, and digital solutions that convert.
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

/* ---------------------------------------------------------------
   Service previews: illustrative concept visuals for service
   categories that do not yet have supplied client work. They use
   licensed Unsplash stock photography (via Netlify Image CDN) and
   code-native mockups, and are always labelled as concept previews.
---------------------------------------------------------------- */
const PREVIEW_PHOTOS = {
  photography: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35',
  video: 'https://images.unsplash.com/photo-1601506521793-dc748fc80b67',
  web: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e',
  writing: 'https://images.unsplash.com/photo-1455390582262-044cdead277a',
  audio: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc',
} as const
type PreviewId = keyof typeof PREVIEW_PHOTOS

const PREVIEW_META: Record<PreviewId, { heading: string; label: string }> = {
  photography: {
    heading: 'Studio & product photography',
    label: 'Professional camera lens on a studio desk',
  },
  video: {
    heading: 'Cinematic video production',
    label: 'Video player showing a camera operator on a neon-lit film set',
  },
  web: {
    heading: 'Dark-theme website concept',
    label: 'Laptop displaying a dark-themed website design',
  },
  writing: {
    heading: 'Editorial & copywriting',
    label: 'Fountain pen writing on a notebook page beside a copy draft',
  },
  audio: {
    heading: 'Voice-over & audio production',
    label: 'Studio microphone with a glowing audio waveform',
  },
}

function PreviewPhoto({
  url,
  className = 'svc-photo',
}: {
  url: string
  className?: string
}) {
  return (
    <img
      className={className}
      src={remoteImage(url, 1000)}
      srcSet={[560, 800, 1200]
        .map((w) => remoteImage(url, w) + ' ' + w + 'w')
        .join(', ')}
      sizes="(max-width: 768px) 100vw, 45vw"
      alt=""
      width={1000}
      height={700}
      loading="lazy"
      decoding="async"
    />
  )
}

const WAVE_BARS = [
  18, 32, 46, 28, 60, 82, 54, 38, 70, 94, 66, 42, 78, 100, 72, 48, 62, 86, 58,
  34, 52, 74, 44, 26, 40, 64, 36, 22, 30, 16,
]

function PreviewVisual({ id }: { id: Exclude<PreviewId, 'video'> }) {
  const url = PREVIEW_PHOTOS[id]
  if (id === 'photography')
    return (
      <>
        <PreviewPhoto url={url} />
        <div className="svc-shade" />
        <div className="svc-viewfinder" aria-hidden="true">
          <i /> <i /> <i /> <i />
          <span className="svc-focus" />
        </div>
        <div className="svc-hud" aria-hidden="true">
          <span>ƒ/1.8</span>
          <span>1/250</span>
          <span>ISO 100</span>
        </div>
      </>
    )
  if (id === 'web')
    return (
      <div className="svc-laptop" aria-hidden="true">
        <div className="svc-laptop-screen">
          <div className="svc-browser">
            <i /> <i /> <i />
            <span>yourbrand.com</span>
          </div>
          <div className="svc-site">
            <PreviewPhoto url={url} className="svc-site-bg" />
            <div className="svc-site-nav">
              <b>BRAND</b>
              <span /> <span /> <span />
            </div>
            <div className="svc-site-hero">
              <strong>Built to be remembered.</strong>
              <span className="svc-line" />
              <span className="svc-line short" />
              <em>Get started</em>
            </div>
            <div className="svc-site-cards">
              <span /> <span /> <span />
            </div>
          </div>
        </div>
        <div className="svc-laptop-base" />
      </div>
    )
  if (id === 'writing')
    return (
      <>
        <PreviewPhoto url={url} />
        <div className="svc-shade" />
        <div className="svc-page" aria-hidden="true">
          <small>FEATURE · ISSUE 01</small>
          <strong>Words that move people.</strong>
          <span className="svc-line" />
          <span className="svc-line" />
          <span className="svc-line short" />
        </div>
      </>
    )
  // audio
  return (
    <>
      <PreviewPhoto url={url} className="svc-photo svc-photo-audio" />
      <div className="svc-shade" />
      <div className="svc-wave" aria-hidden="true">
        {WAVE_BARS.map((h, i) => (
          <span
            key={i}
            style={{ height: h + '%', animationDelay: (i % 10) * 0.12 + 's' }}
          />
        ))}
      </div>
      <div className="svc-hud svc-hud-audio" aria-hidden="true">
        <span>
          <i className="svc-live" /> REC
        </span>
        <span>48 kHz · 24-bit</span>
      </div>
    </>
  )
}

/* Case-study promo video card: a branded thumbnail built from the client's
   own portfolio image (dark overlay + glowing play button) sits over the
   native video. Clicking it hides the overlay and starts playback, so no
   separate poster uploads are needed. */
function CaseVideo({
  src,
  title,
  thumbnail,
  captions,
}: {
  src: string
  title: string
  thumbnail?: string
  captions?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)
  const start = () => {
    setStarted(true)
    const video = ref.current
    if (!video) return
    video.play().catch(() => {
      /* Playback blocked: native controls remain available. */
    })
  }
  return (
    <div className={'case-video-card' + (started ? ' is-started' : '')}>
      <video
        ref={ref}
        controls={started}
        preload="auto"
        playsInline
        width="100%"
        style={{ backgroundColor: '#121212' }}
        className="project-embedded-video"
        aria-label={title + ' promotional video'}
        tabIndex={started ? 0 : -1}
        onPlay={() => setStarted(true)}
      >
        <source src={src} type="video/mp4" />
        {captions ? (
          <track kind="captions" src={captions} srcLang="en" label="English" default />
        ) : null}
        Your browser does not support this video.
      </video>
      {started ? null : (
        <button
          type="button"
          className="case-video-cover"
          aria-label={'Play ' + title + ' promotional video'}
          onClick={start}
        >
          {thumbnail ? (
            <img
              className="case-video-thumb"
              src={remoteImage(thumbnail, 1200)}
              alt=""
              loading="lazy"
              decoding="async"
            />
          ) : null}
          <span className="case-video-shade" aria-hidden="true" />
          <span className="case-video-play" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
            </svg>
          </span>
          <span className="case-video-label" aria-hidden="true">
            Watch the promo
          </span>
        </button>
      )}
    </div>
  )
}

function VideoPreview({ label }: { label: string }) {
  const [playing, setPlaying] = useState(false)
  const reel = SHOWREEL_VIDEO
  if (playing && reel?.video)
    return (
      <div className="art svc-visual svc-video">
        <video
          className="svc-player-video"
          src={reel.video}
          controls
          autoPlay
          playsInline
          aria-label={reel.title + ' promotional video'}
        />
      </div>
    )
  return (
    <div className="art svc-visual svc-video">
      <div
        role="img"
        aria-label={label + ' (concept preview)'}
        className="svc-fill"
      >
        <PreviewPhoto url={PREVIEW_PHOTOS.video} />
      </div>
      <div className="svc-shade" />
      <div className="svc-player-top" aria-hidden="true">
        <span className="showreel-rec">
          <i /> 4K · 24 FPS
        </span>
      </div>
      {reel?.video && (
        <button
          type="button"
          className="showreel-play svc-play"
          onClick={() => {
            setPlaying(true)
            track('showreel_play', { project: reel.id, source: 'services' })
          }}
          aria-label={'Play the ' + reel.title + ' promotional video'}
        >
          <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
          </svg>
        </button>
      )}
      <div className="svc-player-bar" aria-hidden="true">
        <span className="svc-time">00:00</span>
        <span className="svc-track">
          <i />
        </span>
        <span className="svc-time">01:30</span>
      </div>
      <span className="concept-pill">CONCEPT PREVIEW</span>
    </div>
  )
}

export function ServicePreview({
  serviceId,
  title,
}: {
  serviceId: string
  title: string
}) {
  if (!(serviceId in PREVIEW_PHOTOS)) return null
  const id = serviceId as PreviewId
  const meta = PREVIEW_META[id]
  const href = '/portfolio?category=' + id
  return (
    <article className="project-card service-preview-card">
      {id === 'video' ? (
        <div className="project-image">
          <VideoPreview label={meta.label} />
        </div>
      ) : (
        <a href={href} className="project-image">
          <div
            className={'art svc-visual svc-' + id}
            role="img"
            aria-label={meta.label + ' (concept preview)'}
          >
            <PreviewVisual id={id} />
          </div>
          <span className="concept-pill">CONCEPT PREVIEW</span>
        </a>
      )}
      <div className="project-info">
        <div>
          <p>{title}</p>
          <h3>
            <a href={href}>{meta.heading}</a>
          </h3>
        </div>
      </div>
      <WA
        className="button small dark"
        message={`Hello ICON GRAPHICS, I would like to enquire about ${title}.`}
      >
        Enquire on WhatsApp
      </WA>
    </article>
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
                0{i + 1} / SERVICE CAPABILITY
              </Label>
              <h2 className="service-main-heading">{s.title}</h2>
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
                      className="button small yellow"
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
                  className="button yellow"
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
              {(() => {
                const project = projects.find((p) => p.category === s.id)
                return project ? (
                  <ProjectCard project={project} />
                ) : (
                  <ServicePreview serviceId={s.id} title={s.title} />
                )
              })()}
              <a className="text-link" href={'/portfolio?category=' + s.id}>
                Explore this portfolio category
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
  const projectServices =
    project.label?.split('·')[1]?.trim() || s.title
  return (
    <Layout>
      <PageHero
        label={s.title.toUpperCase()}
        title={project.title}
        description={project.label || 'CLIENT CASE STUDY'}
      />
      <section className="wrap project-detail">
        {project.gallery?.length ? (
          <div className="case-showcase">
            <figure
              className={
                project.gallery[0].width / project.gallery[0].height > 1.3
                  ? 'case-showcase-lead case-showcase-lead--wide'
                  : 'case-showcase-lead'
              }
            >
              <img
                src={project.gallery[0].src}
                alt={project.gallery[0].alt}
                width={project.gallery[0].width}
                height={project.gallery[0].height}
              />
              <figcaption>{project.gallery[0].caption}</figcaption>
            </figure>

            {project.video ? (
              <div className="project-video-player-wrap case-showcase-video">
                <div className="project-video-header">
                  <span className="project-video-badge">Promotional Video</span>
                  <span className="project-video-caption">
                    {project.title} — Official Media
                  </span>
                </div>
                <CaseVideo
                  src={project.video}
                  title={project.title}
                  thumbnail={project.image || project.gallery[0]?.src}
                  captions={project.captions}
                />
              </div>
            ) : null}

            {project.gallery.length > 1 ? (
              <div className="case-showcase-grid">
                {project.gallery.slice(1).map((item) => (
                  <figure
                    key={item.src}
                    className={item.height / item.width > 1.3 ? 'is-portrait' : undefined}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                    />
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        ) : (
          <Art project={project} />
        )}

        {project.video && !project.gallery?.length ? (
          <div className="project-video-player-wrap">
            <div className="project-video-header">
              <span className="project-video-badge">10-Second Commercial Reel</span>
              <span className="project-video-caption">{project.title} — Official Media</span>
            </div>
            <CaseVideo
              src={project.video}
              title={project.title}
              thumbnail={project.image}
              captions={project.captions}
            />
          </div>
        ) : null}

        {project.audio ? (
          <audio controls preload="metadata" src={project.audio} />
        ) : null}

        <div className="project-description">
          <div className="project-summary-column">
            <Label>CASE STUDY OVERVIEW</Label>
            <h2>Project details.</h2>
            <aside
              className="project-summary-card"
              aria-labelledby="project-summary-title"
            >
              <h3 id="project-summary-title">Project summary</h3>
              <dl>
                <div>
                  <dt>Client</dt>
                  <dd>{project.client || project.title}</dd>
                </div>
                <div>
                  <dt>Services provided</dt>
                  <dd>{projectServices}</dd>
                  {projectServices !== s.title ? (
                    <dd className="project-summary-meta">{s.title}</dd>
                  ) : null}
                </div>
                {project.location ? (
                  <div>
                    <dt>Location</dt>
                    <dd>{project.location}</dd>
                  </div>
                ) : null}
              </dl>
              <WA
                className="project-summary-button"
                message={`Hello ICON GRAPHICS, I saw your case study for ${project.title} and would like to enquire about a similar project.`}
              >
                Enquire on WhatsApp
              </WA>
            </aside>
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
      <section className="section dark-contact-section">
        <div className="wrap enquiry-layout">
          <aside>
            <Label>ICON GRAPHICS</Label>
            <h2>
              Let’s create
              <br />
              <em>something meaningful.</em>
            </h2>
            <p style={{ color: '#b0b4be' }}>Creative, Media & Digital Solutions</p>
            <div className="contact-info">
              <small>EMAIL US</small>
              <a href="mailto:hello@icongraphics.com.ng">
                hello@icongraphics.com.ng
              </a>
              <small>WHATSAPP</small>
              <a href={whatsapp()}>+234 808 671 4454</a>
              <small>WEBSITE</small>
              <a href="https://icongraphics.com.ng">icongraphics.com.ng</a>
              <div className="location-block">
              <span className="location-label">HEADQUARTERS</span>
              <span className="location-value">{LOCATION.headquarters}</span>
              <span className="location-label">AVAILABILITY</span>
              <span className="location-value">{LOCATION.availability}</span>
            </div>
              
              <div className="founder-contact-card" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '28px', padding: '14px 18px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <img
                  src="/img/rapheal-avatar.png"
                  alt="Rapheal Adebayo"
                  style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #f72585', flexShrink: 0 }}
                />
                <div>
                  <small style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#ff5c8a', fontSize: '9px', fontWeight: 700 }}>
                    YOUR CREATIVE CONTACT
                  </small>
                  <strong style={{ display: 'block', fontSize: '15px', color: '#ffffff', marginTop: '2px' }}>
                    Rapheal Adebayo
                  </strong>
                  <span style={{ fontSize: '11px', color: '#a4a8b4' }}>
                    Founder & Creative Director
                  </span>
                </div>
              </div>
            </div>
            <WA className="button yellow" style={{ width: '100%', marginBottom: '14px' }}>
              Prefer WhatsApp?
            </WA>
            <SocialLinks />
            <Catalogue className="button yellow" />
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
