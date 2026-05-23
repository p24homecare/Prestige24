# Design System — Prestige 24 Home Care

## Product Context
- **What this is:** Pediatric home care agency website for GAPP (Georgia Pediatric Program) services
- **Who it's for:** Parents and guardians of medically fragile children under 21 in Georgia
- **Space/industry:** Pediatric home health care, Medicaid-funded services
- **Project type:** Single-page marketing site with contact form (Next.js, Tailwind, bilingual EN/ES)

## Aesthetic Direction
- **Direction:** Warm Professional
- **Decoration level:** Intentional (subtle texture on cream, no blobs or gradients)
- **Mood:** Calm, trustworthy, approachable without being childish. Boutique pediatric practice, not hospital network. Parents should feel "these people care about my kid" within 3 seconds.
- **Reference sites:** Pediatric Home Service (pediatrichomeservice.com) for modern layout approach. BAYADA for clean professionalism. Avoided: corporate-clinical feel of BrightStar, dated feel of Continuum/KidsCare.

## Typography
- **Display/Hero:** Lora — warm, trustworthy serif that reads as personal and caring. Differentiates from every competitor using cold sans-serif headlines.
- **Body:** DM Sans — warmer, slightly rounded letterforms that pair well with Lora's character. Better than Inter for this warmth-forward brand.
- **UI/Labels:** DM Sans
- **Data/Tables:** DM Sans with tabular-nums
- **Code:** Not applicable (marketing site)
- **Loading:** Google Fonts via next/font/google (CSS variables: --font-lora, --font-dm-sans)
- **Scale:**
  - xs: 0.75rem (12px) — fine print, labels
  - sm: 0.875rem (14px) — body small, card text
  - base: 1rem (16px) — body text
  - lg: 1.125rem (18px) — lead paragraphs
  - xl: 1.25rem (20px) — section subtitles
  - 2xl: 1.5rem (24px) — section headings (small)
  - 3xl: 1.875rem (30px) — section headings
  - 4xl: 2.25rem (36px) — page titles
  - 5xl: 3rem (48px) — hero (mobile)
  - 6xl: 3.75rem (60px) — hero (desktop)

## Color
- **Approach:** Balanced (primary + secondary with warm accent)
- **Navy (Primary):** #1B2D5B — trust, authority, professionalism. Used for text, hero bg, footer, dark sections.
- **Royal:** #1E4D8C — secondary blue. Icon backgrounds, subtle accents.
- **Sky:** #6CB4EE — friendly, approachable. Links, badges, highlights, icon color.
- **Amber:** #F5A623 — warmth, action. Primary CTA buttons, accent headings, star ratings.
- **Orange:** #E8602C — energy, urgency. Used sparingly for alerts or emphasis.
- **Cream:** #FAF7F2 — warmth, comfort. Section backgrounds (alternating with white).
- **Neutrals:** Tailwind gray scale (cool grays). gray-50 through gray-900.
- **Semantic:** success (sky), warning (amber), error (red-500/red-600), info (royal)
- **Dark mode:** Not applicable (marketing site)

## Spacing
- **Base unit:** 8px (0.5rem)
- **Density:** Comfortable
- **Scale:** 2xs(2px) xs(4px) sm(8px) md(16px) lg(24px) xl(32px) 2xl(48px) 3xl(64px)
- **Section padding:** Varies by section to break uniform rhythm:
  - Standard: py-16 sm:py-20 lg:py-24
  - Compact: py-14 sm:py-16 lg:py-20
  - Generous: py-16 sm:py-22 lg:py-28
- **Container max:** max-w-7xl (1280px)

## Layout
- **Approach:** Grid-disciplined (clean alignment, generous whitespace)
- **Grid:** Tailwind responsive: 1 col mobile, 2 col tablet, 2-4 col desktop
- **Max content width:** 1280px (7xl)
- **Border radius:**
  - sm: 4px (inputs, small elements)
  - md: 8px (buttons, badges)
  - lg: 12px (cards)
  - xl: 16px (sections, images)
  - 2xl: 24px (hero image, large cards)
  - full: 9999px (pills, avatar circles)
- **Alignment:** Left-aligned section headers (not centered). Content sections use asymmetric layouts where natural.

## Motion
- **Approach:** Minimal-functional
- **Easing:** ease-out for entrances
- **Duration:** 600ms for scroll-triggered fade-in-up (via useInView hook)
- **Rules:** No decorative animation. No pulsing dots. No parallax. No hover animations beyond color transitions.

## Anti-patterns (never use)
- Purple/violet gradients
- Decorative background blobs
- Wavy SVG section dividers
- Pulsing dot badges
- Floating overlay cards on images
- Centered-everything layouts
- 3-column icon grids with colored circles
- Generic "hero with gradient overlay" stock photos

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-22 | Initial design system created | Created by /design-consultation based on competitive research (BAYADA, BrightStar, KidsCare, Continuum, PHS) |
| 2026-05-22 | Lora for display, DM Sans for body | Lora reads warm and personal (differentiator vs. competitors). DM Sans pairs well, warmer than Inter. |
| 2026-05-22 | Keep navy+amber palette | Every competitor uses blue. Amber/gold accent is the key differentiator. |
| 2026-05-22 | Cream (#FAF7F2) for alternating sections | Warmer than gray-50, breaks up white without feeling clinical. |
| 2026-05-22 | Remove floating phone badge | AI template pattern. Phone number already in navbar and CTA. |
| 2026-05-22 | Left-align section headers | Centered-everything is an AI slop pattern. Left alignment feels more intentional. |
| 2026-05-22 | Varied section padding | Uniform section heights are an AI pattern. Varying py values creates natural rhythm. |
