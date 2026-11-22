# Sylva Auris: SEO Metadata

**Document:** 10-seo-metadata.md
**Version:** 1.0 (draft for review)
**Depends on:** 01-brand-messaging.md through 09-contact-copy.md
**Feeds:** 11-global-microcopy.md (404 and shared labels)
**Sources checked:** Brand Profile v1.0, Tone of Voice Guide v1.0, Website Structure Blueprint, PRD v1.0 (section 12.5 SEO), Project Instructions

**How to read this file**

- Fields under each page (title, meta description, social tags, headings) are publishable once approved.
- Text under **Internal notes** is for the team and must never appear on the website.
- **[REQUIRES CONFIRMATION]** marks anything that must be verified before publishing.
- Character counts are counted by hand and should be rechecked in the build. Search engines truncate by pixel width, so treat the limits as guidance.
- No search volume, ranking or competition data was available. The terminology in section 3 is based on the brand documents and common usage, not on keyword research. Verify it with Google Search Console after launch, and with a keyword tool if the business wants to refine it.

---

## 1. SEO principles for Sylva Auris [INTERNAL]

1. **Describe what the site really is.** Sylva Auris is a terrarium and kokedama brand that takes enquiries and has no online checkout, cart or shipping. Metadata must not suggest otherwise. A page that ranks for "buy terrarium online" would attract visitors the business cannot serve.
2. **Same voice as the site.** Titles and descriptions follow the tone guide: plain, specific, no praise, no urgency. Sentence case.
3. **Facts only.** No claims about quality, rank, sustainability, delivery, prices or awards. The held-back words (luxury, exquisite, curated, bespoke, handcrafted, timeless, magical, elegant, sustainable) are not used.
4. **One page, one purpose.** Each title and description is unique and matches the page's job.
5. **Real images.** Social preview images must be real Sylva Auris photographs. Generated or illustrative images must not be used.
6. **Use the tagline sparingly.** Per document 01, it appears in metadata only on the homepage's social tags.
7. **No keyword stuffing.** A term appears only where it is true and reads naturally.

---

## 2. Sitewide settings

### 2.1 Title and description conventions

| Item | Convention |
|---|---|
| Title pattern | {Page title} \| Sylva Auris |
| Title length | About 60 characters or fewer, where possible |
| Description length | About 155 characters or fewer, where possible |
| Case | Sentence case. Proper nouns capitalised |
| Language and locale | English (India). Language tag en-IN. Open Graph locale en_IN |
| Spelling | British and Indian English: enquire, customise, colour |
| Meta keywords | Not used |

### 2.2 Social and sharing tags

| Tag | Convention |
|---|---|
| Open Graph type | website |
| Site name | Sylva Auris |
| Open Graph title | Same as the page title, except the homepage (see section 4) |
| Open Graph description | Same as the meta description |
| Open Graph image | A real photograph. A landscape crop of about 1200 by 630 pixels is the common standard |
| Image alt text | Describes what is visible, following the alt text patterns in documents 04 and 07 |
| Twitter card | Large image summary, with the same title, description and image |

**Default sharing image:** One real photograph of a complete Sylva Auris terrarium on a dark background. [REQUIRES CONFIRMATION: selected image, and confirmation that it is a real photograph]

### 2.3 Canonical URLs, robots and the preview site

| Item | Setting |
|---|---|
| Production domain | https://sylvaauris.in |
| Canonical URL | The production URL for each page, for example https://sylvaauris.in/collection |
| Preview domain (sylvaauris.vercel.app) | **Not indexed.** Block it from search engines so that it does not compete with or duplicate the production site |
| Production robots | Index and follow for all public pages, except those listed in 2.5 |
| Crawl exclusions | The enquiry API route |
| Sitemap | Generated automatically, listing the public pages in 2.4, and referenced from the robots file |

### 2.4 Pages in the sitemap file

| Route | Include | Notes |
|---|---|---|
| / | Yes | |
| /collection | Yes, if pieces are listed | See 2.5 |
| /philosophy | Yes | |
| /atelier | Yes | |
| /gallery | Yes, if images are shown | See 2.5 |
| /care | Yes, once verified | See 2.5 |
| /contact | Yes | |
| /collection/[piece] | Only if product pages are built | Document 04, section 9 |

### 2.5 Pages to hold back or exclude [INTERNAL]

| Page | Condition | Reason |
|---|---|---|
| /care | Do not publish, or set to noindex, until the care guidance has been verified | The brand documents contain no care instructions (see document 08) |
| /collection | Noindex if no confirmed pieces are shown | An empty collection page is thin content |
| /gallery | Noindex if no real images are shown | Same |
| 404 page | Always noindex | Error page |
| Form states (review, sent, error) | Not separate pages | They are states within /contact |

### 2.6 Redirects

The PRD asks for redirects from important old URLs. The brand documents do not list the old routes. The existing site has a homepage, gallery, care information, enquiry flow and contact information. The old URLs must be audited and mapped to the new routes before launch. [REQUIRES CONFIRMATION]

### 2.7 Structured data

| Type | Use | Fields |
|---|---|---|
| Organization | Sitewide | Name: Sylva Auris. URL: https://sylvaauris.in. Description: the one-line boilerplate from document 01 ("Sylva Auris creates terrariums and kokedama in Moodbidri, Karnataka."). Email: contact@sylvaauris.in. Social profile: https://www.instagram.com/sylva.auris/. Address: locality Moodbidri, region Karnataka, country India (no street address). Logo: the wordmark file when ready |
| BreadcrumbList | Inner pages | Home, then the page's navigation label |
| Product | **Not used for now** | Only if product pages are built, and only with confirmed prices and details. Product markup without a confirmed price is not appropriate |
| LocalBusiness | **Not used for now** | Requires a confirmed address and hours. Add it only when they are confirmed |
| Review or rating | **Never** | No reviews or testimonials exist |

### 2.8 Internal notes

- **Local business details:** Search listings (for example a Google Business Profile) must show the same name, address and hours as the site. The brand profile records a historical listing address that may be out of date. [REQUIRES CONFIRMATION]
- **Image file names and alt text:** Use plain descriptive names and the alt text patterns in documents 04 and 07.
- **Page speed and accessibility:** Covered by the PRD. They affect search performance, so large hero images must be optimised.

---

## 3. Search terminology [INTERNAL]

### 3.1 Brand and category terms

| Group | Terms | Use |
|---|---|---|
| Brand | Sylva Auris | Every page, in the title and naturally in text |
| Category | terrarium, terrariums, kokedama | Titles, headings and body copy, wherever true |
| Offer | ready-made terrarium, custom terrarium, custom composition, kokedama | Collection, Atelier, Contact |
| Location | Moodbidri, Karnataka | Homepage and Contact. Keep it accurate and natural |

### 3.2 Descriptive terms (what the work contains)

glass terrarium, moss, ferns, roots, stone, substrate, hardscape, vessel, miniature landscape, forest floor, botanical design

Use these in explanatory copy on the Atelier and Philosophy pages. Define *hardscape* and *substrate* in the text, as the tone guide requires.

### 3.3 Intent terms

| Intent | Terms | Page |
|---|---|---|
| Browsing | terrarium collection, kokedama collection | Collection |
| Learning how it is made | how a terrarium is made, terrarium materials | Atelier |
| Care | terrarium care, kokedama care | Care (once verified) |
| Gifting | terrarium gift, nature-inspired gift | Contact (gifting section) |
| Enquiring | enquire about a terrarium, custom terrarium enquiry | Contact |

### 3.4 Optional local terms (publish only if confirmed)

The wider area around Moodbidri, such as the nearest city or district, could help local searches. The brand documents mention only Moodbidri, Karnataka. Adding a nearby place name is a claim about where the business is or serves, so it needs the business's approval. [REQUIRES CONFIRMATION]

### 3.5 Terms not to target, and why

| Term type | Reason |
|---|---|
| "Buy terrarium online", "online plant delivery", "terrarium delivery", "order terrarium" | The site has no online sales or shipping. Visitors would be disappointed, and the page would not match their intent |
| "Terrarium kit", "DIY terrarium" | Not offered |
| "Self-sustaining terrarium", "maintenance-free terrarium", "closed ecosystem" | Not accurate. The brand rules forbid these claims |
| "Luxury terrarium", "premium terrarium" as keywords | The brand establishes premium through presentation, not by labelling itself. A forced keyword also invites the generic phrasing the tone guide avoids |
| "Cheap terrarium", "wholesale terrarium" | Not consistent with the brand positioning, and not confirmed as offers |
| "Best terrarium in India" or any superlative | Unverifiable market claim |
| "Sustainable" or "eco-friendly" terrarium | No verified environmental claims |

### 3.6 Usage rules

- Use a term where it describes something real on that page.
- Do not repeat a term in every sentence.
- Do not hide keywords in text or alt attributes.
- Keep headings readable as headings first. Search terms should arrive through plain description.

---

## 4. Page metadata

### 4.1 Homepage

| Field | Value |
|---|---|
| Route | / |
| **Title** | Sylva Auris \| Terrariums and kokedama in Moodbidri (50 characters) |
| **Meta description** | Sylva Auris creates terrariums and kokedama in Moodbidri, Karnataka. Explore ready-made pieces, see the gallery or enquire about a custom composition. (150 characters) |
| Open Graph title | Sylva Auris: Forest. Reimagined. (32 characters) |
| Open Graph description | Same as the meta description |
| Open Graph image | The default sharing image |
| Canonical | https://sylvaauris.in/ |
| Robots | Index, follow |
| **H1** | Forest. Reimagined. (hero) |
| H2 outline | Sections 06 to 12 (see notes) |
| Primary terms | Sylva Auris, terrariums, kokedama, Moodbidri |
| Secondary terms | ready-made, custom composition, gallery |

**Internal notes**

- **H1:** The H1 is the tagline, as written in document 02. The supporting line directly beneath it, "Terrariums and kokedama from Moodbidri, Karnataka.", carries the descriptive terms and should be a paragraph in the same block. The title tag carries the keywords.
- **Headings:** The cinematic sections 02 to 05 carry short statements. They should not all be H2s. Mark them as styled text, or as H2 only if the build requires a heading per section. H2 headings are used from section 06 onward: "Terrariums and kokedama, from Moodbidri.", "Ready-made pieces", "A closer view of nature.", "How a composition is made", "Selected works", "Caring for a living composition" and "Enquire about a piece".
- **Open Graph title:** The only place the tagline appears in metadata, consistent with document 01.
- **Not used:** "Luxury", "exquisite", "handcrafted", "online store", "shop".

### 4.2 Collection

| Field | Value |
|---|---|
| Route | /collection |
| **Title** | Terrariums and kokedama collection \| Sylva Auris (48 characters) |
| **Meta description** | Ready-made terrariums and kokedama from Sylva Auris, composed from living plants and natural materials. Enquire about a piece or a custom composition. (150 characters) |
| Open Graph | Title and description as above. Image: a real photograph of a complete listed piece |
| Canonical | https://sylvaauris.in/collection |
| Robots | Index, follow, if pieces are listed. Otherwise noindex |
| **H1** | Collection |
| H2 outline | Terrariums · Kokedama · Custom compositions · Start with an enquiry |
| Primary terms | terrariums, kokedama, ready-made, collection |
| Secondary terms | custom composition, enquire |

**Internal notes**

- The title says "collection" and not "shop" or "buy". The description ends on enquiry, which matches the page's real function.
- The sitemap lists Terrariums and Kokedama as sub-items. They are built as sections on one page (document 03), so they do not need separate metadata. If they become separate pages later, give each its own title and description, and keep them distinct.

### 4.3 Philosophy

| Field | Value |
|---|---|
| Route | /philosophy |
| **Title** | Philosophy and design approach \| Sylva Auris (44 characters) |
| **Meta description** | The thinking behind Sylva Auris: a forest observed at close range, and the principles that shape how each terrarium is composed. (128 characters) |
| Open Graph | Title and description as above. Image: a real macro photograph of moss, root or foliage |
| Canonical | https://sylvaauris.in/philosophy |
| Robots | Index, follow |
| **H1** | Philosophy |
| H2 outline | The Golden Forest · The idea · Six principles · What Sylva Auris makes · See the compositions |
| H3 outline | The vessel · Composition · Balance · Plant selection · Natural materials · Detail |
| Primary terms | Sylva Auris, terrarium design, botanical design |
| Secondary terms | miniature landscape, forest floor, composition |

**Internal notes**

- The description does not state the meaning of the name. It is deliberately omitted from metadata until the founder confirms how the name was formed (document 05).
- No claims about leadership, ambition or wellbeing.

### 4.4 Atelier

| Field | Value |
|---|---|
| Route | /atelier |
| **Title** | Atelier: how a terrarium is composed \| Sylva Auris (51 characters) |
| **Meta description** | How a Sylva Auris terrarium comes together: the vessel, substrate, hardscape, plants and moss, and how a custom composition can be discussed. (141 characters) |
| Open Graph | Title and description as above. Image: a real close-up of materials, or a completed piece |
| Canonical | https://sylvaauris.in/atelier |
| Robots | Index, follow |
| **H1** | Atelier |
| H2 outline | Glass, shape and proportion · What the plants grow in · Structure from natural materials · Plants and moss, chosen together · Where the decisions meet · Developed around your requirements · Discuss a composition |
| Primary terms | how a terrarium is made, custom terrarium, terrarium materials |
| Secondary terms | vessel, substrate, hardscape, moss, plants |

**Internal notes**

- The page describes terrariums only (document 06), and the title says so.
- "Composed" is used rather than "handcrafted", because the business has not confirmed that word.
- The headings are taken exactly from document 06. The eyebrow labels (The vessel, The foundation and so on) are not headings, so they carry no heading tags.

### 4.5 Gallery

| Field | Value |
|---|---|
| Route | /gallery |
| **Title** | Gallery \| Sylva Auris terrariums and kokedama (45 characters) |
| **Meta description** | Completed terrariums and kokedama by Sylva Auris, in full view and close detail. See the work, then enquire about a custom composition. (135 characters) |
| Open Graph | Title and description as above. Image: the first featured real photograph |
| Canonical | https://sylvaauris.in/gallery |
| Robots | Index, follow, if real images are shown. Otherwise noindex |
| **H1** | Gallery |
| H2 outline | Featured work · Custom work · Ask about a custom composition (the last two only if shown) |
| Primary terms | Sylva Auris terrariums, kokedama, gallery |
| Secondary terms | completed work, custom composition |

**Internal notes**

- Image alt text, which matters most on this page, follows the patterns in document 07.
- Do not use cinematic homepage images here unless they are confirmed as real photographs.

### 4.6 Care

| Field | Value |
|---|---|
| Route | /care |
| **Title** | Terrarium and kokedama care guide \| Sylva Auris (47 characters) |
| **Meta description** | Care guidance for terrariums and kokedama: light, watering, moisture and placement, with answers to common questions and problems. (130 characters) |
| Open Graph | Title and description as above. Image: the default sharing image |
| Canonical | https://sylvaauris.in/care |
| Robots | **Noindex until the care content has been verified**, then index, follow |
| **H1** | Care guide |
| H2 outline | Terrarium care · Kokedama care · Common questions · Ask about your piece |
| H3 outline | Light · Watering · Moisture and condensation · Ventilation · Placement · Looking after the planting · Common problems (terrariums). Watering · Moisture · Light · Placement · General maintenance · Common problems (kokedama) |
| Primary terms | terrarium care, kokedama care |
| Secondary terms | watering, light, condensation |

**Internal notes**

- **Do not publish this metadata until the page is verified.** The care guidance is general and unverified (document 08).
- The description promises no outcome and no schedule.
- The question headings in the FAQ should be real question text so that they can match search phrasing. Do not add question markup until the answers are verified.

### 4.7 Contact

| Field | Value |
|---|---|
| Route | /contact |
| **Title** | Enquire about a terrarium or kokedama \| Sylva Auris (51 characters) |
| **Meta description** | Ask about a ready-made terrarium or kokedama, discuss a custom composition, or send a question to Sylva Auris in Moodbidri, Karnataka. (134 characters) |
| Open Graph | Title and description as above. Image: the default sharing image |
| Canonical | https://sylvaauris.in/contact |
| Robots | Index, follow |
| **H1** | Contact |
| H2 outline | Send an enquiry · A lasting gift · Get in touch · Visit (only when confirmed) |
| Primary terms | enquire about a terrarium, Sylva Auris contact |
| Secondary terms | custom terrarium, gifting, kokedama |

**Internal notes**

- The title says "enquire", the word the whole site uses. It does not say "order" or "buy".
- No address, hours or phone appear in metadata, because none is confirmed.
- Add the Visit heading and local business markup only when the visit details are confirmed.

### 4.8 Product pages (if built)

Use only confirmed data from the product data sheet (document 04, section 3).

| Field | Pattern |
|---|---|
| Route | /collection/[piece] |
| Title, terrarium | {Piece name}: {format} terrarium \| Sylva Auris |
| Title, kokedama | {Piece name}: {plant name} kokedama \| Sylva Auris |
| Meta description | {Character line} Enquire about this piece from Sylva Auris. |
| Open Graph image | The piece's own full-view photograph |
| Canonical | https://sylvaauris.in/collection/[piece] |
| Robots | Index, follow |
| H1 | {Piece name} |
| H2 outline | The composition · What it contains · Size · Care · Customisation · Enquire about this piece (as used in document 04, section 9.4) |

**Rules**

- Omit any element that is not confirmed, such as the format.
- Keep titles under about 60 characters, and descriptions under about 155.
- Each title and description must be unique. No two pieces share the same description.
- No price, availability or dimension appears in metadata unless confirmed for display.
- No "In stock", "Buy now", "Limited" or "Bestseller".

### 4.9 404 page

| Field | Value |
|---|---|
| Title | Page not found \| Sylva Auris (28 characters) |
| Robots | Noindex |
| H1 | Page not found |
| Page copy | Defined in document 11 (global microcopy) |

---

## 5. Cross-reference: metadata and on-page copy [INTERNAL]

| Page | Title matches the page's job | Description matches the on-page claims | Headings match the content documents |
|---|---|---|---|
| Home | Yes (document 02) | Yes. Mirrors the one-line boilerplate and the section CTAs | Yes |
| Collection | Yes (document 03) | Yes. "Composed" matches the descriptors | Yes |
| Philosophy | Yes (document 05) | Yes. Name meaning omitted | Yes |
| Atelier | Yes (document 06) | Yes | Yes |
| Gallery | Yes (document 07) | Yes | Yes |
| Care | Yes (document 08) | Yes. No claims | Yes |
| Contact | Yes (document 09) | Yes | Yes |

---

# Review notes [INTERNAL]

## Consistency check against documents 01 to 09

| Check | Result |
|---|---|
| Brand name and positioning | Consistent. Pages are described as terrarium and kokedama pages that take enquiries |
| Core terminology (terrarium, kokedama, composition, vessel, hardscape, substrate, ready-made, custom composition, enquire) | Consistent |
| Tagline | Used only in the homepage Open Graph title and the H1, as document 01 allows |
| Headings | Taken exactly from documents 02, 03, 05, 06, 07, 08 and 09. No heading was rewritten |
| Online sales language (buy, shop, order, deliver, in stock) | None used. Added to the "do not target" list |
| Care claims | None. The care metadata promises no outcome |
| Wellbeing, sustainability, sourcing, market-position claims | None |
| Held-back words (luxury, exquisite, curated, bespoke, handcrafted, timeless, magical, elegant, sustainable) | None used |
| Facts used | Only confirmed ones: name, Moodbidri, Karnataka, email, Instagram, domain |
| Unconfirmed details (address, hours, prices, dimensions, availability, response time) | Not used |
| Descriptions unique and different from each other | Yes |
| Character limits | All titles are at or under 51 characters and all descriptions at or under 150 |

## Repetition check

- Every title and description is different. The words "terrariums and kokedama" recur because they are the brand's category, and each description describes a different page function.
- "Sylva Auris" appears in every title through the pattern, and in most descriptions by name. This is deliberate for a small, new brand.
- Headings in section 4 repeat the content documents on purpose, so that metadata and pages remain in step.

## Flags raised by this document

1. **Preview site indexing.** The preview domain (sylvaauris.vercel.app) must be blocked from search engines so that it does not duplicate the production site.
2. **Care page.** Do not index it until the care guidance is verified.
3. **Thin pages.** The Collection and Gallery pages should not be indexed if they have no confirmed pieces or real images.
4. **Search intent.** The brand cannot serve "buy online" searches, so metadata avoids them. This limits search traffic and is the honest choice. The business could revisit it if it introduces delivery.
5. **No keyword data.** Terminology is based on the brand documents and usage, not on measured demand. Verify it after launch.
6. **Local terms.** Nearby place names are optional and unconfirmed.
7. **Old URLs.** Redirects cannot be mapped until the existing site's URLs are audited.
8. **Sharing image.** A real photograph is required. Whether the supplied cinematic images are real is still unconfirmed.
9. **Structured data.** Product and LocalBusiness markup are held back until prices, address and hours are confirmed. Review markup must never be added unless real reviews exist.

## Information still needed for this document

1. Confirmation that the default sharing image is a real Sylva Auris photograph, and its selection.
2. Real, confirmed photographs for each page's sharing image.
3. The existing site's URLs, for the redirect map.
4. Whether the business wants nearby place names in local search terms, and which.
5. The business's confirmed address, hours and Google Business Profile details.
6. The wordmark and logo file, for the structured data.
7. Whether product pages will be built, and the final routes.
8. Confirmation that the Care page will remain unindexed until verified.
9. Access to Google Search Console after launch, to check the terms.
10. Confirmation of the production robots and sitemap handling in the deployment.

---

**End of document 10**
