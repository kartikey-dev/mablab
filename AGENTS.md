# AGENTS.md — AI Agent Operating Instructions for Mablab

This codebase is maintained by AI Agents and developers following strict paired development guidelines.

## Quick Commands
- **Install Dependencies**: `pnpm install`
- **Development Server**: `pnpm dev`
- **Lint Codebase**: `pnpm run lint`
- **Run Unit Tests**: `pnpm test`
- **Generate Coverage**: `pnpm run test:coverage`
- **Production Build**: `pnpm build`
- **Lighthouse Audit**: `pnpm run lhci:autorun`

## Architecture & Modular Design Guidelines
1. **Modular Page Architecture**:
   - For every page, maintain a dedicated folder inside `src/components/sections/[page]/` (e.g. `branding`, `content`, `design`, `events`, `market-research`, `marketing`, `marketing-consultancy`, `pr-influencer`, `seo-paid-ads`, `social-media`, `video-podcast`, `web-development`, `why-us`, `home`, `contact`, `privacy-policy`).
   - `page.tsx` files must **never** contain raw section JSX markup; they only import and render modular section components.
   - Page content mapped to sections must live in a dedicated `data.ts` inside `src/components/sections/[page]/data.ts`.
2. **Typography & Styling Standards**:
   - **Section Titles**: Must be **capitalize** (not uppercase) and font weight **bold (700)** (not 800).
   - **Card Titles**: Must be **capitalize** (not uppercase) using `card-title font-heading para-24 font-bold text-stroke capitalize`.
   - **CTA Blocks**: Headings and action buttons must strictly be **capitalize** (not uppercase), e.g. `"Let's Talk →"`.
   - **CTA Banner Architecture**: The CTA block (`LetsTalkBanner`) lives in `Footer` (`src/components/layout/Footer.tsx`) with `-translate-y-1/2 relative z-30` so it sits seamlessly across the footer top border without being cropped by `<GsapSection>` or parent overflow. CTA data is managed page-wise via props and `CtaContext` (`src/data/ctaData.ts` & `src/context/CtaContext.tsx`).
   - **Zero Border Radius**: Enforce `0` border radius project-wide (`border-radius: 0 !important`).
3. **Component Reusability (`IconCard`)**:
   - Use `src/components/ui/IconCard.tsx` across all card grids.
   - Supports `icon`, `title`, `content`, `link`, `tag`, `tagColor`, `category`, and internal `[isVisible, setIsVisible]` toggle state.
4. **GSAP ScrollTrigger Animations**:
   - Wrap sections with `<GsapSection animation="fadeInUp" ... />` or hook helpers (`useGsapAnimation`, `useStaggerAnimation`).
5. **AEO-AIO, GEO & SEO Guidelines**:
   - **SEO**: Strict semantic HTML, descriptive metadata, OpenGraph, Twitter cards, `robots.ts`, `sitemap.ts`.
   - **AEO & AIO**: Structured Schema.org JSON-LD graphs in `src/app/layout.tsx` (`Organization`, `ProfessionalService`, `WebSite`) and automated `FAQPage` schemas in `FaqSection.tsx`.
   - **GEO**: Geographic meta tags (`geo.region`, `geo.placename`, `geo.position`, `ICBM`) and coordinates in Schema.org.

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

## CI/CD Pipeline
- Automated GitHub Actions workflow (`.github/workflows/ci.yml`) enforces the pipeline sequence:
  `lint → test → coverage → Sonar → Lighthouse`.
- `lighthouserc.json` asserts desktop & mobile scores **>= 90** for Performance, Accessibility, Best Practices, and SEO.
- `sonar-project.properties` manages SonarQube / SonarCloud static analysis.

## Pre-Push Checklist
- Run `pnpm run lint`, `pnpm test`, and `pnpm build` before pushing.
- Verify 90+ Lighthouse targets across all pages.
- Check responsive viewports on Mobile (375px), Tablet (768px), and Desktop (1440px).
- Verify all interactive elements remain accessible with keyboard and ARIA support.
