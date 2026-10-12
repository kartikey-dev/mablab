# Mablab (Marketing & Branding Lab) 🧪💥

**Mablab** is a rebellious, high-impact comic-style digital agency website engineered with Next.js 16, TypeScript, TailwindCSS v4, and GSAP.

Built on a zero-shortcut philosophy, Mablab treats marketing, branding, and performance ads as rigorous scientific experiments designed to scale business revenue.

---

## 🚀 Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
- **Language**: TypeScript 5
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/) with custom design system tokens & comic aesthetic utilities
- **Animations**: [GSAP](https://greensock.com/gsap/) with `ScrollTrigger` and modular `<GsapSection />` wrappers
- **Typography**: `Plus Jakarta Sans` (Headings) & `Manrope` (Body) via `next/font/google`
- **Testing**: Jest + `@testing-library/react` (TDD Approach with coverage reporting)
- **Quality & CI/CD**: GitHub Actions (`lint → test → coverage → Sonar → Lighthouse`), Lighthouse CI, SonarQube/SonarCloud
- **Package Manager**: `pnpm`
- **SEO / AEO-AIO / GEO**:
  - Full Schema.org JSON-LD graphs (`ProfessionalService`, `Organization`, `WebSite`, `FAQPage`)
  - Geographic metadata (`geo.region`, `geo.placename`, `geo.position`, `ICBM`)
  - OpenGraph & Twitter Cards
  - Dynamic `robots.ts` and `sitemap.ts`

---

## 🛠️ Architecture & Project Structure

```
mablab/
├── .github/workflows/
│   └── ci.yml                  # Automated CI/CD (lint → test → coverage → Sonar → Lighthouse)
├── __tests__/                  # Unit test suites (Button, Accordion, Form, Heading, IconCard)
├── lighthouserc.json           # Lighthouse CI assertions (min score 90+ for all categories)
├── sonar-project.properties    # SonarQube / SonarCloud configuration
├── public/
│   └── images/                 # Logo, icons, team portraits, case studies
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/contact/        # Contact form submission API
│   │   ├── contact/            # Dedicated contact page
│   │   ├── privacy-policy/     # Privacy policy page
│   │   ├── services/           # 12 Individual service routes + dynamic [id]
│   │   │   ├── branding/
│   │   │   ├── content/
│   │   │   ├── design/
│   │   │   ├── events/
│   │   │   ├── market-research/
│   │   │   ├── marketing/
│   │   │   ├── marketing-consultancy/
│   │   │   ├── pr-influencer/
│   │   │   ├── seo-paid-ads/
│   │   │   ├── social-media/
│   │   │   ├── video-podcast/
│   │   │   └── web-development/
│   │   ├── why-us/             # Why Us page
│   │   ├── globals.css         # Design system tokens & comic utilities
│   │   └── layout.tsx          # Root layout + Schema.org + GEO metadata
│   ├── components/
│   │   ├── layout/             # Sticky Header (with mega-menu), Footer
│   │   ├── sections/           # Modular section components organized per page folder
│   │   │   ├── [page]/         # Each page has dedicated section components & data.ts
│   │   └── ui/                 # Reusable UI components (IconCard, Button, Accordion, etc.)
│   ├── data/                   # Global data definitions
│   ├── hooks/                  # Custom GSAP scroll animation hooks
│   └── lib/                    # Fonts & animation helpers
└── README.md
```

---

## 📐 Design & Typography Rules

1. **Section Titles**: Always **capitalize** (never uppercase), font weight **bold (700)** (never 800).
2. **Card Titles**: Always **capitalize** (never uppercase), styled with `card-title font-heading para-24 font-bold text-stroke capitalize`.
3. **Reusable `IconCard`**: Used across card grids with props for `icon`, `title`, `content`, `link`, `tag`, and state-managed visibility toggle.
4. **CTA Blocks**: Headings and action buttons must strictly be **capitalize**, e.g. `"Let's Talk →"`.
5. **CTA Banner Architecture**: The CTA block (`LetsTalkBanner`) is integrated into `Footer` (`src/components/layout/Footer.tsx`) with `-translate-y-1/2 relative z-30` so it floats seamlessly across the footer top border without clipping from `<GsapSection>` or parent containers. CTA data is decoupled into typed page configs (`src/data/ctaData.ts`) and managed dynamically via `CtaContext` and `FooterProps`.
6. **Zero Border Radius**: Enforced project-wide (`border-radius: 0 !important`).

---

## 🏷️ Canonical Page Metadata (SEO & Social)

All routes are optimized for search engines, AI search engines (AEO/AIO), and social previews with dedicated metadata:

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

---

## ⚡ Getting Started

### 1. Installation

```bash
pnpm install
```

### 2. Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Running Lint & Tests

```bash
# Run ESLint
pnpm run lint

# Run Jest Unit Tests
pnpm test

# Run Test Coverage
pnpm run test:coverage
```

### 4. Production Build

```bash
pnpm build
pnpm start
```

### 5. Lighthouse CI Audit

```bash
pnpm run lhci:autorun
```

---

## 🔍 CI/CD Pipeline & Quality Assurance

The automated GitHub Actions workflow (`.github/workflows/ci.yml`) enforces the complete 5-stage pipeline:
1. **Lint**: ESLint validation with zero errors or warnings.
2. **Test**: Complete Jest unit test suite execution.
3. **Coverage**: LCOV test coverage generation and artifact upload.
4. **Sonar**: SonarQube / SonarCloud static code analysis.
5. **Lighthouse CI**: Audits 15 routes asserting **90+ score** across Performance, Accessibility, Best Practices, and SEO.
