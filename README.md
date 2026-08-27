# Mationary

**Put your creation into motion.**
A private AI build studio for nontechnical people with ideas.

Marketing site + project-fit questionnaire. Next.js (App Router), TypeScript, Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

| Command | What it does |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build (also type-checks and lints) |
| `npm start` | Serve the production build |
| `npm run typecheck` | TypeScript only |
| `npm run lint` | ESLint only |

## Editing copy and pricing

Almost all visible text lives in two files — no component edits needed:

- [`content/site.ts`](content/site.ts) — hero, definition, recognition lines, how-it-works steps, **services and prices**, project-fit language, founder story, final CTA, footer.
- [`content/intake-fields.ts`](content/intake-fields.ts) — the project-fit questionnaire: groups, labels, helper text, and choice options.

Prices are plain strings (`"$249"`), and `featured: true` on a service controls which card gets the dark emphasized treatment.

## Structure

```
app/
  layout.tsx            Root layout, fonts, SEO metadata
  page.tsx              Homepage (composes components/sections/*)
  bring-your-idea/      Project-fit questionnaire
  privacy/ terms/ contact/
  icon.svg              Favicon placeholder
  opengraph-image.tsx   Generated 1200×630 social card
  sitemap.ts robots.ts
components/
  SiteHeader / SiteFooter / Container / Reveal / CtaLink / Eyebrow
  sections/             One file per homepage section
  intake/IntakeForm.tsx Client-side questionnaire
content/                All copy and questionnaire config
lib/                    Integration placeholders (see below)
```

## Not connected yet (on purpose)

These are stubs with a stable shape, ready to be wired up later:

- [`lib/intake.ts`](lib/intake.ts) — form submission. Validates and resolves; sends nowhere. No database, email service or CRM.
- [`lib/booking.ts`](lib/booking.ts) — scheduling. No provider connected; booking happens only after an idea is reviewed, so there is no public "book now" flow.
- [`lib/payments.ts`](lib/payments.ts) — Stripe. Not implemented; pricing is displayed as information only.
- [`lib/analytics.ts`](lib/analytics.ts) — no analytics script loads and no visitor data is collected.

Environment variable names for all of the above are listed in [`.env.example`](.env.example). Never commit real keys.

`app/privacy` and `app/terms` are placeholders written in plain language and should be reviewed before launch.

## Deploying

Structured for a clean Vercel deployment: no database, no auth, no CMS, fully static output.

1. Import the repository in Vercel (framework auto-detects as Next.js).
2. Set `NEXT_PUBLIC_SITE_URL` to `https://mationary.com` so canonical, sitemap and Open Graph URLs resolve.
3. Point the domain when you're ready.

Nothing in this repo touches Vercel, GitHub, DNS or the registrar on its own.

---

Mationary is operated by The Royal Birch LLC.
