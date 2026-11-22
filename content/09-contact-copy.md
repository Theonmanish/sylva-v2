# Sylva Auris: Contact Copy

**Document:** 09-contact-copy.md
**Version:** 1.0 (draft for review)
**Depends on:** 01-brand-messaging.md, 02-homepage-copy.md, 03-collection-copy.md, 04-product-descriptions.md, 05-philosophy-copy.md, 06-atelier-copy.md, 07-gallery-copy.md, 08-care-content.md
**Feeds:** 10-seo-metadata.md, 11-global-microcopy.md (shared labels, validation and status messages)
**Sources checked:** Brand Profile v1.0, Tone of Voice Guide v1.0, Website Structure Blueprint, PRD v1.0, Project Instructions

**How to read this file**

- Text under **Website copy** in each section is publishable once approved.
- Text under **Internal notes** is for the team and must never appear on the website.
- **[REQUIRES CONFIRMATION]** marks anything that must be verified before publishing. Lines marked "publish only when confirmed" are conditional.
- Variables appear in curly brackets, for example {name}. They are replaced by the build and are never shown as written.
- Routes follow the PRD sitemap. Confirm final names during development.

---

## Contact page overview [INTERNAL]

**Purpose of the page.** Turn interest into enquiries. The site has no online checkout, cart or shipping, so every ready-made, custom, gifting and bulk interest ends here. The page must make the next step obvious, keep the form short and set honest expectations about what happens next.

**Route:** /contact

| # | Section | Heading | Primary action |
|---|---|---|---|
| 01 | Introduction | Contact | Scroll to the form |
| 02 | Enquiry categories | Type of enquiry | Choose a category |
| 03 | Enquiry form | Send an enquiry | Review your enquiry, then Send enquiry |
| 04 | Gifting | Gifting | None |
| 05 | Contact information and visit | Contact details | None |

**Structure notes**

- **The form comes first, contact details second.** The site is built around enquiries, so the form is the main content. Email and Instagram are shown as alternatives.
- **Review before sending.** The brand profile asks that visitors can verify and confirm their details before an email is sent, and that the form must not open an email client immediately. The PRD describes validation, server-side submission and a confirmation shown only after success. The two fit together in this sequence:
  1. The visitor completes the form.
  2. Client-side validation runs.
  3. The visitor selects **Review your enquiry** and sees a summary.
  4. The visitor selects **Send enquiry** (or **Edit details**).
  5. The server validates and sends the enquiry.
  6. The confirmation appears **only** after the server reports success.
  7. If sending fails, the visitor sees an error and keeps their details.

  This resolves the open question in document 01 (section 15.5). The copy below follows this sequence. [REQUIRES CONFIRMATION: sequence approved by the business]
- **Categories follow the PRD.** The six categories used here are the PRD's form categories.
- **Short form.** The PRD and blueprint ask for a concise form. Preferred size, the space, design preferences and experience with terrariums (all listed in block B-CUSTOM-LIST in document 04) are collected through guidance in the message field, not extra fields. This keeps the form to the eight fields in the PRD.
- **No promises about response time, price or availability.** None is documented.
- **Language:** Direct and plain. No sales language. No urgency.

---

## Section 01: Introduction

### Website copy

**Eyebrow:** Enquiries
**Main heading:** Contact

**Body:**

Ask about a ready-made terrarium or kokedama, discuss a custom composition, or send any other question. Share a few details and we will be in touch.

Availability and next steps are confirmed with you directly. [REQUIRES CONFIRMATION]

**CTA:** None (the form follows)

### Internal notes

- **Purpose:** State what the page is for and set expectations without promising a timeline.
- **Accuracy:** "Availability … confirmed with you directly" follows the brand profile (availability varies) and the line used in document 03. It must be true in practice. [REQUIRES CONFIRMATION]
- **Not used:** "We reply within 24 hours", "Get a free quote", "Order now". No response time, quotation or price is documented.
- **Not used:** Any phrase implying checkout, payment or delivery.
- **Visual:** Minimal. Text and the form take priority. If imagery is used, one real terrarium photograph on black.

---

## Section 02: Enquiry categories

### Website copy

**Field label:** Type of enquiry
**Placeholder option:** Choose a type

**Options and descriptors:**

| Option label | Descriptor (shown under the option or after selection) |
|---|---|
| Ready-made products | A terrarium or kokedama from the collection. |
| Custom terrariums | A composition discussed around your size, budget and setting. |
| Kokedama | A question about kokedama, or about a particular piece. |
| Gifting | A terrarium or kokedama as a gift for an occasion. |
| Bulk orders | Several pieces for an event, organisation or institution. [REQUIRES CONFIRMATION] |
| General enquiries | Any other question, including care. |

**Error message:** Please choose a type of enquiry.

### Internal notes

- **Purpose:** Let visitors identify the nature of the enquiry, as the blueprint asks.
- **Labels:** The six labels match the PRD form categories, and are the same labels used for the pre-selection in documents 03, 06, 07 and 08 ("Ready-made products", "Custom terrariums", "Kokedama", "General enquiries"). The blueprint's sitemap uses "Bulk and institutional orders". The shorter PRD label "Bulk orders" is used here, and the descriptor names organisations and institutions.
- **Custom kokedama:** It is not documented whether custom kokedama can be requested. The Kokedama descriptor does not promise it. [REQUIRES CONFIRMATION]
- **Gifting and bulk:** Bulk gifting is an idea under consideration. Prices, minimum quantities and lead times are unconfirmed. If the business does not currently want these enquiries, remove "Bulk orders" and adjust the Gifting descriptor. [REQUIRES CONFIRMATION]
- **Layout:** The categories may be a select field or a radio group, whichever suits the page best. Each must work with a keyboard and a screen reader.

### Pre-selection from other pages [INTERNAL]

The enquiry type and, where relevant, the piece are passed from the linking page. The exact mechanism is set during development.

| From | Link label | Enquiry type pre-selected | Piece pre-filled |
|---|---|---|---|
| Homepage section 12, Collection closing, header and footer | Make an enquiry | None (visitor chooses) | None |
| Collection, terrarium piece | Enquire about this piece | Ready-made products | Yes |
| Collection, kokedama piece | Enquire about this piece | Kokedama | Yes |
| Product page | Enquire about this piece | Ready-made products or Kokedama | Yes |
| Collection section 04, Atelier section 08, Gallery closing | Enquire about a custom piece | Custom terrariums | None |
| Care page | Ask about your piece | General enquiries | None |

---

## Section 03: Enquiry form

### Website copy

**Eyebrow:** Enquiry form
**Main heading:** Send an enquiry
**Introduction:** Fields marked (optional) can be left blank.

#### Fields

| Field | Label | Helper text | Required |
|---|---|---|---|
| Name | Name | None | Yes |
| Email | Email | We will reply to this address. | Yes |
| Phone | Phone (optional) | Only if you would like to be contacted by phone. | No |
| Enquiry type | Type of enquiry | See section 02 | Yes |
| Piece or format | Piece or format of interest (optional) | If you have a piece in mind, name it here. | No |
| Budget | Budget (optional) | A rough range helps us suggest what is possible. | No |
| Occasion or use | Occasion or intended use (optional) | For example, a gift, a desk or an event. | No |
| Message | Message | Varies by enquiry type, see below | Yes |

#### Message field helper text, by enquiry type

| Enquiry type | Helper text |
|---|---|
| (none selected) and General enquiries | Tell us what you would like to know. For a care question, include the name of the piece and what you have noticed. |
| Ready-made products | Tell us which piece interests you and what you would like to know. |
| Custom terrariums | Tell us the size you have in mind, where the piece will be placed, any design preferences and how familiar you are with terrariums. |
| Kokedama | Tell us which piece interests you, or what you would like to know. |
| Gifting | Tell us about the occasion, how many pieces you need and any date you have in mind. |
| Bulk orders | Tell us the number of pieces, the occasion or event and any date you are working to. |

#### Validation messages

| Situation | Message |
|---|---|
| Summary above the form, when there are errors | Please correct the highlighted fields before continuing. |
| Name empty | Please enter your name. |
| Email empty | Please enter your email address. |
| Email invalid | Please enter a valid email address. |
| Phone invalid | Please check the phone number, or leave it blank. |
| Enquiry type not chosen | Please choose a type of enquiry. |
| Message empty | Please enter your message. |
| Message or other field too long | This is too long. Please shorten it. |

#### Buttons and notes

| Use | Label |
|---|---|
| Form submit (opens the review step) | Review your enquiry |
| Privacy note, under the button | Your details are used only to reply to your enquiry. [REQUIRES CONFIRMATION] |

#### Review step

**Heading:** Review your enquiry
**Introduction:** Please check your details before sending.
**Summary labels:** Name · Email · Phone · Type of enquiry · Piece or format of interest · Budget · Occasion or intended use · Message (optional fields are shown only if completed)
**Primary button:** Send enquiry
**Secondary button:** Edit details

#### Sending state

**Status text:** Sending your enquiry
**Button state:** Send enquiry (disabled, with the status text beside it)

#### Success state (shown only after the server confirms the enquiry was sent)

**Heading:** Enquiry sent
**Body:** Thank you, {name}. Your enquiry has been sent. We will reply to {email}.
**Link label:** Explore the collection
**Link destination:** /collection

#### Error states

| Situation | Heading | Body | Button |
|---|---|---|---|
| Sending failed (server or email) | Your enquiry has not been sent | Something went wrong, and your enquiry was not sent. Your details are still here. Please try again, or email contact@sylvaauris.in. | Try again |
| No connection | Your enquiry has not been sent | We could not connect. Please check your connection and try again. | Try again |
| Too many attempts | Please wait a moment | There have been too many attempts. Please wait a short while and try again. | Try again |
| Spam check not passed | Your enquiry could not be verified | We could not verify this enquiry. Please try again, or email contact@sylvaauris.in. | Try again |

### Internal notes

- **Purpose:** Collect what is needed to reply, with as little friction as possible.
- **Fields:** They match the PRD (name, email, phone, enquiry type, product or format, budget, occasion or intended use, message). Required and optional status matches the PRD. Optional fields are labelled "(optional)" in the label itself, not by colour alone.
- **Budget:** The PRD lists "Budget" and the blueprint lists "Budget range". Budget ranges for the business are unconfirmed, so the field is free text rather than a set of bands. [REQUIRES CONFIRMATION]
- **Message helper text:** The custom helper covers the items in block B-CUSTOM-LIST (document 04) that do not have their own field: size, space, design preferences and experience. Budget and occasion have fields. The Atelier closing (document 06, section 08) lists all six items, so the two pages are consistent.
- **No placeholders:** Labels and helper text carry all instructions. Placeholder text is not used as a label.
- **Privacy note:** This is a statement about how data is used. It must be accurate, and the business should confirm whether it needs a privacy policy and how to refer to it. No privacy page is in the sitemap. [REQUIRES CONFIRMATION]
- **Success message:**
  - It is shown only after the server confirms success, as the PRD requires.
  - "We will reply" promises a reply and no timeline. No response time is documented.
  - A confirmation email to the visitor is not specified in the PRD. Do not say one has been sent. [REQUIRES CONFIRMATION]
- **Error handling:**
  - The visitor's entries must be kept after a failure, because the copy says so.
  - The fallback email address is confirmed.
  - The "Spam check" message is deliberately neutral and does not reveal how checks work.
  - The "too many attempts" message supports the PRD's basic rate limiting.
- **Accessibility:**
  - Every field has a visible label and is correctly associated.
  - Errors are announced to screen readers, listed in a summary, tied to their fields and not conveyed by colour alone.
  - Focus moves to the error summary when validation fails, and to the heading when the success or review step appears.
  - Status messages (sending, sent, failed) are announced.
- **Not used:** "Submit", "Get a quote", "Order now", "We'll get back to you ASAP", "Thanks for choosing Sylva Auris!". None is documented or fits the tone.
- **Notification email to the business [INTERNAL, suggested]:**
  - Subject pattern: New enquiry: {type} from {name}
  - Body: every field submitted, with the piece or format if provided. No customer-facing wording.
  - Delivery provider and configuration are part of development (PRD open decision).

---

## Section 04: Gifting

### Website copy

**Eyebrow:** Gifting
**Main heading:** A lasting gift

**Body:**

A terrarium is a nature-inspired gift that can remain part of a room long after the occasion has passed. It offers something to observe and care for, rather than something intended to last only a few days.

For gifts and larger quantities, choose Gifting or Bulk orders in the form and share the occasion, the number of pieces and any date you have in mind. Details are discussed individually. [REQUIRES CONFIRMATION]

**CTA:** None (the form is above)

### Internal notes

- **Purpose:** State the gifting proposition and the route to enquiry. The sitemap places Gifting under Contact.
- **Wording:** The first paragraph is the tone guide's approved gifting example, used as written. It does not claim the gift lasts forever or needs no care.
- **Not used:** "Everlasting", "unforgettable", "sustainable gift", "eco-friendly". Longevity is not environmental sustainability, and no sustainability claim is verified.
- **Not stated:** Prices, minimum quantities, lead times, packaging, personalisation or delivery. None is confirmed. The ₹700 small jar figure is an indicative planning reference and must not be published.
- **Conditional:** The second paragraph depends on the business wanting gifting and bulk enquiries. Remove or narrow it if not. [REQUIRES CONFIRMATION]
- **Heading:** "A lasting gift" is plain and does not repeat any earlier heading.

---

## Section 05: Contact information and visit

### Website copy

**Eyebrow:** Contact details
**Main heading:** Get in touch

| Label | Detail |
|---|---|
| Email | contact@sylvaauris.in |
| Instagram | @sylva.auris → https://www.instagram.com/sylva.auris/ |
| Location | Moodbidri, Karnataka, India |

**Visit (publish only when confirmed):** {#location}

**Heading:** Visit
**Body:** Available pieces can be seen in person in Moodbidri.
**Address:** {Current address} [REQUIRES CONFIRMATION]
**Days and hours:** {Current days and hours} [REQUIRES CONFIRMATION]
**Note:** {Any visiting arrangement, for example whether to enquire first} [REQUIRES CONFIRMATION]
**Link label:** Find our location
**Link destination:** {Confirmed map link} [REQUIRES CONFIRMATION]

### Internal notes

- **Purpose:** Give the confirmed channels, and support in-person discovery when the details are confirmed.
- **Confirmed:** The email address, the Instagram handle and Moodbidri, Karnataka, India as the primary location are confirmed in the brand profile.
- **Not confirmed, do not publish:** A street address, opening days or hours, the display arrangement, or the Soans Farm connection. The historical details recorded in the brand profile (Soans Farm display, two shelves, counter billing, a Google listing address in Bannadka, Beluvai) may be out of date and must not be reused as current facts.
- **Anchor:** The Visit block carries the anchor #location, which homepage section 12 links to ("Find our location"). If the block is not published, that link must also be removed.
- **Phone:** No business phone number is documented, so none is shown.
- **Not used:** "We deliver", "Order by phone", shipping or delivery wording. Online delivery is not offered.

---

## Footer

Use the global footer defined in document 02, section 12. No changes on this page.

---

# Review notes [INTERNAL]

## Consistency check against documents 01 to 08

| Check | Result |
|---|---|
| Positioning (design-led, enquiry-based, no checkout) | Consistent. No wording suggests checkout, payment or shipping |
| Terminology (piece, ready-made, custom composition, kokedama, enquire, collection) | Consistent |
| Enquiry types | Match the PRD and the pre-selection labels used in documents 03, 06, 07 and 08 |
| Link and anchor names | /contact and /contact#location match documents 02 and 03 |
| CTA vocabulary | "Make an enquiry", "Enquire about this piece", "Enquire about a custom piece", "Ask about your piece" and "Explore the collection" all match earlier documents |
| Banned CTAs (Buy now, Order online, Get a quote) | None used |
| Gifting wording | Matches the tone guide example and document 02 |
| Care | None stated here. Care questions are routed through General enquiries |
| Prices, lead times, dimensions, availability, response times | None invented |
| Confirmed facts only (email, Instagram, Moodbidri) | Yes |
| Historical details (Soans Farm, Bannadka address, sales figures) | Not used |
| Held-back words (handcrafted, bespoke, luxurious, exquisite, curated, timeless, magical, elegant, sustainable) | None used |
| Tagline | Not used on this page |
| Form fields | Match the PRD |
| Review-before-send requirement (brand profile) | Built into the form sequence |
| Success only after server confirmation (PRD) | Built into the success state and notes |

## Repetition check

- Headings on this page ("Contact", "Send an enquiry", "A lasting gift", "Get in touch") are distinct from the closing headings used elsewhere.
- The gifting paragraph reuses the tone guide's approved wording and does not repeat the homepage or Collection copy.
- The enquiry guidance in the message field restates the Atelier list in shorter form, split across fields. This is deliberate, so that the two pages ask for the same information.

## Flags raised by this document

1. **Review step.** The review-before-sending requirement is implemented as a step before server-side submission. This needs the business's approval and a development decision.
2. **Privacy.** The data-use note makes a statement the business must be able to stand behind, and there is no privacy page in the sitemap. The business should take advice on any legal requirements for collecting personal data.
3. **Confirmation email.** Not specified. The success message does not claim one.
4. **Response time.** Undocumented, so none is stated.
5. **Gifting and bulk.** The categories and the gifting paragraph are conditional on the business wanting these enquiries.
6. **Visit details.** Unconfirmed. The Visit block and the "Find our location" links depend on them.
7. **Budget.** Free text, because no budget bands are confirmed.
8. **Spam protection.** The copy is neutral. The method (hidden field, challenge or other) is a development decision.

## Information still needed for this document

1. Approval of the review-then-send sequence.
2. A privacy statement or policy, if the business has one, and how the form should refer to it.
3. Whether a confirmation email is sent to the visitor.
4. A typical response time, if the business wants to state one.
5. Whether the business wants Gifting and Bulk orders as categories, and on what terms.
6. Whether custom kokedama can be requested.
7. Current address, visiting days and hours, display arrangement, and a map link.
8. Whether a phone number should be published.
9. Whether budget should be a set of ranges, and what they should be.
10. The email delivery provider and the spam protection method (development).
11. Who receives the enquiry notification, and in what format.

---

**End of document 09**
