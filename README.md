# Nutritionist Site — v1.0 (built from real Figma exports)

## Status: matched to the provided design

This build was reconstructed directly from:
- `Home_Page_-_Desktop__1_.png` — the full home page screenshot you provided, analyzed via pixel sampling for exact colors (header/footer `#1A3129`, brand lime `#CBEA7B`, page background `#FAFDF2`, etc.) and read directly for all copy/content, section order, and layout.
- `exported_assets.zip` — the real SVG icons (logo, feature icons, footer contact icons, blog card action buttons) and real photography (hero photo, 4 blog images, 7 named-person avatars) used as-is, not stock substitutes.

## Sections (top to bottom, matches the screenshot)

1. Promo banner ("Join Our Personalized Nutrition Demo For Free")
2. Header — logo, nav (Home/About/Team/Process/Pricing/Blog), Contact Us button
3. Hero — full-bleed photo panel + "Personalized Nutrition Coaching" copy + CTAs + avatar/customer-count social proof
4. Features — 6 cards with real icons
5. Our Blogs — 4 cards with real photography, real author avatars, real copy
6. Our Testimonials — 3 real quotes + carousel dots/arrows
7. Our Pricing — Monthly/Yearly toggle, 3 plans
8. Footer — logo, nav, "Got To Top", contact pills, copyright

## What's a close approximation rather than an exact number

Font sizes, exact spacing, and the hero panel's corner radius were measured by pixel-sampling the screenshot (cap-height measurement, edge detection) rather than read from Figma's own layout engine — visually very close, but if you have exact values from Figma's Inspect/Dev Mode panel, they're a fast swap in `variables.css`.

Nav links (Team, Process, About, Contact) point to `#` anchors since this export is the Home page only — wire them up to real routes/pages as those get built.

## Running locally

```bash
npm install
npm run dev
```
