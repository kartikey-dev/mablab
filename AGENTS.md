# AGENTS.md — AI Agent Operating Instructions for Mablab

This codebase is maintained by AI Agents and developers following strict paired development guidelines.

## Quick Commands
- **Install Dependencies**: `pnpm install`
- **Development Server**: `pnpm dev`
- **Run Unit Tests**: `pnpm test`
- **Production Build**: `pnpm build`

## Key Files to Know
- `src/app/globals.css`: Contains CSS variables, font definitions, and custom Tailwind utility classes (`.comic-shadow`, `.comic-border`, etc.).
- `src/app/page.tsx`: Assembles the 10 sections of the Mablab homepage.
- `src/data/`: Data definitions for services, team members, case studies, blog stories, and FAQs.
- `src/components/ui/IconComponent.tsx`: Custom SVG icons for all 12 agency services.
- `src/lib/animations.ts`: GSAP ScrollTrigger animation helpers.

## Pre-Push Checklist
- Always run `pnpm test` and `pnpm build` before committing/pushing.
- Verify Lighthouse scores (Performance, Accessibility, Best Practices, SEO >= 95).
- Check responsive layout rendering on Mobile (375px), Tablet (768px), and Desktop (1440px) viewports before every git push.
- Keep all interactive elements accessible (ARIA attributes, keyboard navigation).
- Enforce 0 border radius project-wide (`border-radius: 0 !important`).
