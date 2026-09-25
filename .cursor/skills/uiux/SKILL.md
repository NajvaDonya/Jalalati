---
name: uiux
description: Premium mobile-first UI/UX for Jalalati digital business card. Use when designing, redesigning, or polishing layout, typography, motion, touch targets, RTL/LTR, and visual hierarchy.
---

# Jalalati UI/UX

## Product type

One-screen **interactive digital business card**, not a website. Full viewport composition; no card containers, navbars, or feature sections.

## Visual hierarchy (strict order)

1. Animated cables (hero identity)
2. Small logo
3. Company name (largest type)
4. One-line description (muted)
5. Contact (editorial, no boxes)
6. Compact actions
7. Language switcher (smallest, corner)

## Layout rules

- Mobile: `100dvh` cinematic poster, no scroll required.
- One designed wire is the composition. Information is distributed along the wire, not stacked in a single column.
- Text sits in the negative space of the path. The wire may pass beside or behind type, never across glyphs.
- Desktop: wider octilinear journey; still one poster, not a website.
- RTL keeps the designed path; LTR mirrors the wire so type stays on inline-start.

## Typography

- Font: Vazirmatn.
- Persian name: line1 small + line2 dominant (`جلالتی`).
- Max 4 size steps on screen.
- Yellow accent ≤10% of pixels.

## Cables

- Physical volume (layered strokes, highlight, shadow).
- Thin inner current (not neon).
- Subtle breathe/parallax only.
- Copper tips understated, metallic.

## Controls

- Actions: compact rectangular buttons, not pills.
- Language: `FA · EN · AR`, active = yellow underline.
- Minimum touch target 44×44px (padding, not visual size).
- Catalog hidden for `fa` only.

## Motion

- One intro only: current travels the path and lights each station as it passes (~2.7s). Then ambient loop only.
- Reveal is tied to path progress, not arbitrary isolated timers.
- Honor `prefers-reduced-motion` (final state immediately).

## Accessibility

- Semantic landmarks, focus rings, `tel:` / map / download links, sufficient contrast on muted text.

## Quality gate

Before done, confirm: feels like a motion poster, cables dominate, whitespace feels expensive, not a Tailwind landing template.
