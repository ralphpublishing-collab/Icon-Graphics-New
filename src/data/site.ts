export const site = {
  name: 'ICON GRAPHICS | Creative Agency in Nigeria',
  description:
    'We turn ideas into identities, stories and digital experiences that connect.',
}

export const LOCATION = {
  headquarters: 'Ilorin, Kwara State, Nigeria',
  availability: 'Global (Virtual Consultations)',
}
export const catalogueUrl: string = 'https://wa.me/c/2348086714454'

export const whatsapp = (
  message = 'Hello ICON GRAPHICS, I would like to discuss a project.',
) => `https://wa.me/2348086714454?text=${encodeURIComponent(message)}`

export const socials = [
  ['Instagram', 'https://instagram.com/icongraphicshub'],
  ['TikTok', 'https://tiktok.com/@icongraphicshub'],
  ['X', 'https://x.com/icongraphicshub'],
  ['YouTube', 'https://youtube.com/@icongraphicshub'],
]

export interface ServiceTier {
  name: 'Basic' | 'Standard' | 'Premium'
  priceNgn: string
  priceUsd: string
  billing: 'one-time' | 'per month'
  description: string
}

export interface ServiceDetail {
  id: string
  title: string
  description: string
  icon: string
  items: string[]
  tiers: [ServiceTier, ServiceTier, ServiceTier]
}

export const services: ServiceDetail[] = [
  {
    id: 'branding',
    title: 'Branding & Graphic Design',
    description:
      'Logo design, brand identity systems, flyers, brochures, business cards, packaging and marketing designs.',
    icon: '◈',
    items: [
      'Logo Design',
      'Brand Identity Design',
      'Flyer and Poster Design',
      'Brochure Design',
      'Business Card Design',
      'Packaging Design',
      'Social Media Graphics',
      'Banner and Signage Design',
      'Presentation and Pitch Deck Design',
      'Marketing and Promotional Materials',
    ],
    tiers: [
      {
        name: 'Basic',
        priceNgn: '₦3,000',
        priceUsd: '$5',
        billing: 'one-time',
        description: 'Single flyer or document.',
      },
      {
        name: 'Standard',
        priceNgn: '₦25,000',
        priceUsd: '$20',
        billing: 'one-time',
        description: 'Logo + Business Card + Letterhead.',
      },
      {
        name: 'Premium',
        priceNgn: '₦80,000',
        priceUsd: '$65',
        billing: 'one-time',
        description: 'Full Identity System + Guidelines.',
      },
    ],
  },
  {
    id: 'photography',
    title: 'Photography & Photo Editing',
    description:
      'Portrait, product, event and commercial photography, plus professional retouching and photo enhancement.',
    icon: '◎',
    items: [
      'Professional Photography',
      'Product Photography',
      'Portrait Photography',
      'Event Photography',
      'Commercial Photography',
      'Photo Retouching',
      'Image Enhancement',
      'Professional Photo Editing',
    ],
    tiers: [
      {
        name: 'Basic',
        priceNgn: '₦3,000',
        priceUsd: '$5',
        billing: 'one-time',
        description: 'Basic retouching per image.',
      },
      {
        name: 'Standard',
        priceNgn: '₦35,000',
        priceUsd: '$30',
        billing: 'one-time',
        description: '1 Hour Shoot + 5 retouched images.',
      },
      {
        name: 'Premium',
        priceNgn: '₦120,000',
        priceUsd: '$100',
        billing: 'one-time',
        description: 'Full Day Commercial Shoot + 20 images.',
      },
    ],
  },
  {
    id: 'video',
    title: 'Video Production & Editing',
    description:
      'Promotional videos, business adverts, music videos, event videos, editing and post production.',
    icon: '▷',
    items: [
      'Promotional Videos',
      'Advertising Videos',
      'Corporate Videos',
      'Event Videos',
      'Social Media Videos',
      'Video Editing',
      'Motion Graphics',
    ],
    tiers: [
      {
        name: 'Basic',
        priceNgn: '₦5,000',
        priceUsd: '$5',
        billing: 'one-time',
        description: 'Short form edit with provided footage.',
      },
      {
        name: 'Standard',
        priceNgn: '₦60,000',
        priceUsd: '$50',
        billing: 'one-time',
        description: '1 Min Promo Video.',
      },
      {
        name: 'Premium',
        priceNgn: '₦150,000',
        priceUsd: '$120',
        billing: 'one-time',
        description: 'Corporate/Event Video + Post production.',
      },
    ],
  },
  {
    id: 'web',
    title: 'Website Design & Development',
    description:
      'Business websites, landing pages, responsive web design, updates and website maintenance.',
    icon: '⌘',
    items: [
      'Business Websites',
      'Landing Pages',
      'Website Redesign',
      'Responsive Website Development',
      'E-commerce Websites',
      'Custom Website Solutions',
    ],
    tiers: [
      {
        name: 'Basic',
        priceNgn: '₦40,000',
        priceUsd: '$35',
        billing: 'one-time',
        description: '1 Page Landing Page.',
      },
      {
        name: 'Standard',
        priceNgn: '₦120,000',
        priceUsd: '$100',
        billing: 'one-time',
        description: '3 to 5 Page Business Website.',
      },
      {
        name: 'Premium',
        priceNgn: '₦250,000+',
        priceUsd: '$200+',
        billing: 'one-time',
        description: 'E-commerce/Custom Web App.',
      },
    ],
  },
  {
    id: 'social',
    title: 'Social Media Management & Content Creation',
    description:
      'Social media graphics, captions, content calendars, short form videos and account management.',
    icon: '✦',
    items: [
      'Social Media Graphics',
      'Content Planning',
      'Caption Writing',
      'Content Creation',
      'Account Management',
      'Social Media Strategy',
    ],
    tiers: [
      {
        name: 'Basic',
        priceNgn: '₦20,000',
        priceUsd: '$15',
        billing: 'per month',
        description: '8 Graphics + Captions.',
      },
      {
        name: 'Standard',
        priceNgn: '₦50,000',
        priceUsd: '$40',
        billing: 'per month',
        description: '15 Graphics + 4 Reels.',
      },
      {
        name: 'Premium',
        priceNgn: '₦100,000',
        priceUsd: '$80',
        billing: 'per month',
        description: 'Full Account Management + Analytics.',
      },
    ],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description:
      'Digital campaign planning, online advertising, audience engagement and promotional strategies.',
    icon: '❖',
    items: [
      'Digital Advertising',
      'Campaign Management',
      'Audience Research',
      'Marketing Strategy',
      'Digital Campaign Optimization',
    ],
    tiers: [
      {
        name: 'Basic',
        priceNgn: '₦15,000',
        priceUsd: '$10',
        billing: 'one-time',
        description: 'Ad Setup + Audience Research.',
      },
      {
        name: 'Standard',
        priceNgn: '₦45,000',
        priceUsd: '$35',
        billing: 'per month',
        description: '1 Month Campaign Management.',
      },
      {
        name: 'Premium',
        priceNgn: '₦120,000',
        priceUsd: '$100',
        billing: 'per month',
        description: '3 Month Aggressive Growth Campaign.',
      },
    ],
  },
  {
    id: 'writing',
    title: 'Writing & Copywriting',
    description:
      'Website copy, marketing copy, newsletters, proofreading, editing and professional business writing.',
    icon: '✎',
    items: [
      'Website Copywriting',
      'Social Media Captions',
      'Marketing Copy',
      'Blog Articles',
      'Promotional Writing',
    ],
    tiers: [
      {
        name: 'Basic',
        priceNgn: '₦3,000',
        priceUsd: '$5',
        billing: 'one-time',
        description: 'Pack of 5 Social Media Captions.',
      },
      {
        name: 'Standard',
        priceNgn: '₦25,000',
        priceUsd: '$20',
        billing: 'one-time',
        description: 'Website Copy up to 3 pages.',
      },
      {
        name: 'Premium',
        priceNgn: '₦50,000',
        priceUsd: '$40',
        billing: 'one-time',
        description: '4 SEO Optimized Blog Articles.',
      },
    ],
  },
  {
    id: 'documentation',
    title: 'Business Documentation',
    description:
      'Business proposals, company profiles, presentations, reports, CVs and LinkedIn profile content.',
    icon: '▤',
    items: [
      'Business Proposals',
      'Company Profiles',
      'Presentations',
      'Business Reports',
      'CV Writing',
      'LinkedIn Profile Content',
    ],
    tiers: [
      {
        name: 'Basic',
        priceNgn: '₦3,000',
        priceUsd: '$5',
        billing: 'one-time',
        description: 'CV/Resume Revamp.',
      },
      {
        name: 'Standard',
        priceNgn: '₦30,000',
        priceUsd: '$25',
        billing: 'one-time',
        description: 'Company Profile or Pitch Deck.',
      },
      {
        name: 'Premium',
        priceNgn: '₦75,000',
        priceUsd: '$60',
        billing: 'one-time',
        description: 'Comprehensive Proposal + Financials.',
      },
    ],
  },
  {
    id: 'audio',
    title: 'Audio Production',
    description:
      'Voiceovers, jingles, audio editing and creative audio production for brands and projects.',
    icon: '≋',
    items: [
      'Professional Voiceovers',
      'Brand Jingles',
      'Audio Editing',
      'Audio Cleanup',
      'Creative Audio Production',
    ],
    tiers: [
      {
        name: 'Basic',
        priceNgn: '₦3,000',
        priceUsd: '$5',
        billing: 'one-time',
        description: 'Audio Cleanup up to 5 minutes.',
      },
      {
        name: 'Standard',
        priceNgn: '₦15,000',
        priceUsd: '$15',
        billing: 'one-time',
        description: 'Professional Voiceover up to 2 minutes.',
      },
      {
        name: 'Premium',
        priceNgn: '₦50,000',
        priceUsd: '$40',
        billing: 'one-time',
        description: 'Custom Brand Jingle.',
      },
    ],
  },
]

export const pricingDisclaimer =
  'We work with local and international clients. Prices are subject to project scope. Ad spend for digital marketing is paid separately by the client.'

export type Project = {
  id: string
  title: string
  category: string
  description: string
  image?: string
  captions?: string
  video?: string
  audio?: string
  objectives?: string
  direction?: string
  execution?: string
  deliverables?: string[]
  label?: string
  concept: boolean
  art?: string
  client?: string
  location?: string
  mediaPending?: boolean
  gallery?: { src: string; alt: string; caption: string; width: number; height: number }[]
}

export const clientProjects: Project[] = [
  {
    id: 'erin-fashion-world',
    title: 'Erin Fashion World',
    category: 'branding',
    client: 'Erin Fashion World',
    location: 'Ilorin, Nigeria',
    label: 'Client Case Study · Logo & Brand Identity',
    image: '/portfolio/erin-fashion-world-logo.jpg',
    video: '/portfolio/erin-fashion-world-promo.mp4',
    gallery: [
      {
        src: '/portfolio/erin-fashion-world-logo.jpg',
        alt: 'Erin Fashion World circular gold logo with EF monogram, crown and hanger, reading Luxury, Thrift, Bespoke',
        caption: 'Primary brand mark',
        width: 779,
        height: 770,
      },
      {
        src: '/portfolio/erin-fashion-world-shopping-bag.jpg',
        alt: 'Black Erin Fashion World shopping bag with gold rope handles and gold logo, tagline Dress Better. Live Bolder.',
        caption: 'Shopping bag application',
        width: 808,
        height: 957,
      },
      {
        src: '/portfolio/erin-fashion-world-hang-tag.jpg',
        alt: 'Black Erin Fashion World apparel hang tag with gold foil logo and tagline on dark fabric',
        caption: 'Apparel hang tag',
        width: 614,
        height: 954,
      },
    ],
    description:
      'Full brand mark and visual identity system for Erin Fashion World, capturing a luxury thrift vision with polish and distinction.',
    objectives:
      'Build a cohesive luxury thrift brand identity that resonates with discerning fashion clientele and stands out in a competitive marketplace.',
    direction:
      'Refined monogram marks, sophisticated brand palette, timeless typographic hierarchy, and versatile application across boutique signage and tags.',
    execution:
      'Comprehensive brand system including primary brand mark, secondary emblems, color specifications, typography rules, and packaging guidelines.',
    deliverables: [
      'Primary Brand Identity & Logo Mark',
      'Secondary Monogram & Icon System',
      'Brand Identity Guidelines Document',
      'Apparel Tags & Packaging Specifications',
      'Social Media Announcement Templates',
    ],
    concept: false,
    mediaPending: false,
    art: 'brand',
  },
  {
    id: 'lewa-glam-beauty-empire',
    title: 'Lewa Glam Beauty Empire',
    category: 'social',
    client: 'Lewa Glam Beauty Empire',
    location: 'Offa, Nigeria',
    label: 'Client Case Study · Social Media Graphics & Flyers',
    image: '/portfolio/lewa-glam-beauty-empire-social-grid.png',
    video: '/portfolio/lewa-glam-beauty-empire-promo.mp4',
    gallery: [
      {
        src: '/portfolio/lewa-glam-beauty-empire-flyer.png',
        alt: 'Lewa Glam Beauty Empire promotional flyer in emerald green and gold, featuring a woman in a green gele, the services makeup, gele tying, lashes, nail fixing, pedicure and manicure and facial treatment, a Book Now button and contact details',
        caption: 'Main promotional flyer',
        width: 1024,
        height: 1536,
      },
      {
        src: '/portfolio/lewa-glam-beauty-empire-social-grid.png',
        alt: 'Nine-tile Lewa Glam Beauty Empire social media grid in green and gold, with logo, beauty portraits, services menu, a skincare beauty tip, the Look Good. Feel Confident. Shine Always. slogan and contact tile',
        caption: 'Social media campaign grid',
        width: 1254,
        height: 1254,
      },
    ],
    description:
      'Main promotional flyer and engaging social media visuals created to showcase the full beauty and styling service range.',
    objectives:
      'Design high impact promotional collateral and social media content that attracts new salon, beauty, and bridal clients.',
    direction:
      'Glamorous, vibrant, and clear visual hierarchy highlighting salon services, treatment packages, and immediate booking actions.',
    execution:
      'Digital promotional flyer suites and responsive social graphics tailored for Instagram feeds, stories, and WhatsApp status broadcasts.',
    deliverables: [
      'Master Promotional Brand Flyer',
      'Comprehensive Service Menu Graphic',
      'Social Media Campaign Graphics',
      'WhatsApp Status Promotional Templates',
    ],
    concept: false,
    mediaPending: false,
    art: 'social',
  },
  {
    id: 'opeyemi-beauty-touch',
    title: 'Opeyemi Beauty Touch / Collections',
    category: 'branding',
    client: 'Opeyemi Beauty Touch / Collections',
    location: 'Ilorin, Nigeria',
    label: 'Client Case Study · Brochure & Business Cards',
    image: '/portfolio/opeyemi-beauty-touch-brochure.jpg',
    video: '/portfolio/opeyemi-beauty-touch-promo.mp4',
    gallery: [
      {
        src: '/portfolio/opeyemi-beauty-touch-brochure.jpg',
        alt: 'Opeyemi Beauty Touch / Collections tri-fold brochure in black and gold: crown and silhouette logo with services panel (bridal makeup, birthday glam, matriculation glam, makeup training, photoshoot makeup, other beauty services), makeup packages panel with bridal, special occasion and classic glam packages, and a bridal photography and contact panel with the tagline Beauty Is Our Passion',
        caption: 'Tri-fold service brochure',
        width: 2149,
        height: 1284,
      },
      {
        src: '/portfolio/opeyemi-beauty-touch-business-cards.jpg',
        alt: 'Front and back of the black and rose-gold Opeyemi Beauty Touch / Collections business card on dark marble: the front shows the crowned silhouette logo, ornate gold border and the tagline We magnify the beauty that already exist; the back lists phone, Ilorin location and the call to action Book your beauty experience',
        caption: 'Business card · front & back',
        width: 1696,
        height: 2528,
      },
    ],
    description:
      'Clean and elegant service brochure and bespoke business cards crafted for bridal glam and photoshoot clientele.',
    objectives:
      'Elevate client presentation materials with an elegant, tactile print suite that showcases service packages and pricing clearly.',
    direction:
      'Soft luxury aesthetic, balanced whitespace, clear service categorization, and print ready finishes.',
    execution:
      'Custom brochure layout and double sided business card suite ready for both premium commercial print and mobile PDF sharing.',
    deliverables: [
      'Service Brochure (Print & Digital PDF)',
      'Executive Business Card Design',
      'Bridal Glam Consultation Cards',
    ],
    concept: false,
    mediaPending: false,
    art: 'document',
  },
  {
    id: 'global-trade-connect',
    title: 'Global Trade Connect',
    category: 'documentation',
    client: 'Global Trade Connect',
    location: 'United Kingdom',
    label: 'Client Case Study · Pitch Deck & Proposals',
    image: '/portfolio/global-trade-connect-deck-cover.png',
    video: '/portfolio/global-trade-connect-promo.mp4',
    gallery: [
      {
        src: '/portfolio/global-trade-connect-deck-cover.png',
        alt: 'Global Trade Connect pitch deck cover slide in navy, royal blue and silver: chrome-ringed globe logo, the headline Connecting Businesses. Powering Global Trade., the line Building stronger international connections through seamless trade and logistics solutions, a container ship at a lit port with an aircraft and glowing world network map, and icons for global logistics, international trade and business connectivity',
        caption: 'Pitch deck · cover slide',
        width: 1672,
        height: 941,
      },
      {
        src: '/portfolio/global-trade-connect-deck-who-we-are.png',
        alt: 'Global Trade Connect Who We Are slide: company introduction describing an international trade and logistics-focused business that helps businesses navigate global markets and build meaningful international connections, with a handshake call-out and a footer bar for global markets, international trade, business connections and global opportunities',
        caption: 'Who we are · company profile',
        width: 1672,
        height: 941,
      },
      {
        src: '/portfolio/global-trade-connect-deck-vision.png',
        alt: 'Global Trade Connect Our Vision slide with the headline Making Global Trade Seamless and a vision statement about opportunities moving across borders, above five icon pillars: expand markets, build partnerships, drive growth, connect businesses and create opportunities',
        caption: 'Our vision',
        width: 1672,
        height: 941,
      },
      {
        src: '/portfolio/global-trade-connect-deck-services.png',
        alt: 'Global Trade Connect Our Services slide presenting five service cards with icons and photography: global logistics, import and export support, international trade consultancy, supply chain solutions and business connectivity, with the tagline Building Global Trade Partnerships, One Connection at a Time',
        caption: 'Our services',
        width: 1672,
        height: 941,
      },
    ],
    description:
      'Custom investor pitch deck, business proposals and corporate profile layouts for international export focused initiatives.',
    objectives:
      'Develop compelling investor presentation materials that communicate cross border trade logistics, scale, and financial viability.',
    direction:
      'International corporate standards, data visualization, clean infographics, and high clarity typography.',
    execution:
      'Executive 18-slide pitch deck and corporate proposal formatted for investor meetings, digital review, and executive print distribution.',
    deliverables: [
      'Investor Pitch Deck (Keynote & PDF)',
      'Corporate Capabilities Profile',
      'Trade Flow & Financial Infographics',
    ],
    concept: false,
    mediaPending: false,
    art: 'document',
  },
  {
    id: 'nova-global-brands',
    title: 'Nova Global Brands',
    category: 'marketing',
    client: 'Nova Global Brands',
    location: 'United States',
    label: 'Client Case Study · Packaging & Digital Marketing',
    image: '/portfolio/nova-global-brands-packaging.png',
    video: '/portfolio/nova-global-brands-promo.mp4',
    gallery: [
      {
        src: '/portfolio/nova-global-brands-packaging.png',
        alt: 'Nova Global Radiant Skin Beauty Serum packaging mockup: a gloss black 50 ml pump bottle with gold collar beside its matching black presentation box, both carrying the gold N monogram, the NOVA GLOBAL wordmark, the line Glow. Refresh. Renew., a gold droplet icon and For Healthy, Youthful and Radiant Skin, with a magenta wave on the box, styled with a pink orchid, dark towel and plant under magenta light',
        caption: 'Product packaging · serum bottle & box',
        width: 1672,
        height: 941,
      },
      {
        src: '/portfolio/nova-global-brands-digital-ad.png',
        alt: 'Nova Global square digital ad in black, magenta and gold: the gold N monogram and NOVA GLOBAL wordmark over Skincare · Beauty · Confidence, the headline Glow Beyond Borders with Premium Skincare for a Radiant You., the serum bottle and box on a glowing podium in front of a lit globe, benefit icons for radiant glow, deep hydration, youthful skin and all skin types, and the footer Nova Global · Beauty Without Borders',
        caption: 'Digital ad campaign graphic',
        width: 1254,
        height: 1254,
      },
    ],
    description:
      'Custom product packaging design and high conversion digital campaign graphics for an Africa focused consumer product line.',
    objectives:
      'Create striking retail packaging with strong shelf appeal, supported by targeted digital promotional graphics.',
    direction:
      'Modern packaging design celebrating African heritage with international retail appeal, paired with bold digital campaign visuals.',
    execution:
      'Production dieline packaging artwork, 3D product visualization, and multichannel digital advertising creative sets.',
    deliverables: [
      'Product Packaging Dielines & Specifications',
      '3D Product Mockup Visuals',
      'Digital Ad Campaign Assets (Feed & Stories)',
      'Promotional Web Banners',
    ],
    concept: false,
    mediaPending: false,
    art: 'campaign',
  },
]


// All portfolio entries are the authentic client case studies
export const projects: Project[] = clientProjects

export const testimonials = [
  {
    name: 'Gift Olayemi O.',
    role: 'Founder / Fashion Designer, Erin Fashion World, Ilorin, Nigeria',
    quote:
      'ICON GRAPHICS built our full brand mark and visual identity for Erin Fashion World. They captured our luxury thrift vision perfectly, delivering a polished look that stands out to our fashion customers.',
  },
  {
    name: 'Harbeyfe Investment',
    role: 'Founder, Lewa Glam Beauty Empire, Offa, Nigeria',
    quote:
      'We worked with ICON GRAPHICS to create our main promotional flyer and social media visuals for Lewa Glam Beauty Empire. Their designs highlight our full beauty service range and have helped us attract many new clients.',
  },
  {
    name: 'Opeyemi',
    role: 'Founder, Opeyemi Beauty Touch / Collections, Ilorin, Nigeria',
    quote:
      'ICON GRAPHICS designed our service brochure and business cards for Opeyemi Beauty Touch / Collections. The layouts are clean and elegant, ideal for our bridal glam and photoshoot client base.',
  },
  {
    name: 'James Harrison',
    role: 'Operations Lead, Global Trade Connect, United Kingdom',
    quote:
      'We partner with ICON GRAPHICS for custom pitch decks, business proposals and corporate profile layouts for our export focused projects. Communication is clear, quality is consistent, and they follow international brand standards closely.',
  },
  {
    name: 'Lisa Carter',
    role: 'Brand Manager, Nova Global Brands, United States',
    quote:
      'We commission custom product packaging and digital campaign graphics for our Africa focused product line from ICON GRAPHICS. Their creativity and attention to detail are impressive, and they always meet agreed upon deadlines.',
  },
]

export const process = [
  'Initial enquiry',
  'Understanding project requirements',
  'Discussion and quotation',
  'Project confirmation and agreement',
  'Initial payment and project scheduling',
  'Creative development and execution',
  'Review and agreed revisions',
  'Final payment and delivery',
]

export const processDescriptions = [
  'Share your idea through the enquiry form, email or WhatsApp. Rapheal is your direct point of contact.',
  'Discuss the audience, objectives, references, required deliverables and preferred deadline. Clarify what success means for your project.',
  'Receive a quotation based on the agreed scope. Discuss costs, payment arrangements and practical requirements before committing.',
  'Confirm the scope, responsibilities, usage rights and approval process in a project agreement.',
  'Agree any initial payment (50% deposit) and scheduling requirements before creative work starts.',
  'Rapheal oversees the creative direction, project coordination and development of the agreed deliverables.',
  'Review the work and provide consolidated feedback. Standard and Premium packages include 2 to 3 rounds of revisions.',
  'Complete final 50% payment and receive all final deliverables with full copyright and usage rights transferred.',
]

export const packagePrices: Record<string, string> = {
  branding: 'From ₦3,000 / $5',
  photography: 'From ₦3,000 / $5',
  video: 'From ₦5,000 / $5',
  web: 'From ₦40,000 / $35',
  social: 'From ₦20,000 / $15 per month',
  marketing: 'From ₦15,000 / $10',
  writing: 'From ₦3,000 / $5',
  documentation: 'From ₦3,000 / $5',
  audio: 'From ₦3,000 / $5',
}

export const packages = services.map((service) => ({
  serviceId: service.id,
  title: service.title,
  description: service.description,
  items: service.items,
  tiers: service.tiers,
  price: packagePrices[service.id],
  note: 'A tailored scope with deliverables, schedule and payment terms agreed before work begins.',
}))

export const faqs = [
  [
    'What exactly does ICON GRAPHICS do?',
    'We are a founder led creative and media agency. We offer nine core services: Branding & Graphic Design, Photography, Video Production, Website Design, Social Media Management, Digital Marketing, Copywriting, Business Documentation, and Audio Production. We are a one stop shop for your brand’s visual and digital needs.',
  ],
  [
    'Do you work with clients outside of Nigeria?',
    'Yes, absolutely. We are based in Nigeria but create beyond borders. We work with international clients and accept payments in both Naira (₦) and US Dollars ($).',
  ],
  [
    'How much do your services cost?',
    'Our pricing depends on the scope of the project. However, our entry level tasks start from as low as ₦3,000 (approx. $5). We offer Basic, Standard, and Premium packages for all nine services. Please check our Services page for detailed starting prices.',
  ],
  [
    'How do I pay for my project?',
    'We require a 50% non-refundable deposit to commence any project. The remaining 50% balance is due upon project completion, before the final handover of files. We accept bank transfers in NGN and international payments in USD.',
  ],
  [
    'How do we begin working together?',
    'It is very simple. You can click any of the “Enquire” buttons on our website to chat with our founder directly on WhatsApp, or you can fill out the contact form. We will discuss your goals and provide a custom quote within 24 hours.',
  ],
  [
    'What do I need to prepare before we start?',
    'For most projects, we just need a brief description of what you want, any existing brand assets (like old logos or photos), and 1 to 3 examples of designs or websites you like for inspiration.',
  ],
  [
    'How many revisions do I get?',
    'We want you to be 100% happy. Standard and Premium packages include 2 to 3 rounds of revisions. We will work closely with you to refine the design until it perfectly matches your vision.',
  ],
  [
    'How long will my project take?',
    'Timelines depend on the service. A single graphic design might take 1 to 2 days, while a full website or video production can take 1 to 3 weeks. We will give you a clear timeline before you pay the deposit.',
  ],
  [
    'Who owns the final files and usage rights?',
    'Once the final 50% payment is made, full copyright and usage rights for all final deliverables are transferred completely to you. We also reserve the right to display the work in our portfolio.',
  ],
]

export interface FAQCategory {
  title: string
  items: [string, string][]
}

export const faqCategories: FAQCategory[] = [
  {
    title: 'Services & Capabilities',
    items: [
      [
        'What exactly does ICON GRAPHICS do?',
        'We are a founder led creative and media agency. We offer nine core services: Branding & Graphic Design, Photography, Video Production, Website Design, Social Media Management, Digital Marketing, Copywriting, Business Documentation, and Audio Production. We are a one stop shop for your brand’s visual and digital needs.',
      ],
      [
        'Do you work with clients outside of Nigeria?',
        'Yes, absolutely. We are based in Nigeria but create beyond borders. We work with international clients and accept payments in both Naira (₦) and US Dollars ($).',
      ],
    ],
  },
  {
    title: 'Pricing & Payments',
    items: [
      [
        'How much do your services cost?',
        'Our pricing depends on the scope of the project. However, our entry level tasks start from as low as ₦3,000 (approx. $5). We offer Basic, Standard, and Premium packages for all nine services. Please check our Services page for detailed starting prices.',
      ],
      [
        'How do I pay for my project?',
        'We require a 50% non-refundable deposit to commence any project. The remaining 50% balance is due upon project completion, before the final handover of files. We accept bank transfers in NGN and international payments in USD.',
      ],
    ],
  },
  {
    title: 'Starting a Project',
    items: [
      [
        'How do we begin working together?',
        'It is very simple. You can click any of the “Enquire” buttons on our website to chat with our founder directly on WhatsApp, or you can fill out the contact form. We will discuss your goals and provide a custom quote within 24 hours.',
      ],
      [
        'What do I need to prepare before we start?',
        'For most projects, we just need a brief description of what you want, any existing brand assets (like old logos or photos), and 1 to 3 examples of designs or websites you like for inspiration.',
      ],
    ],
  },
  {
    title: 'Revisions & Delivery',
    items: [
      [
        'How many revisions do I get?',
        'We want you to be 100% happy. Standard and Premium packages include 2 to 3 rounds of revisions. We will work closely with you to refine the design until it perfectly matches your vision.',
      ],
      [
        'How long will my project take?',
        'Timelines depend on the service. A single graphic design might take 1 to 2 days, while a full website or video production can take 1 to 3 weeks. We will give you a clear timeline before you pay the deposit.',
      ],
      [
        'Who owns the final files and usage rights?',
        'Once the final 50% payment is made, full copyright and usage rights for all final deliverables are transferred completely to you. We also reserve the right to display the work in our portfolio.',
      ],
    ],
  },
]

