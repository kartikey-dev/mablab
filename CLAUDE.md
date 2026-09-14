# Mablab Project Guide — Claude Instructions

## Overview
Mablab (Marketing & Branding Lab) is a Next.js 15 TypeScript project with TailwindCSS v4 and GSAP animations, built for a digital agency offering 12 specialized growth formulas.

## Core Architectural Rules
1. **Package Manager**: Always use `pnpm` (`pnpm add`, `pnpm test`, `pnpm dev`, `pnpm build`).
2. **Design Philosophy**: Comic book pop-art style with pixel-perfect attention to Figma design guidelines:
   - Deep Purple: `#5B21B6` / `bg-purple-700` / `bg-purple-950`
   - Electric Yellow: `#FACC15` / `bg-yellow-300` / `bg-yellow-400`
   - Vibrant Teal: `#0891B2` / `bg-teal-400`
   - Crimson Danger: `#E12A3C` / `bg-red-500`
   - Comic Shadows: `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]` and `shadow-[6px_6px_0px_0px_rgba(147,51,234,1)]`
3. **CTA Behavior**:
   - Sticky Header "Let's Talk!" button links to `/contact`.
   - In-page CTA buttons scroll smoothly to `#contact` section.
4. **Form Integration**:
   - `ContactForm` POSTs to `/api/contact` (configured to dispatch to `hello@kumarkartikey.com`).

## Code Standards
- Keep components modular and typed under `src/components/ui`, `src/components/sections`, and `src/components/layout`.
- Maintain test coverage in `__tests__/`.
- Ensure next/font optimization and semantic markup for 95+ Lighthouse scores.
- **Pre-Push Requirement**: Before every `git push`, audit Lighthouse scores across Performance, Accessibility, Best Practices, and SEO (target >= 95), and verify responsiveness on Mobile (375px), Tablet (768px), and Desktop (1440px) viewports.
