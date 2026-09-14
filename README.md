# Mablab (Marketing & Branding Lab) 🧪💥

**Mablab** is a rebellious, high-impact comic-style digital agency website engineered with Next.js 15, TypeScript, TailwindCSS v4, and GSAP. 

Built on a zero-shortcut philosophy, Mablab treats marketing, branding, and performance ads as rigorous scientific experiments designed to scale business revenue.

---

## 🚀 Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components & Client Hooks)
- **Language**: TypeScript
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/) with custom design system tokens & comic aesthetic utilities
- **Animations**: [GSAP](https://greensock.com/gsap/) with `ScrollTrigger` integration
- **Fonts**: `Plus Jakarta Sans` (Headings) & `Manrope` (Body) via `next/font/google`
- **Testing**: Jest + `@testing-library/react` (TDD Approach)
- **Package Manager**: `pnpm`
- **SEO/AEO/AIO**: JSON-LD Structured Data (`ProfessionalService`), OpenGraph, Twitter Cards, `robots.ts`, `sitemap.ts`

---

## 🛠️ Project Structure

```
mablab/
├── __tests__/                  # Unit test suites (TDD)
│   ├── AccordionItem.test.tsx
│   ├── Button.test.tsx
│   ├── ContactForm.test.tsx
│   └── SectionHeading.test.tsx
├── public/
│   └── images/                 # Logo, iceberg illustration, team portraits, case studies
├── src/
│   ├── app/                    # Next.js App Router pages & API routes
│   │   ├── api/contact/        # Contact form submission API
│   │   ├── contact/            # Dedicated contact page
│   │   ├── globals.css         # Design system tokens & comic utilities
│   │   ├── layout.tsx          # Root layout + JSON-LD SEO
│   │   ├── page.tsx            # Homepage assembling 10 sections
│   │   ├── robots.ts           # Robots.txt generator
│   │   └── sitemap.ts          # Sitemap.xml generator
│   ├── components/
│   │   ├── layout/             # Sticky Header, Footer
│   │   ├── sections/           # 10 Homepage sections (Hero, Services, WhyUs, Team, etc.)
│   │   └── ui/                 # 10+ Reusable comic UI components (Button, ServiceCard, etc.)
│   ├── data/                   # Structured data models (services, team, FAQ, stories, etc.)
│   ├── hooks/                  # Custom GSAP scroll animation hooks
│   └── lib/                    # Fonts & animation helper libraries
├── jest.config.js
├── package.json
└── README.md
```

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

### 3. Running Unit Tests

```bash
pnpm test
```

### 4. Production Build

```bash
pnpm build
pnpm start
```

---

## 🔍 Pre-Push Quality Checks

Before pushing any code changes to Git:
1. **Lighthouse Scores**: Audit Performance, Accessibility (a11y), Best Practices, and SEO (target >= 95 across all categories).
2. **Responsiveness Audit**: Verify pixel-perfect responsive rendering across Mobile (375px), Tablet (768px), Laptop (1024px), and Desktop (1440px+) viewports.
3. **Automated Verification**: Run `pnpm test` and `pnpm build` to ensure clean compilation and 0 hydration warnings.

---

## 🎨 Design System Highlights

- **Comic Panel Aesthetics**: Bold black borders (`border-4 border-black`), offset hard drop shadows (`shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`), vibrant accents (`#5B21B6` deep purple, `#FACC15` bright yellow, `#0891B2` teal).
- **Interactive Iceberg**: Visualizing shallow marketing tactics vs. deep strategic lab engineering.
- **Form Submission**: Submissions sent to `hello@kumarkartikey.com` via API.
