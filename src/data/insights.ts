export type Insight = {
  slug: string
  title: string
  category: string
  summary: string
  published: string
  readingMinutes: number
  art: 'brand' | 'website' | 'video'
  content: string
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
