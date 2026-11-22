
# Sylva Auris 2.0 — Technology Stack

**Project:** Complete Website Rebuild  
**Document:** Technical Stack and Implementation Specification  
**Version:** 1.0  
**Status:** Proposed — Pre-development  
**Date:** 21 November 2026

---

# 1. Technical Direction

Sylva Auris 2.0 will be developed as a completely new website in an independent repository.

The website is intended to be a premium, editorial and visually immersive brand experience. The technology stack must support high-quality photography, controlled scroll-based animation, responsive layouts, good performance and a reliable enquiry system.

The implementation should remain simple and maintainable. The visual quality should come from the design, photography, writing and execution—not unnecessary technical complexity.

## Core Technical Principles

- Build from a clean repository.
- Use a modern React-based framework.
- Prefer server-rendered content where interactivity is not required.
- Keep client-side JavaScript and dependencies lean.
- Optimise all images and media.
- Make mobile a first-class experience.
- Keep secrets and email operations server-side.
- Deploy through Vercel.
- Do not introduce a database or CMS without a confirmed requirement.

---

# 2. Recommended Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | Next.js — App Router | Routing, rendering, layouts and server-side functionality |
| UI Library | React | Component-based interface |
| Language | TypeScript | Type safety and maintainability |
| Styling | Tailwind CSS | Responsive styling and design tokens |
| Animation | Motion for React (formerly Framer Motion) | Scroll-linked and interface animation |
| Icons | Lucide React | Minimal interface icons |
| Images | Next.js Image | Responsive image optimisation |
| Fonts | Cormorant Garamond + DM Sans | Brand typography |
| Hosting | Vercel | Preview and production deployment |
| Version Control | Git + GitHub | Source control |
| Enquiry Delivery | Next.js Route Handler + Email Provider | Secure enquiry submission and email delivery |
| Testing | ESLint, TypeScript, Playwright | Code quality and browser-flow testing |
| Analytics | Optional lightweight analytics | Traffic and enquiry measurement |

Use stable versions available at the time of project setup. Avoid adopting experimental framework features unless there is a clear benefit.

---

# 3. Framework and Application Architecture

## 3.1 Next.js

Use Next.js with the App Router.

### Why Next.js?

- Supports server-rendered and statically generated pages.
- Provides file-based routing and shared layouts.
- Supports server-side route handlers for enquiry submissions.
- Integrates directly with Vercel.
- Includes image optimisation capabilities.
- Provides built-in metadata and SEO support.

## 3.2 React

Use React for reusable interface components.

Examples:

- Navigation.
- Footer.
- Product presentations.
- Gallery items.
- Enquiry forms.
- Homepage sections.
- Reusable buttons and links.

Keep components focused. Avoid building a large component abstraction system before the design is established.

## 3.3 TypeScript

Use TypeScript throughout the application.

Requirements:

- Enable strict type checking.
- Define types for product data, gallery content and enquiry submissions.
- Avoid `any` unless there is a documented reason.
- Keep content data separate from visual components.
- Use shared types for repeated data structures.

---

# 4. Styling and Design System

## 4.1 Tailwind CSS

Use Tailwind CSS for:

- Layout.
- Responsive breakpoints.
- Spacing.
- Typography.
- Colour tokens.
- Component styling.
- Hover and focus states.

Define shared design tokens early. Avoid inconsistent one-off values throughout the codebase.

## 4.2 Brand Colour Palette

| Token | Hex Code | Usage |
|---|---|---|
| Pitch Black | `#000000` | Primary background |
| Muted Gold | `#B99868` | Restrained accents |
| Ivory | `#EAE4D8` | Primary text |
| Muted Grey | `#A8A89C` | Secondary text |

### Styling Constraints

- Pitch black should be the dominant background.
- Gold should be used selectively.
- Avoid green-tinted UI surfaces.
- Avoid unnecessary charcoal panels.
- Avoid excessive borders and divider lines.
- Maintain readable contrast.
- Let product photography provide visual richness.

## 4.3 Typography

### Cormorant Garamond

Use for:
- Main headings.
- Editorial titles.
- Selected brand statements.
- Large display text.

### DM Sans

Use for:
- Body copy.
- Navigation.
- Product information.
- Labels.
- Buttons.
- Forms.
- Supporting details.

Use a restrained type scale. Typography should establish hierarchy without making every section oversized.

---

# 5. Animation and Interaction

## 5.1 Motion for React

Use Motion for React, formerly Framer Motion, for animation and interaction.

### Primary Use Case: Forest-to-Terrarium Transition

The homepage should introduce a forest environment that gradually reveals itself as a terrarium.

Expected visual sequence:

1. Full-screen forest imagery.
2. Scroll-linked movement and scale.
3. Gradual appearance of the glass edges.
4. Reveal of the contained botanical composition.
5. Transition into the brand introduction.

### Other Potential Uses

- Section reveal transitions.
- Image scale and position changes.
- Navigation transitions.
- Gallery image interactions.
- Product presentation transitions.
- Button feedback.

## 5.2 Animation Principles

- Motion must support the story or clarify an interaction.
- Avoid continuous decorative animation.
- Avoid excessive blur, glow, shimmer and cursor-following spotlights.
- Avoid large artificial light beams.
- Keep text readable during transitions.
- Avoid unnecessarily complex scroll calculations.
- Respect `prefers-reduced-motion`.
- Provide a usable static experience when motion is reduced or unavailable.

Do not add a second animation library unless a specific requirement cannot be handled effectively by Motion.

---

# 6. Images and Media

## 6.1 Next.js Image

Use the Next.js Image component for responsive image delivery.

Requirements:

- Provide image dimensions or a defined aspect ratio.
- Configure responsive `sizes`.
- Use priority loading only for the genuine above-the-fold hero image.
- Lazy-load below-the-fold images.
- Use descriptive alt text for meaningful images.
- Avoid loading full-resolution images on small screens unnecessarily.

## 6.2 Asset Organisation

Suggested structure:

```text
public/
├── images/
│   ├── hero/
│   ├── forest/
│   ├── terrariums/
│   ├── kokedama/
│   ├── materials/
│   ├── atelier/
│   └── gallery/
├── icons/
└── fonts/
```

Keep original high-resolution photographs in a separate source archive. Use optimised web exports in the production asset directory.

## 6.3 Image Guidelines

- Use actual Sylva Auris product photographs for product listings.
- Do not present generated images as photographs of real products.
- Prepare desktop and mobile crops where the composition requires them.
- Compress images without visibly degrading product detail.
- Use modern formats supported by the image pipeline.
- Avoid loading every gallery image on the initial page view.

Photography is a core part of the product experience and should be planned before final page implementation.

---

# 7. Content Architecture

For the initial release, use typed local content files.

A CMS is not required unless content updates need to be managed by non-technical users.

## Suggested Content Files

```text
src/
└── content/
    ├── products.ts
    ├── gallery.ts
    ├── navigation.ts
    └── site.ts
```

## Content Principles

- Keep product data separate from presentation.
- Use consistent product fields.
- Keep gallery content separate from product data where appropriate.
- Avoid duplicating the same information across components.
- Do not hardcode unconfirmed prices, availability or dimensions.

A headless CMS can be evaluated later if the catalogue or publishing workflow grows.

---

# 8. Enquiry Form and Email Integration

The initial website is enquiry-led. A full ecommerce checkout is not part of the initial scope.

## 8.1 Recommended Architecture

Use a Next.js Route Handler for server-side enquiry processing.

```text
Visitor
   |
   v
Enquiry Form
   |
   v
Client-side Validation
   |
   v
POST /api/enquiry
   |
   v
Server-side Validation
   |
   v
Spam Protection / Rate Limiting
   |
   v
Email Provider
   |
   v
Brand Enquiry Inbox
   |
   v
Success or Failure Response
```

## 8.2 Enquiry Flow

1. Visitor completes the enquiry form.
2. Client-side validation checks required fields.
3. Form data is sent to the server.
4. Server validates and sanitises the submitted data.
5. Spam protection and rate limiting are applied.
6. Email provider processes the enquiry.
7. The visitor sees a success message only after successful submission.

If delivery fails, show a clear error and allow the visitor to retry.

## 8.3 Email Provider

Evaluate Resend as the initial email delivery provider for the Next.js application.

Before choosing it, confirm:

- Current pricing and usage limits.
- Domain verification requirements.
- Sender address configuration.
- Deliverability for the intended recipient.
- Required account and DNS setup.

The intended enquiry recipient is `contact@sylvaauris.in`, subject to confirmation that the mailbox is active.

## 8.4 Security Requirements

- Keep email API keys server-side.
- Never expose secret keys through `NEXT_PUBLIC_` variables.
- Validate all submitted fields on the server.
- Apply basic rate limiting.
- Add a honeypot or suitable CAPTCHA protection if needed.
- Do not log unnecessary personal information.
- Do not claim an enquiry was sent when delivery failed.

A database is not required for the initial email-only enquiry workflow. Add persistent enquiry storage only if the business requires an enquiry history or management interface.

---

# 9. Hosting and Deployment

## 9.1 Vercel

Use Vercel for preview and production hosting.

### Deployment Workflow

1. Create the new GitHub repository.
2. Create the Next.js application.
3. Connect the repository to a new Vercel project.
4. Deploy to a temporary URL.
5. Use preview deployments for development branches and pull requests.
6. Test all pages and functionality.
7. Configure production environment variables.
8. Connect the production domain after approval.

## 9.2 Domain

Production domain:

`https://sylvaauris.in`

Do not replace the existing production site until the new website has been tested and approved.

Preserve existing domain registration and email-related DNS records during the migration.

## 9.3 Environment Variables

Use an `.env.example` file to document required variables.

```env
# Public site configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Email provider — server-side only
EMAIL_API_KEY=
ENQUIRY_TO_EMAIL=contact@sylvaauris.in
ENQUIRY_FROM_EMAIL=

# Optional spam protection
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```

### Environment Variable Rules

- Never commit real secrets.
- Keep `.env.local` out of Git.
- Use `NEXT_PUBLIC_` only for values that genuinely need browser access.
- Configure production secrets in Vercel Project Settings.
- Use separate values for development and production where appropriate.
- Confirm sender-domain verification before launch.

---

# 10. Suggested Repository Structure

```text
sylva-auris-website/
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── forest/
│   │   ├── terrariums/
│   │   ├── kokedama/
│   │   ├── materials/
│   │   ├── atelier/
│   │   └── gallery/
│   ├── icons/
│   └── fonts/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── collection/
│   │   ├── philosophy/
│   │   ├── atelier/
│   │   ├── gallery/
│   │   ├── care/
│   │   ├── contact/
│   │   ├── api/
│   │   │   └── enquiry/
│   │   │       └── route.ts
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── sections/
│   │   ├── product/
│   │   ├── gallery/
│   │   └── forms/
│   │
│   ├── content/
│   ├── lib/
│   ├── styles/
│   └── types/
│
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

This is a proposed structure. Adjust it to the final route and component architecture rather than creating unnecessary empty folders.

---

# 11. SEO and Discoverability

Use Next.js metadata APIs.

Requirements:

- Unique page titles.
- Unique meta descriptions.
- Canonical URLs.
- Open Graph metadata.
- Social sharing images.
- Sitemap.
- Robots configuration.
- Semantic heading structure.
- Descriptive image alt text.
- Appropriate structured data where accurate.
- Redirects for important existing URLs that change.

Do not publish unverified claims about product availability, delivery, sustainability, care requirements or physical visiting arrangements.

---

# 12. Accessibility

The website should meet a practical accessibility baseline.

Requirements:

- Semantic HTML.
- Keyboard-accessible navigation.
- Visible focus states.
- Sufficient text contrast.
- Correct form labels.
- Clear validation and error messages.
- Descriptive alt text for meaningful images.
- Accessible gallery controls.
- Reduced-motion support.
- No essential information communicated only through animation.

---

# 13. Performance Requirements

The website will rely heavily on photography and animation. Performance must be considered throughout development.

Requirements:

- Optimise the hero image carefully.
- Use responsive image sizes.
- Lazy-load below-the-fold imagery.
- Minimise unnecessary client-side JavaScript.
- Prefer Server Components for static content.
- Limit third-party scripts.
- Avoid excessive animation dependencies.
- Prevent layout shifts.
- Test on mid-range mobile devices and mobile networks.

Use Lighthouse or PageSpeed Insights as diagnostic tools before launch. Also test the website on real devices.

---

# 14. Testing and Code Quality

## 14.1 Tools

- TypeScript for type checking.
- ESLint for code quality.
- Playwright for critical browser journeys where appropriate.
- Browser developer tools for responsive and performance checks.

## 14.2 Baseline Commands

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The exact commands depend on the scripts created during project setup.

## 14.3 Testing Checklist

### Functionality

- [ ] Desktop navigation works.
- [ ] Mobile navigation works.
- [ ] All internal links work.
- [ ] Product links work.
- [ ] Gallery interactions work.
- [ ] Enquiry form validates input.
- [ ] Successful enquiries reach the configured inbox.
- [ ] Failure states are handled.
- [ ] External links work.

### Visual and Responsive

- [ ] Desktop layout is correct.
- [ ] Tablet layout is correct.
- [ ] Mobile layout is correct.
- [ ] No horizontal overflow.
- [ ] Typography is consistent.
- [ ] Images load at appropriate sizes.
- [ ] Animations work smoothly.
- [ ] Reduced-motion behaviour is usable.

### Production

- [ ] Production build succeeds.
- [ ] Environment variables are configured.
- [ ] HTTPS works.
- [ ] Production domain resolves correctly.
- [ ] Email DNS records remain intact.
- [ ] SEO metadata is present.
- [ ] Redirects are configured.

---

# 15. Dependencies to Avoid Initially

Do not introduce the following without a clear requirement:

- Redux or another global state library for a mostly static brand website.
- A database solely to send basic enquiries.
- A CMS before there is a content-management requirement.
- Multiple animation libraries.
- A UI component library that imposes a generic visual style.
- An ecommerce platform without a confirmed checkout requirement.
- Heavy page builders or runtime visual editors.

Keep the dependency surface small and understandable.

---

# 16. Development Sequence

## Phase 1 — Repository Setup

- Create the new GitHub repository.
- Initialise Next.js with TypeScript and App Router.
- Configure Tailwind CSS.
- Configure linting.
- Connect the project to Vercel.
- Establish the base folder structure.

## Phase 2 — Design Foundation

- Define colour tokens.
- Configure typography.
- Establish spacing and breakpoints.
- Create navigation.
- Create footer.
- Create reusable buttons and basic interface elements.

## Phase 3 — Homepage

- Implement the hero.
- Build the forest-to-terrarium transition.
- Add brand introduction.
- Add collection preview.
- Add composition section.
- Add Atelier preview.
- Add closing section.

## Phase 4 — Supporting Pages

- Collection.
- Product details, if required.
- Philosophy.
- Atelier.
- Gallery.
- Care.
- Contact.

## Phase 5 — Enquiry Integration

- Implement the enquiry form.
- Add client and server validation.
- Configure email delivery.
- Add spam protection.
- Test success and failure states.

## Phase 6 — Quality Assurance

- Responsive testing.
- Accessibility checks.
- Image optimisation.
- Animation optimisation.
- SEO configuration.
- Production build verification.

## Phase 7 — Launch

- Deploy the approved version.
- Configure production environment variables.
- Configure the production domain.
- Verify redirects and email.
- Perform final production checks.

---

# 17. Technical Decisions to Confirm

The following decisions remain open:

1. Final stable framework and dependency versions.
2. Final route list and whether product detail routes are needed.
3. Exact hero image and animation implementation.
4. Whether any video assets are required.
5. Email delivery provider.
6. Whether enquiry submissions need persistent storage.
7. Whether a CMS will be needed in the future.
8. Analytics provider, if analytics are required.
9. Final image asset pipeline.
10. Production domain migration procedure.

Do not treat proposed tools or integrations as implemented until they have been configured and tested.

---

# 18. Final Recommendation

Build Sylva Auris 2.0 using:

- **Next.js** for the application framework.
- **React and TypeScript** for the interface and application logic.
- **Tailwind CSS** for styling and responsive design.
- **Motion for React** for controlled animation.
- **Next.js Image** for image delivery.
- **Vercel** for hosting and deployment.
- **A server-side email integration** for enquiries.
- **GitHub** for version control.

Keep the initial architecture lean. Do not add a database, CMS, ecommerce platform or complex state-management system unless a real business requirement emerges.

The new repository should be independently deployable. The existing repository should remain available as an archived reference for assets, content and any useful integrations.

The website's differentiation should come from its visual identity, real product photography, composition, writing and quality of execution—not from an unnecessarily complicated technology stack.

---

**Document End — Sylva Auris 2.0 Technology Stack**
