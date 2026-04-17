# CLAUDE.md — responsereadyai.com

Project-level instructions for working on the Response Ready AI marketing and compliance website. Read this file before creating or editing any page.

## Project overview

Static marketing site for Response Ready AI, a product that builds AI phone and chat agents for business clients. The site serves two audiences:

1. Prospects evaluating the product (primary)
2. Carriers and compliance reviewers (e.g., Twilio, CTIA) looking for linked policies and consent documentation

Primary domain: `responsereadyai.com`
Primary toll-free: +1 (833) 229-2529

## Working rules (read before touching any file)

1. **Always read `index.html` first.** It is the source of truth for the site's visual language — colors, typography, spacing, section rhythm, button styles, responsive breakpoints. Every new page must match its design system. Do not introduce a new stack, framework, or CSS approach without being asked.
2. **Reuse, don't reinvent.** If `index.html` has a header/nav/footer, extract the exact markup for reuse on new pages rather than rewriting. Inline styles, CSS variables, class names — keep them identical.
3. **Match the existing tech stack.** If `index.html` is plain HTML + CSS, do not add React, Tailwind, a build step, or a framework. If it uses a specific approach (e.g., Tailwind CDN, CSS custom properties, utility classes), mirror it exactly on new pages.
4. **Mobile-first and responsive.** Every page must be legible and usable on a 360px-wide screen. Test the page in mobile viewport before considering it done.
5. **No external tracking/analytics scripts** unless explicitly requested. Keep the privacy policy accurate — if you add a script, update Section 1 of the policy.
6. **Don't add emoji to content** unless explicitly requested.
7. **Compliance pages are carrier-critical.** Changes to `privacy.html` or `sms-consent.html` can invalidate the Twilio toll-free verification. See "Compliance pages" section below.

## File structure

```
/
├── index.html              # main landing page (source of design truth)
├── privacy.html            # privacy policy (carrier-critical, public)
├── sms-consent.html        # verbal consent script (carrier-critical, public)
├── terms.html              # terms of service (create when needed)
├── contact.html            # contact page (create when needed)
├── assets/
│   ├── css/                # shared stylesheets if extracted
│   ├── img/                # images, logos
│   └── js/                 # scripts if any
└── CLAUDE.md               # this file
```

Keep URLs clean: `/privacy`, `/sms-consent`, `/terms`, `/contact`. If the host supports pretty URLs, use them; otherwise, `.html` extensions are fine.

## Compliance pages (carrier-critical)

Two pages on this site exist primarily to satisfy carrier and CTIA review: `privacy.html` and `sms-consent.html`. These must be:

- Publicly reachable at stable URLs (no login, no IP restriction, no `robots.txt` disallow, no cookie wall)
- Readable with JavaScript disabled
- Mobile-legible (reviewers test on phones)
- Accurate — the language must reflect what is actually happening in our calls, texts, and data handling

Any edit to these pages must follow this process:

1. Update the canonical source markdown (`privacy-policy.md` or `verbal-consent-script.md`) first
2. Bump the "Last updated" date on the page
3. Keep a one-line changelog at the bottom of the source markdown
4. If the change affects SMS opt-in language or message categories, assume the toll-free verification may need to be resubmitted — do not deploy silently

### Creating the privacy policy page (`privacy.html`)

**Source content:** Use the approved text from `privacy-policy.md`. Do not paraphrase, summarize, or restructure the body without explicit approval — the wording in Section 3 (SMS messaging) is written to satisfy Twilio/CTIA review criteria and must be preserved verbatim.

Checklist:

- [ ] URL: `https://responsereadyai.com/privacy` (public, no login)
- [ ] `<title>Privacy Policy — Response Ready AI</title>`
- [ ] Meta description: one sentence summarizing the policy
- [ ] Matches `index.html` header/nav/footer exactly
- [ ] Section 3 preserved verbatim, including the "No mobile information sharing" paragraph — this is the line carriers specifically search for
- [ ] "Last updated" date visible near the top
- [ ] Links to `/sms-consent` from Section 3
- [ ] Renders cleanly on mobile (no horizontal scroll, body font ≥ 16px)
- [ ] No JavaScript required to read the content

### Creating the SMS consent page (`sms-consent.html`)

**Why this page exists:** Carriers require that the verbal consent script used during inbound calls be publicly accessible at a URL or as a hosted image. We publish it as a page because a page is easier to maintain, crawlable, accessible on mobile, and gives Twilio a stable URL to re-reference.

**Source content:** Use the approved text from `verbal-consent-script.md`. Include the full script, the shortened version, the first-SMS message, and the STOP/HELP auto-responses.

Checklist:

- [ ] URL: `https://responsereadyai.com/sms-consent` (public, no login)
- [ ] `<title>SMS Consent & Messaging Policy — Response Ready AI</title>`
- [ ] Meta description: "How Response Ready AI obtains consent before sending SMS, our verbal opt-in script, and how to stop messages."
- [ ] Matches `index.html` header/nav/footer exactly
- [ ] Page includes, at minimum, these sections in this order:
  1. **Purpose** — one paragraph explaining this page documents our SMS consent practices for transparency and carrier compliance
  2. **Brand and number** — "Response Ready AI" and "+1 (833) 229-2529"
  3. **How we obtain consent** — describe the verbal inbound-call opt-in flow in prose
  4. **Full verbal consent script** — quoted verbatim, in a visually distinct block (blockquote or call-out)
  5. **Message categories** — the four types: post-call follow-ups, appointment reminders/confirmations, account/service notifications, two-way conversational replies
  6. **Message frequency** — "Occasional; typically only when there is something relevant to share."
  7. **Cost disclosure** — "Message and data rates may apply."
  8. **Opt-out instructions** — reply STOP; email support@responseready.ai
  9. **Help instructions** — reply HELP; contact email
  10. **First-message confirmation text** — the exact post-opt-in SMS reproduced verbatim
  11. **Link to full privacy policy** — `/privacy`
- [ ] "Last updated" date visible near the top
- [ ] Do **not** put this page in the primary nav; link it from the footer and from the privacy policy
- [ ] No JavaScript required to read the content
- [ ] Crawlable (not disallowed in `robots.txt`)

**Formatting note:** This page is a compliance document, not marketing content. Keep styling simple, prose-driven, and scannable. Use the same typography as the privacy policy for visual consistency.

## Creating new pages (generic checklist)

Every new page should:

- [ ] Start from a copy of `index.html`'s shell (doctype, head, header, footer)
- [ ] Use consistent `<title>` pattern: `[Page Name] — Response Ready AI`
- [ ] Include a unique meta description (150–160 chars)
- [ ] Use `<main>` wrapper for primary content
- [ ] Include the same footer used on `index.html`, including links to `/privacy` and `/sms-consent`
- [ ] Be responsive down to 360px wide
- [ ] Pass basic accessibility: semantic HTML, alt text on images, WCAG AA color contrast, focusable interactive elements
- [ ] Load quickly: no uncompressed hero images, no giant webfonts if `index.html` doesn't use them

## Navigation and footer requirements

**Header nav** should be consistent across all pages. Match `index.html` exactly. `/privacy` and `/sms-consent` do not need to be in the primary nav.

**Footer must include on every page:**

- Business name: Response Ready AI
- Contact: support@responseready.ai (or correct support email)
- Link to Privacy Policy (`/privacy`)
- Link to SMS Consent & Messaging Policy (`/sms-consent`)
- Link to Terms (`/terms`) once created
- Copyright line: `© [current year] Response Ready AI. All rights reserved.`

If adding SMS-related CTAs anywhere (e.g., "Text us" buttons): include the line "Msg & data rates may apply. Reply STOP to opt out." as fine print near the CTA, and link to `/sms-consent`.

## Triggers that require a compliance review

Update the privacy policy (and possibly the SMS consent page) and assume re-verification may be needed when any of the following happen:

- Adding analytics, heatmaps, session replay, or any third-party tracking script
- Adding a form that collects new data types
- Adding new message categories or use cases for SMS
- Using the toll-free number on behalf of other businesses (ISV / reseller model — this is a materially different Twilio submission)
- Sharing data with a new subprocessor
- Changing the verbal opt-in script in a way that affects consent language, frequency disclosure, or opt-out instructions

## Brand voice

- Clear, direct, confident. Avoid hype words ("revolutionary," "game-changing," "cutting-edge").
- Technical where it matters, plain-English where it doesn't.
- Write to business operators, not engineers or consumers.
- Short sentences. Active voice.
- Don't overpromise AI capabilities. Describe what it does, not what it "thinks" or "understands."
- Compliance pages use plain, declarative prose — no marketing language.

## SEO basics

- Each page: unique `<title>` and `<meta name="description">`
- Canonical tag on every page: `<link rel="canonical" href="https://responsereadyai.com/[path]">`
- OpenGraph tags on landing and pillar pages (title, description, image, url)
- `robots.txt` allows crawling; `/privacy` and `/sms-consent` **must** be indexable

## Accessibility baseline

- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`
- Heading hierarchy: one `<h1>` per page; don't skip levels
- All images: `alt` attribute (empty `alt=""` if purely decorative)
- Forms: every input has an associated `<label>`
- Interactive elements reachable by keyboard; visible focus state
- Color contrast meets WCAG AA (4.5:1 for body text)

## When in doubt

- Match `index.html`. If a pattern exists there, use it.
- Preserve privacy policy and SMS consent language. If you think a change is needed, flag it — don't just edit.
- Don't add dependencies, scripts, frameworks, or tracking without being asked.
- Ask before publishing anything that describes the product's capabilities in a new way — carriers and prospects both read carefully.
