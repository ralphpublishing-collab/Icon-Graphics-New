export type Insight = {
  slug: string
  title: string
  category: string
  summary: string
  published: string
  readingMinutes: number
  art:
    | 'brand'
    | 'website'
    | 'video'
    | 'design'
    | 'photo'
    | 'social'
    | 'marketing'
    | 'writing'
    | 'document'
    | 'audio'
  /** Unsplash stock thumbnail (served via Netlify Image CDN) */
  thumbnail: { src: string; alt: string }
  content: string
  /** Additional body paragraphs rendered after the lead paragraph */
  paragraphs?: string[]
  sections?: { heading: string; text: string }[]
  author?: {
    name: string
    role: string
    avatar: string
  }
}

export const defaultAuthor = {
  name: 'Rapheal Adebayo',
  role: 'Founder & Creative Director',
  avatar: '/img/rapheal-avatar.png',
}

export const insights: Insight[] = [
  {
    slug: 'prepare-a-creative-brief',
    title: 'The Foundation of Impact: How to Prepare a Creative Brief',
    category: 'Branding',
    summary:
      'Before a single pixel is designed or a camera is turned on, the most important step of any creative project is the brief.',
    published: '2026-11-01',
    readingMinutes: 3,
    art: 'brand',
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12',
      alt: 'Hand pinning sketches and layout references to a studio planning board',
    },
    author: defaultAuthor,
    content:
      'Before a single pixel is designed or a camera is turned on, the most important step of any creative project is the brief. A clear brief gives creativity direction, sets boundaries, and aligns everyone on what success looks like. Start with the purpose: define what you are creating and why. Who is the audience? What should they feel, believe, or do after experiencing the work? Be specific about deliverables, deadlines, and technical requirements. Finally, share visual references—not to copy, but to establish tone, mood, and aesthetic expectations. When both client and creator share a clear brief, the result is always stronger, faster, and more impactful.',
    sections: [
      {
        heading: 'Start with the Purpose and Objectives',
        text: 'A great brief begins by answering fundamental questions: What is the specific business problem we are solving? What action do you want your audience to take? Whether launching a new luxury identity, refreshing an existing product line, or developing an investor deck, clear objectives ensure design decisions are grounded in strategy rather than subjective taste.',
      },
      {
        heading: 'Define the Audience and Emotional Resonance',
        text: 'Explain precisely who the work is speaking to, where they will experience it, and what expectations they bring. Specific geographic, demographic, and cultural considerations allow creative work to connect authentically without falling back on generic tropes.',
      },
      {
        heading: 'Curate References for Tone and Direction',
        text: 'Provide three to five visual references and articulate what resonates about each: typography, color grading, pacing, or compositional minimalism. References establish a shared visual vocabulary between client and studio while maintaining complete originality in final execution.',
      },
      {
        heading: 'Align Deliverables, Deadlines and Milestones',
        text: 'Document required production formats, target platforms, review rounds, and key deadlines. Clarity on timeline and dependencies ensures that creative exploration remains disciplined and project delivery proceeds smoothly.',
      },
    ],
  },
  {
    slug: 'plan-your-business-website',
    title: 'Websites That Convert: Designing the User Journey',
    category: 'Website development',
    summary:
      'Before thinking about animations, color schemes, or layout trends, the most critical question is: what is the user’s journey?',
    published: '2026-11-01',
    readingMinutes: 3,
    art: 'website',
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      alt: 'Laptop showing a code editor on a bright, minimal desk',
    },
    author: defaultAuthor,
    content:
      'Your website is often the very first touchpoint a potential customer has with your business. Before thinking about animations, color schemes, or layout trends, the most critical question is: what is the user’s journey? A successful business website should immediately communicate three things within five seconds: who you are, what problem you solve, and what action the visitor should take next. Structure your navigation simply, ensure page load speed is optimized, and make your contact and quote request channels effortless to find. Great web design is not just about aesthetics—it is about removing friction between a customer’s need and your solution.',
    sections: [
      {
        heading: 'The Five-Second Clarity Test',
        text: 'A visitor should instantly comprehend your value proposition above the fold. Clutter, vague corporate jargon, or slow loading assets dilute attention. Present who you are, your core service capabilities, and direct call-to-action options clearly without friction.',
      },
      {
        heading: 'Intuitive Navigation and Hierarchy',
        text: 'Visitors should never have to guess where to find information. Keep top navigation focused on high-priority destinations: Services, Portfolio, Pricing, and Contact. Maintain consistent hierarchy and accessible focus states across desktop and mobile viewports.',
      },
      {
        heading: 'Mobile Performance and High-Speed Execution',
        text: 'Over 70% of visits originate from mobile devices. Fast load times, responsive typography, and tactile button targets ensure that potential clients stay engaged regardless of screen size or network bandwidth.',
      },
      {
        heading: 'Seamless Conversion Channels',
        text: 'Whether booking a consultation, submitting a detailed project brief, or initiating a direct WhatsApp dialogue with our founder, conversion touchpoints must be prominent, reliable, and respectful of user data.',
      },
    ],
  },
  {
    slug: 'prepare-media-project-references',
    title: 'Pre-Production Mastery: Video References and Permissions',
    category: 'Video production',
    summary:
      'Video is one of the most powerful storytelling mediums, but smooth production starts with disciplined preparation.',
    published: '2026-11-01',
    readingMinutes: 3,
    art: 'video',
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      alt: 'Film clapperboard held up on location before a take',
    },
    author: defaultAuthor,
    content:
      'Video is one of the most powerful storytelling mediums available to a brand, but without proper pre-production planning, it can quickly become inefficient and costly. Before production begins, establish the core message and the primary platform where the video will live (e.g., 9:16 vertical for social feeds vs. 16:9 widescreen for corporate presentations). Gather visual references for lighting, pacing, sound design, and color grading. Crucially, verify all permissions early: ensure you have full commercial licenses for music, talent releases for on-camera individuals, and access permissions for filming locations. Smooth video production starts with disciplined preparation.',
    sections: [
      {
        heading: 'Format and Platform Specificity',
        text: 'Decide the primary distribution channel before picking up a camera or drafting storyboards. A 9:16 vertical video for Instagram Reels and TikTok demands distinct framing, pacing, and captioning compared to a 16:9 cinematic brand commercial or trade presentation.',
      },
      {
        heading: 'Visual Style, Color Grading and Audio Tone',
        text: 'Collect reference frames that embody the desired lighting mood, editing tempo, and sound design. Discussing mood boards and sound references early avoids costly reshoots and extensive revision cycles during post-production.',
      },
      {
        heading: 'Licensing, Talent and Location Permissions',
        text: 'Secure necessary commercial rights for background audio, voiceovers, on-camera talent releases, and location access prior to filming. Proper legal clearance protects brand integrity and guarantees uninterrupted commercial usage.',
      },
      {
        heading: 'Post-Production Review Workflows',
        text: 'Establish clear milestone reviews for rough cuts, sound mixing, color grading, and final delivery formats. Structured review rounds keep production on schedule and deliver polished broadcast-quality output.',
      },
    ],
  },
  {
    slug: "the-power-of-visual-communication",
    title: "The Power of Visual Communication",
    category: "Graphic design",
    summary:
      "Design is more than just making things look pretty. It's how your brand speaks before you say a single word.",
    published: '2026-11-05',
    readingMinutes: 2,
    art: "design",
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d',
      alt: "Designer desk with a sketchbook, keyboard and creative software icons",
    },
    author: defaultAuthor,
    content:
      "Graphic design is the art of using visual elements—typography, color, imagery, and layout—to communicate a specific message. Great design doesn't just look good; it guides the viewer's eye, evokes emotion, and drives action. A logo is the face of your brand, but your overall design system is its personality. When businesses invest in cohesive graphic design, they establish immediate credibility.",
    paragraphs: [
      "It's about creating a visual hierarchy that guides the user's eye exactly where you want it to go. Every element should have a purpose, and every layout should tell a story before the user even reads the text.",
      "Whether it's a social media flyer, a massive billboard, or a business card, consistency and clarity are key. When visual communication is aligned with your brand strategy, it builds instant recognition, separates you from competitors, and fosters long-term trust with your audience.",
    ],
  },
  {
    slug: "why-brand-photography-matters",
    title: "Why Brand Photography Matters",
    category: "Photography",
    summary:
      "In a digital world, high-quality imagery is the fastest way to build trust and capture attention.",
    published: '2026-11-05',
    readingMinutes: 2,
    art: "photo",
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553',
      alt: "Close-up of hands holding a professional camera with a large lens",
    },
    author: defaultAuthor,
    content:
      "People scroll past boring text, but they stop for striking images. Brand photography isn't just about taking pictures; it's about capturing the essence, quality, and personality of your business. Whether it's product shots that highlight texture and craftsmanship, or lifestyle images that show real human connection, professional photography sets the standard for your brand.",
    paragraphs: [
      "In a digital landscape where attention spans are shrinking, an investment in professional photography is one of the fastest ways to build trust. It tells your audience that you care about the details, which translates directly to how they perceive the quality of your products or services.",
      "Great photography also ensures consistency across all your platforms. From your website to your social media and printed brochures, high-quality, cohesive imagery creates a unified brand experience that makes your business look established, premium, and highly professional.",
    ],
  },
  {
    slug: "building-a-social-media-strategy",
    title: "Building a Social Media Strategy That Works",
    category: "Social media",
    summary:
      "Posting every day isn't a strategy. Here is how to build a social media presence that actually converts.",
    published: '2026-11-05',
    readingMinutes: 2,
    art: "social",
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
      alt: "Smartphone home screen showing social media apps",
    },
    author: defaultAuthor,
    content:
      "Consistency is important, but strategy is everything. A successful social media plan goes beyond just posting pretty pictures. It involves understanding your audience deeply, identifying the right platforms, and creating content pillars that provide genuine value.",
    paragraphs: [
      "Are you educating your audience, entertaining them, or inspiring them? When you focus on building a community rather than just chasing vanity metrics like likes and follows, your social media transforms from a chore into a powerful engine for brand loyalty.",
      "It's also crucial to have a distinct brand voice. Whether your tone is professional, playful, or bold, it must be consistent. By engaging directly with your followers, responding to comments, and creating interactive content, you turn passive scrollers into active advocates for your brand.",
    ],
  },
  {
    slug: "smart-digital-marketing-beyond-the-ads",
    title: "Smart Digital Marketing: Beyond the Ads",
    category: "Digital marketing",
    summary:
      "Throwing money at ads won't save a bad strategy. Here is how to market with intention and data.",
    published: '2026-11-05',
    readingMinutes: 2,
    art: "marketing",
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      alt: "Analytics dashboard with traffic charts on a dark screen",
    },
    author: defaultAuthor,
    content:
      "Digital marketing is a game of data and psychology. It's not just about running a campaign; it's about understanding the entire customer journey. From the very first click to the final conversion, every touchpoint matters.",
    paragraphs: [
      "By utilizing audience research, A/B testing, and precise retargeting, we can optimize your ad spend. The goal isn't just to get traffic; it's to get the right traffic. When you market with intention and analyze the data behind every click, you turn casual browsers into loyal, paying customers without wasting your budget.",
      "A great campaign also requires patience and iteration. It's about testing different creatives, adjusting your messaging based on real-time feedback, and scaling what works. If you don't have a strategy behind your ads, you are simply burning money. Market with intention, and the data will follow.",
    ],
  },
  {
    slug: "the-art-of-business-writing",
    title: "The Art of Business Writing: Clarity Over Complexity",
    category: "Business writing",
    summary:
      "If your audience has to read a sentence twice to understand it, you've already lost them.",
    published: '2026-11-05',
    readingMinutes: 2,
    art: "writing",
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1517842645767-c639042777db',
      alt: "Open notebook with a fountain pen and glasses on a wooden desk",
    },
    author: defaultAuthor,
    content:
      "In business, clear writing is a superpower. Whether you are writing a website landing page, a marketing email, or a formal proposal, the goal is always clarity. Great copywriting cuts through the noise and speaks directly to the reader's pain points and needs.",
    paragraphs: [
      "Avoid jargon and fluff. Focus on the benefits, use an active voice, and guide the reader naturally toward the next step. Good writing isn't about sounding smart or using big words; it's about being understood instantly.",
      "Your words are often the first interaction a client has with your brand. If your communication is messy and confusing, they will assume your business is too. Professional business writing establishes authority, builds trust, and gently persuades your audience to take action.",
    ],
  },
  {
    slug: "the-power-of-professional-documentation",
    title: "The Power of Professional Documentation",
    category: "Business documentation",
    summary:
      "Your pitch deck and company profile are your silent salespeople. Make sure they are doing their job.",
    published: '2026-11-05',
    readingMinutes: 2,
    art: "document",
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
      alt: "Professional reviewing and signing a printed business document",
    },
    author: defaultAuthor,
    content:
      "First impressions happen long before a physical meeting. A well-designed company profile, business proposal, or pitch deck speaks volumes about your professionalism. It shows investors and clients that you are organized, credible, and prepared for business.",
    paragraphs: [
      "Great documentation doesn't just list facts; it tells a compelling story about your business, your vision, and your financial potential. It uses clean layouts, striking typography, and data visualization to make complex information easy to digest.",
      "Don't let a poorly formatted, boring document undermine your brilliant business idea. Invest in professional documentation that reflects the high quality of your work and convinces stakeholders to take you seriously from the very first page.",
    ],
  },
  {
    slug: "sound-branding-the-power-of-audio",
    title: "Sound Branding: The Unseen Power of Audio",
    category: "Audio production",
    summary:
      "How does your brand sound? The right audio production can elevate your media to the next level.",
    published: '2026-11-05',
    readingMinutes: 2,
    art: "audio",
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618',
      alt: "Studio condenser microphone in a shock mount under low light",
    },
    author: defaultAuthor,
    content:
      "Sound is one of the most emotional senses. The right background music in a video, or a perfectly crisp voiceover in a commercial, can completely change how a brand is perceived. Audio production is about more than just recording; it's about mixing, mastering, and creating an immersive auditory experience.",
    paragraphs: [
      "Whether you need a custom brand jingle, a podcast edit, or a professional voiceover for a corporate video, investing in high-quality audio ensures your message is heard loud and clear. Poor audio quality is an instant credibility killer, no matter how good the video looks.",
      "When audio is done right, it elevates the entire production. It sets the mood, controls the pacing, and makes your content memorable. In a world full of visual noise, a distinct and well-produced audio identity can help your brand stand out and stick in your customer's mind.",
    ],
  },
]

export const insightTopics = [
  'Branding',
  'Graphic design',
  'Photography',
  'Video production',
  'Website development',
  'Social media',
  'Digital marketing',
  'Business writing',
  'Business documentation',
  'Audio production',
]

export function insightDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date + 'T00:00:00Z'))
}
