export interface ServiceDetailData {
  id: string;
  name: string;
  badgeText: string;
  heroLine1: string;
  heroLine2Prefix?: string;
  heroLine2AccentWord: string;
  heroLine2Suffix?: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  overview: string;
  deliverables: {
    number: string;
    title: string;
    description: string;
  }[];
  whyItMatters: string;
}

export const servicesDataMap: Record<string, ServiceDetailData> = {
  branding: {
    id: 'branding',
    name: 'Branding',
    badgeText: 'BRANDING',
    heroLine1: 'Be known for something.',
    heroLine2Prefix: 'Be ',
    heroLine2AccentWord: 'remembered',
    heroLine2Suffix: ' for it.',
    metaTitle: 'Branding | Positioning, Messaging & Identity | MAB Lab',
    metaDescription:
      'Build a brand people understand, remember and choose. MAB Lab helps with positioning, messaging, identity systems and brand guidelines.',
    tagline: 'Positioning, messaging, identity systems and brand guidelines.',
    overview:
      'Branding isn’t just a logo or a color palette. It’s the enduring repository of your reputation, distinction, and clear meaning in the minds of your audience.',
    deliverables: [
      {
        number: '01',
        title: 'Brand Positioning & Strategy',
        description:
          'Uncover your unique market position, core value proposition, and competitive moat through deep research.',
      },
      {
        number: '02',
        title: 'Messaging & Tone of Voice',
        description:
          'Craft clear, compelling messaging frameworks that resonate with your ideal customers and eliminate market noise.',
      },
      {
        number: '03',
        title: 'Visual Identity System',
        description:
          'Design distinct, memorable visual systems including logos, typography, color palettes, and graphic assets.',
      },
      {
        number: '04',
        title: 'Brand Guidelines & Manuals',
        description:
          'Comprehensive brand governance documentation to ensure consistent execution across every touchpoint.',
      },
    ],
    whyItMatters:
      'In crowded markets, products get copied, features get matched, but a distinct brand remains untouchable.',
  },
  'web-development': {
    id: 'web-development',
    name: 'Web Development',
    badgeText: 'WEB DEVELOPMENT',
    heroLine1: 'Digital experiences built to convert.',
    heroLine2Prefix: 'Built for ',
    heroLine2AccentWord: 'speed',
    heroLine2Suffix: ' & scale.',
    metaTitle: 'Web Development | Websites, E-commerce & CMS | MAB Lab',
    metaDescription:
      'Build websites that work for your business. From websites and e-commerce to CMS and custom integrations, we build with strategy in mind.',
    tagline: 'Websites, e-commerce stores, CMS and custom integrations.',
    overview:
      'Your website is your primary digital asset. We engineer fast, responsive, conversion-focused websites that communicate authority.',
    deliverables: [
      {
        number: '01',
        title: 'Custom Web Design & UX',
        description:
          'Intuitive, mobile-first user interfaces designed to guide visitors seamlessly from interest to action.',
      },
      {
        number: '02',
        title: 'High-Performance Development',
        description:
          'Clean, modern codebase optimized for lightning-fast page load times and top Lighthouse scores.',
      },
      {
        number: '03',
        title: 'CMS & E-Commerce Integration',
        description:
          'Scalable content management and headless commerce architectures built for ease of management.',
      },
      {
        number: '04',
        title: 'SEO & Security Infrastructure',
        description:
          'Built-in search engine optimization, SSL, structured data, and enterprise-grade security.',
      },
    ],
    whyItMatters:
      'A slow or confusing website loses leads before you ever get to pitch. Performance is conversion.',
  },
  marketing: {
    id: 'marketing',
    name: 'Marketing',
    badgeText: 'MARKETING',
    heroLine1: 'Strategic growth engines.',
    heroLine2Prefix: 'Zero ',
    heroLine2AccentWord: 'shortcuts',
    heroLine2Suffix: ', pure impact.',
    metaTitle: 'Marketing | Strategy, Campaigns & Growth | MAB Lab',
    metaDescription:
      'Marketing built to get you noticed, considered and chosen. Strategy, campaigns, demand generation, lifecycle marketing and optimisation.',
    tagline: 'Campaigns, execution, growth initiatives and marketing support.',
    overview:
      'Marketing is the honest translation of real capability to audience demand. We build sustainable growth engines.',
    deliverables: [
      {
        number: '01',
        title: 'Growth Strategy & Audits',
        description: 'Deep funnel analysis to identify bottlenecks and high-ROI expansion opportunities.',
      },
      {
        number: '02',
        title: 'Integrated Campaigns',
        description: 'Multi-channel marketing campaigns aligned with sales goals and customer lifecycles.',
      },
      {
        number: '03',
        title: 'Funnel Optimization',
        description: 'Continuous testing and optimization across ad copy, landing pages, and lead nurture sequences.',
      },
      {
        number: '04',
        title: 'Performance Measurement',
        description: 'Clear reporting dashboards mapping marketing spend directly to customer acquisition costs.',
      },
    ],
    whyItMatters:
      'Marketing without strategy is just noise. Strategy ensures every dollar spent works toward clear revenue goals.',
  },
  'social-media': {
    id: 'social-media',
    name: 'Social Media',
    badgeText: 'SOCIAL MEDIA',
    heroLine1: 'Turn followers into advocates.',
    heroLine2Prefix: 'Build real ',
    heroLine2AccentWord: 'community',
    heroLine2Suffix: ' & trust.',
    metaTitle: 'Social Media | Strategy, Content & Community | MAB Lab',
    metaDescription:
      'Grab attention and create connection. Social media strategy, content, community management, campaigns and founder-led social.',
    tagline: 'Content planning, community management and platform growth.',
    overview:
      'Social media is where your brand lives in public. We create authentic social content that sparks conversation and builds trust.',
    deliverables: [
      {
        number: '01',
        title: 'Platform Strategy & Planning',
        description: 'Custom content pillars tailored to LinkedIn, X, Instagram, YouTube, and TikTok.',
      },
      {
        number: '02',
        title: 'Creative Content Production',
        description: 'Eye-catching visuals, short-form video scripts, and copy designed for engagement.',
      },
      {
        number: '03',
        title: 'Community Management',
        description: 'Proactive audience response and conversation management to strengthen brand loyalty.',
      },
      {
        number: '04',
        title: 'Growth Analytics',
        description: 'Monthly performance reports tracking reach, sentiment, engagement rates, and conversion.',
      },
    ],
    whyItMatters:
      'Social media isn’t about posting daily—it’s about consistently reinforcing your brand positioning in public.',
  },
  content: {
    id: 'content',
    name: 'Content',
    badgeText: 'CONTENT',
    heroLine1: 'Authority through clarity.',
    heroLine2Prefix: 'Ideas that ',
    heroLine2AccentWord: 'resonate',
    heroLine2Suffix: ' & endure.',
    metaTitle: 'Content | Strategy, Thought Leadership & Content | MAB Lab',
    metaDescription:
      'Turn expertise into authority. Content strategy, thought leadership, editorial planning, articles, case studies, sales enablement and more.',
    tagline: 'Articles, reports, sales collateral and thought leadership.',
    overview:
      'Good content solves real problems for your customers. We produce authoritative content that positions your team as industry leaders.',
    deliverables: [
      {
        number: '01',
        title: 'Thought Leadership Articles',
        description: 'In-depth essays and articles addressing core industry challenges and strategic insights.',
      },
      {
        number: '02',
        title: 'Whitepapers & Industry Reports',
        description: 'Data-rich gated research assets designed for high-value B2B lead generation.',
      },
      {
        number: '03',
        title: 'Sales & Enablement Collateral',
        description: 'Case studies, pitch decks, and one-sheeters engineered to close deals faster.',
      },
      {
        number: '04',
        title: 'SEO Copywriting',
        description: 'Optimized blog posts and web copy designed to rank high and educate buyers.',
      },
    ],
    whyItMatters:
      'High-quality content builds trust long before a sales call ever happens.',
  },
  'video-podcast': {
    id: 'video-podcast',
    name: 'Video & Podcast',
    badgeText: 'VIDEO & PODCAST',
    heroLine1: 'Engaging media creation.',
    heroLine2Prefix: 'Stories that ',
    heroLine2AccentWord: 'captivate',
    heroLine2Suffix: ' audiences.',
    metaTitle: 'Video & Podcast | Production & Distribution | MAB Lab',
    metaDescription:
      'Video and audio that informs, persuades, entertains and connects. From brand films and podcasts to social videos, campaigns and distribution.',
    tagline: 'Video production, podcasts, editing and distribution.',
    overview:
      'Video and audio are the most intimate mediums for human connection. We produce high-quality shows and video assets.',
    deliverables: [
      {
        number: '01',
        title: 'Podcast Concept & Production',
        description: 'End-to-end podcast launch strategy, episode scripting, audio editing, and publishing.',
      },
      {
        number: '02',
        title: 'Brand Stories & Documentaries',
        description: 'Cinematic brand films, founder interviews, and customer success video stories.',
      },
      {
        number: '03',
        title: 'Short-Form Reels & Shorts',
        description: 'High-retention vertical clips edited specifically for TikTok, Reels, and YouTube Shorts.',
      },
      {
        number: '04',
        title: 'Distribution Strategy',
        description: 'Multi-platform syndication across Spotify, Apple Podcasts, YouTube, and social media.',
      },
    ],
    whyItMatters:
      'Audience attention is moving to video and audio. Being present in these formats creates deep affinity.',
  },
  'market-research': {
    id: 'market-research',
    name: 'Market Research',
    badgeText: 'MARKET RESEARCH',
    heroLine1: 'Replace assumptions with insight.',
    heroLine2Prefix: 'Deep ',
    heroLine2AccentWord: 'understanding',
    heroLine2Suffix: ' drives growth.',
    metaTitle: 'Market Research | Customer, Market & Competitor Research | MAB Lab',
    metaDescription:
      'Understand your market before making important decisions. Customer insights, competitor analysis and market intelligence to reduce guesswork.',
    tagline: 'Customer insights, competitor analysis and market intelligence.',
    overview:
      'The biggest mistake in marketing is assuming you know what your customers want. We uncover the real truth through evidence.',
    deliverables: [
      {
        number: '01',
        title: 'Customer Discovery Interviews',
        description: 'In-depth 1-on-1 interviews with real buyers to map buying triggers and hidden friction points.',
      },
      {
        number: '02',
        title: 'Competitor Landscape Analysis',
        description: 'Comprehensive auditing of competitor positioning, pricing, marketing channels, and gaps.',
      },
      {
        number: '03',
        title: 'Category & Demand Mapping',
        description: 'Quantitative analysis of total addressable market size, search volume, and category trends.',
      },
      {
        number: '04',
        title: 'Actionable Research Reports',
        description: 'Clear, fluff-free strategic recommendations based on empirical market findings.',
      },
    ],
    whyItMatters:
      'A week of good market research saves months of wasted marketing spend on wrong assumptions.',
  },
  'pr-influencer': {
    id: 'pr-influencer',
    name: 'PR & Influencer',
    badgeText: 'PR & INFLUENCER',
    heroLine1: 'Earned authority & reach.',
    heroLine2Prefix: 'Amplify ',
    heroLine2AccentWord: 'reputation',
    heroLine2Suffix: ' at scale.',
    metaTitle: 'PR & Influencer | Media, Thought Leadership & Creators | MAB Lab',
    metaDescription:
      'Build awareness, authority and visibility through PR and influencer marketing, including media relations, thought leadership and creator partnerships.',
    tagline: 'Media coverage, thought leadership and creator partnerships.',
    overview:
      'Earned media builds credibility that paid ads simply cannot buy. We connect your brand with trusted voices and publications.',
    deliverables: [
      {
        number: '01',
        title: 'Media Relations & Press Outlets',
        description: 'Targeted pitches to tier-1 publications, trade magazines, and digital news platforms.',
      },
      {
        number: '02',
        title: 'Executive Thought Leadership',
        description: 'Securing guest articles, podcast interviews, and keynote speaking opportunities for founders.',
      },
      {
        number: '03',
        title: 'Creator & Influencer Partnerships',
        description: 'Vetting, negotiating, and managing authentic partnerships with industry influencers.',
      },
      {
        number: '04',
        title: 'Crisis & Reputation Management',
        description: 'Strategic PR playbooks to protect brand equity during critical transitions.',
      },
    ],
    whyItMatters:
      'Third-party validation accelerates buyer trust faster than self-promotional marketing.',
  },
  'seo-paid-ads': {
    id: 'seo-paid-ads',
    name: 'SEO & Paid Ads',
    badgeText: 'SEO & PAID ADS',
    heroLine1: 'Predictable customer acquisition.',
    heroLine2Prefix: 'Capture ',
    heroLine2AccentWord: 'demand',
    heroLine2Suffix: ' when it matters.',
    metaTitle: 'SEO & Paid Ads | Search, Leads & Conversion | MAB Lab',
    metaDescription:
      'Be found by the right people and convert more of them. SEO, Google Ads, social ads, campaign strategy, landing pages and performance optimisation.',
    tagline: 'Search visibility, lead generation and conversion optimization.',
    overview:
      'SEO captures intent; paid ads scale predictable reach. Together, they create a dominant search footprint for your brand.',
    deliverables: [
      {
        number: '01',
        title: 'Technical & On-Page SEO',
        description: 'Site architecture, keyword strategy, schema markup, and content optimization for search engines.',
      },
      {
        number: '02',
        title: 'Paid Search (Google & Bing Ads)',
        description: 'Intent-driven keyword campaigns designed for maximum return on ad spend (ROAS).',
      },
      {
        number: '03',
        title: 'Paid Social (Meta, LinkedIn, X)',
        description: 'Highly targeted audience campaigns with dynamic creative testing and retargeting.',
      },
      {
        number: '04',
        title: 'Conversion Rate Optimization (CRO)',
        description: 'A/B testing landing page layouts, headlines, and call-to-actions to maximize conversion rates.',
      },
    ],
    whyItMatters:
      'Showing up at the exact moment a customer is searching for a solution is the highest-ROI opportunity in marketing.',
  },
  design: {
    id: 'design',
    name: 'Design',
    badgeText: 'DESIGN',
    heroLine1: 'Visual excellence with purpose.',
    heroLine2Prefix: 'Crafted to ',
    heroLine2AccentWord: 'impress',
    heroLine2Suffix: ' & convert.',
    metaTitle: 'Design | Brand, Digital & Marketing Design | MAB Lab',
    metaDescription:
      'Design that helps people understand, remember and engage with your brand. Presentations, marketing assets, digital and print design.',
    tagline: 'Presentations, marketing assets, digital and print design.',
    overview:
      'Design communicates your standards before a word is read. We create premium visual assets that command respect.',
    deliverables: [
      {
        number: '01',
        title: 'Presentation & Investor Decks',
        description: 'Custom pitch decks and keynote slides engineered to captivate investors and prospective clients.',
      },
      {
        number: '02',
        title: 'Digital Marketing Design',
        description: 'High-converting ad banners, social templates, email graphics, and web visuals.',
      },
      {
        number: '03',
        title: 'Print & Packaging Design',
        description: 'Brochures, event signage, product packaging, and physical brand merchandise.',
      },
      {
        number: '04',
        title: 'Design Systems & Asset Libraries',
        description: 'Reusable Figma libraries ensuring consistent design execution across your organization.',
      },
    ],
    whyItMatters:
      'First impressions are formed in 50 milliseconds. Exceptional design immediately signals high quality.',
  },
  events: {
    id: 'events',
    name: 'Events',
    badgeText: 'EVENTS',
    heroLine1: 'Unforgettable brand experiences.',
    heroLine2Prefix: 'Connect ',
    heroLine2AccentWord: 'in person',
    heroLine2Suffix: ', leave a mark.',
    metaTitle: 'Events | Strategy, Planning & Production | MAB Lab',
    metaDescription:
      'Create events that make an impact. Event strategy, planning, production and audience engagement built around what you need to achieve.',
    tagline: 'Event strategy, planning, production and audience engagement.',
    overview:
      'In-person experiences build emotional connections that digital channels can rarely match. We engineer memorable brand events.',
    deliverables: [
      {
        number: '01',
        title: 'Event Concept & Strategy',
        description: 'Designing event themes, agendas, speaker line-ups, and engagement goals.',
      },
      {
        number: '02',
        title: 'Experiential Brand Activations',
        description: 'Interactive booths, pop-up experiences, and immersive installations for conferences.',
      },
      {
        number: '03',
        title: 'Pre-Event & Post-Event Marketing',
        description: 'Registration campaigns, attendee communications, and post-event follow-up nurture sequences.',
      },
      {
        number: '04',
        title: 'Event Production Support',
        description: 'Managing staging, AV, signage, collateral, and live audience experience execution.',
      },
    ],
    whyItMatters:
      'Live events turn passive observers into active brand advocates and long-term business partners.',
  },
  'marketing-consultancy': {
    id: 'marketing-consultancy',
    name: 'Marketing Consultancy',
    badgeText: 'MARKETING CONSULTANCY',
    heroLine1: 'Strategic clarity & leadership.',
    heroLine2Prefix: 'Solve complex ',
    heroLine2AccentWord: 'challenges',
    heroLine2Suffix: ' with rigor.',
    metaTitle: 'Marketing Consulting | Strategy, Audits & Workshops | MAB Lab',
    metaDescription:
      'Get clearer priorities and make better marketing decisions. Strategy, audits, workshops and marketing leadership support for your business.',
    tagline: 'Strategy, audits, workshops and marketing leadership support.',
    overview:
      'Sometimes you don’t need more agency execution—you need expert guidance to make the right decisions.',
    deliverables: [
      {
        number: '01',
        title: 'Strategic Marketing Audits',
        description: 'Comprehensive review of your marketing strategy, team, tech stack, spend, and unit economics.',
      },
      {
        number: '02',
        title: 'Fractional CMO Advisory',
        description: 'High-level marketing leadership to guide internal teams, set OKRs, and direct strategy.',
      },
      {
        number: '03',
        title: 'Strategic Workshops & Sprints',
        description: 'Intensive team sessions to align positioning, value propositions, and growth roadmaps.',
      },
      {
        number: '04',
        title: 'Agency & Vendor Selection',
        description: 'Unbiased advisory to help you hire, evaluate, and manage third-party marketing vendors.',
      },
    ],
    whyItMatters:
      'Having an experienced advisor prevents costly trial-and-error mistakes when scaling your company.',
  },
};

servicesDataMap['marketing-consulting'] = servicesDataMap['marketing-consultancy'];
