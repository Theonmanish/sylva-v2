# Sylva Auris 2.0 — Product Requirements Document (PRD)

**Project:** Sylva Auris Website Rebuild  
**Product:** Official Sylva Auris Brand Website  
**Version:** 1.0  
**Status:** Proposed — Pre-development  
**Date:** 21 November 2026

---

# 1. Product Overview

## 1.1 Introduction

Sylva Auris 2.0 is a complete redevelopment of the official Sylva Auris website.

The project aims to establish a distinctive digital identity for Sylva Auris through a premium, immersive and editorial website experience.

Unlike a conventional ecommerce website or plant nursery catalogue, the new website will focus on visual storytelling, product presentation, craftsmanship, botanical composition and brand identity.

The website will introduce visitors to the world of Sylva Auris, showcase its terrariums and kokedama, explain the design process and provide a straightforward way to enquire about products and custom compositions.

The new website will be developed independently in a new repository rather than extending the existing website implementation.

## 1.2 Brand Information

| Attribute | Details |
|---|---|
| Brand | Sylva Auris |
| Tagline | Forest. Reimagined. |
| Brand Concept | The Golden Forest |
| Industry | Terrariums and botanical design |
| Location | Moodbidri, Karnataka, India |
| Website | sylvaauris.in |
| Email | contact@sylvaauris.in |
| Instagram | @sylva.auris |

## 1.3 Core Product Concept

Sylva Auris creates miniature botanical environments through the combination of living plants, moss, natural materials, hardscape and carefully selected glass vessels.

The central concept is to create an experience where someone can observe and appreciate a miniature forest without physically being inside one.

The website should communicate this concept visually and through clear, descriptive content.

---

# 2. Problem Statement

Conventional plant-selling websites generally prioritise product listings, prices and transactional interactions.

This approach does not adequately communicate the design, composition and craftsmanship involved in creating a terrarium.

Sylva Auris requires a digital platform that:

- Establishes a distinctive premium brand identity.
- Communicates the value of its compositions beyond the plants themselves.
- Shows the details and materials involved in terrarium creation.
- Presents products through high-quality photography.
- Helps visitors understand available products and customisation.
- Builds confidence through clear information and actual product imagery.
- Converts interested visitors into enquiries.

The existing website is not intended to serve as the foundation for this new experience. The project will establish a completely new design and implementation.

---

# 3. Product Vision

To create a premium digital experience that communicates Sylva Auris as a design-led botanical brand through immersive visual storytelling, carefully presented products and detailed craftsmanship.

The website should feel closer to a premium product or design studio website than a conventional plant store.

## 3.1 Primary Objectives

1. Establish a strong and recognisable digital identity.
2. Introduce the brand and its philosophy.
3. Showcase terrariums and kokedama.
4. Explain the materials and design process.
5. Present actual completed compositions.
6. Encourage custom and ready-made product enquiries.
7. Provide useful product care information.
8. Deliver a consistent experience across desktop, tablet and mobile.

## 3.2 Success Criteria

The website should successfully achieve the following:

- Visitors understand what Sylva Auris offers.
- Visitors can easily explore the collection.
- Visitors can understand the composition and craftsmanship behind products.
- Visitors can view actual product photographs.
- Visitors can find relevant care information.
- Visitors can submit an enquiry successfully.
- The website performs reliably on mobile devices.
- The visual identity remains consistent across all pages.

---

# 4. Target Audience

## 4.1 Primary Audience

### Individuals Interested in Interior Design and Decor

People looking for distinctive botanical elements to complement their homes, offices and personal spaces.

### Plant and Nature Enthusiasts

People interested in plants, miniature landscapes, moss, terrariums and botanical arrangements.

### Premium Gift Buyers

Customers looking for distinctive gifts for occasions, celebrations and personal gifting.

## 4.2 Secondary Audience

### Corporate and Institutional Customers

- Companies.
- Colleges and educational institutions.
- Hotels and hospitality businesses.
- Event organisers.
- Organisations requiring customised botanical gifts.

### Custom Composition Customers

Individuals interested in commissioning a terrarium based on their preferred size, vessel, plants, materials or budget.

---

# 5. Product Scope

The website will initially focus on two main product categories.

## 5.1 Terrariums

Terrariums are the primary product category.

Potential formats include:

- Jar.
- Bowl.
- Cube.
- Other available vessel configurations.

Product information should include:

- Product name.
- Photographs.
- Format.
- Dimensions, where available.
- Plant details.
- Material details.
- Price, where confirmed.
- Care requirements.
- Enquiry option.

The final product catalogue and naming conventions must be confirmed before implementation.

## 5.2 Kokedama

Kokedama should be presented as a separate product category.

Information may include:

- Product photography.
- Plant details.
- Available variations.
- Care requirements.
- Enquiry option.

## 5.3 Custom Terrariums

The website should introduce the possibility of customised compositions.

Potential customisation options:

- Vessel shape and size.
- Plant selection.
- Moss.
- Hardscape.
- Roots and wood.
- Gravel and stone.
- Overall composition.

Actual customisation options will depend on material availability and production feasibility.

---

# 6. Website Information Architecture

## 6.1 Main Navigation

The primary navigation should contain:

1. Collection
2. Philosophy
3. Atelier
4. Gallery
5. Contact

The homepage is accessed through the brand wordmark.

Care information should be accessible through the footer and relevant product pages.

## 6.2 Sitemap

```text
SYLVA AURIS
│
├── Home
│
├── Collection
│   ├── Terrariums
│   ├── Kokedama
│   └── Product Details
│
├── Philosophy
│   ├── Brand Story
│   ├── Meaning Behind the Name
│   └── Design Philosophy
│
├── Atelier
│   ├── The Vessel
│   ├── The Foundation
│   ├── Hardscape
│   ├── Planting
│   ├── Composition
│   └── Customisation
│
├── Gallery
│   ├── Terrariums
│   ├── Kokedama
│   └── Custom Compositions
│
├── Care
│   ├── Terrarium Care
│   └── Kokedama Care
│
└── Contact
    ├── General Enquiries
    ├── Custom Orders
    ├── Gifting
    └── Bulk Enquiries
```

---

# 7. Functional Requirements

## FR-01: Homepage

**Priority:** Critical

The homepage must introduce the brand through an immersive visual experience.

### Requirements

- Full-screen hero section.
- Sylva Auris wordmark.
- Brand tagline.
- Minimal navigation.
- Forest-to-terrarium visual transition.
- Brand introduction.
- Featured product collection.
- Composition and material introduction.
- Customisation introduction.
- Philosophy preview.
- Closing enquiry CTA.
- Global footer.

### Expected Behaviour

Visitors should be able to navigate to all major sections and understand the brand's core offering without having to read lengthy descriptions.

## FR-02: Navigation

**Priority:** Critical

### Requirements

- Responsive desktop navigation.
- Mobile navigation.
- Wordmark linking to the homepage.
- Links to all primary pages.
- Clear active-page indication.
- Accessible keyboard interactions.

### Expected Behaviour

Navigation should remain visually unobtrusive and should not compete with the main photography.

## FR-03: Collection

**Priority:** Critical

### Requirements

- Display available terrariums.
- Display kokedama separately.
- Present product photography.
- Show relevant product information.
- Provide enquiry links.
- Support individual product detail pages if required.

### Expected Behaviour

Visitors should be able to explore available products and identify which products interest them.

Online checkout is not part of the initial scope.

## FR-04: Philosophy

**Priority:** High

### Requirements

- Explain the brand concept.
- Introduce the meaning behind Sylva Auris.
- Explain the design philosophy.
- Communicate the brand's approach to botanical composition.
- Link visitors to the collection and Atelier.

### Expected Behaviour

Visitors should understand the identity and thinking behind the brand.

## FR-05: Atelier

**Priority:** High

### Requirements

- Introduce the creation process.
- Explain vessel selection.
- Explain substrate and foundation.
- Present hardscape materials.
- Introduce plant selection.
- Explain composition.
- Present customisation possibilities.
- Provide an enquiry CTA.

### Expected Behaviour

Visitors should understand that a terrarium is a composed product involving multiple design decisions rather than simply plants placed inside glass.

## FR-06: Gallery

**Priority:** High

### Requirements

- Display actual Sylva Auris work.
- Support responsive image layouts.
- Provide optional categories.
- Feature selected compositions.
- Support an image-viewing interaction if required.
- Link to product enquiries.

### Expected Behaviour

Visitors should be able to assess the quality and visual style of the brand's actual work.

## FR-07: Care

**Priority:** Medium

### Requirements

- Terrarium care instructions.
- Kokedama care instructions.
- Light guidance.
- Watering guidance.
- Moisture and ventilation guidance.
- Common problems.
- Frequently asked questions.

### Expected Behaviour

Customers should be able to find practical information about maintaining their products.

Care requirements must be specific to the relevant product. The website must not make blanket claims that all terrariums are maintenance-free or completely self-sustaining.

## FR-08: Contact and Enquiry

**Priority:** Critical before launch

### Requirements

- Contact information.
- Enquiry form.
- Enquiry categories.
- Client-side validation.
- Server-side validation.
- Email delivery.
- Success and failure states.
- Basic spam protection.

### Suggested Form Fields

| Field | Requirement |
|---|---|
| Name | Required |
| Email | Required |
| Phone | Optional |
| Enquiry Type | Required |
| Product / Format | Optional |
| Budget | Optional |
| Occasion / Intended Use | Optional |
| Message | Required |

### Enquiry Categories

- Ready-made products.
- Custom terrariums.
- Kokedama.
- Gifting.
- Bulk orders.
- General enquiries.

### Expected Behaviour

1. Visitor completes the form.
2. Input is validated.
3. Form data is sent to the server.
4. Server validates the submitted data.
5. Email provider processes the enquiry.
6. Visitor receives confirmation only after successful submission.

If submission fails, the website must clearly communicate the failure and allow the visitor to retry.

---

# 8. Design Requirements

## 8.1 Visual Identity

The website must follow the latest Sylva Auris visual direction.

### Colour Palette

| Colour | Hex Code | Usage |
|---|---|---|
| Pitch Black | #000000 | Main background |
| Muted Gold | #B99868 | Accent |
| Ivory | #EAE4D8 | Primary text |
| Muted Grey | #A8A89C | Secondary text |

### Typography

- Cormorant Garamond: Headings and editorial display typography.
- DM Sans: Body text, navigation, labels and interface elements.

## 8.2 Design Principles

- Premium and minimal.
- Dark luxury aesthetic.
- Editorial product presentation.
- Strong photographic emphasis.
- Restrained use of gold.
- Clear typographic hierarchy.
- Generous spacing.
- Smooth transitions.
- Consistent interaction patterns.

## 8.3 Explicit Design Restrictions

Avoid:

- Green-tinted interface backgrounds.
- Excessive charcoal panels.
- Generic ecommerce layouts.
- Unnecessary product cards.
- Excessive decorative dividers.
- Heavy gradients.
- Excessive glow effects.
- Shimmering decorative lines.
- Cursor-following spotlights.
- Large artificial light beams.
- Excessive animation.
- Overly poetic or generic AI-generated copy.

---

# 9. User Experience Requirements

## 9.1 Primary User Journeys

### Journey A: Product Discovery

```text
Homepage
   ↓
Collection
   ↓
Product Details
   ↓
Care Information
   ↓
Enquiry
```

### Journey B: Brand Discovery

```text
Homepage
   ↓
Philosophy
   ↓
Atelier
   ↓
Gallery
   ↓
Collection
   ↓
Enquiry
```

### Journey C: Custom Orders

```text
Homepage
   ↓
Atelier
   ↓
Customisation Process
   ↓
Gallery
   ↓
Custom Enquiry
```

## 9.2 User Experience Principles

- Keep navigation simple.
- Avoid forcing users through unnecessary pages.
- Make product information easy to locate.
- Keep enquiry forms concise.
- Provide clear feedback for interactions.
- Ensure important information is accessible without animation.
- Maintain consistent behaviour across devices.

---

# 10. Technical Requirements

## 10.1 Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js |
| Architecture | App Router |
| Language | TypeScript |
| UI | React |
| Styling | Tailwind CSS |
| Animation | Motion for React |
| Icons | Lucide React |
| Images | Next.js Image |
| Hosting | Vercel |
| Version Control | Git and GitHub |
| Email | Server-side email provider integration |
| Testing | ESLint, TypeScript and Playwright where appropriate |

The exact package versions should be selected from stable releases at implementation time.

## 10.2 Rendering Strategy

- Prefer Server Components for static content.
- Use Client Components only for interactions requiring browser-side state.
- Use route handlers for server-side enquiry processing.
- Use Next.js metadata APIs for SEO.
- Use responsive image delivery.

## 10.3 Project Structure

```text
sylva-auris-website/
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── forest/
│   │   ├── terrariums/
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
│   │   └── api/
│   │       └── enquiry/
│   │           └── route.ts
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

This is a proposed structure and may be adjusted to the final implementation.

---

# 11. Animation and Interaction Requirements

The website's main differentiator should be its visual storytelling.

## 11.1 Homepage Animation

The forest-to-terrarium transition is the primary animation requirement.

Expected sequence:

1. Forest appears as the initial full-screen environment.
2. Visitor scrolls.
3. The visual composition gradually changes.
4. Glass edges begin to become visible.
5. The terrarium becomes recognisable.
6. Brand content appears.
7. The experience transitions naturally into product discovery.

## 11.2 Other Animations

Potential interactions:

- Subtle section reveals.
- Image scale transitions.
- Navigation transitions.
- Gallery interactions.
- Product image transitions.
- Button feedback.

## 11.3 Performance and Accessibility

- Avoid excessive scroll-linked calculations.
- Prefer GPU-friendly transforms and opacity.
- Respect reduced-motion preferences.
- Provide static alternatives for essential content.
- Ensure text remains readable during transitions.
- Test animations on mobile devices.

---

# 12. Non-Functional Requirements

## 12.1 Performance

The website should:

- Load efficiently on mobile networks.
- Optimise large hero images.
- Lazy-load below-the-fold media.
- Minimise unnecessary JavaScript.
- Avoid excessive third-party scripts.
- Prevent layout shifts.
- Maintain smooth scrolling and interactions.

## 12.2 Responsiveness

Support:

- Desktop.
- Laptop.
- Tablet.
- Mobile.

The mobile experience must be deliberately designed rather than treated as a reduced desktop version.

## 12.3 Accessibility

- Semantic HTML.
- Keyboard-accessible navigation.
- Visible focus states.
- Appropriate text contrast.
- Form labels and validation messages.
- Descriptive alt text.
- Reduced-motion support.
- Accessible gallery controls.

## 12.4 Security

- Keep API keys server-side.
- Never expose email provider secrets in public environment variables.
- Validate and sanitise form input.
- Apply spam protection.
- Implement basic rate limiting.
- Avoid collecting unnecessary personal information.

## 12.5 SEO

- Unique page titles.
- Meta descriptions.
- Canonical URLs.
- Open Graph metadata.
- Sitemap.
- Robots configuration.
- Semantic heading structure.
- Descriptive image alt text.
- Appropriate structured data.
- Redirects for important old URLs.

---

# 13. Content and Asset Requirements

The website relies heavily on visual assets.

## 13.1 Required Photography

### Hero
- Forest environment.
- Atmospheric forest details.
- Terrarium reveal photography.

### Collection
- Individual terrarium photographs.
- Kokedama photographs.
- Product detail photographs.

### Atelier
- Vessel details.
- Substrate layers.
- Hardscape.
- Moss and plants.
- Composition process.
- Finished products.

### Gallery
- Completed compositions.
- Different formats.
- Custom work.

## 13.2 Content Requirements

All website content should be:

- Specific.
- Descriptive.
- Accurate.
- Concise.
- Consistent with the brand voice.

Avoid generic statements and unsupported claims.

Use actual product information and photography wherever possible.

---

# 14. Hosting and Deployment

## 14.1 Repository

Create a completely new GitHub repository for Sylva Auris 2.0.

The existing repository should be preserved as an archived reference.

## 14.2 Hosting

Use Vercel for deployment.

### Deployment Workflow

1. Create the new repository.
2. Set up the Next.js application.
3. Connect the repository to Vercel.
4. Deploy to a temporary URL.
5. Test all pages and interactions.
6. Configure environment variables.
7. Connect the production domain after approval.

## 14.3 Domain

Production domain:

`sylvaauris.in`

Do not change domain registration or existing email DNS records unnecessarily during deployment.

---

# 15. Out of Scope — Initial Release

The following features are not included in the initial project scope unless explicitly approved later:

- Full ecommerce checkout.
- Online payment processing.
- Customer accounts.
- Customer dashboards.
- Order tracking.
- Inventory management.
- Admin dashboard.
- Complex CMS integration.
- Automated delivery calculations.
- Online booking system.

The initial website is primarily an informational, product-discovery and enquiry-generation platform.

---

# 16. Project Phases

## Phase 1 — Foundation

- Create repository.
- Set up Next.js.
- Configure TypeScript.
- Configure Tailwind CSS.
- Establish typography and colours.
- Implement navigation and footer.

## Phase 2 — Homepage

- Build hero.
- Implement forest-to-terrarium transition.
- Add brand introduction.
- Add collection preview.
- Add composition section.
- Add Atelier preview.
- Add closing section.

## Phase 3 — Main Pages

- Collection.
- Product details, if required.
- Philosophy.
- Atelier.
- Gallery.

## Phase 4 — Supporting Pages

- Care.
- Contact.
- Enquiry form.

## Phase 5 — Integration

- Email provider.
- Form validation.
- Spam protection.
- SEO.
- Analytics, if required.

## Phase 6 — Quality Assurance

- Responsive testing.
- Browser testing.
- Accessibility testing.
- Performance optimisation.
- Form testing.
- Production build verification.

## Phase 7 — Launch

- Vercel production deployment.
- Domain configuration.
- Redirect configuration.
- Final website review.

---

# 17. Acceptance Criteria

The initial release will be considered ready when the following requirements are met.

## Design

- [ ] Brand colours and typography are consistent.
- [ ] Homepage follows the approved visual direction.
- [ ] Navigation and footer are consistent.
- [ ] No unwanted green-tinted UI or excessive decorative effects.
- [ ] Desktop and mobile layouts are complete.

## Functionality

- [ ] All approved pages are accessible.
- [ ] Internal navigation works.
- [ ] Product links work.
- [ ] Gallery interactions work.
- [ ] Enquiry form validates inputs.
- [ ] Successful enquiries reach the configured email recipient.
- [ ] Failure states are handled correctly.
- [ ] All external links work.

## Performance and Accessibility

- [ ] Images are optimised.
- [ ] No major layout shifts.
- [ ] Mobile performance is acceptable.
- [ ] Keyboard navigation works.
- [ ] Reduced-motion preferences are respected.
- [ ] Text contrast is sufficient.

## Deployment

- [ ] Production build succeeds.
- [ ] Environment variables are configured securely.
- [ ] Production domain resolves correctly.
- [ ] Existing email functionality is unaffected.
- [ ] SEO metadata and redirects are configured.

---

# 18. Risks and Considerations

| Risk | Potential Impact | Mitigation |
|---|---|---|
| Large hero imagery | Slow initial loading | Optimise assets and use responsive delivery |
| Complex scroll animation | Poor mobile performance | Simplify mobile animation and test on real devices |
| Insufficient product photography | Weak product presentation | Prepare actual product photographs before launch |
| Unclear product catalogue | Inconsistent collection page | Finalise product categories and information |
| Email delivery failure | Lost enquiries | Server-side validation and delivery testing |
| Excessive visual effects | Distracting experience | Keep motion restrained |
| Unverified business details | Incorrect public information | Confirm details before publishing |
| Domain migration errors | Website or email disruption | Preserve DNS records and test before switching |

---

# 19. Open Decisions

The following decisions must be resolved before the relevant implementation work begins.

1. Final product catalogue and product naming.
2. Final homepage copy.
3. Final forest-to-terrarium animation sequence.
4. Exact hero photography.
5. Whether individual product pages are required.
6. Final gallery categories.
7. Enquiry form fields.
8. Email delivery provider.
9. Whether enquiries need persistent storage.
10. Current physical display and visiting information.
11. Whether online purchasing will be introduced in a future release.

These are unresolved decisions, not assumed features.

---

# 20. Final Product Direction

Sylva Auris 2.0 should be a premium digital representation of the brand.

The website must balance three things:

**Brand Experience:** Create a memorable first impression through immersive visual storytelling.

**Product Experience:** Make terrariums, kokedama, materials and craftsmanship easy to explore and understand.

**Business Experience:** Provide a reliable path for customers, gift buyers and organisations to make enquiries.

The homepage should be the most immersive part of the website. The Atelier should communicate craftsmanship. The Collection should focus on products. The Gallery should establish visual confidence. The Care page should prioritise usefulness. The Contact page should convert interest into enquiries.

The technology should remain maintainable and relatively simple. The quality of photography, design, writing and execution should be the primary differentiators.

**The objective is not simply to rebuild a website. It is to establish the digital identity of Sylva Auris.**

---

**Document End — Sylva Auris 2.0 PRD**