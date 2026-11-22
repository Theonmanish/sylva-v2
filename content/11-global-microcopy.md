# Sylva Auris: Global Microcopy

**Document:** 11-global-microcopy.md
**Version:** 1.0 (draft for review)
**Depends on:** 01-brand-messaging.md through 10-seo-metadata.md
**Sources checked:** Brand Profile v1.0, Tone of Voice Guide v1.0, Website Structure Blueprint, PRD v1.0, Project Instructions

**What this document is.** The single reference for interface text used across the site: navigation, footer, calls to action, links, form labels, validation and status messages, loading, empty and error states, the 404 page and accessibility labels. Most strings were first defined in documents 02 to 10. This file gathers them in one place so that every label is identical wherever it appears.

**Precedence.** The page documents define the content of each page. If a string here differs from the same string in a page document, that is an error. Correct whichever is wrong, and keep them identical. New strings introduced here (the skip link, menu labels, system states, the 404 page and accessibility labels) are marked **New**.

**How to read this file**

- Strings in tables are publishable once approved.
- String IDs are a proposed naming scheme for mapping to components. They are not code and can be renamed.
- Text under **Internal notes** is for the team and must never appear on the website.
- **[REQUIRES CONFIRMATION]** marks anything that must be verified before publishing.
- Variables appear in curly brackets, for example {name}. They are replaced by the build.

---

## 1. Rules for interface text [INTERNAL]

1. **Plain and short.** Say what a control does or what has happened. No decoration.
2. **Sentence case** for all labels, buttons and headings. Proper nouns are capitalised.
3. **British and Indian English:** enquire, customise, colour.
4. **No exclamation marks.** No "Oops", "Sorry!", "Whoops", "Awesome" or similar.
5. **Errors say what happened and what to do next,** without blaming the visitor.
6. **Calls to action come from the approved list in section 4.** No generic labels such as "Click here", "Learn more", "Read more" or "Submit".
7. **No commercial language.** No "Buy", "Shop", "Order", "Add to cart", "Checkout", "In stock", "Sold out", "Limited", "Hurry" or "Don't miss out". The site has no online sales or shipping.
8. **No promises about response times, prices, availability or delivery.** None is documented.
9. **One primary action per view.**
10. **Labels carry the instruction.** Placeholder text is not used as a label.
11. **Keep terrarium and kokedama vocabulary separate.** Kokedama strings never use *vessel*, *glass*, *hardscape* or *landscape*.

---

## 2. Navigation

### 2.1 Header

| ID | Label | Destination | Notes |
|---|---|---|---|
| nav.brand | Sylva Auris (wordmark) | / | The wordmark is the link to the homepage. There is no separate "Home" item |
| nav.main.collection | Collection | /collection | |
| nav.main.philosophy | Philosophy | /philosophy | |
| nav.main.atelier | Atelier | /atelier | |
| nav.main.gallery | Gallery | /gallery | |
| nav.main.contact | Contact | /contact | |

### 2.2 Mobile menu

| ID | Label | Notes |
|---|---|---|
| nav.menu.open | Menu | **New.** Visible label on the button that opens the menu |
| nav.menu.close | Close | **New.** Visible label while the menu is open |

### 2.3 Breadcrumb

| ID | Label | Destination | Notes |
|---|---|---|---|
| nav.breadcrumb.home | Home | / | **New.** First item |
| nav.breadcrumb.collection | Collection | /collection | Used on product pages (document 04) |
| nav.breadcrumb.piece | {Piece name} | Current page | Not a link |

### 2.4 Skip link

| ID | Label | Notes |
|---|---|---|
| nav.skip | Skip to main content | **New.** First focusable element on every page |

### 2.5 Internal notes

- **Navigation items:** Five items, as set in the blueprint and PRD. The active page is shown by styling and by the accessibility attribute. No extra text is shown.
- **Care** is not in the main navigation. It appears in the footer and in links from product pages, the Collection page, the homepage and the Atelier page.
- **No header button.** There is no separate "Make an enquiry" button in the header. See the correction in section 11 about the note in document 09.

---

## 3. Brand elements and footer

### 3.1 Brand elements

| ID | Text | Notes |
|---|---|---|
| brand.wordmark | Sylva Auris | |
| brand.tagline | Forest. Reimagined. | Homepage hero and footer only |
| brand.descriptor | Terrariums and kokedama. Moodbidri, Karnataka, India. | Footer |
| brand.hero.support | Terrariums and kokedama from Moodbidri, Karnataka. | Homepage hero supporting line (document 02) |
| brand.scroll | Scroll | Scroll cue label on the homepage hero (document 02) |

### 3.2 Footer

| ID | Content | Destination |
|---|---|---|
| footer.wordmark | Sylva Auris | / |
| footer.tagline | Forest. Reimagined. | n/a |
| footer.descriptor | Terrariums and kokedama. Moodbidri, Karnataka, India. | n/a |
| footer.link.collection | Collection | /collection |
| footer.link.philosophy | Philosophy | /philosophy |
| footer.link.atelier | Atelier | /atelier |
| footer.link.gallery | Gallery | /gallery |
| footer.link.contact | Contact | /contact |
| footer.link.care | Care | /care |
| footer.instagram | @sylva.auris | https://www.instagram.com/sylva.auris/ |
| footer.email | contact@sylvaauris.in | mailto:contact@sylvaauris.in |
| footer.copyright | © {year} Sylva Auris | n/a |
| footer.link.privacy | Privacy | To be set |

### 3.3 Internal notes

- **Footer content** matches the footer defined in document 02 (section 12) and the structure blueprint.
- **Copyright year:** The year updates automatically in the build. The content file records only the intent.
- **Location line:** Only "Moodbidri, Karnataka, India" is shown, which is confirmed. A street address is added only after confirmation.
- **Privacy link:** Shown only if the business provides a privacy statement. No such page is in the sitemap. See document 09. [REQUIRES CONFIRMATION]
- **Not used:** "All rights reserved", "Designed by", newsletter sign-up. None is documented. No newsletter exists, and none should be added without a decision.

---

## 4. Calls to action and links

This is the complete approved list. Every call to action on the site comes from this table.

### 4.1 Calls to action

| ID | Label | Destination | Used in |
|---|---|---|---|
| cta.collection.explore | Explore the collection | /collection | Homepage sections 06 and 07, Philosophy closing, Gallery introduction, empty states, form success, 404 |
| cta.gallery.view | View the gallery | /gallery | Homepage section 10 |
| cta.philosophy.read | Read the philosophy | /philosophy | Homepage section 08 |
| cta.atelier.discover | Discover the Atelier | /atelier | Homepage section 09, Philosophy closing (secondary) |
| cta.care.read | Read the care guide | /care | Homepage section 11 |
| cta.enquiry.general | Make an enquiry | /contact | Homepage section 12, Collection closing, empty states |
| cta.enquiry.piece | Enquire about this piece | /contact (type and piece pre-selected) | Collection, product pages |
| cta.enquiry.custom | Enquire about a custom piece | /contact (type pre-selected: Custom terrariums) | Collection section 04, Atelier section 08, Gallery closing |
| cta.enquiry.care | Ask about your piece | /contact (type pre-selected: General enquiries) | Care page |
| cta.visit.find | Find our location | /contact#location | Homepage section 12, Contact. **Conditional** [REQUIRES CONFIRMATION] |

### 4.2 Supporting links

| ID | Label | Destination | Used in |
|---|---|---|---|
| link.care.terrarium | Read terrarium care | /care#terrarium-care | Collection, product pages, Atelier |
| link.care.kokedama | Read kokedama care | /care#kokedama-care | Collection, product pages |
| link.piece.view | View this piece | /collection/[piece] | Collection, Gallery. Only if product pages exist |
| link.collection.back | Back to the collection | /collection | Product pages |
| link.gallery.back | Back to the gallery | /gallery | Image viewer |
| link.home.back | Back to the homepage | / | **New.** 404 and error pages |
| link.atelier.see | See how a composition is made | /atelier | Collection section 04 (secondary) |
| link.gallery.see | See completed work | /gallery | Atelier section 07 (secondary) |

### 4.3 Internal notes

- **Order of use:** A view has one primary call to action. Secondary links are text links.
- **Two care labels:** "Read the care guide" is the homepage label for the whole page. "Read terrarium care" and "Read kokedama care" lead to a specific section. Both are intentional and should not be merged.
- **"Explore the collection"** is the most frequent label. This is deliberate. It is the clearest browse action and is never reworded.
- **Not used:** "Learn more", "Read more", "Click here", "Shop now", "Buy now", "Order online", "Get yours today", "Get a quote".

---

## 5. In-page navigation labels

| Page | Labels | Anchors |
|---|---|---|
| Collection | Terrariums · Kokedama · Custom compositions | #terrariums · #kokedama · #custom |
| Atelier | The vessel · The foundation · The hardscape · The planting · Composition · Customisation | #vessel · #foundation · #hardscape · #planting · #composition · #custom |
| Care | Terrarium care · Kokedama care · Common questions · Ask about your piece | #terrarium-care · #kokedama-care · #questions · #help |
| Gallery (category labels) | All · Terrariums · Kokedama · Custom compositions | Filter or label, not anchors |
| Philosophy | None. Anchors #name, #idea, #design, #approach exist for linking | n/a |

**Internal notes**

- Labels match documents 03, 06, 07 and 08 exactly.
- Philosophy has no in-page navigation, because the page is short.

---

## 6. Collection, product and gallery labels

### 6.1 Collection and product pages

| ID | Text | Source |
|---|---|---|
| collection.availability | Availability is confirmed when you enquire. | Document 03. [REQUIRES CONFIRMATION] |
| product.heading.composition | The composition | Document 04 |
| product.heading.contains | What it contains | Document 04 |
| product.heading.size | Size | Document 04 |
| product.heading.care | Care | Document 04 |
| product.heading.customisation | Customisation | Document 04 |
| product.care.line | Terrariums are designed with low maintenance in mind. They are living arrangements and still need appropriate care. | Document 04 (block B-CARE) |
| product.care.kokedama | Kokedama has its own care needs, explained separately from terrariums. | Document 04 (block B-CARE-KOKEDAMA) |
| product.variation | Interested in a variation of this piece? Plants, hardscape and gravel can be discussed in an enquiry, subject to availability. | Document 04 (block B-VARIATION). **Conditional** [REQUIRES CONFIRMATION] |

### 6.2 Gallery and image viewer

| ID | Text | Source |
|---|---|---|
| gallery.view | View larger | Document 07 |
| gallery.close | Close | Document 07 |
| gallery.prev | Previous image | Document 07 |
| gallery.next | Next image | Document 07 |
| gallery.position | Image {n} of {total} | Document 07 |
| gallery.note | Pieces shown may no longer be available. To see what can be enquired about now, explore the collection. | Document 07. [REQUIRES CONFIRMATION] |

### 6.3 Internal notes

- No price, stock, format or dimension label appears here. Those come from confirmed product data and are shown only when confirmed (document 04).
- No "Sold out", "In stock", "New" or "Bestseller" labels exist or should be added.

---

## 7. Enquiry form

All strings below must be identical to document 09. Document 09 holds the field behaviour, the review step and the notes.

### 7.1 Field labels and helper text

| ID | Label | Helper text |
|---|---|---|
| form.name | Name | None |
| form.email | Email | We will reply to this address. |
| form.phone | Phone (optional) | Only if you would like to be contacted by phone. |
| form.type | Type of enquiry | None |
| form.piece | Piece or format of interest (optional) | If you have a piece in mind, name it here. |
| form.budget | Budget (optional) | A rough range helps us suggest what is possible. |
| form.occasion | Occasion or intended use (optional) | For example, a gift, a desk or an event. |
| form.message | Message | Varies by enquiry type (7.3) |
| form.intro | Fields marked (optional) can be left blank. | n/a |

### 7.2 Enquiry types

| ID | Option | Descriptor |
|---|---|---|
| form.type.placeholder | Choose a type | n/a |
| form.type.ready | Ready-made products | A terrarium or kokedama from the collection. |
| form.type.custom | Custom terrariums | A composition discussed around your size, budget and setting. |
| form.type.kokedama | Kokedama | A question about kokedama, or about a particular piece. |
| form.type.gifting | Gifting | A terrarium or kokedama as a gift for an occasion. |
| form.type.bulk | Bulk orders | Several pieces for an event, organisation or institution. [REQUIRES CONFIRMATION] |
| form.type.general | General enquiries | Any other question, including care. |

### 7.3 Message helper text, by enquiry type

| Type | Helper text |
|---|---|
| None selected, General enquiries | Tell us what you would like to know. For a care question, include the name of the piece and what you have noticed. |
| Ready-made products | Tell us which piece interests you and what you would like to know. |
| Custom terrariums | Tell us the size you have in mind, where the piece will be placed, any design preferences and how familiar you are with terrariums. |
| Kokedama | Tell us which piece interests you, or what you would like to know. |
| Gifting | Tell us about the occasion, how many pieces you need and any date you have in mind. |
| Bulk orders | Tell us the number of pieces, the occasion or event and any date you are working to. |

### 7.4 Validation messages

| ID | Situation | Message |
|---|---|---|
| form.err.summary | Summary above the form | Please correct the highlighted fields before continuing. |
| form.err.name | Name empty | Please enter your name. |
| form.err.email.empty | Email empty | Please enter your email address. |
| form.err.email.invalid | Email invalid | Please enter a valid email address. |
| form.err.phone | Phone invalid | Please check the phone number, or leave it blank. |
| form.err.type | Type not chosen | Please choose a type of enquiry. |
| form.err.message | Message empty | Please enter your message. |
| form.err.toolong | Any field too long | This is too long. Please shorten it. |

### 7.5 Buttons, review, sending and success

| ID | Text |
|---|---|
| form.btn.review | Review your enquiry |
| form.privacy | Your details are used only to reply to your enquiry. [REQUIRES CONFIRMATION] |
| form.review.heading | Review your enquiry |
| form.review.intro | Please check your details before sending. |
| form.review.send | Send enquiry |
| form.review.edit | Edit details |
| form.sending | Sending your enquiry |
| form.success.heading | Enquiry sent |
| form.success.body | Thank you, {name}. Your enquiry has been sent. We will reply to {email}. |
| form.success.link | Explore the collection |

### 7.6 Form error states

| ID | Heading | Body | Button |
|---|---|---|---|
| form.fail.send | Your enquiry has not been sent | Something went wrong, and your enquiry was not sent. Your details are still here. Please try again, or email contact@sylvaauris.in. | Try again |
| form.fail.network | Your enquiry has not been sent | We could not connect. Please check your connection and try again. | Try again |
| form.fail.rate | Please wait a moment | There have been too many attempts. Please wait a short while and try again. | Try again |
| form.fail.spam | Your enquiry could not be verified | We could not verify this enquiry. Please try again, or email contact@sylvaauris.in. | Try again |

### 7.7 Internal notes

- **Success is shown only after the server confirms** that the enquiry was sent (PRD, document 09). No success text appears earlier.
- **No confirmation email** is promised. Whether one is sent is undecided (document 09). [REQUIRES CONFIRMATION]
- **Entries are kept after a failure,** because the failure messages say "Your details are still here".
- **Message helper text** covers the items in block B-CUSTOM-LIST (document 04) that do not have their own field.

---

## 8. System states

### 8.1 Loading

| ID | Text | Use |
|---|---|---|
| state.loading | Loading | **New.** Generic status for assistive technology |
| state.loading.image | Loading image | **New.** Image viewer, while an image loads |
| form.sending | Sending your enquiry | See 7.5 |

### 8.2 Empty states

| ID | Heading | Body | Link or button |
|---|---|---|---|
| empty.collection | No pieces are listed here at the moment. | To ask about current pieces or a custom composition, make an enquiry. | Make an enquiry → /contact |
| empty.gallery | No work is shown here at the moment. | To see current pieces, explore the collection, or make an enquiry. | Explore the collection → /collection. Secondary: Make an enquiry → /contact |
| empty.gallery.category | Nothing is shown in this category at the moment. | To see current pieces, explore the collection. | Explore the collection → /collection |

### 8.3 Error states

| ID | Heading | Body | Link or button |
|---|---|---|---|
| error.page | Something went wrong | This page could not be loaded. Please try again, or return to the homepage. | Try again. Secondary: Back to the homepage → / |
| error.image | (No heading) | This image could not be loaded. | None. Shown in place of the image |
| error.noscript | (No heading) | This site works best with JavaScript turned on. To get in touch without it, email contact@sylvaauris.in. | None |

### 8.4 Page not found (404)

| ID | Text |
|---|---|
| error.404.heading | Page not found |
| error.404.body | The page you are looking for does not exist or may have moved. |
| error.404.primary | Back to the homepage → / |
| error.404.secondary | Explore the collection → /collection |

### 8.5 Internal notes

- **Empty states** reuse the text defined in documents 03 and 07. They make no promise of future content ("coming soon", "photographs on the way").
- **404 and error pages** are new. They are plain and offer two routes: home and the collection. The 404 page is set to noindex (document 10).
- **JavaScript fallback:** The homepage depends on scroll-linked motion. The PRD asks for static alternatives for essential content. This message supports that. The email address is confirmed.
- **Not used:** "Oops", "Sorry", "We're having trouble", "Lost in the forest" or any joke or metaphor. Errors stay plain.

---

## 9. Accessibility labels

These strings are announced by assistive technology and are not always visible. They must be in the same language and tone as visible text.

| ID | Label | Use |
|---|---|---|
| a11y.logo | Sylva Auris | Alt text for the wordmark |
| a11y.home | Sylva Auris, home | Accessible name for the wordmark link |
| a11y.nav.main | Main | Label for the main navigation landmark |
| a11y.nav.footer | Footer | Label for the footer navigation landmark |
| a11y.nav.breadcrumb | Breadcrumb | Label for the breadcrumb landmark |
| a11y.scroll | Scroll down | Accessible name for the hero scroll cue |
| a11y.menu.open | Open menu | Accessible name when the mobile menu is closed |
| a11y.menu.close | Close menu | Accessible name when the mobile menu is open |
| a11y.gallery.filter | Gallery categories | Label for the category control group |
| a11y.viewer | Image viewer | Label for the full-screen image dialog |
| a11y.instagram | Sylva Auris on Instagram (opens in a new tab) | Accessible name for the Instagram link |
| a11y.email | Email Sylva Auris | Accessible name for the email link, if the visible text is not the address |
| a11y.form.required | Required | Announced for required fields, if the control does not provide it |
| a11y.status.sent | Enquiry sent | Announced on success |

**Internal notes**

- **Images:** Alt text follows the patterns in documents 04 and 07. Decorative images have empty alt text.
- **Errors:** Error messages are tied to their fields and announced. The summary message in 7.4 is announced when validation fails.
- **Reduced motion:** No special text is shown. The site simply reduces motion, and important content remains available without animation (PRD).
- **Links opening in a new tab:** Only external links such as Instagram. If the site does not open them in a new tab, drop "(opens in a new tab)" from the label.

---

## 10. Words and phrases not to use in the interface [INTERNAL]

| Avoid | Reason |
|---|---|
| Buy, Shop, Order, Add to cart, Checkout, Pay, Basket | No online sales |
| In stock, Sold out, Available now, New, Bestseller, Limited, Hurry, Don't miss out | Availability cannot be reliably shown, and urgency must be genuine |
| Free delivery, Shipping, Delivery, Track your order | No delivery is offered |
| Submit | Replaced by "Review your enquiry" and "Send enquiry" |
| Click here, Learn more, Read more | Non-descriptive |
| Oops, Sorry!, Whoops, Awesome, Yay | Wrong tone |
| Get a quote, Free quote | No quotation process is documented |
| Subscribe, Newsletter | None exists |
| Handcrafted, Bespoke, Luxury, Exquisite, Curated, Timeless, Magical, Elegant | Held back by the brand rules |
| Sustainable, Eco-friendly | Not verified |
| Maintenance-free, Self-sustaining | Not true |

---

## 11. Corrections to earlier documents [INTERNAL]

1. **Document 09, pre-selection table.** It lists "Make an enquiry" as coming from the "header and footer". The site has no header enquiry button. The header and footer carry the **Contact** link, which goes to /contact with nothing pre-selected. The "Make an enquiry" call to action appears in page sections. Document 09 should be corrected on this point. This file follows the correct version.
2. **No other differences were found** between the strings gathered here and those in documents 02 to 10.

---

# Review notes [INTERNAL]

## Consistency check against documents 01 to 10

| Check | Result |
|---|---|
| Call-to-action labels | All match the sources. Only "Back to the homepage" is new |
| Navigation labels | Match the blueprint and PRD: Collection, Philosophy, Atelier, Gallery, Contact. Care in the footer only |
| Footer content | Matches document 02 |
| Form strings | Identical to document 09 |
| Empty-state text | Identical to documents 03 and 07 |
| Image viewer labels | Identical to document 07 |
| Care lines | Identical to document 04 |
| In-page navigation labels and anchors | Match documents 03, 06, 07 and 08 |
| 404 page | Consistent with the noindex setting in document 10 |
| Terrarium and kokedama vocabulary | Kept separate |
| Tagline | Used only in the hero and footer, as document 01 requires |
| Banned labels (Buy now, Shop now, Order online, Submit, Learn more) | None used. Listed in section 10 |
| Held-back words | None used as claims |
| Prices, availability, response times, delivery | None stated |
| Tone | Plain, no exclamation marks, no jokes or metaphors |

## Repetition check

- Many strings repeat by design, because a label must be identical wherever it appears. Headings and body copy are not repeated here.
- The 404 and error messages do not reuse the playful phrasing common in sites of this kind, to match the brand tone.

## Flags raised by this document

1. **Header enquiry button.** Document 09 refers to one that does not exist. See section 11.
2. **Privacy link.** The footer link and the form privacy note depend on a privacy statement that is not yet in the sitemap.
3. **Cookies and analytics.** The PRD mentions analytics "if required". If analytics or any tracking is added, the site may need a consent notice. No text is drafted, because the legal wording depends on the tools used and the business's obligations. Take advice before adding it.
4. **Confirmation email.** Undecided. No string claims one.
5. **New strings.** The skip link, menu labels, breadcrumb home label, loading and error states, 404 page and accessibility labels are new in this document and need approval.
6. **JavaScript fallback.** It depends on the build providing a no-script version of key content.

## Information still needed for this document

1. Whether the business provides a privacy statement and how the footer and form should refer to it.
2. Whether analytics or tracking will be used, and whether a consent notice is needed.
3. Whether a confirmation email is sent to the visitor.
4. Whether Gifting and Bulk orders remain as enquiry types.
5. Whether product pages are built, which decides whether "View this piece" and breadcrumb labels are used.
6. Whether the Instagram link opens in a new tab.
7. Confirmation of visiting details, which decides whether "Find our location" is used.
8. Approval of the new strings listed in the flags above.

---

# Appendix: items to confirm across the full content set [INTERNAL]

This lists the confirmations that most affect whether the content is ready to publish. Details are in the "Information still needed" section of each document.

| Area | What the business must provide or decide | Documents affected |
|---|---|---|
| Catalogue | Piece names, formats, size categories, a completed data sheet for each piece, and the meaning of *Micro* | 02, 03, 04, 07, 10 |
| Plants and materials | Confirmed botanical names (including the spelling Rhaphidophora, and the botanical names for peacock fern and needle grass), moss types and hardscape descriptions | 04, 06 |
| Photography | Real photographs for every page, and confirmation of whether the five cinematic images are real | 02, 05, 07, 10 |
| Care | Verified care guidance, vessel types (open, lidded or closed), kokedama method, and a review by an experienced grower | 08 |
| Prices | A decision to show confirmed prices for all pieces, or none | 03, 04 |
| Visit details | Address, days, hours and display arrangement | 02, 03, 05, 07, 09 |
| The name | How "Sylva Auris" was formed, and any wording on its meaning | 01, 05 |
| Custom work and process | The actual process for custom enquiries, lead times, whether custom kokedama is possible, and whether "handcrafted" is accurate | 03, 04, 06 |
| Gifting and bulk | Whether to take these enquiries, and on what terms | 02, 03, 09 |
| Legal and data | Privacy statement, and any consent notice if analytics are used | 09, 11 |
| Operations | Response time, confirmation email, enquiry notifications, redirects from old URLs | 09, 10 |
| Documents to correct | Document 04, gravel line ("colour and size") and document 09, pre-selection table (header button) | 04, 09 |

---

**End of document 11**
