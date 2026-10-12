# Mablab Project Guide — Claude Instructions

## Overview
Mablab (Marketing & Branding Lab) is a Next.js 16 TypeScript project with TailwindCSS v4 and GSAP animations, built for a digital agency offering 12 specialized growth formulas.

## Core Architectural Rules
1. **Package Manager**: Always use `pnpm` (`pnpm add`, `pnpm test`, `pnpm dev`, `pnpm build`).
2. **Design Philosophy**: Comic book pop-art style with pixel-perfect attention to typography and styling:
   - Deep Purple: `#5B21B6` / `bg-purple-700` / `bg-purple-950`
   - Electric Yellow: `#FACC15` / `bg-yellow-300` / `bg-yellow-400`
   - Vibrant Teal: `#0891B2` / `bg-teal-400`
   - Crimson Danger: `#E12A3C` / `bg-red-500`
   - Comic Shadows: `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]` and `.comic-shadow`
   - Zero Border Radius: Project-wide `border-radius: 0 !important`.
3. **Typography Standards**:
   - **Section Titles**: Capitalize and font weight bold (700), never uppercase or 800.
   - **Card Titles**: Capitalize, never uppercase, using `card-title font-heading para-24 font-bold text-stroke capitalize`.
   - **CTA Blocks**: Headings and action buttons must strictly be capitalize, e.g. `"Let's Talk →"`.
4. **Component & Section Architecture**:
   - Every page has a corresponding folder inside `src/components/sections/[page]/`.
   - `page.tsx` must never contain raw section JSX; only call modular section components.
   - Section data must be mapped in `data.ts` within the respective sections folder.
   - Reusable `IconCard` (`src/components/ui/IconCard.tsx`) must be used for cards with `icon`, `title`, `content`, `link`, and internal toggle state.
5. **CTA & Header Behavior**:
   - Mega-menu services dropdown headings are capitalized; "EXPERIMENTAL FORMULAS" tag removed.
   - The CTA block (`LetsTalkBanner`) lives in `Footer` (`src/components/layout/Footer.tsx`) with `-translate-y-1/2 relative z-30` so it sits seamlessly across the footer top border without being cropped by `<GsapSection>` or parent overflow.
   - CTA data is managed page-wise via props and `CtaContext` (`src/data/ctaData.ts` & `src/context/CtaContext.tsx`), automatically matching the current route with optional per-page override via `<PageCta />`.
   - CTA banner buttons link to `/contact` with capitalized text `"Let's Talk →"`.
6. **AEO-AIO, GEO & SEO Framework**:
   - Rich JSON-LD structured data in `src/app/layout.tsx` (`Organization`, `ProfessionalService`, `WebSite`).
   - Dynamic `FAQPage` schema on all FAQ sections.
   - Geographic meta tags (`geo.region`, `geo.placename`, `geo.position`, `ICBM`).
   - Strict canonical page metadata exports on all routes (`title` and `description`).

## Canonical Page Metadata Registry
All pages export canonical `metadata: Metadata` conforming strictly to the registry:

| Page | Route | Meta Title | Meta Description |
| :--- | :--- | :--- | :--- |
| **Home** | `/` | `MAB Lab \| Marketing Scientists for Your Business Needs` | `MAB Lab helps businesses make better marketing decisions through research, strategy, branding, content, design, technology and more.` |
| **About / Why Us** | `/why-us` (redirect from `/about`) | `About MAB Lab \| Marketing Built on Depth & Understanding` | `MAB Lab is a strategy-led marketing business built around research, understanding and zero-shortcut marketing.` |
| **Branding** | `/services/branding` | `Branding \| Positioning, Messaging & Identity \| MAB Lab` | `Build a brand people understand, remember and choose. MAB Lab helps with positioning, messaging, identity systems and brand guidelines.` |
| **Web Development** | `/services/web-development` | `Web Development \| Websites, E-commerce & CMS \| MAB Lab` | `Build websites that work for your business. From websites and e-commerce to CMS and custom integrations, we build with strategy in mind.` |
| **Marketing** | `/services/marketing` | `Marketing \| Strategy, Campaigns & Growth \| MAB Lab` | `Marketing built to get you noticed, considered and chosen. Strategy, campaigns, demand generation, lifecycle marketing and optimisation.` |
| **Social Media** | `/services/social-media` | `Social Media \| Strategy, Content & Community \| MAB Lab` | `Grab attention and create connection. Social media strategy, content, community management, campaigns and founder-led social.` |
| **Content** | `/services/content` | `Content \| Strategy, Thought Leadership & Content \| MAB Lab` | `Turn expertise into authority. Content strategy, thought leadership, editorial planning, articles, case studies, sales enablement and more.` |
| **Video & Podcast** | `/services/video-podcast` | `Video & Podcast \| Production & Distribution \| MAB Lab` | `Video and audio that informs, persuades, entertains and connects. From brand films and podcasts to social videos, campaigns and distribution.` |
| **Market Research** | `/services/market-research` | `Market Research \| Customer, Market & Competitor Research \| MAB Lab` | `Understand your market before making important decisions. Customer insights, competitor analysis and market intelligence to reduce guesswork.` |
| **PR & Influencer** | `/services/pr-influencer` | `PR & Influencer \| Media, Thought Leadership & Creators \| MAB Lab` | `Build awareness, authority and visibility through PR and influencer marketing, including media relations, thought leadership and creator partnerships.` |
| **SEO & Paid Ads** | `/services/seo-paid-ads` | `SEO & Paid Ads \| Search, Leads & Conversion \| MAB Lab` | `Be found by the right people and convert more of them. SEO, Google Ads, social ads, campaign strategy, landing pages and performance optimisation.` |
| **Design** | `/services/design` | `Design \| Brand, Digital & Marketing Design \| MAB Lab` | `Design that helps people understand, remember and engage with your brand. Presentations, marketing assets, digital and print design.` |
| **Events** | `/services/events` | `Events \| Strategy, Planning & Production \| MAB Lab` | `Create events that make an impact. Event strategy, planning, production and audience engagement built around what you need to achieve.` |
| **Marketing Consulting** | `/services/marketing-consultancy` | `Marketing Consulting \| Strategy, Audits & Workshops \| MAB Lab` | `Get clearer priorities and make better marketing decisions. Strategy, audits, workshops and marketing leadership support for your business.` |

7. **CI/CD Pipeline**:
   - Pipeline order: `lint → test → coverage → Sonar → Lighthouse`.
   - Lighthouse score assertion: 90+ across Performance, Accessibility, Best Practices, and SEO.

## Pre-Push Checklist
- Run `pnpm run lint`, `pnpm test`, `pnpm run test:coverage`, and `pnpm run build`.
- Verify responsive layout rendering on Mobile (375px), Tablet (768px), and Desktop (1440px).
