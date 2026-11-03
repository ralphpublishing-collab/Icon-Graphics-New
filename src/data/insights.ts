export type Insight = {
  slug: string
  title: string
  category: string
  summary: string
  published: string
  readingMinutes: number
  art: string
  sections: { heading: string; text: string }[]
}
// Website editorial guides; no founder authorship or external research is claimed.
// Add only owner-approved bylines and genuine publication dates to future articles.
export const insights: Insight[] = [
  {
    slug: 'prepare-a-creative-brief',
    title: 'A clearer brief makes room for better ideas.',
    category: 'Branding',
    summary:
      'Define the audience, message and practical requirements before choosing a visual direction.',
    published: '2026-11-01',
    readingMinutes: 2,
    art: 'brand',
    sections: [
      {
        heading: 'Start with the purpose',
        text: 'Describe what you are making and why it is needed. A new identity, a campaign flyer and a packaging update have different requirements. State the message your audience should understand and the action you want them to take.',
      },
      {
        heading: 'Describe the audience',
        text: 'Explain who the work is for, where they will encounter it and what they already know about your business. Share relevant language, accessibility and cultural considerations. Specific context is more useful than asking for a design that appeals to everyone.',
      },
      {
        heading: 'Share useful references',
        text: 'Provide examples and explain what interests you about each: the typography, composition, tone or presentation. References help communicate preferences; they are not permission to copy another brand. Include your existing brand assets and confirm that you can authorise their use.',
      },
      {
        heading: 'Agree the practical details',
        text: 'List intended channels, formats, quantities, deadlines and the person approving the work. Discuss the budget and any dependencies. Confirm deliverables, payment terms and revision arrangements with Rapheal before creative work begins.',
      },
    ],
  },
  {
    slug: 'plan-your-business-website',
    title: 'Before the first page: planning a business website.',
    category: 'Website development',
    summary:
      'A practical starting point for content, navigation and useful customer actions.',
    published: '2026-11-01',
    readingMinutes: 2,
    art: 'website',
    sections: [
      {
        heading: 'Choose a clear purpose',
        text: 'Decide what visitors need to do: understand your services, browse work, request a quotation or get in touch. Prioritise the actions that match your operating model. Avoid adding features solely because another website has them.',
      },
      {
        heading: 'Prepare accurate content',
        text: 'Gather service descriptions, contact details, original brand assets and approved project examples. Identify missing material early. Honest placeholders are preferable to invented client results or unsupported claims.',
      },
      {
        heading: 'Design for real situations',
        text: 'People may visit on a small screen or a slow connection. Keep navigation understandable, text readable and contact options easy to reach. Plan meaningful image descriptions, labelled forms and keyboard access from the beginning.',
      },
      {
        heading: 'Plan for life after launch',
        text: 'Discuss who owns the domain, how enquiries are received and how content updates are made. Agree any maintenance scope separately. Domain setup, publishing a website and configuring business email are distinct tasks that need clear responsibilities.',
      },
    ],
  },
  {
    slug: 'prepare-media-project-references',
    title: 'From reference to direction: planning a media project.',
    category: 'Video production',
    summary:
      'Bring purpose, format and permissions into the conversation before production begins.',
    published: '2026-11-01',
    readingMinutes: 2,
    art: 'motion',
    sections: [
      {
        heading: 'Define the message and channel',
        text: 'Explain whether you need an event video, a business advert or another output within the listed service scope. Share the intended audience, viewing platform and preferred length so the requirements can be discussed realistically.',
      },
      {
        heading: 'Make references useful',
        text: 'Choose a few relevant samples and explain the pace, framing, sound or mood you like. Distinguish essential requirements from preferences. References should guide a conversation rather than become an instruction to reproduce someone else’s work.',
      },
      {
        heading: 'Check materials and permissions',
        text: 'Identify footage, photographs, scripts, music and brand assets you can supply. Discuss consent and usage permissions before sharing or publishing materials. Third-party content may require separate licensing.',
      },
      {
        heading: 'Agree delivery and review',
        text: 'Discuss final formats, captions, platform requirements and who approves the work. Scheduling, payment and revision arrangements depend on the agreed project scope; confirm them before work begins.',
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
