import React from 'react';

export interface CtaBannerData {
  showCta?: boolean;
  heading?: React.ReactNode;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const defaultCtaData: CtaBannerData = {
  showCta: true,
  heading: "You've Tried Enough Things.",
  description: "If you're spending time and money on marketing without clear results, let's talk. Identify what matters, what doesn't, and where to focus next.",
  buttonText: "Let's Talk",
  buttonHref: "/contact",
};

export const whyUsCtaData: CtaBannerData = {
  showCta: true,
  heading: "Let's Talk!",
  description: "Ready to replace guesswork with strategic rigor? Let's build your scientific growth engine together.",
  buttonText: "Let's Talk",
  buttonHref: "/contact",
};

export const brandingCtaData: CtaBannerData = {
  showCta: true,
  heading: "Become Hard To Ignore.",
  description: "If your business is struggling to stand out, let's talk. Discover what sets you apart and turn it into a brand people remember.",
  buttonText: "Let's Talk",
  buttonHref: "/contact",
};

export const contentCtaData: CtaBannerData = {
  showCta: true,
  heading: "Grab Attention, Build Authority, Inspire Action.",
  description: "Often works with: Marketing, Web Content, Design, Market Research",
  buttonText: "Let's Talk",
  buttonHref: "/contact",
};

export const designCtaData: CtaBannerData = {
  showCta: true,
  heading: "Make Every Experience Count.",
  description: "Whether you're launching something new or evolving an existing brand, let's create experiences people remember.",
  buttonText: "Let's Talk",
  buttonHref: "/contact",
};

export const eventsCtaData: CtaBannerData = {
  showCta: true,
  heading: "Turn Events Into Business Outcomes.",
  description: "Whether you're hosting, exhibiting, sponsoring or participating, we'll help you create meaningful connections, stronger relationships and lasting business opportunities.",
  buttonText: "Let's Talk",
  buttonHref: "/contact",
};

export const marketResearchCtaData: CtaBannerData = {
  showCta: true,
  heading: "Get The Clarity You Need.",
  description: "Whether you're exploring a new market, evaluating an opportunity, understanding customers, or assessing the competition, we'll help you make your next move with confidence.",
  buttonText: "Let's Talk",
  buttonHref: "/contact",
};

export const marketingCtaData: CtaBannerData = {
  showCta: true,
  heading: "More Marketing Isn't The Answer.",
  description: "If your marketing feels more like guesswork than a growth strategy, let's talk. Identify what matters, what doesn't, and where to focus next.",
  buttonText: "Let's Talk",
  buttonHref: "/contact",
};

export const marketingConsultancyCtaData: CtaBannerData = {
  showCta: true,
  heading: "Let's Find The Right Problem.",
  description: "Whether you're evaluating opportunities, navigating uncertainty, or preparing for your next stage of growth, we'll help you make sense of what's happening and decide what comes next. Ready to move forward with confidence?",
  buttonText: "Let's Talk",
  buttonHref: "/contact",
};

export const prInfluencerCtaData: CtaBannerData = {
  showCta: true,
  heading: "Become Impossible To Ignore.",
  description: "For customers. For talent. For investors. For your industry.",
  buttonText: "Let's Talk",
  buttonHref: "/contact",
};

export const seoPaidAdsCtaData: CtaBannerData = {
  showCta: true,
  heading: "Be Found By The Right People. Convert More Of Them.",
  description: "Often works with: Marketing, Web Content, Design, Market Research",
  buttonText: "Let's Talk",
  buttonHref: "/contact",
};

export const socialMediaCtaData: CtaBannerData = {
  showCta: true,
  heading: "More Content Isn't The Answer.",
  description: "If your content isn't creating the impact you'd hoped for, let's talk. Identify what resonates with your audience and what deserves more attention.",
  buttonText: "Let's Talk",
  buttonHref: "/contact",
};

export const videoPodcastCtaData: CtaBannerData = {
  showCta: true,
  heading: "Let's Tell A Great Story—And Make It Travel.",
  description: "",
  buttonText: "Let's Talk",
  buttonHref: "/contact",
};

export const webDevelopmentCtaData: CtaBannerData = {
  showCta: true,
  heading: "Turn Your Website Into A Business Asset.",
  description: "A website that supports your brand, your marketing and your growth.",
  buttonText: "Let's Talk",
  buttonHref: "/contact",
};

export const privacyPolicyCtaData: CtaBannerData = {
  showCta: true,
  heading: "Let's Talk!",
  description: "Ready to replace guesswork with strategic rigor? Let's build your scientific growth engine together.",
  buttonText: "Let's Talk",
  buttonHref: "/contact",
};

export const defaultCtaDataByPath: Record<string, CtaBannerData> = {
  '/': defaultCtaData,
  '/why-us': whyUsCtaData,
  '/services/branding': brandingCtaData,
  '/services/content': contentCtaData,
  '/services/design': designCtaData,
  '/services/events': eventsCtaData,
  '/services/market-research': marketResearchCtaData,
  '/services/marketing': marketingCtaData,
  '/services/marketing-consultancy': marketingConsultancyCtaData,
  '/services/pr-influencer': prInfluencerCtaData,
  '/services/seo-paid-ads': seoPaidAdsCtaData,
  '/services/social-media': socialMediaCtaData,
  '/services/video-podcast': videoPodcastCtaData,
  '/services/web-development': webDevelopmentCtaData,
  '/privacy-policy': privacyPolicyCtaData,
  '/contact': { showCta: false },
};
