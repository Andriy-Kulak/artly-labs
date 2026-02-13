# AGENTS.md

## TL;DR
This repo is the public website for Artly Labs. The site should present:
1. Sonito as the current product wedge.
2. Artly Labs as the broader 0-6 parent product platform.
3. Founder-market-fit story (built by a new parent who experienced the problem).

Do not turn this into a generic startup site or a dense investor dashboard.

## Product Narrative
- Company: Artly Labs
- Current product: Sonito (`https://sonito.app/`)
- Expansion order: sleep -> feeding/solids -> routines -> development
- Positioning: modern, simple, trustworthy products replacing outdated parent tools

## Website Priorities
- Keep copy concise, clear, and confident.
- Mention Sonito explicitly as proof of execution today.
- Mention bigger vision explicitly, but avoid sounding vague or hypey.
- Keep MRR/CAC/growth details in docs, not as dominant homepage content.

## Visual Direction
- Use Artly Labs logo as the visual anchor: `public/artly-labs-log.webp`.
- Base palette on logo tones (deep plum + magenta/blue accents).
- Overall look: sleek, minimal, professional, with generous whitespace.
- Avoid generic template look and avoid over-animated UI.

## Assets
- Local brand assets:
  - `public/artly-labs-log.webp`
- Sonito assets copied for relevant cross-brand context:
  - `public/sonito/ss_1.webp`

Use these sparingly and only where they reinforce the story.

## Tech Notes
- Framework: Next.js App Router
- Main page: `src/app/page.tsx`
- Global styles: `src/app/globals.css`
- Metadata/fonts: `src/app/layout.tsx`

## Commands
- Dev: `npm run dev`
- Build check: `npm run build`

## Editing Rules for Agents
- Preserve the Sonito -> Artly Labs narrative arc.
- Keep section order logical: hero -> current product -> vision -> founder fit -> CTA.
- Keep mobile layout clean; verify responsiveness after major style edits.
- Avoid adding unrelated libraries unless required.
