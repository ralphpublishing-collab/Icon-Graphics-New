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
export const image = (file: string, w = 800) =>
  `/.netlify/images?url=${encodeURIComponent('/img/' + file)}&w=${w}&fm=webp`
export function WA({
  children = 'Let’s talk on WhatsApp',
  message,
  className = 'button outline',
}: {
  children?: React.ReactNode
  message?: string
  className?: string
}) {
  return (
    <a
      className={className}
      href={whatsapp(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  )
}
function Logo() {
  return (
    <a className="logo" href="/" aria-label="ICON GRAPHICS home">
      <img
        src={image('logo-reference.png', 100)}
        width="48"
        height="48"
        alt="Original rainbow iG logo"
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
              Request a Quote <span>↗</span>
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
              ↗
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
            <a href={whatsapp()}>+234 808 671 4454 ↗</a>
            <p className="muted">
              Founder & Creative Director
              <br />
              Rapheal Adebayo
            </p>
            <Catalogue />
          </div>
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
          stroke="currentColor"
          strokeWidth="1.7"
          aria-hidden="true"
        >
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
export function Catalogue() {
  return catalogueUrl ? (
    <a
      className="catalogue"
      href={catalogueUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      View WhatsApp Catalogue ↗
    </a>
  ) : (
    <div className="catalogue">
      View WhatsApp Catalogue<small>Catalogue link coming soon</small>
      <small>Browse Our Services on WhatsApp · available when linked</small>
    </div>
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
      className={'art art-' + project.art + (hero ? ' hero-art' : '')}
      role="img"
      aria-label={`${project.title}${project.concept ? ' — concept placeholder' : ''}`}
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
      ) : (
        <>
          {project.art === 'brand' ? (
            <div className="brand-object">
              <div className="brand-card">
                <span>
                  FORM
                  <br />& FEEL.
                </span>
                <small>AN EXPLORATION IN IDENTITY</small>
                <b>f.</b>
              </div>
              <div className="brand-card second">
                <b>f.</b>
                <small>
                  GOOD DESIGN.
                  <br />
                  GREAT FEELING.
                </small>
              </div>
            </div>
          ) : project.art === 'photo' ? (
            <div className="photo-object">
              <div className="sun-disc" />
              <div className="vase" />
              <span>
                STILL / LIFE
                <br />
                <small>A study in light & form</small>
              </span>
            </div>
          ) : project.art === 'motion' ? (
            <div className="motion-object">
              <span>
                MAKE
                <br />
                <em>moves.</em>
              </span>
              <div className="play-mark">▷</div>
              <small>VISUAL STORYTELLING / CONCEPT</small>
            </div>
          ) : project.art === 'website' ? (
            <div className="browser-object">
              <div className="browser-top">
                ● ● ● <span>studio / concept</span>
              </div>
              <div className="mini-web">
                <small>SPACES FOR LIVING</small>
                <h3>
                  Good spaces.
                  <br />
                  Better living.
                </h3>
                <div className="arch" />
                <span>EXPLORE THE COLLECTION ↗</span>
              </div>
            </div>
          ) : project.art === 'sound' ? (
            <div className="sound-object">
              <div>
                {Array.from({ length: 27 }, (_, i) => (
                  <i
                    key={i}
                    style={{
                      height: 20 + Math.abs(Math.sin(i * 1.9)) * 95 + 'px',
                    }}
                  />
                ))}
              </div>
              <strong>SOUND / ON.</strong>
            </div>
          ) : (
            <div className="editorial-object">
              <small>ICON GRAPHICS / CONCEPT STUDY</small>
              <strong>
                {project.art === 'social'
                  ? 'Hello,\nworld.'
                  : project.art === 'campaign'
                    ? 'Think\nbigger.'
                    : project.art === 'writing'
                      ? 'Words\nthat work.'
                      : 'A clear\nperspective.'}
              </strong>
              <span>
                {project.art === 'document'
                  ? 'BUSINESS / PROFILE'
                  : 'CREATE. CONNECT. COMMUNICATE.'}{' '}
                ↗
              </span>
            </div>
          )}
        </>
      )}
      {project.concept && (
        <span className="concept-pill">
          CONCEPT{' '}
          {project.art === 'motion' ? ' / VIDEO PLACEHOLDER' : ' / PLACEHOLDER'}
        </span>
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
        className="project-enquire"
        message={`Hello ICON GRAPHICS, I saw your portfolio project for ${project.title} and would like to enquire about a similar service.`}
      >
        Enquire about this direction
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
          <Label>FOUNDER-LED CREATIVE AGENCY</Label>
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
              Meet the Founder <span>↗</span>
            </a>
            <WA
              className="button outline"
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
              'Attention to detail and creative problem-solving grounded in your goals and audience.',
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
            connect. Creative, media and digital solutions — all in one place.
          </p>
          <div className="hero-buttons">
            <a className="button yellow" href="/services">
              Explore Our Services <span>↗</span>
            </a>
            <a className="button outline" href="/portfolio">
              View Our Portfolio <span>↗</span>
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
              Explore Pricing & Packages ↗
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
              Read the guides ↗
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
        description="ICON GRAPHICS is a founder-led creative, media and digital solutions business. We connect ideas with purposeful execution for brands, businesses and individuals."
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
              'Clarity, care, creative problem-solving and attention to detail guide how we think, communicate and create.',
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
              problem-solving, and comes together through attention to detail.
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
        description="From how your brand looks to how it sounds, speaks and shows up online — discover the right creative support for your next step."
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
                  Request a Quote <span>↗</span>
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
  const displayableProjects = projects.filter((p) => !p.mediaPending)
  return (
    <Layout>
      <PageHero
        label="THE PORTFOLIO"
        title="Ideas take shape here."
        description="Explore creative directions across our nine disciplines. Real client case studies and promotional video showcases will appear as media uploads complete."
      />
      <section className="section portfolio-section">
        <div className="wrap">
          <div className="filter-bar" aria-label="Filter portfolio">
            <button
              aria-pressed={filter === 'all'}
              onClick={() => setFilter('all')}
            >
              All directions
            </button>
            {services.map((s) => (
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
            creative direction previews · concept directions labelled
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
              padding: '36px 30px',
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
              FEATURED CLIENT PARTNERSHIPS
            </span>
            <h3
              style={{
                fontSize: '24px',
                color: '#f6f6f7',
                margin: '14px 0 10px',
                fontFamily: 'Manrope, sans-serif',
              }}
            >
              Real Client Projects In Production
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
              Working materials and promotional video productions are in
              progress for our five featured clients: Erin Fashion World, Lewa
              Glam Beauty Empire, Opeyemi Beauty Touch / Collections, Global Trade
              Connect, and Nova Global Brands. Full case studies and promotional
              videos will be published as assets are uploaded.
            </p>
            <WA
              className="button yellow small"
              message="Hello Rapheal, I would like to enquire about commissioned work with ICON GRAPHICS."
            >
              Discuss a commissioned project ↗
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
        description={
          project.concept
            ? project.label || 'CONCEPT PROJECT / PORTFOLIO DEMONSTRATION'
            : project.label || 'CLIENT PROJECT'
        }
      />
      <section className="wrap project-detail">
        {project.mediaPending ? (
          <div
            style={{
              padding: '50px 36px',
              background: '#15161a',
              border: '1px solid #ffffff18',
              borderRadius: '6px',
              textAlign: 'center',
              marginBottom: '40px',
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
              COMMISSIONED CLIENT CASE STUDY
            </span>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                margin: '16px 0 10px',
                fontFamily: 'Manrope, sans-serif',
                color: '#f6f6f7',
              }}
            >
              {project.title}
            </h2>
            <p
              style={{
                maxWidth: '620px',
                margin: '0 auto 20px',
                color: '#b0b4be',
                fontSize: '15px',
                lineHeight: 1.7,
              }}
            >
              {project.client && (
                <strong>
                  {project.client} · {project.location} —{' '}
                </strong>
              )}
              {project.description}
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 18px',
                background: '#ffffff0a',
                border: '1px solid #ffffff15',
                borderRadius: '4px',
                fontSize: '12px',
                color: '#8e93a0',
              }}
            >
              <span style={{ color: '#65dbed' }}>●</span>
              Promotional video and full visual gallery will appear here once
              client files are uploaded.
            </div>
          </div>
        ) : (
          <Art project={project} />
        )}

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
              Enquire about this project
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
        label="YOUR INFORMATION"
        title="Privacy Policy"
        description="How ICON GRAPHICS uses the information you choose to share through this website."
      />
      <article className="legal wrap">
        <p>Last updated: 31 October 2026</p>
        <h2>Information you provide</h2>
        <p>
          When you submit an enquiry, we collect the information you enter: your
          name, email address, WhatsApp number, business name if supplied,
          service requirements, project description, expected deliverables,
          optional budget and currency, deadline, reference links or attachment,
          detailed brief and contact preference. Please avoid sharing sensitive
          personal information in an enquiry.
        </p>
        <h2>Why we use it</h2>
        <p>
          We use this information to respond to you, understand your
          requirements, discuss quotations and communicate about a project.
          Submitting an enquiry does not subscribe you to a marketing mailing
          list.
        </p>
        <h2>Website and form services</h2>
        <p>
          The website is hosted by Netlify. Enquiry submissions are processed
          through Netlify Forms, including spam protection. Hosting
          infrastructure may process technical information such as IP addresses
          and request logs for service operation and security.
        </p>
        <h2>External links</h2>
        <p>
          WhatsApp and social media links take you to third-party services whose
          own privacy policies apply. No advertising or analytics scripts are
          intentionally included in this website.
        </p>
        <h2>Access and questions</h2>
        <p>
          To ask about your enquiry data, request correction or deletion, or
          discuss a privacy concern, contact{' '}
          <a href="mailto:hello@icongraphics.com.ng">
            hello@icongraphics.com.ng
          </a>
          . Requests are considered in light of relevant project and legal
          obligations.
        </p>
        <div className="review-note">
          <h3>Owner review required before publication</h3>
          <p>
            Confirm the data retention period, any additional processors, the
            process for handling privacy requests, and applicable legal
            obligations. These details have not yet been established and this
            page does not claim any legal certification.
          </p>
        </div>
      </article>
    </Layout>
  )
}
export function Terms() {
  return (
    <Layout>
      <PageHero
        label="WORKING TOGETHER"
        title="Terms of Service"
        description="A clear starting point for website use and project discussions with ICON GRAPHICS."
      />
      <article className="legal wrap">
        <p>Last updated: 31 October 2026</p>
        <h2>About these terms</h2>
        <p>
          This website introduces ICON GRAPHICS — Creative, Media & Digital
          Solutions, led by Rapheal Adebayo. Information here supports initial
          enquiries; project-specific agreements determine the actual services
          to be delivered.
        </p>
        <h2>Enquiries and quotations</h2>
        <p>
          Sending an enquiry does not confirm a booking or create a service
          contract. Scope, deliverables, pricing, payment arrangements,
          deadlines and responsibilities need to be discussed and agreed before
          work begins. All services are quoted individually.
        </p>
        <h2>Reviews and delivery</h2>
        <p>
          Review stages, revision arrangements, file formats and delivery
          methods are agreed for each project. No unlimited revisions or fixed
          turnaround times are promised on this website.
        </p>
        <h2>Materials and intellectual property</h2>
        <p>
          Discuss permission to use supplied content and any licensing needs
          before sharing project materials. Ownership and use rights for final
          deliverables, working files and third-party assets must be set out in
          the project agreement.
        </p>
        <h2>Portfolio presentation</h2>
        <p>
          Concept placeholders are demonstration layouts, not completed client
          projects or endorsements. Portfolio content may be updated as genuine
          work becomes available.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{' '}
          <a href="mailto:hello@icongraphics.com.ng">
            hello@icongraphics.com.ng
          </a>
          .
        </p>
        <div className="review-note">
          <h3>Owner review required before publication</h3>
          <p>
            Payment schedules, cancellation and refund arrangements, revision
            limits, ownership transfers, dispute resolution, governing law and
            liability terms require owner confirmation and appropriate legal
            review. No specific policies on these matters are asserted here.
          </p>
        </div>
      </article>
    </Layout>
  )
}
